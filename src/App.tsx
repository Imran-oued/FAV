import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { OffersSection } from './components/OffersSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyUsSection } from './components/WhyUsSection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { FlightBookingSection } from './components/FlightBookingSection';

import { AirlinesSection } from './components/AirlinesSection';

function HomePage() {
  return (
    <>
      <HeroSection />
      <AirlinesSection />
      <WhyUsSection />
    </>
  );
}

function OffersPage() {
  return (
    <>
      <OffersSection />
      <ServicesSection />
    </>
  );
}

function BilletteriePage() {
  return (
    <>
      <FlightBookingSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="font-sans antialiased text-gray-900 bg-gray-50 selection:bg-brand-gold selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/offres" element={<OffersPage />} />
          <Route path="/billetterie" element={<BilletteriePage />} />
        </Routes>
        <Footer />
        <WhatsAppFloatingButton />
      </div>
    </Router>
  );
}

export default App;
