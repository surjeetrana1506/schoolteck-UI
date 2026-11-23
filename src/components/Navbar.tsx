import React, { useEffect, useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Logo } from './Brand';

const LINKS = [
  { href: '#tour', label: 'See it' },
  { href: '#modules', label: 'What’s included' },
  { href: '#how-it-works', label: 'Getting started' },
  { href: '#faq', label: 'FAQ' },
];

export const Navbar: React.FC<{ onOpenBookDemo: () => void }> = ({ onOpenBookDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-40 px-3 sm:px-4 pt-3">
      <div
        className={`max-w-6xl mx-auto rounded-2xl border transition-all duration-300 px-4 sm:px-5 ${
          isScrolled || menuOpen
            ? 'bg-ink/75 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/40 py-2.5'
            : 'bg-transparent border-transparent py-3.5'
        }`}
      >
        <div className="flex items-center justify-between">
          <Logo />

          <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-300" aria-label="Main">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <button
            onClick={onOpenBookDemo}
            className="hidden sm:flex px-4 py-2 rounded-full text-sm font-bold text-ink bg-white hover:bg-slate-200 transition-all items-center gap-1.5 cursor-pointer active:scale-95"
          >
            Book a free demo
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white md:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-white/10 space-y-2 pb-2">
            <nav className="flex flex-col text-base font-medium text-slate-200" aria-label="Main">
              {LINKS.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="py-2.5 hover:text-white">
                  {l.label}
                </a>
              ))}
            </nav>
            <button
              onClick={() => {
                onOpenBookDemo();
                setMenuOpen(false);
              }}
              className="w-full py-3 rounded-full text-sm font-bold text-ink bg-white flex items-center justify-center gap-1.5"
            >
              Book a free demo
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
