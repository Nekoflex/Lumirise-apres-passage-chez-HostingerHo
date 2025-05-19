import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ClientsSection from '@/components/ClientsSection';
import ServicesSection from '@/components/ServicesSection';
import AuditSection from '@/components/AuditSection';
import PortfolioSection from '@/components/PortfolioSection'; // Import the new PortfolioSection
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-lumirise-color-1">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ClientsSection />
        <ServicesSection />
        
        <PortfolioSection /> {/* Use the new PortfolioSection component */}
        
        <AuditSection />

        <section id="testimonials" className="min-h-screen w-screen flex items-center justify-center bg-lumirise-color-1 px-8 py-16">
          <h2 className="text-center text-lumirise-color-4">Témoignages</h2>
        </section>
        <section id="faq" className="min-h-screen w-screen flex items-center justify-center bg-lumirise-color-2 px-8 py-16">
          <h2 className="text-center text-lumirise-color-4">FAQ</h2>
        </section>
        <section id="contact" className="min-h-screen w-screen flex items-center justify-center bg-lumirise-color-1 px-8 py-16">
          <h2 className="text-center text-lumirise-color-4">Contact</h2>
        </section>
        <section id="booking" className="min-h-screen w-screen flex items-center justify-center bg-lumirise-color-2 px-8 py-16">
          <h2 className="text-center text-lumirise-color-4">Prise de RDV</h2>
        </section>
      </main>
      <Toaster />
    </div>
  );
}

export default App;
