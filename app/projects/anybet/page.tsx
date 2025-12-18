import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, TrendingUp, Trophy, Zap, Globe } from 'lucide-react';
import { ProjectJsonLd } from '@/components/SeoJsonLd';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AnyBet — Risk-Free Sports Betting Platform',
  description: 'AnyBet is a free sports betting web app with live odds, virtual tokens, and leaderboards. Learn betting mechanics without financial risk.',
  alternates: {
    canonical: '/projects/anybet',
  },
  openGraph: {
    title: 'AnyBet — Risk-Free Sports Betting Platform',
    description: 'Free sports betting with live odds and virtual tokens. Learn and compete without deposits.',
    url: 'https://mohammad.biz/projects/anybet',
    images: ['/og-anybet.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AnyBet — Risk-Free Sports Betting',
    description: 'Free sports betting with live odds and virtual tokens. Learn and compete without deposits.',
    images: ['/og-anybet.png'],
  },
};

export default function AnybetPage() {
  return (
    <>
      <ProjectJsonLd
        name="AnyBet"
        url="https://anybet.ai"
        description="A free online sports betting experience with live odds, virtual tokens, and competitive leaderboards — no deposits required."
        applicationCategory="GameApplication"
        keywords={['sports betting', 'virtual betting', 'live odds', 'leaderboard', 'free betting', 'sports prediction']}
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
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white">
              <TrendingUp size={28} />
            </div>
            <div>
              <p className="text-sm text-blue-600 font-medium">Live Project</p>
              <h1 className="text-3xl font-bold text-gray-900">AnyBet</h1>
            </div>
          </div>

          <p className="text-lg text-gray-600 mb-8 max-w-3xl">
            A free online sports betting experience designed for learning and entertainment — featuring live odds across 
            football, basketball, tennis, and more. Explore markets, follow live events, and compete on leaderboards without deposits.
          </p>

          <div className="relative aspect-video rounded-2xl overflow-hidden mb-12 bg-slate-900">
            <Image
              src="/anybet-new.jpg"
              alt="AnyBet sports betting web application interface showing live odds for football matches with betting slip and leaderboard"
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
                Many people are curious about sports betting but hesitant to risk real money while learning. 
                Traditional platforms require deposits and don&apos;t offer a safe environment to understand odds, 
                market mechanics, and betting strategies. This creates a high barrier to entry for newcomers 
                who want to learn before committing financially.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Additionally, sports enthusiasts often want to make predictions and compete with friends 
                without the legal and financial complexities of real-money gambling.
              </p>
            </section>

            {/* Approach */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Approach</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                AnyBet provides a fully-featured sports betting experience using virtual tokens instead of real money. 
                Users get real-time odds from actual markets, can place bets, track results, and climb leaderboards — 
                all without financial risk.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp size={20} className="text-blue-600" />
                    <h3 className="font-semibold text-gray-900">Live Odds</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Real-time odds from actual sportsbooks across football, basketball, tennis, and more sports.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Zap size={20} className="text-blue-600" />
                    <h3 className="font-semibold text-gray-900">Virtual Tokens</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Practice with virtual currency — learn betting mechanics without any financial risk.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Trophy size={20} className="text-blue-600" />
                    <h3 className="font-semibold text-gray-900">Leaderboards</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Compete with other users, track your ranking, and prove your prediction skills.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Globe size={20} className="text-blue-600" />
                    <h3 className="font-semibold text-gray-900">Global Access</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Available worldwide — no geo-restrictions or complex verification required.
                  </p>
                </div>
              </div>
            </section>

            {/* Status */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Current Status</h2>
              <p className="text-gray-600 leading-relaxed">
                AnyBet is live and actively used for sports predictions. The platform continues to expand 
                with new sports, improved UX based on user feedback, and enhanced social features.
              </p>
            </section>

            {/* Tech Stack */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technology</h2>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Node.js', 'Real-time APIs', 'PostgreSQL', 'Tailwind CSS'].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
              <h2 className="text-xl font-semibold mb-3">Try AnyBet</h2>
              <p className="text-blue-100 mb-6">
                Start predicting sports outcomes today — no signup required, no money needed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://anybet.ai"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
                >
                  Visit AnyBet
                  <ArrowRight size={18} />
                </a>
                <a
                  href="mailto:hello@mohammad.biz?subject=AnyBet Questions"
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
                <Link href="/projects/prediction-market" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-indigo-200 hover:shadow-md transition-all">
                  <h3 className="font-semibold text-gray-900">Prediction Market</h3>
                  <p className="text-gray-600 text-sm mt-1">Privacy-preserving prediction platform</p>
                </Link>
                <Link href="/projects/vetcast" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-indigo-200 hover:shadow-md transition-all">
                  <h3 className="font-semibold text-gray-900">VetCast</h3>
                  <p className="text-gray-600 text-sm mt-1">AI assistant for filtering connection requests</p>
                </Link>
                <Link href="/projects/tastypot" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-indigo-200 hover:shadow-md transition-all">
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
