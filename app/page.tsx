import { Navigation, Hero, About, PatentMoat, Projects, NowLookingFor, Contact, FAQ, PersonJsonLd, WebSiteJsonLd, ProfilePageJsonLd, FAQPageJsonLd } from '@/components';
import { siteConfig, faqContent } from '@/content/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mohammad Keshtkar — Founder building privacy-preserving verification',
  description: 'Technical founder with EPO patent for anonymous verification. Building blockchain, AI, and privacy products. Creator of AnyBet, VetCast, TastyPot.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Mohammad Keshtkar — Founder building privacy-preserving verification',
    description: 'Technical founder with EPO patent. Building AnyBet, VetCast, TastyPot, and privacy-preserving prediction markets.',
    url: 'https://mohammad.biz',
    images: ['/og-default.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohammad Keshtkar — Founder building privacy-preserving verification',
    description: 'Technical founder with EPO patent. Building AnyBet, VetCast, TastyPot, and privacy-preserving prediction markets.',
    images: ['/og-default.png'],
  },
};

export default function Home() {
  return (
    <>
      <PersonJsonLd />
      <WebSiteJsonLd />
      <ProfilePageJsonLd />
      <FAQPageJsonLd faqs={faqContent} />
      
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-indigo-50">
        <Navigation />
        <Hero />
        <About />
        <PatentMoat />
        <Projects />
        <NowLookingFor />
        <FAQ />
        <Contact />

        {/* Footer */}
        <footer className="bg-gray-50 py-8 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-6 text-center text-gray-500">
            <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
