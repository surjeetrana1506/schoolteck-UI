import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Menu, 
  X, 
  ArrowRight, 
  Monitor
} from 'lucide-react';

interface NavbarProps {
  onOpenBookDemo: () => void;
  onScrollToSandbox: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookDemo, onScrollToSandbox }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs py-3' 
        : 'bg-white/80 backdrop-blur-md border-b border-slate-200/60 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-indigo-600 flex items-center justify-center text-white shadow-sm">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-lg font-black tracking-tight text-slate-900">
                School<span className="bg-gradient-to-r from-rose-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Tek</span>
              </span>
              <span className="text-[10px] text-slate-500 block -mt-1 font-medium">
                School Management Software
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-slate-900 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-slate-900 transition-colors">
              How It Works
            </a>
            <button 
              onClick={onScrollToSandbox}
              className="hover:text-indigo-700 transition-colors flex items-center gap-1.5 text-indigo-600 font-semibold cursor-pointer"
            >
              <span>Live Preview</span>
            </button>
            <a href="#pricing" className="hover:text-slate-900 transition-colors">
              Pricing
            </a>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="navbar-sandbox-btn"
              onClick={onScrollToSandbox}
              className="px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Monitor className="w-3.5 h-3.5 text-indigo-600" />
              <span>Preview</span>
            </button>

            <button
              id="navbar-book-demo-btn"
              onClick={onOpenBookDemo}
              className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 shadow-xs transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-3.5 h-3.5 text-rose-400" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 md:hidden"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-slate-200 space-y-2 pb-3">
            <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-700">
              <a 
                href="#features" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-indigo-600"
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-indigo-600"
              >
                How It Works
              </a>
              <button 
                onClick={() => {
                  onScrollToSandbox();
                  setMobileMenuOpen(false);
                }}
                className="text-left py-1 text-indigo-600 font-semibold flex items-center gap-2"
              >
                Live Preview
              </button>
              <a 
                href="#pricing" 
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-indigo-600"
              >
                Pricing
              </a>
            </nav>
            <div className="pt-2">
              <button
                onClick={() => {
                  onOpenBookDemo();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 rounded-lg text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all flex items-center justify-center gap-1.5"
              >
                <span>Book a Demo</span>
                <ArrowRight className="w-3.5 h-3.5 text-rose-400" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
