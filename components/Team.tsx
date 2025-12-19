import React from 'react';
import SectionHeader from './SectionHeader';
import { Doctor } from '../types';


const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Alok Sharma",
    role: "Director, NeuroGen Brain and Spine Institute",
    credentials: "Neurosurgeon, Neuroscientist & Professor",
    image: "/images/Dr-Alok-Sharma-min.png",
    bio: "Dr. Alok Sharma is a world-renowned Neurosurgeon, Neuroscientist and Professor who brings with him extensive surgical expertise & experience in the areas of Neurosurgery, Neuroscience and Stem Cell Therapy. He is currently the Director of NeuroGen Brain and Spine Institute. He has over 30 years of experience in the field of Neurosurgery and has several awards and recognitions to his name."
  },
  {
    id: 2,
    name: "Dr. Nandini Gokulchandran",
    role: "Deputy Director & Head of Medical Services",
    credentials: "Stem Cell & Neuroregeneration Specialist",
    image: "/images/Dr-Nandini-min.png",
    bio: "Dr. Nandini Gokulchandran is the Deputy Director and Head of Medical Services at NeuroGen Brain and Spine Institute. She has worked for several years with the esteemed Tata Institute of Fundamental Research (TIFR) where she worked around subjects concerning Stem Cells and Neuroregeneration. She brings to NeuroGen an astute amalgamation of medical / clinical backgrounds with deep faith and understanding of research in Stem Cell Therapy."
  },
  {
    id: 3,
    name: "Dr. Prerna Badhe",
    role: "Deputy Director & Head Cell Laboratory Services",
    credentials: "Consultant Neuropathologist",
    image: "/images/Dr-Prerna-min.png",
    bio: "Dr. Prerna Badhe is a Consultant Neuropathologist, Deputy Director and Head Cell Laboratory services at the NeuroGen Brain and Spine Institute. She has authored several research papers and most of her work has been published in journals of international repute. Trained at the National Institute of Health (NIH), Baltimore, John Hopkins, USA, in Neural Cells and at the Kentucky Spinal Cord and Injury Research Centre (KSCIRC), USA."
  },
  {
    id: 4,
    name: "Dr. Hemangi Sane",
    role: "Deputy Director & Head of R&D",
    credentials: "MD Internal Medicine",
    image: "/images/Dr-Hemangi-min.png",
    bio: "Dr. Hemangi Sane is the Deputy Director and Head of Research and Development at NeuroGen Brain and Spine Institute. She is a trained physician with an MD in Internal Medicine from New York Medical College, USA. She is one of the leading physicians of the world committed towards finding treatment for neurological disorders through research. She runs her foundation “Asha Ek Hope” for patients diagnosed with ALS/MND."
  },
  {
    id: 5,
    name: "Dr. Teykia Deveaux",
    role: "Pediatric Specialist",
    credentials: "MD, DABP, FAAP",
    image: "/images/Dr-Teykia-min.png",
    bio: "Dr. Teykia Deveaux has over a decade of international experience in general pediatrics. A graduate of Howard University College of Medicine, she pursued an internship at Nagoya Daiichi Red Cross Hospital in Nagoya, Japan, before completing a pediatric residency at Peyton Manning Children’s Hospital in Indianapolis. She is Board Certified by the American Board of Pediatrics. Her special interests include developmental disorders like Autism."
  }
];

const Team: React.FC = () => {

  return (
    <section id="team" className="py-20 bg-slate-50 scroll-mt-32">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Meet Our Medical Team" 
          subtitle="A multidisciplinary team of world-renowned experts dedicated to safety, research, and patient care."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doc) => (
                <div key={doc.id} className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                        <img 
                            src={doc.image} 
                            alt={doc.name} 
                            className="w-20 h-20 rounded-full object-cover border-4 border-[#018EA9] shadow-sm shrink-0"
                        />
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 leading-tight">{doc.name}</h3>
                            <p className="text-[#018EA9] font-medium text-xs sm:text-sm mt-1">{doc.credentials}</p>
                        </div>
                    </div>
                    <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-[#018EA9]/10 text-[#018EA9] text-xs font-semibold rounded-full uppercase tracking-wider">
                            {doc.role}
                        </span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                        {doc.bio}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Team;