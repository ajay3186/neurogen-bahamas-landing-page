import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import { 
  Puzzle, Brain, Smile, Mic2, GraduationCap, Activity, 
  Waves, Wind, Zap, Layers 
} from 'lucide-react';

type TherapyCategory = 'routine' | 'advanced' | 'integrative';

interface TherapyItem {
  id: string;
  category: TherapyCategory;
  title: string;
  icon: React.ElementType;
  description: string;
}

const therapies: TherapyItem[] = [
  // Routine
  {
    id: 'ot',
    category: 'routine',
    title: 'Occupational Therapy',
    icon: Puzzle,
    description: "A structured form of medical play focuses on building the skills required for everyday living. Our therapists evaluate neurological, cognitive, or physical challenges and design an individualized plan to enhance learning outcomes."
  },
  {
    id: 'psych',
    category: 'routine',
    title: 'Psychology',
    icon: Brain,
    description: "The aim is to maximize functioning in daily living. Psychologists assess, diagnose, and treat psychological problems and behavioral dysfunctions resulting from physical and mental health challenges."
  },
  {
    id: 'behavioral',
    category: 'routine',
    title: 'Behavioral Therapy',
    icon: Smile,
    description: "Focuses on identifying and changing unhelpful behaviors. Using positive reinforcement and modeling, we help individuals manage anxiety, aggression, and social difficulties, replacing them with adaptive behaviors."
  },
  {
    id: 'speech',
    category: 'routine',
    title: 'Speech Therapy',
    icon: Mic2,
    description: "Focuses on Speech Production (articulation, fluency) and Language Development (understanding and expressing language). We also use alternative methods like communication boards and iPads."
  },
  {
    id: 'specialed',
    category: 'routine',
    title: 'Special Education',
    icon: GraduationCap,
    description: "Under the guidance of a special educator, a customized learning plan (IEP) is designed with specific tools to help the child move toward mainstream integration or achieve a harmonious balance in development."
  },
  {
    id: 'physio',
    category: 'routine',
    title: 'Physiotherapy',
    icon: Activity,
    description: "Physiotherapy activates injected stem cells and directs them to damaged areas. It stimulates nerve cells, improves oxygenation, and uses approaches like NDT to enhance motor functions and mobility."
  },
  // Advanced
  {
    id: 'sensory',
    category: 'advanced',
    title: 'Sensory Integration',
    icon: Layers,
    description: "Helps children handle sensory input more calmly. It addresses difficulties like oversensitivity to textures/sounds or sensory-seeking behaviors, reducing meltdowns and improving comfort in daily life."
  },
  {
    id: 'aquatic',
    category: 'advanced',
    title: 'Aquatic Therapy',
    icon: Waves,
    description: "Uses water immersion to restore physical mobility and support psychological well-being. It is a scientifically grounded approach often used alongside other rehabilitation services."
  },
  // Integrative
  {
    id: 'hbot',
    category: 'integrative',
    title: 'Hyperbaric Oxygen (HBOT)',
    icon: Wind,
    description: "Involves breathing 100% oxygen in a pressurized chamber. This dissolves oxygen directly into blood plasma, significantly increasing oxygen supply to the brain to enhance tissue healing and rejuvenation."
  },
  {
    id: 'ozone',
    category: 'integrative',
    title: 'Ozone Therapy',
    icon: Zap,
    description: "Harnesses a pure oxygen-ozone blend to improve cellular respiration and fortify the body's defenses. It stimulates the body's natural antioxidant response, boosting immunity."
  }
];

const HolisticCare: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<TherapyCategory>('routine');

  const filteredTherapies = therapies.filter(t => t.category === activeCategory);

  return (
    <section id="rehabilitation" className="py-20 bg-slate-50 scroll-mt-32">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Holistic Clinical Care" 
          subtitle="Comprehensive neurorehabilitation and integrative therapies designed to maximize the potential of stem cell treatment."
        />

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory('routine')}
            className={`px-6 py-3 rounded-full font-bold transition-all ${
              activeCategory === 'routine' 
                ? 'bg-[#018EA9] text-white shadow-lg shadow-[#018EA9]/30' 
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Routine Neurorehabilitation
          </button>
          <button
            onClick={() => setActiveCategory('advanced')}
            className={`px-6 py-3 rounded-full font-bold transition-all ${
              activeCategory === 'advanced' 
                ? 'bg-[#018EA9] text-white shadow-lg shadow-[#018EA9]/30' 
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Advanced Neurorehabilitation
          </button>
          <button
            onClick={() => setActiveCategory('integrative')}
            className={`px-6 py-3 rounded-full font-bold transition-all ${
              activeCategory === 'integrative' 
                ? 'bg-[#018EA9] text-white shadow-lg shadow-[#018EA9]/30' 
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Integrative Therapies
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTherapies.map((therapy) => (
            <div 
              key={therapy.id} 
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#FEB930]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <therapy.icon className="w-7 h-7 text-[#Ab8039]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{therapy.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {therapy.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HolisticCare;