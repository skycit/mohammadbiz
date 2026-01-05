'use client';

import { useEffect, useState } from 'react';

interface VisitorCounts {
  total: number;
  week: number;
  today: number;
}

export default function VisitorCounter() {
  const [counts, setCounts] = useState<VisitorCounts | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Record visit and get counts
    fetch('/api/visitor-count', { 
      method: 'POST',
      cache: 'no-store',
    })
      .then((res) => res.json())
      .then((data) => setCounts(data))
      .catch((err) => {
        console.error('Failed to fetch visitor count:', err);
        // Show fallback counts
        setCounts({ total: 1000, week: 0, today: 0 });
      });
  }, []);

  // Don't render anything on server or before data loads
  if (!mounted || !counts) return null;

  return (
    <div 
      className="flex items-center justify-center gap-1.5 text-[10px] text-gray-400/50 font-mono tracking-tight select-none"
      title="Visitors: Total · 7 days · 24 hours"
    >
      <span className="opacity-70">👁</span>
      <span>{counts.total.toLocaleString()}</span>
      <span className="opacity-40">·</span>
      <span>{counts.week.toLocaleString()}</span>
      <span className="opacity-40">·</span>
      <span>{counts.today.toLocaleString()}</span>
    </div>
  );
}
