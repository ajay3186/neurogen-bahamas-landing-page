import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Facilities from './components/Facilities';
import StemCellInfo from './components/StemCellInfo';
import Science from './components/Science';
import Process from './components/Process';
import HolisticCare from './components/HolisticCare';
import Location from './components/Location';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Contact from './components/Contact';
import AIChatWidget from './components/AIChatWidget';
import About from './components/About';
import Research from './components/Research';
import Footer from './components/Footer';
import RevealOnScroll from './components/RevealOnScroll';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'facilities', 'stem-cells', 'research', 'process', 'rehabilitation', 'team', 'contact'];
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
            break;
          }
        }
      }
      if (current) setActiveSection(current);
      if (mobileOpen) setMobileOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileOpen]);

  const navLinkClass = (section: string) => `
    text-sm font-medium transition-all relative
    ${activeSection === section 
      ? 'text-[#018EA9]' 
      : 'text-slate-600 hover:text-[#018EA9]'
    }
    after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-[#018EA9] after:transition-all duration-300
    ${activeSection === section ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
  `;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm py-5 transition-all duration-300">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div
  className="flex items-center gap-3 cursor-pointer"
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>
  <img
    src="/images/Logo (2)-min.png"
    alt="NeuroGen Bahamas Logo"
    className="h-28 w-auto object-contain"
  />
</div>
          <button
  className="lg:hidden p-2 rounded-md hover:bg-slate-100 transition"
  onClick={() => setMobileOpen((v) => !v)}
  aria-label="Open menu"
>
  <span className="block w-6 h-0.5 bg-slate-800 mb-1"></span>
  <span className="block w-6 h-0.5 bg-slate-800 mb-1"></span>
  <span className="block w-6 h-0.5 bg-slate-800"></span>
</button>

          
          <div className="hidden lg:flex items-center gap-5">
            <a href="#about" className={navLinkClass('about')}>About</a>
            <a href="#facilities" className={navLinkClass('facilities')}>Facilities</a>
            <a href="#stem-cells" className={navLinkClass('stem-cells')}>Stem Cells</a>
            <a href="#research" className={navLinkClass('research')}>Research</a>
            <a href="#process" className={navLinkClass('process')}>Process</a>
            <a href="#rehabilitation" className={navLinkClass('rehabilitation')}>Rehab</a>
            <a href="#team" className={navLinkClass('team')}>Team</a>
            <a href="#contact" className="px-5 py-2.5 bg-[#FEB930] hover:bg-[#eec179] hover:scale-105 active:scale-95 text-black text-sm font-semibold rounded-full transition-all shadow-md shadow-[#FEB930]/30">
              Contact Us
            </a>
          </div>
        </div>
        {mobileOpen && (
  <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-100">
    <div className="px-6 py-4 flex flex-col gap-4">
      <a href="#about" onClick={() => setMobileOpen(false)} className="text-slate-700 font-medium">About</a>
      <a href="#facilities" onClick={() => setMobileOpen(false)} className="text-slate-700 font-medium">Facilities</a>
      <a href="#stem-cells" onClick={() => setMobileOpen(false)} className="text-slate-700 font-medium">Stem Cells</a>
      <a href="#research" onClick={() => setMobileOpen(false)} className="text-slate-700 font-medium">Research</a>
      <a href="#process" onClick={() => setMobileOpen(false)} className="text-slate-700 font-medium">Process</a>
      <a href="#rehabilitation" onClick={() => setMobileOpen(false)} className="text-slate-700 font-medium">Rehab</a>
      <a href="#team" onClick={() => setMobileOpen(false)} className="text-slate-700 font-medium">Team</a>

      <a
        href="#contact"
        onClick={() => setMobileOpen(false)}
        className="mt-2 px-5 py-3 bg-[#FEB930] text-black font-semibold rounded-full text-center"
      >
        Contact Us
      </a>
    </div>
  </div>
)}

      </nav>

      <main>
        <Hero />
        <RevealOnScroll><About /></RevealOnScroll>
        <RevealOnScroll><Facilities /></RevealOnScroll>
        <RevealOnScroll><Location /></RevealOnScroll>
        <RevealOnScroll><StemCellInfo /></RevealOnScroll>
        <RevealOnScroll><Science /></RevealOnScroll>
        <RevealOnScroll><Research /></RevealOnScroll>
        <RevealOnScroll><Process /></RevealOnScroll>
        <RevealOnScroll><HolisticCare /></RevealOnScroll>
        <RevealOnScroll><Team /></RevealOnScroll>
        <RevealOnScroll><Testimonials /></RevealOnScroll>
        <RevealOnScroll><Contact /></RevealOnScroll>
      </main>

      <Footer />

      {/* Floating Action Button / Chat */}
      <AIChatWidget />
    </div>
  );
}

export default App;