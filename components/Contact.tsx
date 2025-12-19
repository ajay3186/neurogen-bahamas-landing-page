import React from 'react';
import SectionHeader from './SectionHeader';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white scroll-mt-36">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden border border-slate-100 flex flex-col md:flex-row">
          
          <div className="p-10 md:w-1/2 bg-[#018EA9] text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
              <p className="text-slate-100 mb-8 leading-relaxed">
                Take the first step towards a better future. Our medical team is ready to review your case free of charge.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#FEB930] mt-1" />
                  <div>
                    <h4 className="font-semibold">Visit Us</h4>
                    <p className="text-slate-200 text-sm">One Sandyport Plaza<br/>Nassau, Bahamas</p>
                  </div>
                </div>
            
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[#FEB930] mt-1" />
                  <div>
                    <h4 className="font-semibold">Email Us</h4>
                    <p className="text-slate-200 text-sm"><a
    href="mailto:contact@bahamasneurogen.com"
    className="text-slate-400 text-[#FFFFFF] hover:text-[#FEB930] transition-colors"
  >
    contact@bahamasneurogen.com
  </a></p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
               <div className="p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                 <p className="text-xs text-slate-200 text-center">
                   HIPAA Compliant & Confidential
                 </p>
               </div>
            </div>
          </div>

          <div className="p-10 md:w-1/2 bg-white">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Request Evaluation</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Patient Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#018EA9] transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Parent/Guardian Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#018EA9] transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Patient Age</label>
                <input type="number" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#018EA9] transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#018EA9] transition-all"></textarea>
              </div>
              <button className="w-full py-4 bg-[#FEB930] hover:bg-[#eec179] text-black font-bold rounded-lg transition-all shadow-lg shadow-[#FEB930]/20">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;