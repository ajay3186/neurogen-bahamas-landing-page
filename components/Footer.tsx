import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
  src="/images/Logo (2)-min.png"
  alt="NeuroGen Bahamas"
  className="h-32 w-auto object-contain"
/>

            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Pioneering Autologous Bone Marrow-Derived Cell Therapy for neurological disorders. Restoring hope and unlocking potential through world-class science and compassionate care.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#018EA9] hover:text-white transition-all duration-300 group">
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#FEB930] rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-[#FEB930] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-[#018EA9] group-hover:translate-x-1 transition-transform" /> About Us</a></li>
              <li><a href="#science" className="hover:text-[#FEB930] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-[#018EA9] group-hover:translate-x-1 transition-transform" /> The Science</a></li>
              <li><a href="#process" className="hover:text-[#FEB930] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-[#018EA9] group-hover:translate-x-1 transition-transform" /> Treatment Process</a></li>
              <li><a href="#team" className="hover:text-[#FEB930] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-[#018EA9] group-hover:translate-x-1 transition-transform" /> Medical Team</a></li>
              <li><a href="#testimonials" className="hover:text-[#FEB930] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-[#018EA9] group-hover:translate-x-1 transition-transform" /> Patient Stories</a></li>
              <li><a href="#contact" className="hover:text-[#FEB930] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-[#018EA9] group-hover:translate-x-1 transition-transform" /> Contact Us</a></li>
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#FEB930] rounded-full"></span>
              Treated Conditions
            </h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-[#FEB930] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-[#018EA9] group-hover:translate-x-1 transition-transform" /> Autism Spectrum Disorder</a></li>
              <li><a href="#" className="hover:text-[#FEB930] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-[#018EA9] group-hover:translate-x-1 transition-transform" /> Cerebral Palsy</a></li>
              <li><a href="#" className="hover:text-[#FEB930] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-[#018EA9] group-hover:translate-x-1 transition-transform" /> Muscular Dystrophy</a></li>
              <li><a href="#" className="hover:text-[#FEB930] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-[#018EA9] group-hover:translate-x-1 transition-transform" /> Intellectual Disability</a></li>
              <li><a href="#" className="hover:text-[#FEB930] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-[#018EA9] group-hover:translate-x-1 transition-transform" /> Spinal Cord Injury</a></li>
              <li><a href="#" className="hover:text-[#FEB930] transition-colors flex items-center gap-2 group"><ArrowRight className="w-3 h-3 text-[#018EA9] group-hover:translate-x-1 transition-transform" /> Brain Injury</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#FEB930] rounded-full"></span>
              Get in Touch
            </h3>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-4 group">
                <div className="p-2 bg-slate-800 rounded-lg text-[#FEB930] group-hover:bg-[#018EA9] group-hover:text-white transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-bold text-white mb-1">Visit Us</span>
                  <span className="text-slate-400">One Sandyport Plaza,<br />Nassau, Bahamas</span>
                </div>
              </li>
              {/* <li className="flex items-start gap-4 group">
                <div className="p-2 bg-slate-800 rounded-lg text-[#FEB930] group-hover:bg-[#018EA9] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-bold text-white mb-1">Call Us</span>
                  <span className="text-slate-400">+1 (242) 555-0123</span>
                </div>
              </li> */}
              <li className="flex items-start gap-4 group">
                <div className="p-2 bg-slate-800 rounded-lg text-[#FEB930] group-hover:bg-[#018EA9] group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-bold text-white mb-1">Email Us</span>
                  <a
    href="mailto:contact@bahamasneurogen.com"
    className="text-slate-400 hover:text-[#FEB930] transition-colors"
  >
    contact@bahamasneurogen.com
  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Bahamas NeuroGen. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#" className="hover:text-[#FEB930] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#FEB930] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#FEB930] transition-colors">Medical Disclaimer</a>
            <a href="#" className="hover:text-[#FEB930] transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;