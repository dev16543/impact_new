import React, { useState } from 'react';
import { Send, User, Phone, Mail, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import banner from '../assets/banner.png';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLScD3UsXRFe-3h9AbDCDBfJCLTYEJfDzbMx4RTfrDW4nSy1sWw/formResponse";
  const FORM_FIELDS = {
    fullName: "entry.43817808",
    phoneNumber: "entry.1277542703",
    emailAddress: "entry.1720840826",
    message: "entry.582355980"  // Reusing the LinkedIn entry for message
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all required fields
    if (!formData.fullName.trim() || !formData.phoneNumber.trim() || 
        !formData.emailAddress.trim() || !formData.message.trim()) {
      setSubmitStatus('error');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Create FormData object for Google Forms
      const googleFormData = new FormData();
      googleFormData.append(FORM_FIELDS.fullName, formData.fullName);
      googleFormData.append(FORM_FIELDS.phoneNumber, formData.phoneNumber);
      googleFormData.append(FORM_FIELDS.emailAddress, formData.emailAddress);
      googleFormData.append(FORM_FIELDS.message, formData.message);

      // Submit to Google Form
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        body: googleFormData,
        mode: 'no-cors' // Important: Google Forms requires no-cors mode
      });

      // If we reach here, assume success (no-cors mode doesn't return response)
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        fullName: '',
        phoneNumber: '',
        emailAddress: '',
        message: ''
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Banner Image */}
      <div className="w-full h-64 md:h-80 relative overflow-hidden">
        <img
          src={banner}
          alt="Contact Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002346]/40 to-[#2C6ECA]/40"></div>
      </div>

      {/* Contact Form Section */}
      <div className="relative -mt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20 relative">
            
            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <p className="text-green-800">Thank you! Your message has been sent successfully.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                <AlertCircle className="h-5 w-5 text-red-600" />
                <p className="text-red-800">Please fill out all required fields correctly.</p>
              </div>
            )}

            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#002346] to-[#2C6ECA] bg-clip-text text-transparent mb-4">
                Connect with us!
              </h1>
              <p className="text-gray-600 text-lg max-w-md mx-auto">
                Get in touch with us to inspire, cultivate and achieve togetherness.
              </p>
            </div>

            <div className="space-y-6">
              {/* Full Name */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name*
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400 text-blue-700 " />
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2C6ECA] focus:border-transparent transition-all duration-200 bg-white/50 hover:bg-white/70"
                    placeholder="Enter your full name"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number*
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
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2C6ECA] focus:border-transparent transition-all duration-200 bg-white/50  hover:bg-white/70"
                    placeholder="Your phone number"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address*
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
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2C6ECA] focus:border-transparent transition-all duration-200 bg-white/50 hover:bg-white/70"
                    placeholder="Your email address"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message*
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-gray-400 group-focus-within:text-blue-700 transition-colors" />
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2C6ECA] focus:border-transparent transition-all duration-200 bg-white/50  hover:bg-white/70 resize-none"
                    placeholder="Write your message here..."
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#002346] to-[#2C6ECA] text-white py-3 px-6 rounded-xl font-medium text-lg hover:from-[#00172a] hover:to-[#1d4e8c] transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#002346] to-[#2C6ECA] rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#2C6ECA] to-[#002346] rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="h-20"></div>
    </div>
  );
};

export default ContactUs;