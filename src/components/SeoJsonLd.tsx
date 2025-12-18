import Script from 'next/script';
import { siteConfig } from '@/content/site';

export function PersonJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mohammad Keshtkar',
    jobTitle: 'Founder & Technical Entrepreneur',
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.email,
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
    ],
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

  return (
    <Script
      id="person-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
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

  return (
    <Script
      id="website-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
}

export function ProfilePageJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: 'Mohammad Keshtkar',
      url: siteConfig.url,
      sameAs: [siteConfig.social.linkedin, siteConfig.social.twitter],
    },
  };

  return (
    <Script
      id="profilepage-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
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

  return (
    <Script
      id={`project-${name.toLowerCase().replace(/\s+/g, '-')}-jsonld`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
}

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQPageJsonLd({ faqs }: { faqs: FAQItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <Script
      id="faq-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
}
