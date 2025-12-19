import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import { Brain, Zap, Shield, ChevronRight } from 'lucide-react';

const topics = [
  {
    id: 'neurogenesis',
    icon: Brain,
    title: "Neurogenesis & Angiogenesis",
    shortDesc: "Repairing brain connections",
    longDesc: "Our therapy focuses on two critical biological processes: Neurogenesis (the growth of new neurons) and Angiogenesis (the formation of new blood vessels). By introducing stem cells, we aim to improve blood flow (perfusion) to hypoperfused areas of the brain, potentially awakening dormant neurons and fostering new neural pathways essential for speech and cognitive function.",
    image: "/images/brain-blood-vessels (1).jpg",
    color: "text-[#018EA9]",
    bgColor: "bg-[#018EA9]/10",
    borderColor: "border-[#018EA9]"
  },
  {
    id: 'immune',
    icon: Zap,
    title: "Immune Regulation",
    shortDesc: "Reducing neuroinflammation",
    longDesc: "Chronic neuroinflammation is a common underlying factor in Autism. Mesenchymal signaling from the administered cells can help modulate the immune system. This 'immunomodulatory' effect helps shift the brain's environment from an inflammatory state to a reparative state, which may reduce symptoms of hyperactivity and irritability.",
    image: "/images/Immune-system.jpg",
    color: "text-[#Ab8039]",
    bgColor: "bg-[#FEB930]/10",
    borderColor: "border-[#FEB930]"
  },
  {
    id: 'safety',
    icon: Shield,
    title: "Safety First Approach",
    shortDesc: "Autologous & Minimally Invasive",
    longDesc: "Your child's safety is paramount. We exclusively use autologous bone marrow mononuclear cells (BMMNCs) harvested from the patient's own body. This eliminates the risk of immune rejection (GvHD) and avoids the ethical concerns associated with embryonic cells. The procedure is performed by world-class neurosurgeons in a hospital setting.",
    image: "/images/examining-small-girl-with-stethoscope.jpg",
    color: "text-[#75422F]",
    bgColor: "bg-[#75422F]/10",
    borderColor: "border-[#75422F]"
  }
];

const Science: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="science" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="The Science Behind the Hope" 
          subtitle="Explore how cellular therapy addresses the root biological causes associated with Autism Spectrum Disorder."
        />
        
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Navigation Tabs */}
          <div className="w-full lg:w-1/3 space-y-4">
            {topics.map((topic, index) => {
              const Icon = topic.icon;
              const isActive = activeTab === index;
              return (
                <button
                  key={topic.id}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border-2 flex items-center justify-between group ${
                    isActive 
                      ? `bg-white ${topic.borderColor} shadow-lg scale-105` 
                      : 'bg-white border-transparent hover:bg-slate-100 hover:border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${isActive ? topic.bgColor : 'bg-slate-100'}`}>
                      <Icon className={`w-6 h-6 ${isActive ? topic.color : 'text-slate-500'}`} />
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>{topic.title}</h3>
                      <p className={`text-sm ${isActive ? 'text-slate-600' : 'text-slate-400'}`}>{topic.shortDesc}</p>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform ${isActive ? `text-[#018EA9] rotate-0` : 'text-slate-300 opacity-0 group-hover:opacity-100'}`} />
                </button>
              );
            })}
          </div>

          {/* Content Display */}
          <div className="w-full lg:w-2/3">
            <div className="relative bg-white rounded-3xl p-2 shadow-2xl overflow-hidden border border-slate-100 min-h-[500px]">
              {topics.map((topic, index) => (
                <div 
                  key={topic.id}
                  className={`absolute inset-0 transition-all duration-500 ease-in-out flex flex-col ${
                    activeTab === index ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-8 z-0 pointer-events-none'
                  }`}
                >
                  <div className="h-64 sm:h-80 overflow-hidden rounded-t-2xl">
                    <img 
                      src={topic.image} 
                      alt={topic.title} 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 flex-1 bg-white flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                       <topic.icon className={`w-5 h-5 ${topic.color}`} />
                       <span className={`text-xs font-bold tracking-wider uppercase ${topic.color}`}>Key Mechanism</span>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{topic.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {topic.longDesc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Science;