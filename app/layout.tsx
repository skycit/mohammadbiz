import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://mohammad.biz'),
  title: {
    default: 'Mohammad Keshtkar | Privacy-First Entrepreneur',
    template: '%s | Mohammad Keshtkar',
  },
  description: 'Entrepreneur building privacy-preserving applications powered by Blockchain & AI. Creating transparent prediction markets and decentralized solutions that protect user identity while enabling global accessibility.',
  keywords: [
    'Mohammad Keshtkar',
    'Blockchain Entrepreneur',
    'Privacy Technology',
    'Prediction Markets',
    'Decentralized Applications',
    'AI Privacy',
    'Zero Knowledge Proofs',
    'PerBlock',
    'Web3',
    'Privacy-Preserving',
    'Transparent Systems',
    'Imperial College London',
    'Crypto Privacy',
    'DeFi',
  ],
  authors: [{ name: 'Mohammad Keshtkar', url: 'https://mohammad.biz' }],
  creator: 'Mohammad Keshtkar',
  publisher: 'Mohammad Keshtkar',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://mohammad.biz',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mohammad.biz',
    title: 'Mohammad Keshtkar | Privacy-First Entrepreneur',
    description: 'Building privacy-preserving applications powered by Blockchain & AI. Focused on prediction markets and transparent solutions that protect user identity.',
    siteName: 'Mohammad Keshtkar',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Mohammad Keshtkar - Privacy-First Entrepreneur',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohammad Keshtkar | Privacy-First Entrepreneur',
    description: 'Building privacy-preserving applications powered by Blockchain & AI. Focused on prediction markets and transparent solutions.',
    creator: '@perblock_io',
    images: ['/og-image.svg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
