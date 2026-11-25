import React, { useEffect, useRef } from 'react';
import { ArrowRight, MapPin, PlayCircle, ShieldCheck, Smartphone } from 'lucide-react';
import { HERO_MEDIA } from '../content';
import { Accent, PrimaryButton } from './Brand';

/** Muted, looping clip that plays only while on screen. */
const LiveClip: React.FC<{ src: string; poster: string; label: string; className?: string }> = ({ src, poster, label, className = '' }) => {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const io = new IntersectionObserver(([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()), { threshold: 0.2 });
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return <video ref={ref} src={src} poster={poster} aria-label={label} muted loop playsInline preload="metadata" className={className} />;
};

export const HeroSection: React.FC<{ onOpenBookDemo: () => void }> = ({ onOpenBookDemo }) => {
  // The product shot starts tilted back and lies flat as the page scrolls.
  const stage = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = stage.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const p = Math.min(1, window.scrollY / 500);
        el.style.transform = `perspective(1600px) rotateX(${14 * (1 - p)}deg) scale(${0.94 + 0.06 * p})`;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="top" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      <div className="aurora" aria-hidden="true" />
      <div className="grid-lines" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          <a
            href="#tour"
            className="inline-flex items-center gap-2 pl-1.5 pr-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-xs sm:text-sm font-medium shadow-sm hover:bg-slate-50 transition-colors"
          >
            <span className="px-2 py-0.5 rounded-full bg-gradient-to-r from-rose-500 to-indigo-600 text-white text-[11px] font-bold">New</span>
            Teacher–parent messages and admissions
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>

          <h1 className="mt-6 text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-extrabold text-ink tracking-[-0.04em]">
            School management,
            <br />
            <Accent>made simple.</Accent>
          </h1>

          <p className="mt-5 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            One system for your school office, teachers and parents — students, fees and receipts, notices, attendance,
            transport and admissions. Built for Indian schools.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <PrimaryButton onClick={onOpenBookDemo} className="w-full sm:w-auto">
              Book a free demo
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </PrimaryButton>
            <a
              href="#tour"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-ink border border-slate-300 font-semibold text-base shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <PlayCircle className="w-4 h-4" aria-hidden="true" />
              Watch it in action
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-600">
            <li className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-rose-500" aria-hidden="true" />Data stored in India</li>
            <li className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-600" aria-hidden="true" />Parent consent built in</li>
            <li className="flex items-center gap-1.5"><Smartphone className="w-4 h-4 text-indigo-500" aria-hidden="true" />Sign in with mobile number</li>
          </ul>
        </div>

        <div className="relative mt-12 sm:mt-14 max-w-5xl mx-auto">
          <div className="absolute -inset-x-10 -inset-y-6 bg-gradient-to-r from-indigo-500/20 via-fuchsia-500/15 to-rose-400/20 blur-3xl rounded-[3rem]" aria-hidden="true" />
          <div ref={stage} className="relative origin-bottom will-change-transform">
            <figure className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-2xl shadow-slate-900/20">
              <div className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-50 border-b border-slate-200" aria-hidden="true">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <span className="mx-auto px-3 h-5 rounded-md bg-white border border-slate-200 text-[10px] text-slate-500 flex items-center">Schoolteck · School office</span>
              </div>
              <LiveClip
                src={HERO_MEDIA.office.video}
                poster={HERO_MEDIA.office.poster}
                label="The Schoolteck office console in use"
                className="w-full h-auto block aspect-[16/10] object-cover"
              />
            </figure>

            <div className="hidden sm:block absolute -right-4 lg:-right-16 -bottom-12 w-36 lg:w-48 float">
              <div className="rounded-[2rem] p-[5px] bg-gradient-to-b from-slate-600 to-slate-900 shadow-2xl shadow-slate-900/30">
                <LiveClip
                  src={HERO_MEDIA.phone.video}
                  poster={HERO_MEDIA.phone.poster}
                  label="The Schoolteck parent app in use"
                  className="w-full h-auto block rounded-[1.6rem] aspect-[344/748] object-cover bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
