import React from 'react';
import { ArrowRight, Check, Plus } from 'lucide-react';
import { CORE, MODULES } from '../content';
import { SectionLabel } from './Brand';

export const Modules: React.FC<{ onOpenBookDemo: () => void }> = ({ onOpenBookDemo }) => (
  <section id="modules" className="py-20 bg-white border-b border-slate-200 scroll-mt-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <SectionLabel>What’s included</SectionLabel>
        <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Start with the core. Add only what you need.</h2>
        <p className="mt-3 text-base sm:text-lg text-slate-600">
          Every school gets the essentials. Switch on extra modules for your school whenever you’re ready.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-3xl border-2 border-indigo-500 p-6 sm:p-8 bg-white shadow-sm">
          <div className="text-xs font-bold uppercase tracking-wider text-indigo-600">Every school</div>
          <h3 className="mt-1 text-2xl font-bold text-slate-900">The core</h3>
          <ul className="mt-6 space-y-4">
            {CORE.map((c) => (
              <li key={c.title} className="flex gap-3">
                <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="font-semibold text-slate-900">{c.title}</div>
                  <div className="text-sm text-slate-600">{c.text}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-slate-200 p-6 sm:p-8 bg-slate-50">
          <div className="text-xs font-bold uppercase tracking-wider text-rose-600">Optional</div>
          <h3 className="mt-1 text-2xl font-bold text-slate-900">Modules</h3>
          <ul className="mt-6 space-y-4">
            {MODULES.map((m) => (
              <li key={m.title} className="flex gap-3">
                <Plus className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="font-semibold text-slate-900">{m.title}</div>
                  <div className="text-sm text-slate-600">{m.text}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center">
        <button
          onClick={onOpenBookDemo}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-base shadow-sm transition-all cursor-pointer"
        >
          Get a quote for your school
          <ArrowRight className="w-4 h-4 text-rose-400" aria-hidden="true" />
        </button>
        <p className="mt-2 text-sm text-slate-500">Pricing depends on your school’s size and the modules you choose.</p>
      </div>
    </div>
  </section>
);
