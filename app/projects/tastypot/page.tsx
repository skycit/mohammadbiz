import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Gift, Users, Sparkles, Heart } from 'lucide-react';
import { ProjectJsonLd } from '@/components/SeoJsonLd';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TastyPot — Community Pool Rewards for Hospitality',
  description: 'TastyPot transforms dining rewards with community pool mechanics. Guests share cashback and unlock playful surprises together.',
  alternates: {
    canonical: '/projects/tastypot',
  },
  openGraph: {
    title: 'TastyPot — Community Pool Rewards',
    description: 'Cashback-driven dining that rewards social impact. Community pool mechanics for hospitality.',
    url: 'https://mohammad.biz/projects/tastypot',
    images: ['/og-tastypot.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TastyPot — Community Pool Rewards',
    description: 'Cashback-driven dining that rewards social impact. Community pool mechanics for hospitality.',
    images: ['/og-tastypot.png'],
  },
};

export default function TastypotPage() {
  return (
    <>
      <ProjectJsonLd
        name="TastyPot"
        url="https://tastypot.uk"
        description="Cashback-driven dining that rewards social impact: guests pool rewards and unlock playful surprises together."
        applicationCategory="LifestyleApplication"
        keywords={['hospitality rewards', 'community pool', 'cashback', 'restaurant loyalty', 'money pot', 'gamification']}
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
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white">
              <Gift size={28} />
            </div>
            <div>
              <p className="text-sm text-orange-600 font-medium">Live Project</p>
              <h1 className="text-3xl font-bold text-gray-900">TastyPot</h1>
            </div>
          </div>

          <p className="text-lg text-gray-600 mb-8 max-w-3xl">
            Cashback-driven dining that rewards social impact: guests pool rewards and unlock playful surprises together. 
            Designed for modern hospitality and community-driven engagement.
          </p>

          <div className="relative aspect-video rounded-2xl overflow-hidden mb-12 bg-slate-900">
            <Image
              src="/tastypot-new.jpg"
              alt="TastyPot hospitality rewards platform showing community money pot interface with cashback progress and shared rewards"
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
                Traditional restaurant loyalty programs feel transactional and isolated. Customers earn points individually, 
                redemption is often confusing, and there&apos;s no sense of community or shared experience. 
                The result: low engagement, forgotten loyalty cards, and missed opportunities for restaurants to build genuine relationships.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                For restaurants, existing loyalty solutions are expensive, complex to manage, and don&apos;t create 
                the viral, word-of-mouth growth that drives sustainable business.
              </p>
            </section>

            {/* Approach */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Approach</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                TastyPot reimagines hospitality rewards with a community pool model. Instead of isolated points, 
                guests contribute to a shared &quot;money pot&quot; that grows with every visit. When the pot reaches certain thresholds, 
                everyone who contributed unlocks surprises — free dishes, exclusive events, or charitable donations.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Gift size={20} className="text-orange-600" />
                    <h3 className="font-semibold text-gray-900">Community Pool</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Guests contribute to a shared money pot that grows with every transaction. Collective progress, collective rewards.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles size={20} className="text-orange-600" />
                    <h3 className="font-semibold text-gray-900">Playful Surprises</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Unlock surprises at milestones — free dishes, exclusive experiences, or charitable contributions.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Users size={20} className="text-orange-600" />
                    <h3 className="font-semibold text-gray-900">Social Engagement</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Built for sharing — guests naturally invite friends to grow the pot faster and unlock rewards together.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Heart size={20} className="text-orange-600" />
                    <h3 className="font-semibold text-gray-900">Impact-First</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Optional charitable giving lets communities direct rewards toward causes they care about.
                  </p>
                </div>
              </div>
            </section>

            {/* Who It's For */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Who It&apos;s For</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">For Restaurants</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                      Increase repeat visits through community engagement
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                      Drive organic word-of-mouth from social mechanics
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                      Simple setup, no complex loyalty infrastructure
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">For Diners</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                      Earn rewards while supporting favorite restaurants
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                      Fun, gamified experience with real surprises
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                      Be part of a community, not just a customer
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Status */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Current Status</h2>
              <p className="text-gray-600 leading-relaxed">
                TastyPot is live and onboarding partner restaurants in the UK. Current focus is on refining 
                the reward mechanics, expanding restaurant partnerships, and building features for group dining experiences.
              </p>
            </section>

            {/* Tech Stack */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technology</h2>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Node.js', 'Payment APIs', 'PostgreSQL', 'Tailwind CSS'].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-orange-50 text-orange-700 text-sm font-medium rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-8 text-white">
              <h2 className="text-xl font-semibold mb-3">Explore TastyPot</h2>
              <p className="text-orange-100 mb-6">
                See how community pool rewards are transforming hospitality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://tastypot.uk"
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
                >
                  Visit TastyPot
                  <ArrowRight size={18} />
                </a>
                <a
                  href="mailto:hello@mohammad.biz?subject=TastyPot Partnership Inquiry"
                  className="px-6 py-3 border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors text-center"
                >
                  Partner with us
                </a>
              </div>
            </section>

            {/* Related Projects */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Other Projects</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <Link href="/projects/prediction-market" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:shadow-md transition-all">
                  <h3 className="font-semibold text-gray-900">Prediction Market</h3>
                  <p className="text-gray-600 text-sm mt-1">Privacy-preserving prediction platform</p>
                </Link>
                <Link href="/projects/anybet" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:shadow-md transition-all">
                  <h3 className="font-semibold text-gray-900">AnyBet</h3>
                  <p className="text-gray-600 text-sm mt-1">Risk-free sports betting for learning</p>
                </Link>
                <Link href="/projects/vetcast" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:shadow-md transition-all">
                  <h3 className="font-semibold text-gray-900">VetCast</h3>
                  <p className="text-gray-600 text-sm mt-1">AI assistant for filtering connection requests</p>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
