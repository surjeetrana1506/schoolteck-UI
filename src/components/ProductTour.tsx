import React, { useEffect, useRef, useState } from 'react';
import { Monitor, Smartphone, GraduationCap, Pause, Play } from 'lucide-react';
import { TOUR, type TourGroup, type TourItem } from '../content';
import { SectionLabel } from './Brand';

const ICONS: Record<TourGroup['id'], React.ElementType> = { office: Monitor, parent: Smartphone, teacher: GraduationCap };

const reducedMotion = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const chapterAt = (group: TourGroup, t: number): TourItem | undefined =>
  group.items.find((i) => t >= i.at[0] && t < i.at[1]);

export const ProductTour: React.FC = () => {
  const [groupId, setGroupId] = useState<TourGroup['id']>('office');
  const group = TOUR.find((g) => g.id === groupId)!;
  const [item, setItem] = useState<TourItem>(group.items[0]);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const visible = useRef(false);
  const pausedByUser = useRef(reducedMotion());

  const tryPlay = () => {
    const v = videoRef.current;
    if (v && visible.current && !pausedByUser.current) v.play().catch(() => setPlaying(false));
  };

  // Play only while the tour is on screen, so the clip isn't downloaded or run for nothing.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([e]) => {
        visible.current = e.isIntersecting;
        if (e.isIntersecting) tryPlay();
        else v.pause();
      },
      { threshold: 0.35 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, [groupId]);

  const selectGroup = (id: TourGroup['id']) => {
    const g = TOUR.find((x) => x.id === id)!;
    setGroupId(id);
    setItem(g.items[0]);
    setProgress(0);
  };

  const selectItem = (i: TourItem) => {
    const v = videoRef.current;
    setItem(i);
    if (!v) return;
    v.currentTime = i.at[0] + 0.05;
    pausedByUser.current = false;
    visible.current = true;
    tryPlay();
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      pausedByUser.current = false;
      visible.current = true;
      tryPlay();
    } else {
      pausedByUser.current = true;
      v.pause();
    }
  };

  const onTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const v = e.currentTarget;
    const current = chapterAt(group, v.currentTime);
    if (current && current.id !== item.id) setItem(current);
    if (v.duration) setProgress(v.currentTime / v.duration);
  };

  return (
    <section id="tour" className="py-20 bg-slate-100 border-b border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <SectionLabel>The real product</SectionLabel>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">See exactly what your school gets.</h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Recorded in Schoolteck itself, with a sample school’s data — not mock-ups.
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
                  onClick={() => selectGroup(g.id)}
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
          <ul aria-label="Jump to" className="flex sm:flex-wrap sm:justify-center gap-2 overflow-x-auto sm:overflow-visible -mx-4 px-4 sm:mx-0 sm:px-0 pb-2 sm:pb-0 snap-x max-w-5xl sm:mx-auto">
            {group.items.map((i) => {
              const active = i.id === item.id;
              return (
                <li key={i.id} className="shrink-0 snap-start">
                  <button
                    onClick={() => selectItem(i)}
                    aria-current={active ? 'step' : undefined}
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

          <p className="mt-5 mb-6 text-center text-slate-700 max-w-2xl mx-auto min-h-[3rem]">
            <span className="font-bold text-slate-900">{item.title}: </span>
            {item.text}
          </p>

          <figure className="max-w-5xl mx-auto rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-xl">
            {group.id === 'office' && (
              <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-100 border-b border-slate-200" aria-hidden="true">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="ml-3 flex-1 max-w-xs h-5 rounded-md bg-white border border-slate-200 text-[10px] text-slate-400 flex items-center px-2">
                  Schoolteck · School office
                </span>
              </div>
            )}
            <div className="relative">
              <video
                key={group.id}
                ref={videoRef}
                src={group.video}
                poster={group.poster}
                aria-label={group.alt}
                muted
                loop
                playsInline
                preload="none"
                width={1280}
                height={800}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onTimeUpdate={onTimeUpdate}
                onClick={togglePlay}
                className="w-full h-auto block cursor-pointer"
              />
              <button
                onClick={togglePlay}
                aria-label={playing ? 'Pause the video' : 'Play the video'}
                className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center shadow-md cursor-pointer"
              >
                {playing ? <Pause className="w-4 h-4" aria-hidden="true" /> : <Play className="w-4 h-4 ml-0.5" aria-hidden="true" />}
              </button>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20" aria-hidden="true">
                <div className="h-full bg-indigo-500" style={{ width: `${progress * 100}%` }} />
              </div>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};
