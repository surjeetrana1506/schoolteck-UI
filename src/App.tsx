import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SimpleFeatures } from './components/SimpleFeatures';
import { InteractiveSandbox } from './components/InteractiveSandbox';
import { HowItWorks } from './components/HowItWorks';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { BookDemoModal } from './components/BookDemoModal';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedPlanForDemo, setSelectedPlanForDemo] = useState<string | undefined>(undefined);

  const handleOpenDemoModal = (planName?: string) => {
    setSelectedPlanForDemo(planName);
    setIsDemoModalOpen(true);
  };

  const handleScrollToSandbox = () => {
    const el = document.getElementById('live-sandbox');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white antialiased">
      {/* Sticky Header Navigation */}
      <Navbar
        onOpenBookDemo={() => handleOpenDemoModal()}
        onScrollToSandbox={handleScrollToSandbox}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Simple, Punchy Hero Section */}
        <HeroSection
          onOpenBookDemo={() => handleOpenDemoModal()}
          onScrollToSandbox={handleScrollToSandbox}
        />

        {/* 4 Core Features (Clean, Visual, Direct) */}
        <SimpleFeatures
          onOpenBookDemo={() => handleOpenDemoModal()}
          onScrollToPreview={handleScrollToSandbox}
        />

        {/* Live Interactive Preview (Admin Portal & Parent App) */}
        <InteractiveSandbox
          onOpenBookDemo={() => handleOpenDemoModal()}
        />

        {/* Simple 3-Step Setup */}
        <HowItWorks
          onOpenBookDemo={() => handleOpenDemoModal()}
        />

        {/* Transparent Pricing Plans & FAQ */}
        <PricingSection
          onOpenBookDemo={handleOpenDemoModal}
        />

        {/* Verified School Leader Testimonials */}
        <TestimonialsSection />
      </main>

      {/* Clean Footer */}
      <Footer
        onOpenBookDemo={() => handleOpenDemoModal()}
        onScrollToSandbox={handleScrollToSandbox}
      />

      {/* Simple Demo Booking Modal */}
      <BookDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        initialPlan={selectedPlanForDemo}
      />
    </div>
  );
}
