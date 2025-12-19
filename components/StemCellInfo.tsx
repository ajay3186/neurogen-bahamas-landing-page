import React, { useRef, useState } from 'react';
import { Award, Dna, ShieldCheck } from 'lucide-react';

const TiltCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10; // Max rotation 10deg
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-100 ease-out transform preserve-3d ${className}`}
      style={{ 
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
      }}
    >
      {children}
    </div>
  );
};

const StemCellInfo: React.FC = () => {
  return (
    <section id="stem-cells" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FEB930]/10 text-[#Ab8039] font-bold text-sm mb-6 border border-[#FEB930]/30">
              <Award className="w-4 h-4" />
              <span>Nobel Prize Winning Science (2012)</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Bone Marrow-Derived <br/>
              <span className="text-[#018EA9]">Stem Cell Therapy</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Bone Marrow-Derived Stem Cell Therapy is considered one of the finest medical breakthroughs in history. This discovery has changed the medical perception of 'incurable neurological disorders' and broken old shackles.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Cells are the building blocks of our body. Stem cells have the unique property to multiply and differentiate into various cell types. Hence, they can be used to regenerate and repair damaged parts of the body, offering patients a chance for recovery or long-term remission.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <TiltCard className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors cursor-default">
                <div className="w-12 h-12 rounded-full bg-[#018EA9]/10 flex items-center justify-center shrink-0">
                  <Dna className="w-6 h-6 text-[#018EA9]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Regenerative Power</h4>
                  <p className="text-sm text-slate-500">Repairs damaged neural tissue</p>
                </div>
              </TiltCard>
              <TiltCard className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors cursor-default">
                <div className="w-12 h-12 rounded-full bg-[#018EA9]/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-[#018EA9]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Autologous Safety</h4>
                  <p className="text-sm text-slate-500">Derived from patient's own body</p>
                </div>
              </TiltCard>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
             {/* Decorative Background for 3D effect */}
            <div className="absolute inset-0 bg-[#FEB930] rounded-3xl rotate-6 opacity-20 transform translate-x-4 translate-y-4"></div>
            
            <TiltCard className="relative bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-xl z-10 bg-white">
               <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Autologous?</h3>
               <p className="text-slate-600 mb-6">
                 One of the significant advantages of using autologous bone marrow-derived stem cells is that they are derived from the patient's own body.
               </p>
               <ul className="space-y-4">
                 {[
                   "Zero risk of immune rejection",
                   "No adverse immune reactions",
                   "Minimally invasive procedure",
                   "Ethically free (no embryonic cells used)"
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3">
                     <div className="w-6 h-6 rounded-full bg-[#018EA9] flex items-center justify-center text-white shrink-0 shadow-sm">
                       <ShieldCheck className="w-3 h-3" />
                     </div>
                     <span className="text-slate-700 font-medium">{item}</span>
                   </li>
                 ))}
               </ul>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StemCellInfo;