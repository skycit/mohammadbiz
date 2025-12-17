import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Instagram, Linkedin, Mail, ShieldCheck, Sparkles, Twitter } from 'lucide-react';

export default function Home() {
  const heroHighlights = [
    { title: 'Patent-backed privacy', copy: 'European patent confirmed for wallet-free verification.' },
    { title: 'Blockchain x AI', copy: 'Smart contracts + ML to unlock human insight responsibly.' },
    { title: 'Impact-first', copy: 'Products designed for real-world trust, not hype.' },
  ];

  const principles = [
    { title: 'Private by design', copy: 'No mandatory wallet connections. Verification lives off-chain until users opt in.' },
    {
      title: 'Human-centered AI',
      copy: 'Models that augment decision-making while protecting user intent and data.',
    },
    {
      title: 'Momentum through design',
      copy: 'Clear storytelling and high polish to inspire adoption beyond early adopters.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Mohammad Keshtkar
          </Link>
          <div className="flex space-x-6">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
            <a href="#vision" className="text-gray-600 hover:text-gray-900 transition-colors">Vision</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 pt-24 pb-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
          <div className="absolute top-24 -right-24 h-72 w-72 rounded-full bg-purple-200/40 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-200/30 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/80 border border-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                <ShieldCheck size={16} /> Privacy-preserving prediction markets
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                I&apos;m{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
                  Mohammad Keshtkar
                </span>{' '}
                — building trusted products where blockchain, AI, and design meet.
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Founder focused on launching the world&apos;s first private-by-default prediction market. My work is anchored by a European patent for anonymous verification, so people can forecast boldly without ever connecting a wallet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-purple-200/60"
                >
                  Partner with me
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#projects"
                  className="px-6 py-3 border border-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  View portfolio
                </a>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {heroHighlights.map((item) => (
                  <div key={item.title} className="bg-white/80 border border-gray-200 rounded-xl p-4 text-left shadow-sm">
                    <p className="text-sm font-semibold text-indigo-700 mb-1">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.copy}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[460px]">
                <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-r from-blue-600/40 via-indigo-500/35 to-purple-600/40 blur" />
                <div className="relative rounded-[28px] bg-white/85 backdrop-blur-xl border border-indigo-100/60 shadow-2xl overflow-hidden">
                  <div className="relative aspect-[4/5] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                    <div className="absolute inset-6 rounded-2xl bg-gradient-to-b from-white/8 via-indigo-400/10 to-purple-500/14 blur-2xl" />
                    <div className="absolute inset-0">
                      <Image
                        src="/mohammad-keshtkar.svg"
                        alt="Mohammad Keshtkar portrait"
                        fill
                        className="object-contain drop-shadow-2xl"
                        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 460px"
                        priority
                      />
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white">
                        <Sparkles size={18} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Now building</p>
                        <p className="font-semibold text-gray-900">Privacy-first prediction market</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
                      <div className="bg-indigo-50 text-indigo-700 rounded-lg px-3 py-2 font-semibold">Wallet-free onboarding</div>
                      <div className="bg-purple-50 text-purple-700 rounded-lg px-3 py-2 font-semibold">EPO-confirmed patent</div>
                      <div className="bg-blue-50 text-blue-700 rounded-lg px-3 py-2 font-semibold">Zero-knowledge checks</div>
                      <div className="bg-slate-50 text-slate-700 rounded-lg px-3 py-2 font-semibold">Ethical AI insights</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center mb-12">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-50 text-indigo-700 font-semibold border border-indigo-100 shadow-sm">
              <Sparkles size={16} /> About Me
            </span>
          </div>

          {/* Education Spotlight */}
          <div className="relative mb-16 overflow-hidden rounded-2xl border border-blue-100 shadow-sm bg-gradient-to-br from-blue-50 via-white to-indigo-50">
            <div className="absolute inset-0">
              <Image
                src="/education/imperial-hero.png"
                alt="Imperial College London campus"
                fill
                className="object-cover opacity-50"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-white/80 to-indigo-50/70" />
            </div>
            <div className="relative grid md:grid-cols-2 gap-8 items-center p-8">
              <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-md bg-white/70 border border-white/60">
                <Image
                  src="/education/imperial-hero.png"
                  alt="Imperial College London Business School"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative backdrop-blur-sm bg-white/85 rounded-xl p-6 border border-white/60 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">🎓</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Imperial College London</h3>
                    <p className="text-blue-600 font-medium">Business School</p>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">MSc Innovation, Entrepreneurship & Management</h4>
                <p className="text-gray-600 leading-relaxed">
                  My academic journey at Imperial has been instrumental in shaping my entrepreneurial spirit.
                  It bridged the gap between cutting-edge technology and real-world business strategy,
                  empowering me to lead innovation-driven ventures like PerBlock.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
              <p className="text-gray-600 mb-4">
                I&apos;m an entrepreneur passionate about solving real-world problems through technology. My mission is to build applications and services that improve transparency and trust—while fully preserving user privacy and identity.
              </p>
              <p className="text-gray-600 mb-6">
                  Leveraging Blockchain Technology and AI, I create solutions where users don&apos;t have to choose between privacy and functionality. My current focus is developing a fully privacy-preserving prediction market, making decentralized forecasting accessible to everyone around the world.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                  <h4 className="font-semibold text-gray-900">Core Focus</h4>
                  <p className="text-gray-600">Privacy, trust & transparent products that scale globally.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                  <h4 className="font-semibold text-gray-900">Technologies</h4>
                  <p className="text-gray-600">Blockchain, AI/ML, ZK proofs, privacy engineering.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                  <h4 className="font-semibold text-gray-900">Leadership</h4>
                  <p className="text-gray-600">Founder, product strategist, community-builder.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
                  <h4 className="font-semibold text-gray-900">Impact</h4>
                  <p className="text-gray-600">Applying responsible tech to real-world problems.</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-lg">🔒</div>
                  <p className="font-medium text-gray-800">Privacy-First Design</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-lg">⛓️</div>
                  <p className="font-medium text-gray-800">Blockchain-Powered Trust</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-lg">🤖</div>
                  <p className="font-medium text-gray-800">AI-Enhanced Solutions</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-lg">🌍</div>
                  <p className="font-medium text-gray-800">Global Accessibility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Highlighted Work</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            I design and ship products that balance cutting-edge tech with responsible experience design. Here are the ventures and experiments shaping my approach.
          </p>

          <div className="space-y-12">
            <div className="bg-white rounded-2xl shadow-lg border border-indigo-100 overflow-hidden ring-1 ring-indigo-50">
              <div className="grid lg:grid-cols-2 items-stretch">
                <div className="p-8 lg:p-10 order-2 lg:order-1 flex flex-col gap-4 justify-center h-full lg:min-h-[420px]">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">Privacy-Preserving Prediction Market</h3>
                      <p className="text-indigo-600 font-medium text-sm">Flagship • European patent confirmed</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Launching the first prediction market where forecasters never connect a wallet. Users can verify eligibility anonymously through zero-knowledge, creating a safer on-ramp for mainstream audiences.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">Wallet-free onboarding</span>
                    <span className="px-3 py-1 bg-purple-50 text-purple-700 text-sm font-medium rounded-full">Zero-knowledge proofing</span>
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-full">AI-driven signal</span>
                  </div>
                  <div className="mt-2 bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm text-slate-700">
                    Patent confirmed by the European Patent Office for privacy-preserving verification — the backbone of the platform&apos;s trust model.
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="#contact"
                      className="px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
                    >
                      Discuss the platform
                      <ArrowRight size={18} />
                    </a>
                    <a
                      href="https://perblock.io"
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
                    >
                      Explore PerBlock
                    </a>
                  </div>
                </div>
                <div className="relative min-h-[320px] lg:min-h-[420px] bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-800 order-1 lg:order-2">
                  <Image
                    src="/projects/perblock-blockchain.svg"
                    alt="PerBlock Blockchain Technology"
                    fill
                    className="object-cover mix-blend-screen opacity-90"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur rounded-xl border border-white/20 p-4 text-white">
                    <p className="text-sm font-semibold">Outcome</p>
                    <p className="text-sm text-slate-100">Designing governance, risk controls, and onboarding to feel premium yet approachable for first-time web3 users.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="grid lg:grid-cols-2 items-stretch">
                <div className="relative min-h-[320px] lg:min-h-[420px] bg-gray-100">
                  <Image
                    src="/projects/anybet-hero.png"
                    alt="AnyBet homepage preview"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center h-full gap-4 lg:min-h-[420px]">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <h3 className="text-2xl font-semibold text-gray-900">AnyBet</h3>
                    <a
                      href="https://anybet.ai"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-blue-600 hover:text-blue-700 underline-effect"
                    >
                      anybet.ai
                    </a>
                  </div>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    A free online sports betting experience designed for learning and entertainment — featuring live odds across
                    football, basketball, tennis and more. Users can explore markets, follow live events, and compete on
                    leaderboards without deposits.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">Live odds</span>
                    <span className="px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded-full">Virtual tokens</span>
                    <span className="px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full">Leaderboard</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Web app</span>
                  </div>
                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://anybet.ai"
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
                    >
                      Visit AnyBet
                      <ArrowRight size={18} />
                    </a>
                    <a
                      href="#contact"
                      className="px-5 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
                    >
                      Ask about the build
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="grid lg:grid-cols-2 items-stretch">
                <div className="relative min-h-[320px] lg:min-h-[420px] bg-gray-100 lg:order-2">
                  <Image
                    src="/projects/vetcast-hero.png"
                    alt="VetCast homepage preview"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 lg:p-10 lg:order-1 flex flex-col justify-center h-full gap-4 lg:min-h-[420px]">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <h3 className="text-2xl font-semibold text-gray-900">VetCast</h3>
                    <a
                      href="https://vetcast.ai"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-blue-600 hover:text-blue-700 underline-effect"
                    >
                      vetcast.ai
                    </a>
                  </div>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    An AI social assistant that helps you vet incoming business or friend requests by automatically filtering noise and
                    surfacing the most relevant connections. Built for clarity and speed, so you can focus on people that matter.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">AI assistant</span>
                    <span className="px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded-full">Request filtering</span>
                    <span className="px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full">Prioritization</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Web experience</span>
                  </div>
                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://vetcast.ai"
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
                    >
                      Visit VetCast
                      <ArrowRight size={18} />
                    </a>
                    <a
                      href="#contact"
                      className="px-5 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
                    >
                      Ask about the build
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="grid lg:grid-cols-2 items-stretch">
                <div className="relative min-h-[320px] lg:min-h-[420px] bg-gray-100">
                  <Image
                    src="/projects/tastypot-hero.png"
                    alt="TastyPot homepage preview"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center h-full gap-4 lg:min-h-[420px]">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <h3 className="text-2xl font-semibold text-gray-900">TastyPot</h3>
                    <a
                      href="https://tastypot.uk"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-blue-600 hover:text-blue-700 underline-effect"
                    >
                      tastypot.uk
                    </a>
                  </div>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    Cashback-driven dining that rewards social impact: guests pool rewards and unlock playful surprises together. Designed for modern hospitality and community-driven engagement.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">Cashback</span>
                    <span className="px-3 py-1 bg-purple-50 text-purple-700 text-sm rounded-full">Community pool</span>
                    <span className="px-3 py-1 bg-green-50 text-green-700 text-sm rounded-full">Impact</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Landing experience</span>
                  </div>
                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://tastypot.uk"
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
                    >
                      Visit TastyPot
                      <ArrowRight size={18} />
                    </a>
                    <a
                      href="#contact"
                      className="px-5 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
                    >
                      Work with me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            <div className="space-y-4 lg:self-center">
              <h2 className="text-3xl font-bold">Vision & Principles</h2>
              <p className="text-gray-600">
                Building tech that respects people. Every product I ship follows three principles: private-by-default experiences, responsible AI assistance, and thoughtful onboarding that feels premium without complexity.
              </p>
              <div className="space-y-3">
                {principles.map((principle) => (
                  <div key={principle.title} className="p-4 border border-gray-200 rounded-xl bg-gradient-to-r from-white to-slate-50 shadow-sm">
                    <p className="font-semibold text-gray-900">{principle.title}</p>
                    <p className="text-gray-600 text-sm">{principle.copy}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 rounded-3xl text-white p-8 shadow-xl h-full flex flex-col gap-6">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="h-8 w-8" />
                <div>
                  <p className="text-sm uppercase tracking-wide text-indigo-100">Patent-backed</p>
                  <h3 className="text-2xl font-bold">European Patent Office confirmed</h3>
                </div>
              </div>
              <p className="text-indigo-50">
                The prediction market experience is rooted in a verified European patent for privacy-preserving verification. It ensures participants can prove eligibility without exposing their identity or linking wallets until they choose.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 text-sm mt-auto">
                <div className="bg-white/10 border border-white/20 rounded-xl p-3 font-semibold">Wallet-free entry</div>
                <div className="bg-white/10 border border-white/20 rounded-xl p-3 font-semibold">Anonymous compliance</div>
                <div className="bg-white/10 border border-white/20 rounded-xl p-3 font-semibold">Audit-ready design</div>
                <div className="bg-white/10 border border-white/20 rounded-xl p-3 font-semibold">User-controlled identity</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-12">
            I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi,
            I&apos;ll get back to you as soon as possible!
          </p>
          <a 
            href="mailto:hello@mohammad.biz" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Say Hello
          </a>
          <div className="mt-12 flex justify-center space-x-6">
            <a href="mailto:hello@mohammad.biz" className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="Email">
              <Mail size={24} />
            </a>
            <a href="https://www.linkedin.com/in/mk3625/" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="https://instagram.com/mohammad.icl" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="Instagram">
              <Instagram size={24} />
            </a>
            <a href="https://x.com/perblock_io" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors" aria-label="X (Twitter)">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Mohammad Keshtkar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
