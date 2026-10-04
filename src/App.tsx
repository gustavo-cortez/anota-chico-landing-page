import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HowItWorks } from './components/HowItWorks';
import { PricingSection } from './components/PricingSection';
import { TestimonialPersona } from './components/TestimonialPersona';
import { DemoModal } from './components/DemoModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-surface-offwhite text-slate-800 antialiased selection:bg-wheat selection:text-agro-dark">
      {/* Sticky Header */}
      <Navbar onOpenDemo={() => setIsDemoModalOpen(true)} />

      {/* Main Landing Page Content */}
      <main className="flex-1">
        {/* Hero Section (Focal Point of Conversion) */}
        <HeroSection onOpenDemo={() => setIsDemoModalOpen(true)} />

        {/* How It Works Section */}
        <HowItWorks />

        {/* Social Proof & Persona Spotlight */}
        <TestimonialPersona />

        {/* Transparent Agrarian Pricing */}
        <PricingSection />
      </main>

      {/* Footer with Academic Information and LGPD compliance */}
      <Footer />

      {/* Interactive 1-Minute Guided Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      {/* Fixed Floating WhatsApp CTA Button */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
