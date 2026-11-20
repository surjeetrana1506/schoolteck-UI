import React, { useState } from 'react';
import { ChevronDown, FileClock, Layers, MapPin, ShieldCheck } from 'lucide-react';
import { FAQ, TRUST } from '../content';
import { SectionLabel } from './Brand';

const TRUST_ICONS = [MapPin, Layers, ShieldCheck, FileClock];

export const Trust: React.FC = () => (
  <section className="py-20 bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Children’s data, handled with care.</h2>
        <p className="mt-3 text-base sm:text-lg text-slate-300">Built around India’s Digital Personal Data Protection Act from day one.</p>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TRUST.map((t, i) => {
          const Icon = TRUST_ICONS[i];
          return (
            <li key={t.title} className="rounded-2xl bg-slate-800/60 border border-slate-700 p-6">
              <Icon className="w-6 h-6 text-rose-400" aria-hidden="true" />
              <h3 className="mt-4 font-bold text-lg">{t.title}</h3>
              <p className="mt-1 text-slate-300 text-base">{t.text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);

export const Faq: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20 bg-white border-b border-slate-200 scroll-mt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Questions schools ask us</h2>
        </div>
        <div className="space-y-3">
          {FAQ.map((f, index) => {
            const isOpen = open === index;
            return (
              <div key={f.q} className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs">
                <h3>
                  <button
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${index}`}
                    className="w-full p-5 text-left flex items-center justify-between gap-3 text-base font-semibold text-slate-900 hover:text-indigo-600 transition-colors cursor-pointer"
                  >
                    {f.q}
                    <ChevronDown className={`w-5 h-5 shrink-0 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-indigo-600' : ''}`} aria-hidden="true" />
                  </button>
                </h3>
                {isOpen && (
                  <p id={`faq-${index}`} className="px-5 pb-5 pt-1 text-base text-slate-600 leading-relaxed">
                    {f.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
