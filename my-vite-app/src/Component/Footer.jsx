import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import MITLogo from '../assets/MITLogo.jpg';
import OSALogo from '../assets/OSALogo.png';

const StudentAffairsFooter = () => {
  return (
    <footer className="bg-gradient-to-br from-[#181f2a] via-[#232b39] to-[#181f2a] text-white relative overflow-hidden py-3 lg:py-10">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform rotate-45"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-red-500 to-transparent transform -rotate-45 opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:py-10 relative z-10">
        {/* Main Footer Content */}
        <div className="flex flex-row flex-wrap items-start justify-between gap-6 mb-3 lg:mb-4 w-full">
          
          {/* Logo and Title Section */}
          <div className="flex flex-col items-start flex-1 min-w-[220px] lg:flex-col lg:items-start lg:justify-start lg:gap-4">
            {/* Vertically stack for lg and above */}
            <div className="flex flex-col gap-2 w-full lg:gap-4">
              <div className="w-48 sm:w-52 lg:w-56 h-12 sm:h-14 lg:h-16 flex items-center flex-shrink-0">
                <img src={OSALogo} alt="OSA Logo" className="h-full w-auto object-contain" />
              </div>
              <div className="w-28 sm:w-32 lg:w-36 h-10 sm:h-12 lg:h-14 flex items-center transition-transform duration-300 hover:scale-105">
                <img src={MITLogo} alt="MIT ADT University Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-white font-bold text-sm sm:text-base lg:text-lg transition-colors duration-300 hover:text-red-300">Council Connect</h3>
                <p className="text-gray-400 text-xs sm:text-sm transition-colors duration-300 hover:text-gray-300 lg:max-w-xs">Student Leadership & Service</p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-start flex-1 min-w-[220px]">
            <h4 className="text-white font-semibold text-sm sm:text-base lg:text-lg mb-2 sm:mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></span>
              Quick Links
            </h4>
            <nav className="flex w-full">
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-6 gap-y-2 w-full lg:grid-cols-2 lg:gap-x-12 lg:gap-y-2">
                <div className="flex flex-col gap-2">
                  <a href="#" className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 text-xs sm:text-sm lg:text-base font-medium relative py-1">
                    <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500 opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"></span>
                    Home
                    <span className="block h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-red-500 to-red-600 absolute left-0 -bottom-0.5"></span>
                  </a>
                  <a href="#" className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 text-xs sm:text-sm lg:text-base font-medium relative py-1">
                    <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500 opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"></span>
                    Our Team
                    <span className="block h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-red-500 to-red-600 absolute left-0 -bottom-0.5"></span>
                  </a>
                  <a href="#" className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 text-xs sm:text-sm lg:text-base font-medium relative py-1">
                    <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500 opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"></span>
                    Calendar
                    <span className="block h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-red-500 to-red-600 absolute left-0 -bottom-0.5"></span>
                  </a>
                </div>
                <div className="flex flex-col gap-2">
                  <a href="#" className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 text-xs sm:text-sm lg:text-base font-medium relative py-1">
                    <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500 opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"></span>
                    Events
                    <span className="block h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-red-500 to-red-600 absolute left-0 -bottom-0.5"></span>
                  </a>
                  <a href="#" className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 text-xs sm:text-sm lg:text-base font-medium relative py-1">
                    <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500 opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"></span>
                    Club
                    <span className="block h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-red-500 to-red-600 absolute left-0 -bottom-0.5"></span>
                  </a>
                  <a href="#" className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 text-xs sm:text-sm lg:text-base font-medium relative py-1">
                    <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500 opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"></span>
                    Contact Us
                    <span className="block h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-red-500 to-red-600 absolute left-0 -bottom-0.5"></span>
                  </a>
                </div>
              </div>
            </nav>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-start lg:items-end flex-1 min-w-[220px]">
            <h4 className="text-white font-semibold text-sm sm:text-base lg:text-lg mb-2 sm:mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-red-500 to-red-600 rounded-full"></span>
              Follow Us
            </h4>
            <div className="flex gap-3 sm:gap-4">
              <a 
                href="#" 
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 bg-gradient-to-br from-gray-700 to-gray-800 hover:from-blue-600 hover:to-blue-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 text-white" />
              </a>
              
              <a 
                href="#" 
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 bg-gradient-to-br from-gray-700 to-gray-800 hover:from-pink-600 hover:to-pink-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 text-white" />
              </a>
              
              <a 
                href="#" 
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 bg-gradient-to-br from-gray-700 to-gray-800 hover:from-blue-800 hover:to-blue-900 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center pt-2 lg:pt-3 border-t border-gray-700/50">
          <p className="text-gray-400 text-xs sm:text-sm lg:text-sm transition-colors duration-300 hover:text-gray-300">
            Copyright © 2025 All Rights Reserved by Office of Student Affairs, MIT ADT University.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default StudentAffairsFooter;