import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';
import MITLogo from '../assets/MITcircle.png';
import OSALogo from '../assets/OSALogo.png';
import FooterImage from '../assets/NewFooterimage.webp';

const StudentAffairsFooter = () => {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'Our Team', href: '/team' },
    { name: 'Clubs', href: '/club' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <footer className="text-white relative overflow-hidden border-t border-purple-400/50">
      {/* Background Image - Full Coverage */}
      <div className="absolute inset-0">
        <img
          src={FooterImage}
          alt="Footer background"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-[center_80%]"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-6">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-4">

          {/* Brand Section */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-14 h-14 p-2 bg-white rounded-full shadow-lg border-2 border-purple-200 flex-shrink-0">
                <img src={MITLogo} alt="MIT Art Design and Technology University Logo" className="w-full h-full object-contain" />
              </div>
              <img src={OSALogo} alt="Office of Student Affairs Logo" className="h-10 w-auto object-contain filter drop-shadow-sm" />
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight mb-1">Council Connect</h3>
            <p className="text-white text-sm font-medium mb-1">Student & Leadership at Service</p>
            <p className="text-white text-sm">
              Office of Student Affairs <br /> MIT-ADT University, Pune, India
            </p>
          </div>

          {/* Contact & Links Section */}
          <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-8">

            {/* Quick Contact */}
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-white hover:text-white transition-colors duration-300">
                <Mail className="w-4 h-4" />
                <span>student.success@mituniversity.edu.in</span>
              </div>
              <div className="hidden sm:block w-px h-5 bg-white/30"></div>
              <div className="hidden lg:flex items-center gap-2 text-white hover:text-white transition-colors duration-300">
                <MapPin className="w-4 h-4" />
                <span>Loni Kalbhor, Pune 412201</span>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex items-center gap-1 text-sm">
              {links.map((link, index) => (
                <React.Fragment key={link.name}>
                  <a
                    href={link.href}
                    className="text-white hover:text-white transition-colors duration-300 px-3 py-2 rounded hover:bg-white/10"
                  >
                    {link.name}
                  </a>
                  {index < links.length - 1 && <span className="text-white/40">•</span>}
                </React.Fragment>
              ))}
            </nav>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a
                href="https://in.linkedin.com/in/drsurajbhoyar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/20 border border-white/30 hover:bg-white/30 rounded flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a
                href="https://www.instagram.com/impactmitadt/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/20 border border-white/30 hover:bg-white/30 rounded flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              {/* <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/20 border border-white/30 hover:bg-white/30 rounded flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a> */}
            </div>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="border-t border-white/20 pt-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
            <p className="text-white text-center sm:text-left">
              © 2025 Office of Student Affairs MIT ADT University. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-white/70">
              {/* Future additional links if needed */}
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
