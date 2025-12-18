import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Bot, Filter, Sparkles, Clock } from 'lucide-react';
import { ProjectJsonLd } from '@/components/SeoJsonLd';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VetCast — AI Assistant for Connection Requests',
  description: 'VetCast uses AI to filter and prioritize inbound business and friend requests. Focus on high-signal connections, not noise.',
  alternates: {
    canonical: '/projects/vetcast',
  },
  openGraph: {
    title: 'VetCast — AI Connection Request Filter',
    description: 'AI-powered assistant that filters inbound requests and surfaces the most relevant connections.',
    url: 'https://mohammad.biz/projects/vetcast',
    images: ['/og-vetcast.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VetCast — AI Connection Request Filter',
    description: 'AI-powered assistant that filters inbound requests and surfaces the most relevant connections.',
    images: ['/og-vetcast.png'],
  },
};

export default function VetcastPage() {
  return (
    <>
      <ProjectJsonLd
        name="VetCast"
        url="https://vetcast.ai"
        description="AI social assistant that helps vet incoming business or friend requests by filtering noise and surfacing relevant connections."
        applicationCategory="ProductivityApplication"
        keywords={['AI assistant', 'connection filtering', 'request prioritization', 'social networking', 'productivity', 'AI']}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-indigo-50">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to projects
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white">
              <Bot size={28} />
            </div>
            <div>
              <p className="text-sm text-purple-600 font-medium">Live Project</p>
              <h1 className="text-3xl font-bold text-gray-900">VetCast</h1>
            </div>
          </div>

          <p className="text-lg text-gray-600 mb-8 max-w-3xl">
            An AI social assistant that helps you vet incoming business or friend requests by automatically filtering noise 
            and surfacing the most relevant connections. Built for clarity and speed, so you can focus on people that matter.
          </p>

          <div className="relative aspect-video rounded-2xl overflow-hidden mb-12 bg-slate-900">
            <Image
              src="/vetcast-new.jpg"
              alt="VetCast AI assistant interface showing filtered connection requests with priority scores and AI-generated summaries"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="space-y-12">
            {/* Problem */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Problem</h2>
              <p className="text-gray-600 leading-relaxed">
                High-profile individuals, busy professionals, and growing teams are constantly overwhelmed by inbound connection 
                requests across LinkedIn, email, Twitter, and other platforms. Most of these requests are low-quality: 
                cold pitches, spam, or irrelevant outreach.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                The challenge isn&apos;t just volume — it&apos;s that valuable opportunities get buried in noise. 
                A potential co-founder, investor, or collaborator might be lost in a sea of generic messages. 
                Manual filtering is time-consuming and inconsistent.
              </p>
            </section>

            {/* Approach */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Approach</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                VetCast uses AI to analyze incoming requests and prioritize them based on relevance, intent, 
                and potential value. The system learns your preferences over time and surfaces high-signal 
                connections while deprioritizing noise.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Filter size={20} className="text-purple-600" />
                    <h3 className="font-semibold text-gray-900">Smart Filtering</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    AI analyzes message content, sender profile, and context to score and categorize each request.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles size={20} className="text-purple-600" />
                    <h3 className="font-semibold text-gray-900">Priority Scoring</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Each request gets a relevance score so you can focus on the highest-value connections first.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Bot size={20} className="text-purple-600" />
                    <h3 className="font-semibold text-gray-900">Learning System</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    The AI learns from your responses and improves its filtering based on your preferences.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock size={20} className="text-purple-600" />
                    <h3 className="font-semibold text-gray-900">Time Savings</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Spend less time on inbox management and more time building meaningful relationships.
                  </p>
                </div>
              </div>
            </section>

            {/* Who It's For */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Who It&apos;s For</h2>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                  Founders and executives receiving high volumes of inbound outreach
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                  Content creators and influencers managing collaboration requests
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                  Sales and BD teams needing to prioritize qualified leads
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                  Anyone overwhelmed by connection requests across platforms
                </li>
              </ul>
            </section>

            {/* Status */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Current Status</h2>
              <p className="text-gray-600 leading-relaxed">
                VetCast is live and actively improving. Current focus areas include expanding platform integrations, 
                refining the prioritization algorithms, and adding team collaboration features.
              </p>
            </section>

            {/* Tech Stack */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technology</h2>
              <div className="flex flex-wrap gap-2">
                {['AI/ML', 'Natural Language Processing', 'React', 'Python', 'API Integrations', 'PostgreSQL'].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-purple-50 text-purple-700 text-sm font-medium rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
              <h2 className="text-xl font-semibold mb-3">Try VetCast</h2>
              <p className="text-purple-100 mb-6">
                Take control of your inbox and focus on connections that matter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://vetcast.ai"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
                >
                  Visit VetCast
                  <ArrowRight size={18} />
                </a>
                <a
                  href="mailto:hello@mohammad.biz?subject=VetCast Questions"
                  className="px-6 py-3 border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors text-center"
                >
                  Ask about the build
                </a>
              </div>
            </section>

            {/* Related Projects */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Other Projects</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <Link href="/projects/prediction-market" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-purple-200 hover:shadow-md transition-all">
                  <h3 className="font-semibold text-gray-900">Prediction Market</h3>
                  <p className="text-gray-600 text-sm mt-1">Privacy-preserving prediction platform</p>
                </Link>
                <Link href="/projects/anybet" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-purple-200 hover:shadow-md transition-all">
                  <h3 className="font-semibold text-gray-900">AnyBet</h3>
                  <p className="text-gray-600 text-sm mt-1">Risk-free sports betting for learning</p>
                </Link>
                <Link href="/projects/tastypot" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-purple-200 hover:shadow-md transition-all">
                  <h3 className="font-semibold text-gray-900">TastyPot</h3>
                  <p className="text-gray-600 text-sm mt-1">Community pool rewards for hospitality</p>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
