import React, { useEffect, useState, useRef } from 'react';
import SectionHeader from './SectionHeader';
import { BookOpen, Trophy } from 'lucide-react';

const AnimatedCounter = ({ end, duration = 2000 }: { end: number, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          // Calculate step to ensure animation fits duration roughly
          const step = Math.ceil(end / (duration / 16)); 
          
          const timer = setInterval(() => {
            start += step;
            if (start > end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <div ref={ref}>{count.toLocaleString()}+</div>;
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white scroll-mt-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 relative">
            {/* Image with hover effect */}
            <div className="overflow-hidden rounded-3xl shadow-2xl group">
                <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" 
                alt="Medical Team Meeting" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
               <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="text-[#018EA9] font-bold text-3xl mb-1 flex justify-center">
                    <AnimatedCounter end={16000} />
                  </div>
                  <div className="text-slate-600 text-sm font-medium">Patients Treated</div>
               </div>
               <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="text-[#018EA9] font-bold text-3xl mb-1 flex justify-center">
                    <AnimatedCounter end={113} />
                  </div>
                  <div className="text-slate-600 text-sm font-medium">Countries Served</div>
               </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <SectionHeader 
              title="About Bahamas NeuroGen" 
              subtitle="Part of the NeuroGen group, pioneering cell therapy since 2008."
              centered={false}
            />
            
            <div className="prose prose-lg text-slate-600 mb-8 leading-relaxed">
              <p className="mb-6 hover:text-slate-800 transition-colors duration-300">
                Bahamas NeuroGen Stem Cell Therapy Centre for Autism in the Bahamas is in Nassau (New Providence Island), offering excellent connectivity via Lynden Pindling Airport (NAS) and proximity to stunning turquoise waters, white sand beaches, and vibrant Caribbean culture. It's near Lynden Pindling International Airport (NAS), facilitating easy travel for international patients, especially from North America.</p>
              <p className="mb-6 hover:text-slate-800 transition-colors duration-300">
                 The hospital is surrounded by famous Bahamian beaches with powdery white sand and clear, calm turquoise waters, perfect for recovery. The vibrant coral reefs and diverse marine ecosystems provide incredible snorkelling and diving opportunities.</p>
              <p className="hover:text-slate-800 transition-colors duration-300">
                Bahamas NeuroGen combines high-quality medical care with the Bahamas' natural beauty and convenient location for a holistic recovery experience.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
               <div className="flex items-center gap-3 text-slate-700 font-medium group cursor-default">
                  <div className="p-2 bg-[#FEB930]/10 rounded-lg group-hover:bg-[#FEB930] transition-colors duration-300">
                    <BookOpen className="w-5 h-5 text-[#FEB930] group-hover:text-white transition-colors" />
                  </div>
                  <span>24 Books Authored</span>
               </div>
               <div className="flex items-center gap-3 text-slate-700 font-medium group cursor-default">
                  <div className="p-2 bg-[#FEB930]/10 rounded-lg group-hover:bg-[#FEB930] transition-colors duration-300">
                    <Trophy className="w-5 h-5 text-[#FEB930] group-hover:text-white transition-colors" />
                  </div>
                  <span>112 Scientific Papers</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;