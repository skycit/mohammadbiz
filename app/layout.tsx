import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
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
    default: 'Mohammad Keshtkar — Founder building privacy-preserving verification',
    template: '%s — Mohammad Keshtkar',
  },
  description: 'Technical founder with EPO patent for anonymous verification. Building blockchain, AI, and privacy products. Creator of AnyBet, VetCast, TastyPot.',
  keywords: [
    'Mohammad Keshtkar',
    'Mohammadamin Keshtkar',
    'Mohammad Amin Keshtkar',
    'privacy-preserving prediction market',
    'blockchain founder',
    'anonymous verification patent',
    'AnyBet',
    'VetCast',
    'TastyPot',
    'zero knowledge proofs',
    'privacy technology',
    'prediction markets',
    'AI privacy',
    'Imperial College London',
    'Web3 entrepreneur',
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mohammad.biz',
    title: 'Mohammad Keshtkar — Founder building privacy-preserving verification',
    description: 'Technical founder with EPO patent. Building AnyBet, VetCast, TastyPot, and privacy-preserving prediction markets.',
    siteName: 'Mohammad Keshtkar',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Mohammad Keshtkar - Founder building privacy-preserving verification, blockchain, and AI products',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohammad Keshtkar — Founder building privacy-preserving verification',
    description: 'Technical founder with EPO patent. Building AnyBet, VetCast, TastyPot, and privacy-preserving prediction markets.',
    creator: '@perblock_io',
    images: ['/og-default.png'],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
    other: {
      'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION || '',
    },
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
        <SpeedInsights />
      </body>
    </html>
  );
}
