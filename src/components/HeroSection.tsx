import React from 'react';
import { ArrowRight, MapPin, PlayCircle, ShieldCheck, Smartphone } from 'lucide-react';
import { HERO } from '../content';
import { BrowserFrame, PhoneFrame } from './Brand';

const { dashboard, parentHome } = HERO;

export const HeroSection: React.FC<{ onOpenBookDemo: () => void }> = ({ onOpenBookDemo }) => (
  <section id="top" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-slate-100/60 border-b border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold shadow-xs">
          <span>Office console</span>
          <span className="text-slate-300">·</span>
          <span>Parent app</span>
          <span className="text-slate-300">·</span>
          <span>Teacher app</span>
        </div>

        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
          School management, <br className="hidden sm:inline" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600">made simple.</span>
        </h1>

        <p className="mt-5 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
          One system for your school office, teachers and parents — students, fees and receipts, notices, attendance,
          transport and admissions. Built for Indian schools.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            onClick={onOpenBookDemo}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-base shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            Book a free demo
            <ArrowRight className="w-4 h-4 text-rose-400" aria-hidden="true" />
          </button>
          <a
            href="#tour"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-base shadow-xs transition-all flex items-center justify-center gap-2"
          >
            <PlayCircle className="w-4 h-4 text-indigo-600" aria-hidden="true" />
            Watch it in action
          </a>
        </div>

        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-600">
          <li className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-rose-500" aria-hidden="true" />Data stored in India</li>
          <li className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-600" aria-hidden="true" />Parent consent built in</li>
          <li className="flex items-center gap-1.5"><Smartphone className="w-4 h-4 text-indigo-600" aria-hidden="true" />Sign in with mobile number</li>
        </ul>
      </div>

      <div className="mt-12 sm:hidden flex justify-center">
        <PhoneFrame shot={parentHome} eager className="w-60" />
      </div>
      <div className="hidden sm:block mt-14 relative max-w-5xl mx-auto">
        <BrowserFrame shot={dashboard} eager />
        <PhoneFrame
          shot={parentHome}
          eager
          className="hidden sm:block absolute -bottom-10 -right-4 lg:-right-14 w-40 lg:w-52"
        />
      </div>
    </div>
  </section>
);
