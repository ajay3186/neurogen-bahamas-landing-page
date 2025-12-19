import React, { useState, useEffect } from 'react';
import SectionHeader from './SectionHeader';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah M.",
    relation: "Mother of Liam, Age 7",
    quote: "After 6 months, Liam started holding eye contact. It seems small, but for us, it was the world. The team at Neurogen was so supportive throughout the journey.",
    image: "https://picsum.photos/id/64/150/150"
  },
  {
    id: 2,
    name: "David & Jenny T.",
    relation: "Parents of Sophie, Age 5",
    quote: "Sophie's hyperactivity reduced significantly. She can now sit through a class at school. We felt completely safe in the Bahamas facility.",
    image: "https://picsum.photos/id/65/150/150"
  },
  {
    id: 3,
    name: "Michael R.",
    relation: "Father of Noah, Age 9",
    quote: "We were skeptical at first, but the science made sense. The improvement in Noah's speech has been gradual but steady since the treatment.",
    image: "https://picsum.photos/id/91/150/150"
  },
  {
    id: 4,
    name: "Elena G.",
    relation: "Mother of Mateo, Age 6",
    quote: "The staff treated us like family. Mateo was so calm during the procedure thanks to the amazing nurses. We are seeing new words every week now.",
    image: "https://picsum.photos/id/129/150/150"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Optional auto-play
  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-10 bg-[#018EA9] text-white overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FEB930] opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stories of Hope</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Real experiences from families who have entrusted us with their children's care.
          </p>
          <div className="h-1.5 w-24 bg-[#FEB930] rounded-full mt-6 mx-auto" />
        </div>
        
        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden rounded-3xl bg-[#017a91] shadow-2xl border border-[#016f85]">
             <div 
               className="flex transition-transform duration-500 ease-in-out" 
               style={{ transform: `translateX(-${currentIndex * 100}%)` }}
             >
               {testimonials.map((t) => (
                 <div key={t.id} className="w-full flex-shrink-0 p-4 md:p-8 flex flex-col items-center text-center">
                    <div className="w-24 h-24 mb-8 relative">
                      <div className="absolute inset-0 bg-[#FEB930] rounded-full blur opacity-40 animate-pulse"></div>
                      <img src={t.image} alt={t.name} className="w-full h-full object-cover rounded-full border-4 border-[#FEB930] relative z-10 shadow-lg" />
                      <div className="absolute -bottom-3 -right-3 bg-white text-[#018EA9] rounded-full p-2 shadow-sm z-20">
                        <Quote className="w-4 h-4 fill-current" />
                      </div>
                    </div>

                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-[#FEB930] fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-xl md:text-2xl text-white font-medium italic leading-relaxed mb-8 max-w-2xl">
                      "{t.quote}"
                    </p>
                    
                    <div>
                      <h4 className="text-xl font-bold text-white">{t.name}</h4>
                      <p className="text-[#FEB930] font-medium">{t.relation}</p>
                    </div>
                 </div>
               ))}
             </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all shadow-lg border border-white/10 group"
          >
            <ChevronLeft className="w-8 h-8 group-hover:scale-110 transition-transform" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all shadow-lg border border-white/10 group"
          >
            <ChevronRight className="w-8 h-8 group-hover:scale-110 transition-transform" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-[#FEB930] w-8' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;