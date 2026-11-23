import React from 'react';
import { MARQUEE } from '../content';

/** An endless strip of what Schoolteck covers. The list is doubled so the loop is seamless. */
export const Marquee: React.FC = () => (
  <section aria-label="What Schoolteck covers" className="relative border-y border-white/10 bg-white/[0.02] py-5 overflow-hidden marquee">
    <ul className="marquee-track flex w-max gap-10 text-lg sm:text-xl font-semibold text-slate-500 whitespace-nowrap">
      {[...MARQUEE, ...MARQUEE].map((m, i) => (
        <li key={i} aria-hidden={i >= MARQUEE.length} className="flex items-center gap-10">
          {m}
          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-rose-500" aria-hidden="true" />
        </li>
      ))}
    </ul>
  </section>
);
