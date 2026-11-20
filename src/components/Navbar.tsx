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
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white/95 backdrop-blur-md border-b ${
        isScrolled ? 'border-slate-200 shadow-xs py-3' : 'border-slate-200/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Logo />

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600" aria-label="Main">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-slate-900 transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <button
            onClick={onOpenBookDemo}
            className="hidden sm:flex px-4 py-2 rounded-lg text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 shadow-xs transition-all items-center gap-1.5 cursor-pointer active:scale-95"
          >
            Book a free demo
            <ArrowRight className="w-4 h-4 text-rose-400" aria-hidden="true" />
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 md:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-slate-200 space-y-2 pb-3">
            <nav className="flex flex-col space-y-1 text-base font-medium text-slate-700" aria-label="Main">
              {LINKS.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="py-2 hover:text-indigo-600">
                  {l.label}
                </a>
              ))}
            </nav>
            <button
              onClick={() => {
                onOpenBookDemo();
                setMenuOpen(false);
              }}
              className="w-full py-3 rounded-lg text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 flex items-center justify-center gap-1.5"
            >
              Book a free demo
              <ArrowRight className="w-4 h-4 text-rose-400" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
