'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Rocket, FileText } from 'lucide-react';
import { projects } from '@/content/site';

export default function Projects() {
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

  const flagship = projects.find((p) => p.isFlagship);
  const otherProjects = projects.filter((p) => !p.isFlagship);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Projects & Ventures</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Active products and platforms I&apos;m building — from flagship privacy infrastructure to consumer apps.
        </p>

        <div className="space-y-8">
          {/* Flagship Project */}
          {flagship && (
            <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 rounded-2xl shadow-xl overflow-hidden border border-white/10">
              <div className="p-1">
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-1">
                  <div className="bg-slate-900/80 backdrop-blur rounded-lg p-8 lg:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold rounded-full flex items-center gap-1.5">
                        <Rocket size={12} />
                        FLAGSHIP
                      </div>
                      <span className="px-2 py-0.5 bg-amber-500/20 text-amber-400 text-xs font-medium rounded-full">
                        {flagship.statusLabel}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">{flagship.name}</h3>
                    <p className="text-slate-300 text-lg mb-6">{flagship.tagline}</p>

                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Problem</p>
                        <p className="text-sm text-slate-200">{flagship.problem}</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Approach</p>
                        <p className="text-sm text-slate-200">{flagship.approach}</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">What&apos;s next</p>
                        <p className="text-sm text-slate-200">{flagship.whatsNext}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {flagship.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => scrollToContact(flagship.ctaPrimary.subject)}
                        className="px-5 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
                      >
                        {flagship.ctaPrimary.label}
                        <ArrowRight size={18} />
                      </button>
                      <button
                        onClick={() => scrollToContact(flagship.ctaSecondary.subject)}
                        className="px-5 py-3 border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
                      >
                        {flagship.ctaSecondary.label}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other Projects */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Other ventures</h3>
            <div className="grid gap-6">
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
                >
                  <div className="grid lg:grid-cols-2">
                    <div className="relative min-h-[280px] lg:min-h-[320px] bg-slate-900 overflow-hidden group flex items-center justify-center">
                      <Image
                        src={project.screenshot}
                        alt={project.screenshotAlt || `${project.name} preview`}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        quality={90}
                      />
                    </div>
                    <div className="p-8 lg:p-10">
                      <div className="flex items-center justify-between gap-4 flex-wrap mb-2">
                        <div className="flex items-center gap-3">
                          <h4 className="text-2xl font-semibold text-gray-900">{project.name}</h4>
                          <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                            {project.statusLabel}
                          </span>
                        </div>
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1"
                          >
                            {new URL(project.url).hostname}
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>

                      <p className="text-gray-600 mb-4">{project.tagline}</p>

                      <div className="space-y-2 mb-4 text-sm">
                        <p><span className="font-medium text-gray-900">Problem:</span> <span className="text-gray-600">{project.problem}</span></p>
                        <p><span className="font-medium text-gray-900">Approach:</span> <span className="text-gray-600">{project.approach}</span></p>
                        <p><span className="font-medium text-gray-900">Status:</span> <span className="text-gray-600">{project.status} — {project.whatsNext}</span></p>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        {project.ctaPrimary.external ? (
                          <a
                            href={project.ctaPrimary.href}
                            target="_blank"
                            rel="noreferrer"
                            className="px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
                          >
                            {project.ctaPrimary.label}
                            <ExternalLink size={16} />
                          </a>
                        ) : (
                          <button
                            onClick={() => scrollToContact(project.ctaPrimary.subject)}
                            className="px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
                          >
                            {project.ctaPrimary.label}
                            <ArrowRight size={16} />
                          </button>
                        )}
                        <button
                          onClick={() => scrollToContact(project.ctaSecondary.subject)}
                          className="px-5 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                        >
                          {project.ctaSecondary.label}
                        </button>
                        <Link
                          href={`/projects/${project.id}`}
                          className="px-5 py-3 text-gray-600 hover:text-gray-900 font-medium inline-flex items-center justify-center gap-1 transition-colors"
                        >
                          <FileText size={16} />
                          Case study
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
