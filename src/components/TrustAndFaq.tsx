import React, { useState } from 'react';
import { FileClock, Layers, MapPin, Plus, ShieldCheck } from 'lucide-react';
import { FAQ, TRUST } from '../content';
import { Accent, Reveal, SectionHead, trackPointer } from './Brand';

const TRUST_ICONS = [MapPin, Layers, ShieldCheck, FileClock];

export const Trust: React.FC = () => (
  <section className="relative py-24 sm:py-32 overflow-hidden">
    <div className="absolute inset-x-0 top-1/3 h-96 bg-gradient-to-r from-emerald-400/10 via-indigo-400/10 to-rose-400/10 blur-3xl" aria-hidden="true" />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHead
        label="Privacy"
        title={<>Children’s data, <Accent>handled with care.</Accent></>}
        text="Built around India’s Digital Personal Data Protection Act from day one."
      />
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {TRUST.map((t, i) => {
          const Icon = TRUST_ICONS[i];
          return (
            <Reveal as="li" key={t.title} delay={i * 80}>
              <div onPointerMove={trackPointer} className="spotlight h-full rounded-3xl p-6">
                <span className="relative inline-flex">
                  <span className="absolute inset-0 rounded-full bg-emerald-300/40 blur-md" aria-hidden="true" />
                  <Icon className="relative w-7 h-7 text-emerald-600" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-bold text-lg text-ink">{t.title}</h3>
                <p className="mt-1.5 text-slate-600">{t.text}</p>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </div>
  </section>
);

export const Faq: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 sm:py-32 scroll-mt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionHead label="FAQ" title={<>Questions schools <Accent>ask us</Accent></>} />
        <Reveal className="divide-y divide-slate-200 border-y border-slate-200">
          {FAQ.map((f, index) => {
            const isOpen = open === index;
            return (
              <div key={f.q}>
                <h3>
                  <button
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${index}`}
                    className="w-full py-6 text-left flex items-center justify-between gap-4 text-lg font-semibold text-ink hover:text-fuchsia-700 transition-colors cursor-pointer"
                  >
                    {f.q}
                    <Plus className={`w-5 h-5 shrink-0 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-45 text-fuchsia-600' : ''}`} aria-hidden="true" />
                  </button>
                </h3>
                <div id={`faq-${index}`} className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <p className="overflow-hidden text-base text-slate-600 leading-relaxed" hidden={!isOpen}>
                    <span className="block pb-6">{f.a}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
};
