import React, { useEffect, useState } from 'react';
import { ArrowRight, ShieldCheck, HeartPulse, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  const phrases = ["Unlocking Potential", "Restoring Connections", "Building Futures"];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  // 1) Image list for the carousel (put your image files in /public/images/)
const heroCarouselImages = [
  "/images/portrait-boy-looking-home (1).jpg",
  "/images/close-up-child-playing-with-pop-it-toy-min (1).jpg",
  "/images/happy-woman-girl-with-down-syndrome-painting-each-other-s-faces (1).jpg",
];

// 2) Current active image index
const [heroIdx, setHeroIdx] = useState(0);

// 3) Auto change image every 3.5 seconds
useEffect(() => {
  const id = setInterval(() => {
    setHeroIdx((prev) => (prev + 1) % heroCarouselImages.length);
  }, 3500);

  return () => clearInterval(id); // cleanup when component unmounts
}, []);


  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const currentPhrase = phrases[textIndex % phrases.length];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        if (displayText.length === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => prev + 1);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <div className="relative bg-slate-900 overflow-hidden min-h-screen flex items-center justify-center">
      {/* Background Image Overlay with Parallax/Zoom Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-top transition-transform duration-75 ease-out"
        style={{ 
          backgroundImage: 'url(/images/hero-bg.jpg)',
          transform: `scale(${1 + scrollY * 0.0005})`, // Subtle zoom on scroll
          opacity: 0.1
        }} 
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#018EA9]/40 to-transparent" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-20">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="max-w-4xl mx-auto text-center md:text-left md:mx-0">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#018EA9]/20 border border-[#018EA9]/30 text-[#FEB930] mb-6 backdrop-blur-sm animate-[fadeIn_1s_ease-out]">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-sm font-medium">World-Class Stem Cell Therapy in the Bahamas</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight min-h-[160px] md:min-h-[auto]">
            Restoring Hope, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#018EA9] to-[#FEB930] text-4xl md:text-5xl lg:text-6xl">
              {displayText}
              <span className="animate-pulse text-white">|</span>
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl animate-[slideUp_1s_ease-out_0.4s_both]">
            Pioneering regenerative medicine for Autism Spectrum Disorder. 
            We combine advanced stem cell science with compassionate care to help your child achieve a better quality of life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-[slideUp_1s_ease-out_0.6s_both]">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-[#FEB930] hover:bg-[#eec179] text-black font-bold rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#FEB930]/20 hover:scale-105"
            >
              Start Free Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#science" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-md border border-white/10 transition-all flex items-center justify-center gap-2 hover:scale-105"
            >
              How It Works
              <HeartPulse className="w-5 h-5" />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center md:justify-start items-center gap-8 text-slate-400 text-sm font-medium animate-[fadeIn_1.5s_ease-out_0.8s_both]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#018EA9] animate-pulse" />
              16,000+ Procedures
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#018EA9] animate-pulse delay-75" />
              Board Certified Team
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#018EA9] animate-pulse delay-150" />
              State-of-the-art Facility
            </div>
          </div>
          </div>
          {/* RIGHT: Circle Carousel */}
          <div className="hidden lg:flex justify-end">
  <div className="relative">

    {/* Outer ring */}
    <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-[#ff2d8d] to-[#ffb400]" />

    {/* Circle mask */}
    <div className="relative w-[600px] h-[600px] rounded-full overflow-hidden border-[10px] border-[#ff2d8d]/80 shadow-2xl">

      {/* Sliding track */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${heroIdx * 100}%)` }}
      >
        {heroCarouselImages.map((src, i) => (
          <div key={i} className="w-full h-full flex-shrink-0">
            <img src={src} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

    </div>
  </div>
          </div>
         </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/50 hover:text-white transition-colors flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default Hero;