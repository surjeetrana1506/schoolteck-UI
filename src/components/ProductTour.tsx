import React, { useState } from 'react';
import { Monitor, Smartphone, GraduationCap } from 'lucide-react';
import { TOUR, type TourGroup } from '../content';
import { BrowserFrame, PhoneFrame, SectionLabel } from './Brand';

const ICONS: Record<TourGroup['id'], React.ElementType> = { office: Monitor, parent: Smartphone, teacher: GraduationCap };

export const ProductTour: React.FC = () => {
  const [groupId, setGroupId] = useState<TourGroup['id']>('office');
  const group = TOUR.find((g) => g.id === groupId)!;
  const [itemIds, setItemIds] = useState<Record<string, string>>({});
  const item = group.items.find((i) => i.id === itemIds[group.id]) ?? group.items[0];

  return (
    <section id="tour" className="py-20 bg-slate-100 border-b border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <SectionLabel>The real product</SectionLabel>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">See exactly what your school gets.</h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            These are real screens from Schoolteck, with a sample school’s data — not mock-ups.
          </p>
        </div>

        <div role="tablist" aria-label="Part of Schoolteck" className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-white rounded-xl border border-slate-200 shadow-xs">
            {TOUR.map((g) => {
              const Icon = ICONS[g.id];
              const active = g.id === groupId;
              return (
                <button
                  key={g.id}
                  role="tab"
                  id={`tab-${g.id}`}
                  aria-selected={active}
                  aria-controls="tour-panel"
                  onClick={() => setGroupId(g.id)}
                  className={`flex items-center gap-2 px-3 sm:px-5 py-2.5 rounded-lg text-sm font-bold transition-all cursor-pointer ${
                    active ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Icon className="w-4 h-4 hidden sm:block" aria-hidden="true" />
                  {g.id === 'office' ? (
                    <span>
                      <span className="hidden sm:inline">School </span>
                      <span className="sm:hidden">Office</span>
                      <span className="hidden sm:inline">office</span>
                    </span>
                  ) : (
                    g.label
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div id="tour-panel" role="tabpanel" aria-labelledby={`tab-${group.id}`}>
          <p className="text-center text-slate-600 mb-6">{group.intro}</p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            <ul className="lg:col-span-4 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible -mx-4 px-4 lg:mx-0 lg:px-0 pb-2 lg:pb-0 snap-x">
              {group.items.map((i) => {
                const active = i.id === item.id;
                return (
                  <li key={i.id} className="shrink-0 snap-start">
                    <button
                      onClick={() => setItemIds({ ...itemIds, [group.id]: i.id })}
                      aria-pressed={active}
                      className={`text-left rounded-xl border px-4 py-3 transition-all cursor-pointer w-56 lg:w-full ${
                        active ? 'bg-white border-indigo-400 shadow-sm' : 'bg-white/60 border-transparent hover:bg-white hover:border-slate-200'
                      }`}
                    >
                      <span className={`block text-sm font-bold ${active ? 'text-indigo-700' : 'text-slate-900'}`}>{i.title}</span>
                      <span className={`block text-sm text-slate-600 mt-0.5 ${active ? '' : 'lg:hidden'}`}>{i.text}</span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="lg:col-span-8 lg:sticky lg:top-24">
              {group.device === 'browser' ? (
                <BrowserFrame key={item.id} shot={item.shot} />
              ) : (
                <div className="flex justify-center">
                  <PhoneFrame key={item.id} shot={item.shot} className="w-64 sm:w-72" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
