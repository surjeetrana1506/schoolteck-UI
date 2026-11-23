import React, { useEffect, useRef } from 'react';
import { GraduationCap } from 'lucide-react';

export const Logo: React.FC<{ tagline?: boolean }> = ({ tagline = true }) => (
  <a href="#top" className="flex items-center gap-2.5" aria-label="Schoolteck home">
    <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-rose-500/20">
      <GraduationCap className="w-5 h-5" aria-hidden="true" />
    </span>
    <span>
      <span className="text-lg font-extrabold tracking-tight text-white">
        School<span className="text-brand">teck</span>
      </span>
      {tagline && <span className="text-[10px] text-slate-400 block -mt-1 font-medium">School management for Indian schools</span>}
    </span>
  </a>
);

export const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 backdrop-blur">
    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-rose-500" />
    {children}
  </div>
);

/** Heading block shared by every section. */
export const SectionHead: React.FC<{ label: string; title: React.ReactNode; text?: string }> = ({ label, title, text }) => (
  <Reveal className="text-center max-w-2xl mx-auto mb-12">
    <SectionLabel>{label}</SectionLabel>
    <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.05]">{title}</h2>
    {text && <p className="mt-4 text-base sm:text-lg text-slate-400">{text}</p>}
  </Reveal>
);

/** An accent word in the italic serif. */
export const Accent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="font-serif italic font-normal text-brand pr-1">{children}</span>
);

/** Fades its children in once they scroll into view. */
export const Reveal: React.FC<{ children: React.ReactNode; className?: string; delay?: number; as?: 'div' | 'li' }> = ({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}) => {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add('is-in');
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref as never} className={`reveal ${className}`} style={{ '--delay': `${delay}ms` } as React.CSSProperties}>
      {children}
    </Tag>
  );
};

/** Tracks the pointer so a `.spotlight` card can glow beneath it. */
export const trackPointer = (e: React.PointerEvent<HTMLElement>) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--x', `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty('--y', `${e.clientY - r.top}px`);
};

export const PrimaryButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className = '', children, ...props }) => (
  <button
    {...props}
    className={`group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-base text-white cursor-pointer
      bg-gradient-to-r from-rose-500 via-fuchsia-600 to-indigo-600 shadow-[0_0_40px_-8px] shadow-fuchsia-500/60
      hover:shadow-[0_0_60px_-6px] hover:shadow-fuchsia-500/80 transition-all active:scale-[0.98] ${className}`}
  >
    {children}
  </button>
);
