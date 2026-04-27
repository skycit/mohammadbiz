import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  ArrowRight,
  QrCode,
  Sparkles,
  Trophy,
  ShieldCheck,
  Smartphone,
  Receipt,
  MapPin,
  Layers,
  Building2,
  Bell,
  Lock,
  Wallet,
  Users,
  Apple,
  TrendingUp,
} from 'lucide-react';
import { ProjectJsonLd, BreadcrumbListJsonLd } from '@/components/SeoJsonLd';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prizely — Blockchain- and AI-Powered Engagement for Venues & Brands',
  description:
    'Prizely is a blockchain- and AI-powered engagement platform reshaping marketing and entertainment for hospitality. Sponsor-funded cash prize draws turn real in-venue spend into transparent, independently verifiable rewards for real customers.',
  alternates: {
    canonical: '/projects/prizely',
  },
  openGraph: {
    title: 'Prizely — Blockchain- and AI-Powered Engagement for Venues & Brands',
    description:
      'A platform that turns real in-venue spend into sponsor-funded cash prize draws — combining blockchain-grade transparency with AI-driven engagement for hospitality.',
    url: 'https://mohammad.biz/projects/prizely',
    images: ['/prizely1.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prizely — Blockchain- and AI-Powered Engagement for Venues & Brands',
    description:
      'A platform that turns real in-venue spend into sponsor-funded cash prize draws — combining blockchain-grade transparency with AI-driven engagement for hospitality.',
    images: ['/prizely1.png'],
  },
};

export default function PrizelyPage() {
  return (
    <>
      <ProjectJsonLd
        name="Prizely"
        url="https://www.prizelyapp.com"
        sameAs={['https://mohammad.biz/projects/prizely']}
        description="Blockchain- and AI-powered engagement platform reshaping marketing and entertainment for hospitality. Sponsor-funded cash prize draws turn real in-venue spend into transparent, independently verifiable rewards for real customers — backed by a public blockchain ledger."
        applicationCategory="LifestyleApplication"
        keywords={[
          'blockchain marketing',
          'AI engagement',
          'prize draw',
          'iOS app',
          'hospitality engagement',
          'brand sponsorship',
          'transparency ledger',
          'loyalty platform',
          'venue marketing',
        ]}
      />
      <BreadcrumbListJsonLd
        items={[
          { name: 'Home', url: 'https://mohammad.biz' },
          { name: 'Projects', url: 'https://mohammad.biz/#projects' },
          { name: 'Prizely', url: 'https://mohammad.biz/projects/prizely' },
        ]}
      />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-amber-50/40">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to projects
          </Link>

          {/* Title block */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-600 flex items-center justify-center text-slate-900 shadow-lg shadow-amber-500/20">
              <Sparkles size={28} />
            </div>
            <div>
              <p className="text-sm font-medium text-amber-600">Live · iOS App Store</p>
              <h1 className="text-3xl font-bold text-gray-900">Prizely</h1>
            </div>
          </div>

          <p className="text-lg text-gray-600 mb-10 max-w-3xl leading-relaxed">
            Prizely is a blockchain- and AI-powered engagement platform reshaping marketing and
            entertainment for hospitality — UK pubs, bars, cafés, restaurants, and the brands
            that sponsor them. Instead of paying for ad impressions that never translate into
            footfall, sponsors fund real cash prize pools that activate real customers at the
            moment of purchase. Every ticket, every draw, every winner is recorded on a public,
            blockchain-backed ledger so participants and sponsors alike can independently
            verify the result.
          </p>

          {/* Hero image */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-12 bg-slate-950 border border-slate-200 shadow-xl">
            <Image
              src="/prizely1.png"
              alt="Prizely marketing platform hero — Real Customers, Real Engagement. Brand-funded prize pools shown alongside an iOS phone mockup with a Heineken £500 prize and QR redemption screen."
              fill
              className="object-contain"
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
          </div>

          <div className="space-y-14">
            {/* Problem */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">The problem</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Brands spend significant budget on digital impressions that rarely translate
                  into in-venue footfall. There&apos;s no clean line of attribution between an
                  ad view and a verified receipt at a partner venue, and traditional loyalty
                  programmes feel transactional — points-for-purchase models don&apos;t excite
                  first-time customers or motivate them to come back.
                </p>
                <p>
                  Venues are stuck in the middle: paying for digital ads with vague ROI, or
                  running expensive in-house loyalty schemes that customers forget about.
                  Customers, meanwhile, are tired of paying a premium for the privilege of
                  earning points they may never redeem.
                </p>
              </div>
            </section>

            {/* Approach */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">The approach</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Prizely flips the model. Instead of customers paying to earn points, brands and
                venues fund a real cash prize pool. After a purchase, the customer scans the
                venue&apos;s QR code, uploads a photo of their receipt, and earns{' '}
                <span className="font-medium text-gray-900">1 Local Point per £1 spent</span>.
                Ten LP converts into one ticket for the active draw. Customers never pay
                money — the entire prize pot is sponsor-funded — and brands only pay for
                verified, in-store transactions, not impressions.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Building2 size={20} className="text-amber-600" />
                    <h3 className="font-semibold text-gray-900">For brands</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Sponsor named prize pools across a network of venues. Pay only when a
                    real customer makes a real purchase and uploads a real receipt — full
                    attribution, no ad-impression waste.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin size={20} className="text-amber-600" />
                    <h3 className="font-semibold text-gray-900">For venues</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Drive measurable footfall and repeat visits with prize pools that update
                    in real time. Customers see countdowns, ticket counts, and live unlock
                    progress that pulls them back.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Trophy size={20} className="text-amber-600" />
                    <h3 className="font-semibold text-gray-900">For customers</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Free to play. Real cash prizes. Every step — from scanning a QR to picking
                    up a win — is verifiable on a public ledger. No spend required beyond your
                    normal purchase.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <ShieldCheck size={20} className="text-amber-600" />
                    <h3 className="font-semibold text-gray-900">Trust by design</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Geolocation-verified scans, photo-receipt evidence, and a Solana-compatible
                    public ledger make every draw independently auditable.
                  </p>
                </div>
              </div>
            </section>

            {/* How it works */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                How a draw entry works
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <ol className="space-y-5">
                  {[
                    {
                      step: '1',
                      title: 'Scan the venue QR',
                      body: 'Master QR codes are venue-specific. The app validates them server-side and runs a haversine geolocation check against an admin-configurable radius before letting the flow continue.',
                      icon: QrCode,
                    },
                    {
                      step: '2',
                      title: 'Upload your receipt',
                      body: 'A photo of the receipt is uploaded directly to private object storage and tied to the redemption — every entry has receipt-level evidence, never just a tap of a button.',
                      icon: Receipt,
                    },
                    {
                      step: '3',
                      title: 'Earn Local Points',
                      body: 'The app converts the purchase amount to LP at 1 LP per £1 (e.g. £33.50 = 33.5 LP). LP is venue-scoped and tracked per customer per restaurant.',
                      icon: Sparkles,
                    },
                    {
                      step: '4',
                      title: 'Pick your tickets',
                      body: 'Ten LP burns into one ticket. For Lucky Number pools, the customer picks a 6-digit number per ticket; for Random pools, tickets are entered as-is. Server-side guards prevent double-creation.',
                      icon: Trophy,
                    },
                    {
                      step: '5',
                      title: 'Watch the draw, see the result',
                      body: 'Pools have visible countdowns and live participant counts. When a draw closes, the result and the winner are written to a public ledger anyone can audit.',
                      icon: Bell,
                    },
                  ].map(({ step, title, body, icon: Icon }) => (
                    <li key={step} className="flex gap-4">
                      <div className="shrink-0 h-10 w-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-900 font-bold flex items-center justify-center shadow-md shadow-amber-500/20">
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide">
                          Step {step}
                        </p>
                        <h3 className="font-semibold text-gray-900">{title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mt-1">{body}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="relative mx-auto w-full max-w-[280px]">
                  <div className="absolute -inset-4 bg-gradient-to-br from-amber-200/40 via-transparent to-amber-300/30 rounded-[40px] blur-2xl" />
                  <div className="relative aspect-[9/19] rounded-[32px] overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl shadow-amber-500/10">
                    <Image
                      src="/home-screen-mobile.png"
                      alt="Prizely iOS app home screen showing a Global Prizely Pool with £1,000 prize, £41 unlocked, 31 tickets so far, an 11-day 11-hour countdown, and an At-A-Glance dashboard with ticket and Local Point counts."
                      fill
                      className="object-contain"
                      sizes="280px"
                    />
                  </div>
                  <p className="text-center text-xs text-gray-500 mt-4">
                    Customer home screen — live pools, countdowns, at-a-glance stats.
                  </p>
                </div>
              </div>
            </section>

            {/* Feature deep dives */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                What&apos;s under the hood
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Layers size={20} className="text-amber-600" />
                    <h3 className="font-semibold text-gray-900">Multi-pot venues</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A single venue can run several active prize pools at once — a house pool, a
                    brand-sponsored pool, a Lucky Number pool — each with its own draw date,
                    entry cost, and participant counter. The QR flow lets customers pick which
                    pool to enter when they have multiple to choose from.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Building2 size={20} className="text-amber-600" />
                    <h3 className="font-semibold text-gray-900">Brand-sponsored pools</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Brands fund pools that surface in the home slider with a hero image and a
                    &quot;SPONSORED&quot; badge. Each brand pool gets its own dedicated detail
                    page with a sticky entry CTA, trust badges, and an Apple/Google
                    not-a-sponsor disclaimer.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Lock size={20} className="text-amber-600" />
                    <h3 className="font-semibold text-gray-900">Two draw mechanics</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    <span className="font-medium text-gray-900">Random</span> draws pick a
                    winner uniformly across all tickets in the pool.{' '}
                    <span className="font-medium text-gray-900">Lucky Number</span> pools ask
                    each customer to choose a 6-digit number per ticket — only matching tickets
                    win, raising the perceived agency and the social conversation.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Wallet size={20} className="text-amber-600" />
                    <h3 className="font-semibold text-gray-900">Blockchain-backed ledger</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Every user and venue has a Solana-compatible Ed25519 wallet. Pot funding,
                    ticket entries, winner selection, and prize distribution are all written
                    to a public transactions table — designed from day one for a clean
                    migration to Solana mainnet when the time is right.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <ShieldCheck size={20} className="text-amber-600" />
                    <h3 className="font-semibold text-gray-900">Privacy by design</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Other customers&apos; profiles are only ever read through privacy-safe
                    database views, not the raw profiles table. Each user controls — per
                    field — whether their display name, avatar, city, country, bio, and
                    favourite activities are visible publicly. Wallet addresses stay internal.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Smartphone size={20} className="text-amber-600" />
                    <h3 className="font-semibold text-gray-900">Native iOS, App Store-ready</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    React Native + Expo SDK 54 with the New Architecture enabled. Native
                    Apple Sign In, direct Google OAuth + PKCE, APNs push notifications, an
                    animated splash, runtime dark/light theming, and full Apple App Store
                    compliance for sweepstakes and account-deletion guidelines.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Bell size={20} className="text-amber-600" />
                    <h3 className="font-semibold text-gray-900">Real-time engagement loop</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Push notifications via Expo &rarr; APNs land draw results, winner
                    announcements, and support replies on the customer&apos;s lock screen.
                    Database triggers keep participant counts and pool unlock amounts up to
                    date so the home feed always reflects live state.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp size={20} className="text-amber-600" />
                    <h3 className="font-semibold text-gray-900">Cash withdrawal flow</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Winners can withdraw real cash through a phone-verified, KYC-gated bank
                    flow with admin-reviewed identity documents and a £10 minimum. KYC and
                    bank records are retained for compliance even after account deletion.
                  </p>
                </div>
              </div>
            </section>

            {/* Profile & community */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Public profiles, public proof
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Every win on Prizely is anchored to a wallet address and visible on a
                    public profile — but only if the user has opted to make their identity
                    public. Animated trophies float beside the avatar based on win count,
                    pulling the social proof into the moment.
                  </p>
                  <p>
                    The activity ledger on each profile is wallet-cross-referenced: it merges
                    older transactions tagged by customer hash with newer wallet-tagged ones
                    so historical wins never disappear.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                      Ledger-verified wins linked back to the venue and pool
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                      Per-field privacy controls: name, avatar, location, bio, activities
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                      Anonymous winners shown as &quot;A Prizely Winner&quot; — never doxxed
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                      Account deactivation and deletion both fully self-serve
                    </li>
                  </ul>
                </div>

                <div className="relative mx-auto w-full max-w-[280px]">
                  <div className="absolute -inset-4 bg-gradient-to-br from-amber-200/40 via-transparent to-rose-200/30 rounded-[40px] blur-2xl" />
                  <div className="relative aspect-[9/19] rounded-[32px] overflow-hidden bg-slate-100 border border-slate-200 shadow-2xl shadow-amber-500/10">
                    <Image
                      src="/profile-user-screen.png"
                      alt="Prizely customer profile screen for Alexi mak from Leeds — gold trophies floating beside the avatar, £2,425 won total, six listed wins from venues including Heineken UK and Imperial IB Café, and a recent activity ledger of ticket entries."
                      fill
                      className="object-contain"
                      sizes="280px"
                    />
                  </div>
                  <p className="text-center text-xs text-gray-500 mt-4">
                    Public profile — wins, totals, and a verifiable activity ledger.
                  </p>
                </div>
              </div>
            </section>

            {/* Trust & compliance */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Compliance & integrity
              </h2>
              <div className="bg-slate-900 rounded-2xl p-6 lg:p-8 text-slate-200 border border-slate-800">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Apple size={18} className="text-amber-400" />
                      <h3 className="font-semibold text-white">Apple App Store compliant</h3>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Native Sign In with Apple, &quot;Continue / Next&quot; pre-prompt
                      language for camera and notifications, and a clearly displayed
                      not-a-sponsor disclaimer wherever a contest is referenced — onboarding,
                      Help Center contest rules, venue pages, and brand pages.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <ShieldCheck size={18} className="text-amber-400" />
                      <h3 className="font-semibold text-white">Receipt + location proofs</h3>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Every redemption ties together three independent proofs: a venue-bound
                      Master QR, a haversine-checked GPS location within an admin-set radius,
                      and a photo of the physical receipt. No proof, no points.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Users size={18} className="text-amber-400" />
                      <h3 className="font-semibold text-white">Account lifecycle</h3>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Reversible deactivation, full deletion with PII anonymisation, and a
                      re-registration flag so deleted accounts that come back are flagged for
                      admin review — keeping the ledger clean without locking anyone out
                      permanently.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Lock size={18} className="text-amber-400" />
                      <h3 className="font-semibold text-white">Tamper-resistant draws</h3>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Multi-layer guards prevent double-earning of points and double-creation
                      of tickets across navigation gestures, back-button intercepts, and
                      server-side LP balance checks. Expired pools are blocked client-side
                      and server-side.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Tech stack */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technology</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Built for native performance, real-time data, and a clean migration path to
                a public chain.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'React Native',
                  'Expo SDK 54',
                  'TypeScript',
                  'expo-router v6',
                  'Supabase',
                  'PostgreSQL + RLS',
                  'Edge Functions (Deno)',
                  'TanStack Query v5',
                  'Zustand',
                  'Reanimated v4',
                  'expo-camera (QR)',
                  'expo-secure-store',
                  'APNs push',
                  'Apple Sign In',
                  'Google OAuth + PKCE',
                  'Solana-compatible Ed25519 wallets',
                  'EAS Build + OTA updates',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-amber-50 text-amber-800 text-sm font-medium rounded-full border border-amber-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Status */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Where it is, what&apos;s next
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Prizely is live on the iOS App Store with active venues, brand-sponsored
                pools, real cash withdrawals, and a public transparency ledger. Current focus
                is scaling venue partnerships across the UK, onboarding brand sponsors for
                cross-venue campaigns, and continuing to harden the ledger so the entire draw
                lifecycle is independently verifiable.
              </p>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-amber-500/20 blur-3xl" />
              <div className="relative">
                <h2 className="text-xl font-semibold mb-3">Want to see Prizely in action?</h2>
                <p className="text-slate-300 mb-6 max-w-2xl">
                  Whether you&apos;re a brand exploring a sponsored prize-pool campaign, a
                  venue interested in joining the network, or an investor curious about the
                  unit economics — happy to walk through a live demo.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://www.prizelyapp.com"
                    target="_blank"
                    rel="me noopener"
                    className="px-6 py-3 bg-amber-400 text-slate-900 rounded-lg font-semibold hover:bg-amber-300 transition-colors inline-flex items-center justify-center gap-2"
                  >
                    Visit Prizely
                    <ArrowRight size={18} />
                  </a>
                  <a
                    href="mailto:hello@mohammad.biz?subject=Prizely Demo Request"
                    className="px-6 py-3 border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors text-center"
                  >
                    Request a demo
                  </a>
                </div>
              </div>
            </section>

            {/* Related Projects */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Other Projects</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <Link
                  href="/projects/prediction-market"
                  className="bg-white rounded-xl p-4 border border-gray-200 hover:border-amber-200 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-gray-900">Prediction Market</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Privacy-preserving prediction platform
                  </p>
                </Link>
                <Link
                  href="/projects/anybet"
                  className="bg-white rounded-xl p-4 border border-gray-200 hover:border-amber-200 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-gray-900">AnyBet</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Risk-free sports betting for learning
                  </p>
                </Link>
                <Link
                  href="/projects/trustpeer"
                  className="bg-white rounded-xl p-4 border border-gray-200 hover:border-amber-200 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-gray-900">TrustPeer</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    AI-matched, pay-to-connect platform for the creator economy
                  </p>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
