import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import { ChevronDown, ChevronUp, Star } from 'lucide-react';

const publications = [
  {
    title: "Transplantation as a novel therapeutic strategy for Autism Spectrum Disorder: clinical Study",
    journal: "Cell Am J Stem Cells",
    authors: "Sharma A, Gokulchandran N, Kulkarni P, Sane H, Sharma R, Jose A, Badhe P.",
    year: "2020",
    volume: "9(5):89-100",
    highlight: true,
    note: "World's 1st Autism publication for Autologous Bone Marrow-Derived Stem Cell Therapy"
  },
  {
    title: "Abnormal development of the corpus callosum in Autism spectrum disorder: A MRI Study",
    journal: "Topics in Magnetic Resonance Imaging",
    authors: "Suvarna Badhe, Samson Nivins, Pooja Kulkarni, Alitta Jose, Divesh Manek, Satyendra Badhe, Hemangi Sane, Nandini Gokulchandran, Prerna Badhe, Alok Sharma.",
    year: "2024",
    volume: "33(3):e0312"
  },
  {
    title: "Therapeutic Effects of Cellular Therapy in a Case of Adult Autism Spectrum of Disorder",
    journal: "International Biological and Biomedical Journal",
    authors: "Sharma A, Gokulchandran N, Sane H, Kulkarni P, Nivins S, Maheshwari M, Badhe P.",
    year: "2018",
    volume: "4(2):98-103"
  },
  {
    title: "The baseline pattern and age-related developmental metabolic changes in the brain of children with autism as measured on positron emission tomography/computed tomography scan",
    journal: "World journal of nuclear medicine",
    authors: "Sharma A, Gokulchandran N, Sane H, Nivins S, Paranjape A, Badhe P.",
    year: "2018",
    volume: "17(2):94"
  },
  {
    title: "PET CT Scan Brain As A Monitoring Tool To Study The Effects Of Autologous Bone Marrow Mononuclear Cell Transplantation In Autism Spectrum Disorder",
    journal: "International Journal of Current Advanced Research",
    authors: "Alok Sharma, Nandini Gokulchandran, Hemangi Sane, Pooja Kulkarni, Sarita Kalburgi, Ridhima Sharma, Prerna Badhe, Samson Nivins",
    year: "2017",
    volume: "In Press"
  },
  {
    title: "Improvements in a case of autism spectrum disorder after cell therapy as noted on PET CT brain scan",
    journal: "SJSC",
    authors: "Alok Sharma, Nandini Gokulchandran, Pooja Kulkarni, Sarita Kalburgi, Shruti Kamat, Riddhima Sharma, Samson Nivins, Hemangi Sane, Prerna Badhe",
    year: "2017",
    volume: "1(2):1-7"
  },
  {
    title: "A Case of Autism Showing Clinical Improvements after Cellular Therapy along with PET CT Evidence",
    journal: "J Stem Cell Res Ther",
    authors: "Sharma A, Gokulchandran N, Sane H, Kulkarni P, Pai S",
    year: "2017",
    volume: "2(4):00070"
  },
  {
    title: "Stem Cell Therapy in Autism Spectrum Disorders",
    journal: "Recent Advances in Autism. SMGroup",
    authors: "Alok Sharma, Hemangi Sane, Nandini Gokulchandran, Prerna Badhe, Pooja Kulkarni and Suhasini Pai",
    year: "2017",
    volume: ""
  },
  {
    title: "PET-CT scan shows decreased severity of autism after autologous cellular therapy: a case report",
    journal: "Autism Open Access",
    authors: "Sharma A, Sane H, Gokulchandran N, Badhe P, Patil A, Kulkarni P, Paranjape A",
    year: "2016",
    volume: "6(2);1-6"
  },
  {
    title: "Amelioration of autism by autologous bone marrow mononuclear cells and neurorehabilitation: A case report",
    journal: "American Journal of Medical Case Reports",
    authors: "Sharma A, Gokulchandran N, Sane H, Patil A, Shetty A, Biju H, Kulkarni P, Badhe P",
    year: "2015",
    volume: "3(10):304-9"
  },
  {
    title: "Cell therapy effects portrayed on positron emission tomography of the brain serve as a new dimension for autism",
    journal: "Journal of Pediatric Neurology",
    authors: "Sharma A, Gokulchandran N, Sane H, Bhovad P, Biju H, Shetty A, Kali M, Badhe P",
    year: "2014",
    volume: "12(03):151-6"
  },
  {
    title: "Neuropsychiatric Disorder Tackled by Innovative Cell Therapy-A Case Report in Autism",
    journal: "J Stem Cell Res Transplant",
    authors: "Sharma A, Gokulchandran N, Shetty A, Kulkarni P, Sane H, Badhe P",
    year: "2014",
    volume: "1(1): 4"
  },
  {
    title: "Intrathecal autologous bone marrow mononuclear cell transplantation in a case of adult autism",
    journal: "Autism",
    authors: "Sharma A, Gokulchandran N, Sane H, Kulkarni P, Thomas N, Paranjape A, Badhe P",
    year: "2013",
    volume: "3(2):113"
  },
  {
    title: "Autologous bone marrow mononuclear cells may be explored as a novel potential therapeutic option for autism",
    journal: "J Clin Case Rep",
    authors: "Sharma A, Gokulchandran N, Shetty A, Sane H, Kulkarni P, Badhe P",
    year: "2013",
    volume: "3(282):2"
  },
  {
    title: "An improved case of autism as revealed by PET CT scan in patient transplanted with Autologous bone marrow derived mononuclear cells",
    journal: "J Stem Cell Res Ther",
    authors: "Sharma A, Badhe P, Gokulchandran N, Kulkarni P, Mishra P, Shetty A, Sane H",
    year: "2013",
    volume: "3(139):2"
  },
  {
    title: "Autologous bone marrow mononuclear cell therapy for autism: an open label proof of concept study",
    journal: "Stem cells international",
    authors: "Sharma A, Gokulchandran N, Sane H, Nagrajan A, Paranjape A, Kulkarni P, Shetty A, Mishra P, Kali M, Biju H, Badhe P",
    year: "2013",
    volume: "Article ID 623875"
  },
  {
    title: "Autologous Bone Marrow-derived Mononuclear Transplantation in Rett Syndrome",
    journal: "Asian Journal of Neurosurgery",
    authors: "Sharma A, Chopra G, Gokulchandran N, et al.",
    year: "2013",
    volume: ""
  }
];

const Research: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  // Increase initial count to 6 so it looks balanced in a grid (2x3 or 3x2)
  const displayedPublications = showAll ? publications : publications.slice(0, 6);

  return (
    <section id="research" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Research & Publications" 
          subtitle="At NeuroGen, there is a strong emphasis on academic work and clinical research. We have published 112 scientific papers in international and national peer-reviewed medical journals."
        />
        
        {/* Changed from single column stack to responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedPublications.map((pub, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-2xl transition-all hover:shadow-lg border flex flex-col h-full ${
                pub.highlight 
                  ? 'bg-gradient-to-r from-white to-[#018EA9]/5 border-[#018EA9] shadow-md' 
                  : 'bg-white border-slate-100 hover:border-[#018EA9]/30'
              }`}
            >
              {pub.highlight && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEB930]/20 text-[#Ab8039] text-xs font-bold uppercase tracking-wider mb-4 w-fit">
                  <Star className="w-3 h-3 fill-current" />
                  <span className="truncate max-w-[240px]">{pub.note}</span>
                </div>
              )}
              
              <h3 className="text-lg font-bold text-slate-900 mb-4 leading-snug flex-grow">
                {pub.title}
              </h3>
              
              <div className="mt-4 pt-4 border-t border-slate-50">
                <div className="flex flex-wrap gap-y-1 text-sm text-slate-600 mb-2">
                   <span className="font-semibold text-[#018EA9] mr-2">{pub.journal}</span>
                   {pub.year && <span className="text-slate-400 mr-2">• {pub.year}</span>}
                   {pub.volume && <span className="text-slate-400">• {pub.volume}</span>}
                </div>
                
                <p className="text-xs text-slate-500 italic line-clamp-3" title={pub.authors}>
                  {pub.authors}
                </p>
              </div>
            </div>
          ))}
        </div>

        {publications.length > 6 && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-300 hover:bg-slate-50 hover:border-[#018EA9] text-slate-700 font-medium transition-all shadow-sm"
            >
              {showAll ? (
                <>Show Less <ChevronUp className="w-4 h-4" /></>
              ) : (
                <>View All {publications.length} Publications <ChevronDown className="w-4 h-4" /></>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Research;