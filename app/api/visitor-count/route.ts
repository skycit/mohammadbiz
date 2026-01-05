import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

// Upstash Redis REST client
const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

const INITIAL_COUNT = 1000; // Start from 1000
const VISITOR_TTL = 3600; // 1 hour - same visitor won't be counted within this window

// Simple Upstash REST API wrapper
async function redisCommand(command: string[]) {
  if (!UPSTASH_URL || !UPSTASH_TOKEN) {
    throw new Error('Redis not configured');
  }
  
  const response = await fetch(`${UPSTASH_URL}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${UPSTASH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(command),
    cache: 'no-store',
  });
  
  const data = await response.json();
  return data.result;
}

async function redisPipeline(commands: string[][]) {
  if (!UPSTASH_URL || !UPSTASH_TOKEN) {
    throw new Error('Redis not configured');
  }
  
  const response = await fetch(`${UPSTASH_URL}/pipeline`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${UPSTASH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commands),
    cache: 'no-store',
  });
  
  const data = await response.json();
  return data;
}

function getVisitorHash(ip: string, userAgent: string): string {
  return crypto
    .createHash('sha256')
    .update(`${ip}-${userAgent}`)
    .digest('hex')
    .substring(0, 16);
}

function getDateKey(date: Date): string {
  return date.toISOString().split('T')[0]; // YYYY-MM-DD
}

async function getCounts() {
  const now = new Date();
  
  // Get total count
  let total = await redisCommand(['GET', 'visitors:total']);
  total = (parseInt(total) || 0) + INITIAL_COUNT;
  
  // Get last 7 days count
  let weekCount = 0;
  for (let i = 0; i < 7; i++) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    const key = `visitors:daily:${getDateKey(date)}`;
    const count = await redisCommand(['SCARD', key]);
    weekCount += parseInt(count) || 0;
  }
  
  // Get today's count (last 24h approximation)
  const todayKey = `visitors:daily:${getDateKey(now)}`;
  const todayCount = await redisCommand(['SCARD', todayKey]);
  
  return {
    total,
    week: weekCount,
    today: parseInt(todayCount) || 0,
  };
}

export async function POST(request: NextRequest) {
  try {
    // Check if Redis is configured
    if (!UPSTASH_URL || !UPSTASH_TOKEN) {
      return NextResponse.json(
        { total: INITIAL_COUNT, week: 0, today: 0, error: 'Redis not configured' },
        { status: 200 }
      );
    }
    
    // Get visitor identification
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ip = forwardedFor?.split(',')[0]?.trim() || 
               request.headers.get('x-real-ip') || 
               'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';
    const visitorHash = getVisitorHash(ip, userAgent);
    
    const seenKey = `visitor:seen:${visitorHash}`;
    const today = getDateKey(new Date());
    const dailyKey = `visitors:daily:${today}`;
    
    // Check if visitor was seen recently
    const wasSeen = await redisCommand(['GET', seenKey]);
    
    if (!wasSeen) {
      // New unique visitor in this time window
      await redisPipeline([
        ['INCR', 'visitors:total'],
        ['SADD', dailyKey, visitorHash],
        ['EXPIRE', dailyKey, String(60 * 60 * 24 * 8)], // 8 days TTL
        ['SETEX', seenKey, String(VISITOR_TTL), '1'],
      ]);
    }
    
    // Get and return counts
    const counts = await getCounts();
    return NextResponse.json(counts);
    
  } catch (error) {
    console.error('Visitor count error:', error);
    return NextResponse.json(
      { total: INITIAL_COUNT, week: 0, today: 0 },
      { status: 200 }
    );
  }
}

export async function GET() {
  try {
    if (!UPSTASH_URL || !UPSTASH_TOKEN) {
      return NextResponse.json(
        { total: INITIAL_COUNT, week: 0, today: 0 },
        { status: 200 }
      );
    }
    
    const counts = await getCounts();
    return NextResponse.json(counts);
    
  } catch (error) {
    console.error('Visitor count error:', error);
    return NextResponse.json(
      { total: INITIAL_COUNT, week: 0, today: 0 },
      { status: 200 }
    );
  }
}
