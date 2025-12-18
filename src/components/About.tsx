import { aboutContent } from '@/content/site';
import { Zap, Shield, Target, Palette } from 'lucide-react';

const howIWorkIcons = {
  'Fast prototyping': Zap,
  'Privacy-by-design': Shield,
  'Measurable outcomes': Target,
  'Clean UX': Palette,
};

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{aboutContent.heading}</h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Narrative */}
          <div className="space-y-4">
            {aboutContent.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-gray-600 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Credentials Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {aboutContent.credentials.map((cred) => (
              <div
                key={cred.title}
                className="bg-gray-50 rounded-xl p-5 border border-gray-100"
              >
                <p className="text-sm font-semibold text-indigo-600 mb-2">{cred.title}</p>
                <ul className="space-y-1">
                  {cred.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-700">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* How I Work */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">How I work</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {aboutContent.howIWork.map((item) => {
              const IconComponent = howIWorkIcons[item.title as keyof typeof howIWorkIcons] || Zap;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm"
                >
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white mb-3">
                    <IconComponent size={20} />
                  </div>
                  <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
