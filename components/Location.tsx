import React from 'react';
import SectionHeader from './SectionHeader';
import { Plane, Sun, MapPin, Palmtree } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#018EA9]/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FEB930]/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Content Side */}
          <div className="lg:w-1/2">
            <SectionHeader 
              title="Healing in Paradise" 
              subtitle="Bahamas NeuroGen combines world-class medical care with the serene beauty of the Caribbean for a holistic recovery experience."
              centered={false}
            />
            
            <div className="prose prose-slate text-slate-600 mb-8 leading-relaxed">
              <p className="mb-4">
                Our Stem Cell Therapy Centre is located in Nassau (New Providence Island), offering excellent connectivity via <strong>Lynden Pindling International Airport (NAS)</strong>. This facilitates easy travel for international patients, especially those visiting from North America.
              </p>
              <p>
                The hospital is surrounded by famous Bahamian beaches with powdery white sand and clear, calm turquoise waters, creating the perfect atmosphere for recovery. Families can also explore vibrant coral reefs and experience the warmth of Caribbean culture.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                <div className="p-2 bg-[#018EA9]/10 rounded-lg text-[#018EA9]">
                  <Plane className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Easy Connectivity</h4>
                  <p className="text-sm text-slate-500">Direct flights to Lynden Pindling Airport (NAS).</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                <div className="p-2 bg-[#FEB930]/10 rounded-lg text-[#Ab8039]">
                  <Palmtree className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Natural Serenity</h4>
                  <p className="text-sm text-slate-500">Pristine beaches & turquoise waters.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className="lg:w-1/2 w-full">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#018EA9] to-[#FEB930] rounded-3xl opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=800" 
                  alt="Bahamas Beach Resort" 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center gap-2 text-[#FEB930] mb-2 font-medium">
                      <MapPin className="w-5 h-5" />
                      <span>Nassau, New Providence</span>
                    </div>
                    <p className="text-white/90 leading-relaxed">
                      "A holistic recovery experience where advanced science meets nature's tranquility."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;