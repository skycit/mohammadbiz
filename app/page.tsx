import { Navigation, Hero, About, PatentMoat, Projects, NowLookingFor, Contact } from '@/components';
import { siteConfig } from '@/content/site';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-indigo-50">
      <Navigation />
      <Hero />
      <About />
      <PatentMoat />
      <Projects />
      <NowLookingFor />
      <Contact />

      {/* Footer */}
      <footer className="bg-gray-50 py-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-500">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </footer>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Mohammad Keshtkar',
            jobTitle: 'Founder',
            description: 'Technical founder focused on privacy-preserving verification, blockchain, and AI.',
            url: siteConfig.url,
            sameAs: [
              siteConfig.social.linkedin,
              siteConfig.social.twitter,
            ],
            knowsAbout: ['Privacy Technology', 'Blockchain', 'Artificial Intelligence', 'Prediction Markets', 'Zero Knowledge Proofs'],
          }),
        }}
      />
    </div>
  );
}
