import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Users,
  MessageCircle,
  Heart,
  Search,
  CheckCircle2,
  Clock,
  CreditCard,
  Lock,
  TrendingUp,
  Smartphone,
  Award,
  RefreshCcw,
  Eye,
  EyeOff,
} from 'lucide-react';
import { ProjectJsonLd, BreadcrumbListJsonLd } from '@/components/SeoJsonLd';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TrustPeer — AI-Matched Pay-to-Connect for the Creator Economy',
  description:
    'TrustPeer is an AI-scored, pay-to-connect platform for verified influencers. The DeepScore™ shows compatibility before payment, accepted requests open a 30-day private chat, unanswered requests auto-refund, and a Vouch tipping mechanic adds money-backed authenticity signals.',
  alternates: {
    canonical: '/projects/trustpeer',
  },
  openGraph: {
    title: 'TrustPeer — AI-Matched Pay-to-Connect for the Creator Economy',
    description:
      'AI-scored DeepScore™, paid connection requests, 30-day private chats, auto-refund safety net, and a Vouch tipping mechanic — built as a Laravel API, a Flutter mobile app, and a Next.js web front-end.',
    url: 'https://mohammad.biz/projects/trustpeer',
    images: ['/trustpeer-web.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TrustPeer — AI-Matched Pay-to-Connect for the Creator Economy',
    description:
      'AI-scored DeepScore™, paid connection requests, 30-day private chats, auto-refund safety net, and a Vouch tipping mechanic.',
    images: ['/trustpeer-web.png'],
  },
};

export default function TrustpeerPage() {
  return (
    <>
      <ProjectJsonLd
        name="TrustPeer"
        url="https://trustpeer.io"
        sameAs={['https://mohammad.biz/projects/trustpeer']}
        description="AI-matched, pay-to-connect platform for verified influencers. DeepScore compatibility preview before payment, 30-day private chats on accepted requests, auto-refund after 7 days of inactivity, and a Vouch tipping mechanic with public/private modes."
        applicationCategory="SocialNetworkingApplication"
        keywords={[
          'creator economy',
          'AI matching',
          'influencer platform',
          'DeepScore',
          'pay-to-connect',
          'two-sided marketplace',
          'Stripe payments',
          'iOS app',
          'Flutter',
          'Laravel API',
        ]}
      />
      <BreadcrumbListJsonLd
        items={[
          { name: 'Home', url: 'https://mohammad.biz' },
          { name: 'Projects', url: 'https://mohammad.biz/#projects' },
          { name: 'TrustPeer', url: 'https://mohammad.biz/projects/trustpeer' },
        ]}
      />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-indigo-50">
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
            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-cyan-400 via-indigo-500 to-fuchsia-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
              <Sparkles size={28} />
            </div>
            <div>
              <p className="text-sm font-medium text-indigo-600">Pre-launch · Web live · iOS / Android in final test</p>
              <h1 className="text-3xl font-bold text-gray-900">TrustPeer</h1>
            </div>
          </div>

          <p className="text-lg text-gray-600 mb-10 max-w-3xl leading-relaxed">
            TrustPeer is an AI-scored, pay-to-connect platform between users and verified influencers. Instead of
            shouting into a public DM with no idea whether the message will land, users see a free
            <span className="font-medium text-gray-900"> DeepScore™</span> — a 0-100 AI compatibility score —
            <em>before</em> they pay. Influencers only see paid, AI-pre-screened requests; accepted ones open a
            30-day private chat. Unanswered requests auto-refund. A separate Vouch mechanic lets fans put real
            money behind their support.
          </p>

          {/* Hero image */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-12 bg-white border border-slate-200 shadow-xl">
            <Image
              src="/trustpeer-web.png"
              alt="TrustPeer website hero — Connect with Influencers Who Matter, with a search bar to find influencers by username, Download Free CTA, and trust indicators for Verified Influencers, AI-Powered Matching, and 4.9 App Rating."
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
                  The creator economy is a one-way megaphone. Fans can&apos;t reliably reach the influencers they
                  follow — public DMs are flooded, business email addresses don&apos;t scale, and there&apos;s no
                  filter for whether a sender is a serious supporter or random spam.
                </p>
                <p>
                  Influencers, in turn, lose two things at once: meaningful relationships with their genuine
                  audience, and the chance to monetise time spent replying. Existing &quot;DM-for-pay&quot;
                  products solve the payment but not the matching — an influencer ends up sifting paid messages
                  from people whose values don&apos;t actually align, and a user ends up paying without knowing
                  whether the conversation will land.
                </p>
              </div>
            </section>

            {/* Approach */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">The approach</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                TrustPeer separates <em>signal</em> from <em>spend</em>. AI does the matching first; payment
                follows. Every connection has compatibility transparency before money changes hands, and the
                payment itself is an intent filter — only people who care enough to pay reach the influencer.
                Time-bound chat windows and automatic refunds keep both sides honest.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Users size={20} className="text-indigo-600" />
                    <h3 className="font-semibold text-gray-900">For users</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    See a free DeepScore™ before paying. Pay only if the AI says you&apos;re a good match.
                    If the influencer doesn&apos;t reply in 7 days, get refunded automatically.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Award size={20} className="text-indigo-600" />
                    <h3 className="font-semibold text-gray-900">For influencers</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Inbox is pre-filtered by AI compatibility and gated by payment. Decide based on the score,
                    not the noise. Earn from time you would otherwise spend replying for free.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Heart size={20} className="text-indigo-600" />
                    <h3 className="font-semibold text-gray-900">For fans who don&apos;t want to chat</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Vouch instead. £1 per public vouch (name and photo visible) or £1.50 per private vouch
                    (identity hidden). A money-backed authenticity signal beyond a follow click.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <ShieldCheck size={20} className="text-indigo-600" />
                    <h3 className="font-semibold text-gray-900">Trust by design</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Influencers are verified. Compatibility is calculated by GPT-4 against a structured
                    questionnaire. Refunds are automatic. Privacy modes are first-class, not an afterthought.
                  </p>
                </div>
              </div>
            </section>

            {/* How it works */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                How a connection happens
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <ol className="space-y-5">
                  {[
                    {
                      step: '1',
                      title: 'Discover',
                      body: 'Browse verified influencers or search by @username. Each profile carries a verification badge, follower stats, and a public Vouch leaderboard so you know the support is real.',
                      icon: Search,
                    },
                    {
                      step: '2',
                      title: 'Get your DeepScore™ — free',
                      body: 'Answer a short, AI-generated questionnaire tuned to that specific influencer. GPT-4 scores compatibility from 0-100. The preview is free and lives behind no paywall — see the score before you decide to pay.',
                      icon: Sparkles,
                    },
                    {
                      step: '3',
                      title: 'Send a paid connection request',
                      body: 'If the score looks promising, pay via Stripe to send the request. The fee is the intent filter: only people who care enough to spend reach the influencer\'s queue.',
                      icon: CreditCard,
                    },
                    {
                      step: '4',
                      title: 'Influencer accepts or rejects',
                      body: 'The influencer sees the DeepScore alongside the request and decides. If they accept, a 30-day private chat opens. If they reject, the user is refunded.',
                      icon: CheckCircle2,
                    },
                    {
                      step: '5',
                      title: 'Build the relationship — or auto-refund',
                      body: 'A 30-day window encourages real, time-bound conversation rather than endless drift. If the influencer doesn\'t respond at all in 7 days, the request automatically refunds and closes — no manual support tickets needed.',
                      icon: MessageCircle,
                    },
                  ].map(({ step, title, body, icon: Icon }) => (
                    <li key={step} className="flex gap-4">
                      <div className="shrink-0 h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-400 via-indigo-500 to-fuchsia-500 text-white font-bold flex items-center justify-center shadow-md shadow-indigo-500/20">
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
                          Step {step}
                        </p>
                        <h3 className="font-semibold text-gray-900">{title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mt-1">{body}</p>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="relative mx-auto w-full max-w-[280px]">
                  <div className="absolute -inset-4 bg-gradient-to-br from-cyan-200/40 via-indigo-200/30 to-fuchsia-200/40 rounded-[40px] blur-2xl" />
                  <div className="relative aspect-[9/19] rounded-[32px] overflow-hidden bg-white border border-slate-200 shadow-2xl shadow-indigo-500/10">
                    <Image
                      src="/trustpeer-mobile.png"
                      alt="TrustPeer iOS app home screen showing a 'Samin just joined TrustPeer' welcome card with 2.8K followers, the Trust Peer Statistics dashboard with vouch and request earnings totals, and a Featured Influencers carousel highlighting Carol with a verified badge."
                      fill
                      className="object-contain"
                      sizes="280px"
                    />
                  </div>
                  <p className="text-center text-xs text-gray-500 mt-4">
                    Mobile home — featured influencers, earnings dashboard, search.
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
                    <Sparkles size={20} className="text-indigo-600" />
                    <h3 className="font-semibold text-gray-900">DeepScore™ matching</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Influencer-specific questionnaires generated and scored by GPT-4. The score is computed
                    server-side, returned as a structured 0-100 value, and shown to the user before any
                    Stripe charge. No paywall on the preview — payment only triggers if the user proceeds.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Heart size={20} className="text-indigo-600" />
                    <h3 className="font-semibold text-gray-900">Vouch — a tipping primitive</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A separate, lightweight signal: £1 per public vouch (name + photo visible to the
                    influencer and on a leaderboard) or £1.50 per private vouch (identity hidden). Designed
                    as a money-backed alternative to follow counts — supporters who put real money on the
                    table.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock size={20} className="text-indigo-600" />
                    <h3 className="font-semibold text-gray-900">30-day chat windows</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Accepted connection requests open a chat that lives for 30 days. Time-bounded
                    conversations force quality over drift, and let influencers reuse mental capacity for the
                    next request without an ever-growing inbox.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <RefreshCcw size={20} className="text-indigo-600" />
                    <h3 className="font-semibold text-gray-900">Auto-refund safety net</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Connection requests that go un-answered for 7 days refund automatically through Stripe.
                    No support tickets, no follow-ups, no awkward chasing. Users keep faith in the platform;
                    influencers aren&apos;t penalised for ignoring weak matches.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <CreditCard size={20} className="text-indigo-600" />
                    <h3 className="font-semibold text-gray-900">Stripe-powered payments + payouts</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Stripe Payment Intents on the user side; Stripe-managed payout methods on the influencer
                    side (verified bank details, default-payout selection, multi-account support). Refunds,
                    chargebacks, and currency handling are infrastructure-grade by default.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Lock size={20} className="text-indigo-600" />
                    <h3 className="font-semibold text-gray-900">Privacy modes, first-class</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Vouching can be public or private at separate price points — privacy is a paid feature,
                    not a default behaviour, so the value is explicit. Auth supports Google and Apple SSO via
                    Firebase, and chats are scoped to the 30-day window.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Smartphone size={20} className="text-indigo-600" />
                    <h3 className="font-semibold text-gray-900">Native mobile + web</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A Flutter mobile app (iOS + Android), a Next.js marketing and discovery web front-end,
                    and a single Laravel REST API behind both. Riverpod for client state, GoRouter for
                    navigation, Dio for API calls, Stripe SDK for payments.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <ShieldCheck size={20} className="text-indigo-600" />
                    <h3 className="font-semibold text-gray-900">Verified influencer onboarding</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Every influencer goes through an application + verification flow before appearing in
                    discovery. Filament-powered admin dashboards let the team review applications, manage
                    payout methods, and respond to disputes.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp size={20} className="text-indigo-600" />
                    <h3 className="font-semibold text-gray-900">Influencer earnings dashboard</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Live earnings split by source — Vouch revenue, accepted connection-request revenue,
                    pending balance, lifetime total. Payouts run on a schedule against the verified bank
                    account.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Eye size={20} className="text-indigo-600" />
                    <h3 className="font-semibold text-gray-900">Free preview, not free product</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A core design choice: the AI compatibility score is free, the influencer&apos;s time
                    isn&apos;t. Visibility into match quality is the trust hook; the paywall remains where
                    it should be — on the actual conversation.
                  </p>
                </div>
              </div>
            </section>

            {/* Privacy & vouch detail */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Vouching — public vs private
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Eye size={20} className="text-indigo-600" />
                    <h3 className="font-semibold text-gray-900">Public vouch — £1</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                      Your name and photo are visible to the influencer
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                      You appear on the influencer&apos;s public Vouch leaderboard
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                      Designed for fans who want recognition for their support
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <EyeOff size={20} className="text-indigo-600" />
                    <h3 className="font-semibold text-gray-900">Private vouch — £1.50</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                      Identity hidden — neither the influencer nor the leaderboard sees you
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                      Total vouch count still increments the public stats
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                      The 50p premium reflects the value of the privacy guarantee
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Tech stack */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technology</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Three repos behind one product — a Laravel-powered API, a Flutter mobile app, and a Next.js
                web front-end — sharing one user identity, one payments stack, and one AI scoring service.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Next.js 14',
                  'TypeScript',
                  'Tailwind CSS',
                  'Framer Motion',
                  'Vercel',
                  'Flutter 3.38',
                  'Riverpod',
                  'GoRouter',
                  'Dio',
                  'Laravel 12',
                  'PHP 8.4',
                  'PostgreSQL (Neon)',
                  'Railway',
                  'Sanctum auth',
                  'Firebase (Google + Apple SSO)',
                  'Stripe Payments + Connect payouts',
                  'OpenAI GPT-4',
                  'Resend (email)',
                  'Filament admin',
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-indigo-50 text-indigo-800 text-sm font-medium rounded-full border border-indigo-100"
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
                The marketing and discovery web front-end is live at trustpeer.io. The Laravel API is in
                production on Railway with Stripe payments, GPT-4 scoring, and influencer payout methods all
                wired up. The Flutter iOS and Android apps are in final pre-launch testing, with a verified-
                influencer cohort being onboarded ahead of the public App Store and Play Store releases.
              </p>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-fuchsia-900 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-fuchsia-400/20 blur-3xl" />
              <div className="relative">
                <h2 className="text-xl font-semibold mb-3">Want to see TrustPeer in action?</h2>
                <p className="text-slate-200 mb-6 max-w-2xl">
                  Whether you&apos;re an influencer interested in joining the verified cohort, an investor
                  looking at the unit economics of pay-to-connect, or a builder curious about the
                  GPT-4-scored matching layer — happy to walk through a live demo.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://trustpeer.io"
                    target="_blank"
                    rel="me noopener"
                    className="px-6 py-3 bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
                  >
                    Visit TrustPeer
                    <ArrowRight size={18} />
                  </a>
                  <a
                    href="mailto:hello@mohammad.biz?subject=TrustPeer Demo Request"
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
                  className="bg-white rounded-xl p-4 border border-gray-200 hover:border-indigo-200 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-gray-900">Prediction Market</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Privacy-preserving prediction platform
                  </p>
                </Link>
                <Link
                  href="/projects/anybet"
                  className="bg-white rounded-xl p-4 border border-gray-200 hover:border-indigo-200 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-gray-900">AnyBet</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Risk-free sports betting for learning
                  </p>
                </Link>
                <Link
                  href="/projects/prizely"
                  className="bg-white rounded-xl p-4 border border-gray-200 hover:border-indigo-200 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-gray-900">Prizely</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    QR-powered prize-draw marketing for venues &amp; brands
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
