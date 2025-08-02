import React, { useState } from 'react';
import { Send, User, Linkedin, Phone, Mail } from 'lucide-react';
import bannerImg from '../assets/banner.png';
import HeroBanner from '../Component/HeroBanner';
import past_ev from '../assets/Bannerpage/past_events.png';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    linkedinInfo: '',
    phoneNumber: '',
    emailAddress: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Banner Image */}
      <div className="w-full h-64 md:h-80 relative overflow-hidden">
        <img
          src={bannerImg}
          alt="Contact Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002346]/40 to-[#2C6ECA]/40"></div>
      </div>

      {/* Contact Form Section */}
      <div className="relative -mt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20 relative">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#002346] to-[#2C6ECA] bg-clip-text text-transparent mb-4">
                Subscribe To Our Newsletter
              </h1>
              <p className="text-gray-600 text-lg max-w-md mx-auto">
                Get in touch with us to inspire, cultivate and achieve togetherness.
              </p>
            </div>

            <div className="space-y-6">
              {/* Full Name */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400 group-focus-within:text-blue-700 transition-colors" />
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2C6ECA] focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm hover:bg-white/70"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>

              {/* LinkedIn Info */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  LinkedIn Info
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Linkedin className="h-5 w-5 text-gray-400 group-focus-within:text-blue-700 transition-colors" />
                  </div>
                  <input
                    type="text"
                    name="linkedinInfo"
                    value={formData.linkedinInfo}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2C6ECA] focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm hover:bg-white/70"
                    placeholder="Your LinkedIn profile URL"
                    required
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400 group-focus-within:text-blue-700 transition-colors" />
                  </div>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2C6ECA] focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm hover:bg-white/70"
                    placeholder="Your phone number"
                    required
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-blue-700 transition-colors" />
                  </div>
                  <input
                    type="email"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2C6ECA] focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm hover:bg-white/70"
                    placeholder="Your email address"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#002346] to-[#2C6ECA] text-white py-3 px-6 rounded-xl font-medium text-lg hover:from-[#00172a] hover:to-[#1d4e8c] transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#002346] to-[#2C6ECA] rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#2C6ECA] to-[#002346] rounded-full opacity-20 blur-xl"></div>
          </form>
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="h-20"></div>
    </div>
  );
};

export default ContactUs;