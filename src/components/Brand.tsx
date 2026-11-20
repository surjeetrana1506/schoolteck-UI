import React from 'react';
import { GraduationCap } from 'lucide-react';
import type { Shot } from '../content';

export const Logo: React.FC<{ tagline?: boolean }> = ({ tagline = true }) => (
  <a href="#top" className="flex items-center gap-2.5" aria-label="Schoolteck home">
    <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-indigo-600 flex items-center justify-center text-white shadow-sm">
      <GraduationCap className="w-5 h-5" aria-hidden="true" />
    </span>
    <span>
      <span className="text-lg font-black tracking-tight text-slate-900">
        School<span className="bg-gradient-to-r from-rose-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent">teck</span>
      </span>
      {tagline && <span className="text-[10px] text-slate-500 block -mt-1 font-medium">School management for Indian schools</span>}
    </span>
  </a>
);

/** A console screenshot in a simple browser window. */
export const BrowserFrame: React.FC<{ shot: Shot; eager?: boolean }> = ({ shot, eager }) => (
  <figure className="rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl">
    <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-100 border-b border-slate-200" aria-hidden="true">
      <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
      <span className="ml-3 flex-1 max-w-xs h-5 rounded-md bg-white border border-slate-200 text-[10px] text-slate-400 flex items-center px-2">
        Schoolteck · School office
      </span>
    </div>
    <a href={shot.src} target="_blank" rel="noopener" title="Open full size" className="block">
      <img
        src={shot.src}
        alt={shot.alt}
        width={1600}
        height={800}
        loading={eager ? 'eager' : 'lazy'}
        className="w-full h-auto block"
      />
    </a>
  </figure>
);

/** An app screenshot in a phone outline. */
export const PhoneFrame: React.FC<{ shot: Shot; eager?: boolean; className?: string }> = ({ shot, eager, className = '' }) => (
  <figure className={`rounded-[2rem] border-[6px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden ${className}`}>
    <img
      src={shot.src}
      alt={shot.alt}
      width={508}
      height={1110}
      loading={eager ? 'eager' : 'lazy'}
      className="w-full h-auto block rounded-[1.6rem]"
    />
  </figure>
);

export const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs">
    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
    <span>{children}</span>
  </div>
);
