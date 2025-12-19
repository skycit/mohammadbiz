import { siteConfig } from '@/content/site';

// Helper to filter out empty/undefined values from sameAs array
function filterSameAs(links: (string | undefined | null)[]): string[] {
  return links.filter((link): link is string => Boolean(link));
}

// Server-rendered JSON-LD script component
function JsonLdScript({ id, data }: { id: string; data: object }) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function PersonJsonLd() {
  const sameAs = filterSameAs([
    siteConfig.social.linkedin,
    siteConfig.social.twitter,
  ]);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mohammad Keshtkar',
    alternateName: ['Mohammadamin Keshtkar', 'Mohammad Amin Keshtkar'],
    jobTitle: 'Founder & Technical Entrepreneur',
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    ...(sameAs.length > 0 && { sameAs }),
    knowsAbout: [
      'Privacy Technology',
      'Blockchain',
      'Artificial Intelligence',
      'Prediction Markets',
      'Zero Knowledge Proofs',
      'Privacy-Preserving Verification',
      'Web3',
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Imperial College London',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'PerBlock',
    },
  };

  return <JsonLdScript id="person-jsonld" data={schema} />;
}

export function WebSiteJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    author: {
      '@type': 'Person',
      name: 'Mohammad Keshtkar',
    },
  };

  return <JsonLdScript id="website-jsonld" data={schema} />;
}

export function ProfilePageJsonLd() {
  const sameAs = filterSameAs([
    siteConfig.social.linkedin,
    siteConfig.social.twitter,
  ]);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: 'Mohammad Keshtkar',
      alternateName: ['Mohammadamin Keshtkar', 'Mohammad Amin Keshtkar'],
      url: siteConfig.url,
      ...(sameAs.length > 0 && { sameAs }),
    },
  };

  return <JsonLdScript id="profilepage-jsonld" data={schema} />;
}

interface ProjectJsonLdProps {
  name: string;
  url: string;
  description: string;
  applicationCategory: string;
  keywords: string[];
}

export function ProjectJsonLd({ name, url, description, applicationCategory, keywords }: ProjectJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    url,
    description,
    applicationCategory,
    keywords: keywords.join(', '),
    author: {
      '@type': 'Person',
      name: 'Mohammad Keshtkar',
      url: siteConfig.url,
    },
  };

  return <JsonLdScript id={`project-${name.toLowerCase().replace(/\s+/g, '-')}-jsonld`} data={schema} />;
}
