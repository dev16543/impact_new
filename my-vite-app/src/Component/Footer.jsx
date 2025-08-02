import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import MITLogo from '../assets/MITcircle.png';
import OSALogo from '../assets/OSALogo.png';
import FooterImage from '../assets/NewFooterimage.webp';

const StudentAffairsFooter = () => {
  return (
    <footer className="text-white relative overflow-hidden border-t border-purple-400/50">
      {/* Background Image - Full Coverage */}
      <div className="absolute inset-0">
                 <img 
           src={FooterImage} 
           alt="" 
           className="w-full h-full object-cover object-[center_80%]" 
         />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-6">
        {/* Main Footer Content - Horizontal Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-4">
          
                     {/* Brand Section - Compact */}
           <div className="flex flex-col items-center text-center">
             <div className="flex items-center gap-4 mb-3">
               <div className="w-14 h-14 p-2 bg-white rounded-full shadow-lg border-2 border-purple-200 flex-shrink-0">
                 <img src={MITLogo} alt="MIT ADT University" className="w-full h-full object-contain" />
               </div>
               <img src={OSALogo} alt="OSA Logo" className="h-10 w-auto object-contain filter drop-shadow-sm" />
             </div>
             <h3 className="text-xl font-bold text-white tracking-tight mb-1">
               Council Connect
             </h3>
             <p className="text-white text-sm font-medium mb-1">
               Student at Service
             </p>
             <p className="text-white text-sm">
               Office of Student Affairs <br/>MIT-ADT University, Pune, India
             </p>
           </div>

          {/* Contact & Links - Horizontal */}
          <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-8">
            
            {/* Quick Contact */}
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-white hover:text-white transition-colors duration-300">
                <Mail className="w-4 h-4" />
                <span>student.success@mituniversity.edu.in</span>
              </div>
              <div className="hidden sm:block w-px h-5 bg-white/30"></div>
              <div className="hidden lg:block w-px h-5 bg-white/30"></div>
              <div className="hidden lg:flex items-center gap-2 text-white hover:text-white transition-colors duration-300">
                <MapPin className="w-4 h-4" />
                <span>Loni Kalbhor, Pune 412201</span>
              </div>
            </div>

            {/* Quick Links - Horizontal */}
            <div className="flex items-center gap-1 text-sm">
              {['Home', 'Our Team',  'Clubs', 'Contact Us'].map((link, index) => (
                <React.Fragment key={index}>
                  <a 
                    href="#" 
                    className="text-white hover:text-white transition-colors duration-300 px-3 py-2 rounded hover:bg-white/10"
                  >
                    {link}
                  </a>
                  {index < 3 && <span className="text-white/40">•</span>}
                </React.Fragment>
              ))}
            </div>

            {/* Social Media - Compact */}
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-9 h-9 bg-white/20 border border-white/30 hover:bg-white/30 rounded flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 bg-white/20 border border-white/30 hover:bg-white/30 rounded flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 bg-white/20 border border-white/30 hover:bg-white/30 rounded flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom - Single Line */}
        <div className="border-t border-white/20 pt-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
            <p className="text-white text-center sm:text-left">
              © 2025 Office of Student Affairs MIT ADT University. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-white/70">
              </div>
          </div>
          <p className="text-white/60 text-xs text-center mt-2">
            Designed with pride for our university community • अर्थात: ज्ञान जिज्ञासा (Estd. 2015)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default StudentAffairsFooter;