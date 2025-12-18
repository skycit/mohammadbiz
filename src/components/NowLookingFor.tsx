'use client';

import { TrendingUp, Handshake, Lightbulb, Users } from 'lucide-react';
import { nowLookingFor } from '@/content/site';

const iconMap = {
  TrendingUp,
  Handshake,
  Lightbulb,
  Users,
};

export default function NowLookingFor() {
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
    <section id="now" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">What I&apos;m looking for right now</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Building something meaningful takes the right people. Here&apos;s how you might fit.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {nowLookingFor.map((item) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div
                key={item.title}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all group"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white mb-4 group-hover:scale-105 transition-transform">
                  <IconComponent size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                <button
                  onClick={() => scrollToContact(item.cta.subject)}
                  className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  {item.cta.label} →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
