import Link from 'next/link';
import { ShieldCheck, ArrowRight, CheckCircle, Globe, Lock } from 'lucide-react';
import { patentContent } from '@/content/site';

export default function PatentMoat() {
  return (
    <section id="patent" className="py-20 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <ShieldCheck size={24} />
          </div>
          <h2 className="text-3xl font-bold">{patentContent.heading}</h2>
        </div>

        <p className="text-lg text-slate-300 max-w-3xl mb-12">
          {patentContent.description}
        </p>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* What it enables */}
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle size={20} className="text-green-400" />
              <h3 className="font-semibold text-lg">What it enables</h3>
            </div>
            <ul className="space-y-3">
              {patentContent.whatItEnables.map((item, i) => (
                <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Where it applies */}
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-2 mb-4">
              <Globe size={20} className="text-blue-400" />
              <h3 className="font-semibold text-lg">Where it applies</h3>
            </div>
            <ul className="space-y-3">
              {patentContent.whereItApplies.map((item, i) => (
                <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Why it's hard */}
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
            <div className="flex items-center gap-2 mb-4">
              <Lock size={20} className="text-purple-400" />
              <h3 className="font-semibold text-lg">Why it&apos;s hard</h3>
            </div>
            <ul className="space-y-3">
              {patentContent.whyItsHard.map((item, i) => (
                <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Link
            href={patentContent.cta.href}
            className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          >
            {patentContent.cta.label}
            <ArrowRight size={18} />
          </Link>
          <p className="text-sm text-slate-400 italic">
            {patentContent.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
