import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Mohammad Keshtkar
          </Link>
          <div className="flex space-x-6">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
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
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Mohammad Keshtkar
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Entrepreneur building privacy-preserving applications powered by Blockchain & AI — making transparency accessible while protecting user identity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  Get in touch
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#projects"
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  View my work
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-2 justify-center lg:justify-start">
                <span className="px-3 py-1 bg-white/70 border border-gray-200 text-gray-700 text-sm rounded-full">Blockchain</span>
                <span className="px-3 py-1 bg-white/70 border border-gray-200 text-gray-700 text-sm rounded-full">Privacy Tech</span>
                <span className="px-3 py-1 bg-white/70 border border-gray-200 text-gray-700 text-sm rounded-full">AI & ML</span>
                <span className="px-3 py-1 bg-white/70 border border-gray-200 text-gray-700 text-sm rounded-full">Prediction Markets</span>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[420px]">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600/30 to-purple-600/30 blur" />
                <div className="relative rounded-3xl bg-white/70 backdrop-blur border border-gray-200 shadow-xl overflow-hidden">
                  <div className="relative aspect-[4/5] bg-gradient-to-br from-blue-50 to-purple-50">
                    <Image
                      src="/mohammad-keshtkar.jpg"
                      alt="Portrait of Mohammad Keshtkar"
                      fill
                      className="object-cover object-[50%_15%]"
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 420px"
                      quality={75}
                      priority
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm text-gray-500">Currently</p>
                        <p className="font-semibold text-gray-900">Building privacy-first prediction markets</p>
                      </div>
                      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600" />
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
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>

          {/* Education Spotlight */}
          <div className="mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/education/imperial-hero.png"
                  alt="Imperial College London Business School"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
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
                I'm an entrepreneur passionate about solving real-world problems through technology. My mission is to build applications and services that improve transparency and trust—while fully preserving user privacy and identity.
              </p>
              <p className="text-gray-600 mb-6">
                Leveraging Blockchain Technology and AI, I create solutions where users don't have to choose between privacy and functionality. My current focus is developing a fully privacy-preserving prediction market, making decentralized forecasting accessible to everyone around the world.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-900">Core Focus</h4>
                  <p className="text-gray-600">Privacy, Trust & Transparency</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Technologies</h4>
                  <p className="text-gray-600">Blockchain, AI/ML, ZK Proofs</p>
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
          <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
          <div className="space-y-12">

            {/* PerBlock Venture */}
            <div className="bg-white rounded-2xl shadow-lg border border-indigo-100 overflow-hidden ring-1 ring-indigo-50">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-10 order-2 lg:order-1">
                  <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">PerBlock</h3>
                      <p className="text-indigo-600 font-medium text-sm">Founder & Lead</p>
                    </div>
                    <a href="https://perblock.io" target="_blank" rel="noreferrer" className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-semibold hover:bg-indigo-100 transition-colors">
                      perblock.io
                    </a>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    Building the future of decentralized decision-making through blockchain and data science. We empower users in entertainment and healthcare with transparent, secure solutions.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">Blockchain</span>
                    <span className="px-3 py-1 bg-purple-50 text-purple-700 text-sm font-medium rounded-full">Data Science</span>
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-full">Healthcare</span>
                  </div>

                  <a href="https://perblock.io" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
                    Learn more <ArrowRight size={18} />
                  </a>
                </div>
                <div className="relative min-h-[250px] lg:min-h-[300px] bg-slate-900 order-1 lg:order-2">
                  <Image
                    src="/projects/perblock-blockchain.svg"
                    alt="PerBlock Blockchain Technology"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="relative min-h-[280px] lg:min-h-[420px] bg-gray-100">
                  <Image
                    src="/projects/anybet-hero.png"
                    alt="AnyBet homepage preview"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="p-8 lg:p-10">
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
              <div className="grid lg:grid-cols-2">
                <div className="relative min-h-[280px] lg:min-h-[420px] bg-gray-100 lg:order-2">
                  <Image
                    src="/projects/vetcast-hero.png"
                    alt="VetCast homepage preview"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 lg:p-10 lg:order-1">
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
              <div className="grid lg:grid-cols-2">
                <div className="relative min-h-[280px] lg:min-h-[420px] bg-gray-100">
                  <Image
                    src="/projects/tastypot-hero.png"
                    alt="TastyPot homepage preview"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8 lg:p-10">
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
                    A cashback-driven dining concept: earn rewards when you eat & drink, pool it with others, and get a chance to win —
                    while contributing to social impact. Built to be simple, modern, and shareable.
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-12">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
            I'll get back to you as soon as possible!
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
