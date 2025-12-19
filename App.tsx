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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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