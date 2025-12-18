import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Shield, Lock, Users, Zap } from 'lucide-react';
import { ProjectJsonLd } from '@/components/SeoJsonLd';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy-Preserving Prediction Market',
  description: 'The first prediction market where users verify eligibility anonymously without wallet linking. EPO-patented privacy technology enables compliant, private forecasting.',
  alternates: {
    canonical: '/projects/prediction-market',
  },
  openGraph: {
    title: 'Privacy-Preserving Prediction Market — Mohammad Keshtkar',
    description: 'EPO-patented anonymous verification for prediction markets. Users prove eligibility without exposing identity.',
    url: 'https://mohammad.biz/projects/prediction-market',
    images: ['/og-prediction-market.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy-Preserving Prediction Market',
    description: 'EPO-patented anonymous verification for prediction markets. Users prove eligibility without exposing identity.',
    images: ['/og-prediction-market.png'],
  },
};

export default function PredictionMarketPage() {
  return (
    <>
      <ProjectJsonLd
        name="Privacy-Preserving Prediction Market"
        url="https://mohammad.biz/projects/prediction-market"
        description="The first prediction market enabling anonymous eligibility verification without wallet linking, powered by EPO-confirmed patent technology."
        applicationCategory="FinanceApplication"
        keywords={['prediction market', 'privacy', 'blockchain', 'zero-knowledge', 'anonymous verification', 'EPO patent']}
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
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white">
              <Shield size={28} />
            </div>
            <div>
              <p className="text-sm text-indigo-600 font-medium">Flagship Project • In Development</p>
              <h1 className="text-3xl font-bold text-gray-900">Privacy-Preserving Prediction Market</h1>
            </div>
          </div>

          <p className="text-lg text-gray-600 mb-8 max-w-3xl">
            Building the world&apos;s first prediction market where forecasters can participate without connecting a wallet 
            or exposing personal identity — powered by an EPO-confirmed patent for anonymous verification.
          </p>

          <div className="relative aspect-video rounded-2xl overflow-hidden mb-12 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-800">
            <Image
              src="/projects/perblock-blockchain.svg"
              alt="Privacy-preserving prediction market architecture visualization showing anonymous verification flow and blockchain integration"
              fill
              className="object-cover mix-blend-screen opacity-90"
              priority
            />
          </div>

          <div className="space-y-12">
            {/* Problem */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Problem</h2>
              <p className="text-gray-600 leading-relaxed">
                Prediction markets have enormous potential for aggregating collective intelligence and forecasting real-world events. 
                However, most platforms face critical adoption barriers: users must complete invasive KYC processes, 
                link cryptocurrency wallets that expose their transaction history, and trust centralized platforms with sensitive personal data.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                This creates a paradox: the people with the most valuable insights (industry insiders, domain experts, 
                professionals with reputational concerns) are exactly those most reluctant to participate publicly. 
                The result is markets that exclude high-signal participants and suffer from limited liquidity and adoption.
              </p>
            </section>

            {/* Approach */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Approach</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our platform leverages an EPO-confirmed patent for privacy-preserving verification. 
                Users can prove they meet eligibility requirements (age, jurisdiction, compliance status) 
                without revealing their identity or linking a wallet until they choose to transact.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Lock size={20} className="text-indigo-600" />
                    <h3 className="font-semibold text-gray-900">Anonymous Verification</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Zero-knowledge techniques let users prove eligibility without exposing personal data or creating linkable identity trails.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Users size={20} className="text-indigo-600" />
                    <h3 className="font-semibold text-gray-900">Wallet-Free Onboarding</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    New users can explore, learn, and participate without the friction of wallet setup or crypto knowledge.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield size={20} className="text-indigo-600" />
                    <h3 className="font-semibold text-gray-900">Regulatory Compliance</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    The architecture satisfies compliance requirements while protecting user privacy — no trade-off required.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Zap size={20} className="text-indigo-600" />
                    <h3 className="font-semibold text-gray-900">AI-Enhanced Signals</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Machine learning surfaces market insights and helps users understand trends without compromising privacy.
                  </p>
                </div>
              </div>
            </section>

            {/* Status & What's Next */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Current Status</h2>
              <p className="text-gray-600 leading-relaxed">
                The platform is currently in active development. The core anonymous verification system is built on the 
                EPO-confirmed patent, with architecture designed for scalability across jurisdictions. 
                We&apos;re seeking pre-seed funding and early design partners for private beta access.
              </p>
              <div className="mt-6 bg-amber-50 border border-amber-100 rounded-xl p-4">
                <p className="text-amber-800 text-sm">
                  <strong>Looking for:</strong> Pre-seed investors, strategic partners exploring privacy infrastructure, 
                  and domain experts interested in shaping the product direction.
                </p>
              </div>
            </section>

            {/* Tech Stack */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technology</h2>
              <div className="flex flex-wrap gap-2">
                {['Blockchain', 'Zero-Knowledge Proofs', 'Privacy Engineering', 'Smart Contracts', 'AI/ML', 'React', 'Node.js', 'Solidity'].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 rounded-2xl p-8 text-white">
              <h2 className="text-xl font-semibold mb-3">Interested in learning more?</h2>
              <p className="text-slate-300 mb-6">
                Whether you&apos;re an investor, potential partner, or simply curious about privacy-preserving prediction markets, 
                I&apos;d love to discuss the vision and technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:hello@mohammad.biz?subject=Prediction Market Demo Request"
                  className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
                >
                  Request a demo
                  <ArrowRight size={18} />
                </a>
                <Link
                  href="/patent-summary"
                  className="px-6 py-3 border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors text-center"
                >
                  Read patent summary
                </Link>
              </div>
            </section>

            {/* Related Projects */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Other Projects</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <Link href="/projects/anybet" className="bg-white rounded-xl p-4 border border-gray-200 hover:border-indigo-200 hover:shadow-md transition-all">
                  <h3 className="font-semibold text-gray-900">AnyBet</h3>
                  <p className="text-gray-600 text-sm mt-1">Risk-free sports betting for learning and engagement</p>
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
