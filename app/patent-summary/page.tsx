import Link from 'next/link';
import { ArrowLeft, ShieldCheck, CheckCircle, Globe, Lock, Mail } from 'lucide-react';
import { patentContent, siteConfig } from '@/content/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Patent Summary — Privacy-Preserving Verification',
  description: 'High-level overview of the EPO-confirmed patent for privacy-preserving verification. Enables anonymous eligibility checks without wallet linking.',
  alternates: {
    canonical: '/patent-summary',
  },
  openGraph: {
    title: 'EPO Patent for Privacy-Preserving Verification — Mohammad Keshtkar',
    description: 'Anonymous verification patent enabling wallet-free blockchain onboarding and privacy-preserving KYC compliance.',
    url: 'https://mohammad.biz/patent-summary',
    images: ['/og-patent.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EPO Patent for Privacy-Preserving Verification',
    description: 'Anonymous verification patent enabling wallet-free blockchain onboarding and privacy-preserving KYC compliance.',
    images: ['/og-patent.png'],
  },
};

export default function PatentSummary() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-indigo-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link
          href="/#patent"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          Back to home
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white">
            <ShieldCheck size={28} />
          </div>
          <div>
            <p className="text-sm text-indigo-600 font-medium">EPO-Confirmed Patent</p>
            <h1 className="text-3xl font-bold text-gray-900">Privacy-Preserving Verification</h1>
          </div>
        </div>

        <p className="text-lg text-gray-600 mb-12 max-w-3xl">
          {patentContent.description}
        </p>

        <div className="space-y-8">
          {/* Core Innovation */}
          <section className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Core Innovation</h2>
            <p className="text-gray-600 mb-6">
              The patent describes a system and method for verifying user eligibility (such as age, location, or compliance status) 
              without requiring the user to disclose their identity or link a cryptocurrency wallet. This enables:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle size={20} className="text-green-500 mt-0.5 shrink-0" />
                <span><strong>Anonymous compliance:</strong> Users prove they meet requirements without revealing who they are.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle size={20} className="text-green-500 mt-0.5 shrink-0" />
                <span><strong>Wallet-free onboarding:</strong> No mandatory wallet connection until the user chooses to transact.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle size={20} className="text-green-500 mt-0.5 shrink-0" />
                <span><strong>Separation of identity and action:</strong> Eligibility verification is decoupled from on-chain activity.</span>
              </li>
            </ul>
          </section>

          {/* What It Enables */}
          <section className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle size={20} className="text-green-500" />
              <h2 className="text-xl font-semibold text-gray-900">What It Enables</h2>
            </div>
            <ul className="grid sm:grid-cols-2 gap-4">
              {patentContent.whatItEnables.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Where It Applies */}
          <section className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Globe size={20} className="text-blue-500" />
              <h2 className="text-xl font-semibold text-gray-900">Where It Applies</h2>
            </div>
            <ul className="grid sm:grid-cols-2 gap-4">
              {patentContent.whereItApplies.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Why It's Hard */}
          <section className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Lock size={20} className="text-purple-500" />
              <h2 className="text-xl font-semibold text-gray-900">Why It&apos;s Hard</h2>
            </div>
            <ul className="space-y-3">
              {patentContent.whyItsHard.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Technical Walkthrough CTA */}
          <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 rounded-2xl p-8 text-white">
            <h2 className="text-xl font-semibold mb-3">Want the full technical walkthrough?</h2>
            <p className="text-slate-300 mb-6">
              This page provides a high-level summary. For a deeper dive into the cryptographic approach, 
              architecture decisions, and implementation details, reach out directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:${siteConfig.email}?subject=Patent Technical Walkthrough Request`}
                className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Mail size={18} />
                Request technical walkthrough
              </a>
              <Link
                href="/#contact"
                className="px-6 py-3 border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors text-center"
              >
                Contact me
              </Link>
            </div>
          </section>

          {/* Disclaimer */}
          <p className="text-sm text-gray-500 italic text-center">
            {patentContent.disclaimer}
          </p>
        </div>
      </div>
    </div>
  );
}
