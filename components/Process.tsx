import React, { useState, useEffect, useRef } from 'react';
import SectionHeader from './SectionHeader';
import { ClipboardCheck, Stethoscope, Syringe, Brain, LogOut, CheckCircle2 } from 'lucide-react';

const timelineSteps = [
  {
    day: "Day 1",
    title: "Admission",
    color: "bg-blue-700",
    borderColor: "border-blue-700",
    textColor: "text-blue-800",
    icon: ClipboardCheck,
    details: [
      "Hospital Admission",
      "Informed Consent",
      "Room Allocation"
    ]
  },
  {
    day: "Day 2",
    title: "Clinical Evaluation",
    color: "bg-emerald-600",
    borderColor: "border-emerald-600",
    textColor: "text-emerald-800",
    icon: Stethoscope,
    details: [
      "Clinical Assessment",
      "Blood Tests",
      "Neuroimaging"
    ]
  },
  {
    day: "Day 3",
    title: "Cell Therapy",
    color: "bg-[#e08916]", // Custom orange to match reference
    borderColor: "border-[#e08916]",
    textColor: "text-[#b06500]",
    icon: Syringe,
    details: [
      "Bone Marrow Aspiration",
      "Stem Cell Processing",
      "Intrathecal Admin"
    ]
  },
  {
    day: "Day 4-11",
    title: "Neurorehabilitation",
    color: "bg-slate-600",
    borderColor: "border-slate-600",
    textColor: "text-slate-800",
    icon: Brain,
    isWide: true, // Special flag for the larger content
    highlight: "4 sessions of each therapy",
    details: [
      "Occupational Therapy", 
      "Behavioural Therapy",
      "Speech Therapy", 
      "Physiotherapy",
      "Aquatic Therapy", 
      "Sensory Integration",
      "Special Education", 
      "Diet Counseling",
      "Oxygen Therapies"
    ]
  },
  {
    day: "Day 12",
    title: "Discharge",
    color: "bg-[#6b4c9a]", // Custom purple to match reference
    borderColor: "border-[#6b4c9a]",
    textColor: "text-[#6b4c9a]",
    icon: LogOut,
    details: [
      "Final Medical Review",
      "Discharge Summary",
      "Home Care Plan"
    ]
  }
];

const Process: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="py-16 bg-slate-50 overflow-x-hidden scroll-mt-32">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeader 
          title="12-Day Treatment Timeline" 
          subtitle="Our structured medical protocol ensures a comprehensive evaluation, safe procedure, and intensive rehabilitation."
        />
        
        <div className="relative mt-12 pb-8">
            {/* Connecting Line (Desktop Only) */}
      
            {/* <div className="absolute top-7 left-4 right-4 h-1 bg-slate-200 z-10 rounded-full overflow-hidden hidden md:hidden lg:block">
              <div
                className="h-full bg-gradient-to-r from-blue-500 via-[#e08916] to-[#6b4c9a] transition-all duration-[1500ms] ease-out"
                style={{ width: isVisible ? '100%' : '0%' }}
              />
            </div> */}


            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 relative">
                {timelineSteps.map((step, index) => {
                    const Icon = step.icon;
                    const isHovered = hoveredIndex === index;
                    const isDimmed = hoveredIndex !== null && hoveredIndex !== index;
                    
                    return (
                        <div 
                            key={index} 
                            className={`flex flex-col group relative transition-all duration-500 ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            } ${isDimmed ? 'opacity-40 blur-[1px] scale-95' : 'opacity-100 scale-100'}`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Connector Line (Mobile Only) */}
                            {index !== timelineSteps.length - 1 && (
                                <div className="hidden sm:block lg:hidden absolute left-6 top-14 bottom-[-16px] w-0.5 bg-slate-200 z-0">
                                    <div 
                                        className={`w-full bg-gradient-to-b ${step.color.replace('bg-', 'from-')} to-slate-200 transition-all duration-1000 origin-top`}
                                        style={{ height: isVisible ? '100%' : '0%' }}
                                    ></div>
                                </div>
                            )}

                            {/* Node Icon */}
                            <div className={`
                                w-12 h-12 lg:w-14 lg:h-14 mx-auto lg:mx-auto mb-4 lg:mb-6 rounded-full 
                                ${step.color} border-4 border-white shadow-lg 
                                flex items-center justify-center text-white z-10 
                                transition-all duration-300 
                                ${isHovered ? 'scale-110 rotate-3 shadow-xl ring-4 ring-opacity-20 ring-current' : ''}
                                shrink-0 self-start lg:self-center ml-0 lg:ml-auto
                            `}>
                                <Icon className="w-5 h-5 lg:w-6 lg:h-6" />
                            </div>

                            {/* Card Content */}
                            <div className={`
                                flex-grow bg-white rounded-lg shadow-sm 
                                transition-all duration-300 
                                border-t-4 ${step.borderColor} p-4 flex flex-col min-h-[180px]
                                ${isHovered ? 'shadow-xl -translate-y-1 bg-slate-50' : 'hover:shadow-md'}
                            `}>
                                <div className="mb-3 text-left">
                                    <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold text-white mb-1 ${step.color} transition-transform ${isHovered ? 'scale-105' : ''}`}>
                                        {step.day}
                                    </span>
                                    <h3 className={`text-sm font-bold ${step.textColor} leading-tight`}>
                                        {step.title}
                                    </h3>
                                </div>

                                <div className={`space-y-1.5 mb-2 flex-grow ${step.isWide ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-2 gap-y-1 space-y-0' : ''}`}>
                                    {step.details.map((detail, i) => (
                                        <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-600 font-medium leading-tight">
                                            <CheckCircle2 className={`w-3 h-3 ${step.textColor} mt-0.5 shrink-0 opacity-70`} />
                                            <span>{detail}</span>
                                        </div>
                                    ))}
                                </div>

                                {step.highlight && (
                                    <div className="mt-auto pt-2 border-t border-slate-100">
                                        <p className={`text-[10px] font-bold text-red-500 bg-red-50 p-1.5 rounded text-center leading-tight transition-colors ${isHovered ? 'bg-red-100 text-red-600' : ''}`}>
                                            {step.highlight}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Process;