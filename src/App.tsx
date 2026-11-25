import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Marquee } from './components/Marquee';
import { ProductTour } from './components/ProductTour';
import { Modules } from './components/Modules';
import { Trust, Faq } from './components/TrustAndFaq';
import { HowItWorks } from './components/HowItWorks';
import { Footer } from './components/Footer';
import { BookDemoModal } from './components/BookDemoModal';

export default function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const openDemo = () => setIsDemoOpen(true);

  return (
    <div className="min-h-screen bg-paper text-slate-700 flex flex-col selection:bg-fuchsia-600 selection:text-white antialiased overflow-x-clip">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-ink focus:text-white focus:px-3 focus:py-2 focus:rounded-lg">
        Skip to content
      </a>
      <Navbar onOpenBookDemo={openDemo} />

      <main id="main" className="flex-1">
        <HeroSection onOpenBookDemo={openDemo} />
        <Marquee />
        <ProductTour />
        <Modules onOpenBookDemo={openDemo} />
        <Trust />
        <HowItWorks onOpenBookDemo={openDemo} />
        <Faq />
      </main>

      <Footer onOpenBookDemo={openDemo} />
      <BookDemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  );
}
