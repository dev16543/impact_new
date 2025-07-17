import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import MITLogo from '../assets/MITLogo.jpg';
import OSALogo from '../assets/OSALogo.png';

const StudentAffairsFooter = () => {
  return (
    <footer className="bg-gray-800 text-white relative overflow-hidden py-6">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform rotate-45"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-6 relative z-10">
        {/* Main Footer Content */}
        <div className="flex flex-row justify-between items-start gap-4 mb-2 w-full">
          
          {/* Logo and Title Section */}
          <div className="flex flex-col items-start">
            <div>
              <div className="w-60 h-20 mb-1 flex items-center">
                <img src={OSALogo} alt="OSA Logo" className="h-full w-auto object-contain" />
              </div>
              <div className="flex flex-col items-start gap-1 min-w-[220px]">
                <div className="w-40 mt-1 mb-1 transition-transform duration-300 hover:scale-105">
                  <img src={MITLogo} alt="MIT ADT University Logo" className="w-full h-16 object-contain" />
                </div>
                <h3 className="text-white font-semibold text-base mb-1 transition-colors duration-300 hover:text-red-300">Council Connect</h3>
                <p className="text-gray-400 text-sm transition-colors duration-300 hover:text-gray-300">Connecting students through leadership and service</p>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-start min-w-[220px]">
            <h4 className="text-white font-semibold text-base mb-3">Quick Links</h4>
            <nav className="flex w-full">
              <div className="flex flex-col gap-2 flex-1">
                <a href="#" className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium relative">
                  <span className="inline-block w-2 h-2 rounded-full bg-white opacity-80 group-hover:opacity-100 transition-all duration-300"></span>
                  Home
                  <span className="block h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-red-500 absolute left-0 -bottom-0.5"></span>
                </a>
                <a href="#" className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium relative">
                  <span className="inline-block w-2 h-2 rounded-full bg-white opacity-80 group-hover:opacity-100 transition-all duration-300"></span>
                  Our Team
                  <span className="block h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-red-500 absolute left-0 -bottom-0.5"></span>
                </a>
                <a href="#" className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium relative">
                  <span className="inline-block w-2 h-2 rounded-full bg-white opacity-80 group-hover:opacity-100 transition-all duration-300"></span>
                  Calendar
                  <span className="block h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-red-500 absolute left-0 -bottom-0.5"></span>
                </a>
                <a href="#" className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium relative">
                  <span className="inline-block w-2 h-2 rounded-full bg-white opacity-80 group-hover:opacity-100 transition-all duration-300"></span>
                  Contact Us
                  <span className="block h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-red-500 absolute left-0 -bottom-0.5"></span>
                </a>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <a href="#" className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium relative">
                  <span className="inline-block w-2 h-2 rounded-full bg-white opacity-80 group-hover:opacity-100 transition-all duration-300"></span>
                  Events
                  <span className="block h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-red-500 absolute left-0 -bottom-0.5"></span>
                </a>
                <a href="#" className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium relative">
                  <span className="inline-block w-2 h-2 rounded-full bg-white opacity-80 group-hover:opacity-100 transition-all duration-300"></span>
                  Club
                  <span className="block h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-red-500 absolute left-0 -bottom-0.5"></span>
                </a>
                <a href="#" className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium relative">
                  <span className="inline-block w-2 h-2 rounded-full bg-white opacity-80 group-hover:opacity-100 transition-all duration-300"></span>
                  Contact Us
                  <span className="block h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-red-500 absolute left-0 -bottom-0.5"></span>
                </a>
              </div>
            </nav>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-end min-w-[140px]">
            <h4 className="text-white font-semibold text-base mb-3">Follow Us</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-700 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center pt-2 border-t border-gray-700 mt-2">
          <p className="text-gray-400 text-sm transition-colors duration-300 hover:text-gray-300">
            Copyright © 2025 All Rights Reserved by Office of Student Affairs, MIT ADT University.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default StudentAffairsFooter;