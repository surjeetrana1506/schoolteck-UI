import React from 'react';
import {
  ArrowRight, Bus, BookOpenCheck, CalendarDays, CalendarX2, Clock, GraduationCap, History, Megaphone,
  MessagesSquare, ReceiptIndianRupee, Smartphone, UserPlus, Users,
} from 'lucide-react';
import { CORE, MODULES } from '../content';
import { Accent, PrimaryButton, Reveal, SectionHead, trackPointer } from './Brand';

// One per CORE entry, in order: [icon, grid placement, icon colour].
const CORE_LOOK: [React.ElementType, string, string][] = [
  [Users, '', 'from-sky-500 to-indigo-500'],
  [GraduationCap, '', 'from-amber-400 to-orange-500'],
  [ReceiptIndianRupee, 'lg:col-span-2 lg:row-span-2', 'from-emerald-400 to-teal-600'],
  [Megaphone, 'lg:col-span-2', 'from-rose-500 to-pink-600'],
  [Smartphone, 'lg:col-span-2', 'from-violet-500 to-indigo-600'],
  [History, 'lg:col-span-2', 'from-slate-400 to-slate-600'],
];
const MODULE_ICONS = [Bus, BookOpenCheck, Clock, CalendarDays, CalendarX2, MessagesSquare, UserPlus];
const PAYMENT_METHODS = ['Cash', 'UPI', 'Cheque', 'Bank transfer', 'Card'];

export const Modules: React.FC<{ onOpenBookDemo: () => void }> = ({ onOpenBookDemo }) => (
  <section id="modules" className="relative py-24 sm:py-32 scroll-mt-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHead
        label="What’s included"
        title={<>Start with the core. <Accent>Add the rest</Accent> when you’re ready.</>}
        text="Every school gets the essentials. Extra modules are switched on for your school whenever you want them."
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:auto-rows-[minmax(11rem,auto)]">
        {CORE.map((c, i) => {
          const [Icon, span, tint] = CORE_LOOK[i];
          const big = i === 2;
          return (
            <Reveal as="li" key={c.title} delay={i * 60} className={span}>
              <div onPointerMove={trackPointer} className="spotlight h-full rounded-3xl p-6 sm:p-7 flex flex-col overflow-hidden">
                <span className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${tint} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-5 h-5 text-white" aria-hidden="true" />
                </span>
                <h3 className={`mt-5 font-bold text-white ${big ? 'text-2xl sm:text-3xl' : 'text-lg'}`}>{c.title}</h3>
                <p className={`mt-2 text-slate-400 ${big ? 'text-base sm:text-lg max-w-md' : 'text-sm'}`}>{c.text}</p>
                {big && (
                  <div className="mt-auto pt-8">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Recorded at the counter</div>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {PAYMENT_METHODS.map((m) => (
                        <li key={m} className="px-3 py-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-300 text-sm font-semibold">
                          {m}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 font-mono text-4xl sm:text-5xl font-bold tracking-tight text-white/90">
                      R/2026-27/<span className="text-brand">000001</span>
                    </div>
                    <div className="mt-1 text-sm text-slate-500">Gapless receipt numbers, per school and financial year</div>
                  </div>
                )}
              </div>
            </Reveal>
          );
        })}
      </ul>

      <Reveal className="mt-4">
        <div onPointerMove={trackPointer} className="spotlight rounded-3xl p-6 sm:p-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-rose-400">Optional modules</div>
              <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-white">Switch on what your school needs</h3>
            </div>
            <p className="text-slate-400 max-w-md">Turned on for your school by us, any time. Switch one off and its data is kept, just hidden.</p>
          </div>

          <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-1">
            {MODULES.map((m, i) => {
              const Icon = MODULE_ICONS[i];
              return (
                <li key={m.title} className="flex items-start gap-4 py-4 border-b border-white/5">
                  <Icon className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="flex-1">
                    <div className="font-semibold text-white">{m.title}</div>
                    <div className="text-sm text-slate-400">{m.text}</div>
                  </div>
                  {/* A switch that flips on, one after another, when the card scrolls in. */}
                  <span
                    aria-hidden="true"
                    className="relative shrink-0 w-10 h-6 rounded-full bg-white/10 [.is-in_&]:bg-gradient-to-r [.is-in_&]:from-fuchsia-600 [.is-in_&]:to-indigo-600 transition-colors duration-500"
                    style={{ transitionDelay: `${400 + i * 180}ms` }}
                  >
                    <span
                      className="absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow transition-transform duration-500 [.is-in_&]:translate-x-4"
                      style={{ transitionDelay: `${400 + i * 180}ms` }}
                    />
                  </span>
                </li>
              );
            })}
          </ul>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <PrimaryButton onClick={onOpenBookDemo}>
              Get a quote for your school
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </PrimaryButton>
            <p className="text-sm text-slate-500">Pricing depends on your school’s size and the modules you choose.</p>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
