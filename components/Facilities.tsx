import React from 'react';
import { Building2, Microscope, Activity, BedDouble } from 'lucide-react';

const Facilities: React.FC = () => {
  return (
    <section id="facilities" className="bg-slate-900 py-16 relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[#018EA9] opacity-10"></div>
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#FEB930] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              World-Class Infrastructure
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Bahamas NeuroGen features a state-of-the-art medical environment designed for safety, comfort, and advanced care. Our facility operates at the highest international standards.
            </p>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#FEB930]/10 group">
              <BedDouble className="w-8 h-8 text-[#FEB930] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-bold text-xl mb-1">34 Beds</h3>
              <p className="text-slate-400 text-sm group-hover:text-slate-200 transition-colors">Dedicated Stem Cell Centre</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#018EA9]/20 group">
              <Activity className="w-8 h-8 text-[#018EA9] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-bold text-xl mb-1">Advanced OT</h3>
              <p className="text-slate-400 text-sm group-hover:text-slate-200 transition-colors">Modern Operation Theatre</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#FEB930]/10 group">
              <Microscope className="w-8 h-8 text-[#FEB930] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-bold text-xl mb-1">GMP Lab</h3>
              <p className="text-slate-400 text-sm group-hover:text-slate-200 transition-colors">On-site Stem Cell Processing</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#018EA9]/20 group">
              <Building2 className="w-8 h-8 text-[#018EA9] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-bold text-xl mb-1">Rehab Unit</h3>
              <p className="text-slate-400 text-sm group-hover:text-slate-200 transition-colors">Integrated Therapy Halls</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;