import React, { useState } from 'react';
import { Calendar, MapPin, Users, X, Clock, Tag, ExternalLink, User, Phone, GraduationCap, Building } from 'lucide-react';
import Spectra from '../assets/pastevents/timeline_23-24/Oct.png';
import Club from '../assets/GalleryHome/ClubCatalyst.png';
import Ganesh from "../assets/pastevents/GaneshFest.png";
import Induction from '../assets/pastevents/timeline_23-24/Jul.png';
import Blood from '../assets/pastevents/timeline_23-24/Nov.jpg';
import Trek from '../assets/Trek.webp';

const UpcomingEventsPage = ({ events, className = "" }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [registeredEvents, setRegisteredEvents] = useState(new Set());
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [registrationEventId, setRegistrationEventId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    enrollmentNo: '',
    college: '',
    year: '',
    contactNo: ''
  });

  // Demo data with registration links added
  const demoEvents = [
    {
      id: 1,
      title: "Mega Blood Donation Camp",
      date: "Every Month",
      time: "All Day",
      location: "Pune, Maharashtra, India", 
      venue: "IT Building",
      attendees: "200+",
      price: "Free",
      image: Blood,
      category: "Social Service",
      featured: true,
      description: "MIT ADT University organizing a Blood Donation Drive, reaffirming its commitment to social welfare and community engagement. Get ready to witnessing enthusiastic participation from students, faculty, and staff.",
      organizer: "MIT ADT University with AFMC",
      tags: ["Blood Donation", "AFMC", "NCC", "NSS", "Healthcare"],
      registrationLink: "https://forms.google.com/blood-donation-registration"
    },
    {
      id: 2,
      title: "Trek N Trail (MIT Adv. Club)",
      date: "Every Weekend",
      time: "Friday 10:30 PM",
      location: "As per Announcement",
      venue: "As per Announcement",
      attendees: "30",
      price: "Free",
      image: Trek,
      category: "Adventure",
      featured: true,
      description: "Join the MIT Adventure Club for Trek N Trail every weekend. Experience thrilling trekking routes with expert guides, fostering camaraderie and a spirit of exploration through nature-focused adventure activities that connect you with the great outdoors.",
      organizer: "MIT Adventure Club & Kafila Adventures",
      tags: ["Trekking", "Adventure", "Nature", "Outdoor"],
      registrationLink: "https://forms.google.com/trek-registration"
    },
    {
      id: 3,
      title: "SPECTRA",
      date: "7 August 2025",
      time: "6:00 PM - 8:00 PM",
      location: "MIT ADT University",
      venue: "Swami Vivekananda Mandapam",
      attendees: "1000",
      price: "Free",
      image: Spectra,
      category: "Cultural Event",
      featured: true,
      description: "SPECTRA is MIT ADT University's monthly cultural extravaganza showcasing a vibrant mix of music, dance, theater, and artistic performances by talented students. This event fosters cultural appreciation and unity, providing a dynamic platform for diverse talent to shine and celebrate creativity.",
      organizer: "MIT Impact Student Council",
      tags: ["Music", "Dance", "Culture", "Art", "Performance"],
      registrationLink: "https://eventbrite.com/spectra-cultural-event"
    },
    {
      id: 4,
      title: "Ganesh Chaturthi Celebration",
      date: "August 2025",
      time: "10:00 AM - 08:00 PM",
      location: "MIT ADT University Campus",
      venue: "MIT ADT University Campus",
      attendees: "2K+",
      price: "Free",
      image: Ganesh,
      category: "Festival",
      featured: true,
      description: "Join us for the grand celebration of Lord Ganesha's festival featuring traditional rituals, cultural performances including classical and folk dances, devotional music, art installations, and community feast. Experience the spiritual essence and vibrant festivities of this beloved Hindu festival.",
      highlights: ["Traditional Rituals", "Cultural Performances", "Community Feast", "Art Installations"],
      organizer: "MIT ADT University Cultural Committee",
      tags: ["Festival", "Culture", "Tradition", "Community"],
      registrationLink: "https://forms.google.com/ganesh-celebration"
    },
    {
      id: 5,
      title: "Club Catalyst",
      date: "7 August 2025",
      time: "1:00 PM - 3:30 PM",
      location: "MIT ADT University",
      venue: "Bharat Ratna APJ Abdul Kalam Mandapam",
      attendees: "2000+",
      price: "Free",
      image: Club,
      category: "Innovation",
      featured: true,
      description: "Club Catalyst is MIT ADT University's flagship event bringing together 50+ student clubs to showcase their innovative ideas and entrepreneurial spirit. This dynamic platform fosters collaboration, leadership, and meaningful change across various domains while celebrating student innovation.",
      highlights: ["50+ Club Showcases", "Innovation Displays", "Networking", "Leadership Development"],
      organizer: "MIT ADT Office of Student Affairs",
      tags: ["Innovation", "Entrepreneurship", "Leadership", "Collaboration"],
      registrationLink: "https://forms.google.com/club-catalyst"
    },
    {
      id: 6,
      title: "Induction Program",
      date: "6-8 August 2025",
      time: "9:00 AM - 5:00 PM",
      location: "MIT ADT University",
      venue: "Multiple Venues",
      attendees: "4000+",
      price: "Free",
      image: Induction,
      category: "Orientation",
      featured: true,
      description: "A comprehensive induction program designed to warmly welcome new students and their families to MIT ADT University. The program introduces campus facilities, faculty, academic culture, and provides essential orientation for a smooth transition into university life.",
      highlights: ["Campus Tour", "Faculty Introduction", "Academic Orientation", "Student Support Services"],
      organizer: "MIT ADT University Administration",
      tags: ["Orientation", "Welcome", "Academic", "Student Support"],
      registrationLink: "https://university-portal.com/induction-program"
    }
  ];

  const data = events?.length ? events : demoEvents;

  // Updated handleRegister function to redirect to external links
  const handleRegister = (eventId) => {
    const event = data.find(e => e.id === eventId);
    
    if (registeredEvents.has(eventId)) {
      // If already registered, unregister
      const newRegistered = new Set(registeredEvents);
      newRegistered.delete(eventId);
      setRegisteredEvents(newRegistered);
    } else {
      // Check if event has a registration link
      if (event && event.registrationLink) {
        // Redirect to external registration link
        window.open(event.registrationLink, '_blank');
        
        // Don't mark as registered automatically - just redirect
      } else {
        // Fallback to form modal if no link provided
        setSelectedEvent(null);
        setRegistrationEventId(eventId);
        setShowRegistrationForm(true);
      }
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.enrollmentNo || !formData.college || !formData.year || !formData.contactNo) {
      alert('Please fill in all fields');
      return;
    }

    // Add to registered events
    const newRegistered = new Set(registeredEvents);
    newRegistered.add(registrationEventId);
    setRegisteredEvents(newRegistered);

    // Reset form and close modal
    setFormData({
      name: '',
      enrollmentNo: '',
      college: '',
      year: '',
      contactNo: ''
    });
    setShowRegistrationForm(false);
    setRegistrationEventId(null);

    alert('Registration successful!');
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const closeRegistrationForm = () => {
    setShowRegistrationForm(false);
    setRegistrationEventId(null);
    setFormData({
      name: '',
      enrollmentNo: '',
      college: '',
      year: '',
      contactNo: ''
    });
  };

  const openEventDetails = (event) => {
    setSelectedEvent(event);
  };

  const closeEventDetails = () => {
    setSelectedEvent(null);
  };

  const getRegisteredEventTitle = () => {
    const event = data.find(e => e.id === registrationEventId);
    return event ? event.title : 'Event';
  };

  return (
    <div className={`w-full max-w-6xl mx-auto p-4 ${className}`}>
      {/* Header */}
      <div className="text-center mb-8 mt-[100px]">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Upcoming Events</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover amazing events, connect with like-minded people, and create unforgettable memories
        </p>
      </div>

      {/* Events Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            onClick={() => openEventDetails(event)}
          >
            {/* Event Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
                  {event.category}
                </span>
              </div>
              
              {/* Featured Badge */}
              {event.featured && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xs font-medium rounded-full">
                    FEATURED
                  </span>
                </div>
              )}
            </div>

            {/* Event Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                {event.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {event.description}
              </p>
              
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  {event.date}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  {event.location}
                </div>
              </div>
              
              {/* Register Button with External Link Icon */}
              <div className="mt-6 flex gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRegister(event.id);
                  }}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                    registeredEvents.has(event.id)
                      ? 'bg-green-500 text-white hover:bg-green-600'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  {registeredEvents.has(event.id) ? 'Registered ✓' : 'Register'}
                  {!registeredEvents.has(event.id) && event.registrationLink && <ExternalLink className="w-4 h-4" />}
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openEventDetails(event);
                  }}
                  className="py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-300"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Registration Form Modal */}
      {showRegistrationForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Event Registration</h2>
                  <p className="text-sm text-gray-600 mt-1">Register for: {getRegisteredEventTitle()}</p>
                </div>
                <button
                  onClick={closeRegistrationForm}
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Registration Form */}
            <div className="p-6 space-y-4">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Enrollment Number Field */}
              <div>
                <label htmlFor="enrollmentNo" className="block text-sm font-medium text-gray-700 mb-2">
                  <Tag className="w-4 h-4 inline mr-2" />
                  Enrollment Number *
                </label>
                <input
                  type="text"
                  id="enrollmentNo"
                  name="enrollmentNo"
                  value={formData.enrollmentNo}
                  onChange={handleFormChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your enrollment number"
                />
              </div>

              {/* College Field */}
              <div>
                <label htmlFor="college" className="block text-sm font-medium text-gray-700 mb-2">
                  <Building className="w-4 h-4 inline mr-2" />
                  College/University *
                </label>
                <input
                  type="text"
                  id="college"
                  name="college"
                  value={formData.college}
                  onChange={handleFormChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your college/university name"
                />
              </div>

              {/* Year Field */}
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-2">
                  <GraduationCap className="w-4 h-4 inline mr-2" />
                  Academic Year *
                </label>
                <select
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleFormChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select your year</option>
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                  <option value="Graduate">Graduate</option>
                  <option value="Post Graduate">Post Graduate</option>
                </select>
              </div>

              {/* Contact Number Field */}
              <div>
                <label htmlFor="contactNo" className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Contact Number *
                </label>
                <input
                  type="tel"
                  id="contactNo"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleFormChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your contact number"
                />
              </div>

              {/* Form Actions */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={closeRegistrationForm}
                  className="flex-1 py-3 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleFormSubmit}
                  className="flex-1 py-3 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50" style={{ top: '80px' }}>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* Close Button */}
              <button
                onClick={closeEventDetails}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              {/* Event Title Overlay */}
              <div className="absolute bottom-4 left-4 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-blue-500 text-xs font-medium rounded-full">
                    {selectedEvent.category}
                  </span>
                  {selectedEvent.featured && (
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-xs font-medium rounded-full">
                      FEATURED
                    </span>
                  )}
                </div>
                <h2 className="text-2xl font-bold">{selectedEvent.title}</h2>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Event Details */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <span>{selectedEvent.date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <span>{selectedEvent.time}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-5 h-5 text-blue-500" />
                  <span>{selectedEvent.location}</span>
                </div>
              </div>

              {/* Venue */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Venue</h3>
                <p className="text-gray-600">{selectedEvent.venue}</p>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">About This Event</h3>
                <p className="text-gray-600 leading-relaxed">{selectedEvent.description}</p>
              </div>

              {/* Organizer */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Organizer</h3>
                <p className="text-gray-600">{selectedEvent.organizer}</p>
              </div>

              {/* Register Button with External Link Icon */}
              <div className="flex justify-center">
                <button
                  onClick={() => handleRegister(selectedEvent.id)}
                  className={`py-3 px-8 rounded-lg font-medium transition-all duration-300 text-lg flex items-center justify-center gap-2 ${
                    registeredEvents.has(selectedEvent.id)
                      ? 'bg-green-500 text-white hover:bg-green-600'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  {registeredEvents.has(selectedEvent.id) ? 'Registered ✓' : 'Register Now'}
                  {!registeredEvents.has(selectedEvent.id) && selectedEvent.registrationLink && <ExternalLink className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpcomingEventsPage;