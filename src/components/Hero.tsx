'use client';

import Image from 'next/image';
import { ArrowRight, Mail } from 'lucide-react';
import { heroContent, trustPills, openToChips } from '@/content/site';

export default function Hero() {
  const scrollToContact = (subject?: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      if (subject) {
        const subjectInput = document.getElementById('contact-subject') as HTMLInputElement;
        if (subjectInput) subjectInput.value = subject;
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center px-6 pt-24 pb-16 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute top-24 -right-24 h-72 w-72 rounded-full bg-purple-200/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-200/30 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {heroContent.headline}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0">
              {heroContent.subheadline}
            </p>

            {/* Trust Bar */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {trustPills.map((pill) => (
                <div
                  key={pill.label}
                  className="group relative inline-flex items-center gap-1.5 bg-white/90 border border-gray-200 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium shadow-sm hover:border-indigo-300 transition-colors cursor-default"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                  {pill.label}
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {pill.detail}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button
                onClick={() => scrollToContact(heroContent.cta.primary.subject)}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-purple-200/60"
              >
                {heroContent.cta.primary.label}
                <ArrowRight size={18} />
              </button>
              <a
                href={heroContent.cta.secondary.href}
                className="px-6 py-3 border border-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-center"
              >
                {heroContent.cta.secondary.label}
              </a>
              <a
                href={heroContent.cta.tertiary.href}
                className="px-4 py-3 text-gray-600 hover:text-gray-900 font-medium transition-colors inline-flex items-center justify-center gap-1.5"
              >
                <Mail size={16} />
                {heroContent.cta.tertiary.label}
              </a>
            </div>

            {/* Open to */}
            <div className="pt-2">
              <p className="text-sm text-gray-500 mb-2">Open to:</p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {openToChips.map((chip) => (
                  <span
                    key={chip}
                    className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm rounded-full font-medium"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px]">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-blue-500/40 via-purple-500/30 to-indigo-600/40 blur-xl" />
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-sm" />
              <div className="relative rounded-3xl bg-black/90 backdrop-blur border border-white/10 shadow-2xl shadow-purple-900/20 overflow-hidden">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/mohammad-keshtkar-new.jpg"
                    alt="Portrait of Mohammad Keshtkar"
                    fill
                    className="object-cover object-[50%_20%]"
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 400px"
                    quality={85}
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
