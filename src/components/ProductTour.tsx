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
          <ul className="flex sm:flex-wrap sm:justify-center gap-2 overflow-x-auto sm:overflow-visible -mx-4 px-4 sm:mx-0 sm:px-0 pb-2 sm:pb-0 snap-x max-w-5xl sm:mx-auto">
            {group.items.map((i) => {
              const active = i.id === item.id;
              return (
                <li key={i.id} className="shrink-0 snap-start">
                  <button
                    onClick={() => setItemIds({ ...itemIds, [group.id]: i.id })}
                    aria-pressed={active}
                    className={`whitespace-nowrap rounded-full border px-3.5 py-1.5 text-sm font-semibold transition-all cursor-pointer ${
                      active
                        ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-indigo-300 hover:text-indigo-700'
                    }`}
                  >
                    {i.title}
                  </button>
                </li>
              );
            })}
          </ul>

          <p className="mt-5 mb-6 text-center text-slate-700 max-w-2xl mx-auto min-h-[3rem]" aria-live="polite">
            <span className="font-bold text-slate-900">{item.title}: </span>
            {item.text}
          </p>

          {group.device === 'browser' ? (
            <div className="max-w-5xl mx-auto">
              <BrowserFrame key={item.id} shot={item.shot} />
            </div>
          ) : (
            <div className="flex justify-center">
              <PhoneFrame key={item.id} shot={item.shot} className="w-64 sm:w-72" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
