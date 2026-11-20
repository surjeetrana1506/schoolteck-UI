import React from 'react';
import { ArrowRight, CheckCircle, Smartphone, UploadCloud } from 'lucide-react';
import { STEPS } from '../content';
import { SectionLabel } from './Brand';

const STYLES = [
  { icon: UploadCloud, style: 'bg-rose-50 border-rose-200 text-rose-600' },
  { icon: CheckCircle, style: 'bg-amber-50 border-amber-200 text-amber-600' },
  { icon: Smartphone, style: 'bg-indigo-50 border-indigo-200 text-indigo-600' },
];

export const HowItWorks: React.FC<{ onOpenBookDemo: () => void }> = ({ onOpenBookDemo }) => (
  <section id="how-it-works" className="py-20 bg-slate-50 border-b border-slate-200 scroll-mt-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <SectionLabel>Getting started</SectionLabel>
        <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">We set it up with you.</h2>
        <p className="mt-3 text-base sm:text-lg text-slate-600">No servers to install and nothing technical for your staff to do.</p>
      </div>

      <ol className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {STEPS.map((s, idx) => {
          const { icon: Icon, style } = STYLES[idx];
          return (
            <li key={s.title} className="bg-white p-7 rounded-3xl border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between mb-5">
                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${style}`}>
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <span className="text-2xl font-black text-slate-300 font-mono" aria-hidden="true">0{idx + 1}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-base text-slate-600 leading-relaxed">{s.text}</p>
            </li>
          );
        })}
      </ol>

      <div className="mt-12 text-center">
        <button
          onClick={onOpenBookDemo}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-base shadow-sm transition-all cursor-pointer"
        >
          Book a free demo
          <ArrowRight className="w-4 h-4 text-rose-400" aria-hidden="true" />
        </button>
      </div>
    </div>
  </section>
);
