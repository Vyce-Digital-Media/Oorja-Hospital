import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LenisScroll from './components/layout/LenisScroll';
import ScrollProgressBar from './components/layout/ScrollProgressBar';
import PageTransition from './components/layout/PageTransition';

import Home from './pages/Home';
import About from './pages/About';
import ServicesHub from './pages/ServicesHub';
import GastroServices from './pages/GastroServices';
import FetalMedicine from './pages/FetalMedicine';
import Team from './pages/Team';
import WhyOorja from './pages/WhyOorja';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

export default function App() {
  const location = useLocation();

  return (
    <LenisScroll>
      <div className="min-h-screen flex flex-col bg-cream text-navy selection:bg-teal selection:text-white">
        <ScrollProgressBar />
        <Navbar />

        <div className="flex-1">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              <Route path="/services" element={<PageTransition><ServicesHub /></PageTransition>} />
              <Route path="/services/gastroenterology" element={<PageTransition><GastroServices /></PageTransition>} />
              <Route path="/services/fetal-medicine" element={<PageTransition><FetalMedicine /></PageTransition>} />
              <Route path="/team" element={<PageTransition><Team /></PageTransition>} />
              <Route path="/why-oorja" element={<PageTransition><WhyOorja /></PageTransition>} />
              <Route path="/testimonials" element={<PageTransition><Testimonials /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </div>

        <Footer />
      </div>
    </LenisScroll>
  );
}
