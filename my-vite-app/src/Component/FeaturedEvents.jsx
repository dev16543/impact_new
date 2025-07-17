import React, { useState } from 'react';
import { Calendar, MapPin, Users, X, Clock, Tag, ExternalLink } from 'lucide-react';

const UpcomingEventsPage = ({ events, className = "" }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [registeredEvents, setRegisteredEvents] = useState(new Set());

  // Demo data with vibrant event images
  const demoEvents = [
    {
      id: 1,
      title: "Tech Innovation Summit 2025",
      date: "March 15, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "San Francisco, CA",
      venue: "Moscone Center",
      attendees: "2.5K",
      price: "$299",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop",
      category: "Technology",
      featured: true,
      description: "Join industry leaders discussing the future of AI and Web3. This summit brings together top innovators, entrepreneurs, and thought leaders to explore cutting-edge technologies that will shape tomorrow's digital landscape.",
      highlights: ["AI & Machine Learning", "Web3 & Blockchain", "Startup Pitches", "Networking Sessions"],
      organizer: "Tech Innovations Inc.",
      tags: ["AI", "Web3", "Innovation", "Networking"]
    },
    {
      id: 2,
      title: "Design Conference 2025",
      date: "April 22, 2025",
      time: "10:00 AM - 8:00 PM",
      location: "New York, NY",
      venue: "Jacob K. Javits Convention Center",
      attendees: "1.8K",
      price: "$199",
      image: "https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=800&h=500&fit=crop",
      category: "Design",
      featured: true,
      description: "Explore the latest trends in UX/UI and creative design. Connect with design professionals, learn from industry experts, and discover new tools and techniques that will elevate your creative work.",
      highlights: ["UX/UI Trends", "Design Systems", "Creative Workshops", "Portfolio Reviews"],
      organizer: "Design Masters Community",
      tags: ["UX", "UI", "Design", "Creative"]
    },
    {
      id: 3,
      title: "Startup Pitch Night",
      date: "March 8, 2025",
      time: "6:00 PM - 10:00 PM",
      location: "Austin, TX",
      venue: "Austin Convention Center",
      attendees: "800",
      price: "$75",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=500&fit=crop",
      category: "Business",
      featured: true,
      description: "Watch innovative startups pitch to top investors. An evening of entrepreneurial spirit, groundbreaking ideas, and potential investment opportunities that could change the future.",
      highlights: ["Startup Pitches", "Investor Panel", "Networking", "Awards Ceremony"],
      organizer: "Startup Austin",
      tags: ["Startup", "Investment", "Entrepreneurship", "Pitching"]
    },
    {
      id: 4,
      title: "Music & Arts Festival",
      date: "May 10, 2025",
      time: "12:00 PM - 11:00 PM",
      location: "Miami, FL",
      venue: "Bayfront Park",
      attendees: "5K",
      price: "$150",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=500&fit=crop",
      category: "Entertainment",
      featured: true,
      description: "Three days of music, art, and cultural celebration. Experience diverse performances, art installations, and cultural activities in the heart of Miami's vibrant arts scene.",
      highlights: ["Live Music", "Art Installations", "Food Vendors", "Cultural Performances"],
      organizer: "Miami Arts Council",
      tags: ["Music", "Art", "Culture", "Festival"]
    },
    {
      id: 5,
      title: "Wellness Retreat",
      date: "April 5, 2025",
      time: "8:00 AM - 8:00 PM",
      location: "Napa Valley, CA",
      venue: "Auberge du Soleil",
      attendees: "300",
      price: "$450",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
      category: "Wellness",
      featured: true,
      description: "Reconnect with nature and find your inner peace. A transformative experience combining meditation, yoga, healthy cuisine, and mindfulness practices in a serene setting.",
      highlights: ["Meditation Sessions", "Yoga Classes", "Healthy Cuisine", "Nature Walks"],
      organizer: "Mindful Living Institute",
      tags: ["Wellness", "Meditation", "Yoga", "Health"]
    },
    {
      id: 6,
      title: "Blockchain Summit",
      date: "June 12, 2025",
      time: "9:00 AM - 7:00 PM",
      location: "Seattle, WA",
      venue: "Washington State Convention Center",
      attendees: "3.2K",
      price: "$350",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop",
      category: "Technology",
      featured: true,
      description: "Diving deep into cryptocurrency and blockchain technology. Learn from industry pioneers, explore new applications, and understand the future of decentralized systems.",
      highlights: ["Cryptocurrency Trends", "DeFi Applications", "NFT Marketplace", "Technical Workshops"],
      organizer: "Blockchain Alliance",
      tags: ["Blockchain", "Cryptocurrency", "DeFi", "Technology"]
    }
  ];

  const data = events?.length ? events : demoEvents;

  const handleRegister = (eventId) => {
    const newRegistered = new Set(registeredEvents);
    if (newRegistered.has(eventId)) {
      newRegistered.delete(eventId);
    } else {
      newRegistered.add(eventId);
    }
    setRegisteredEvents(newRegistered);
  };

  const openEventDetails = (event) => {
    setSelectedEvent(event);
  };

  const closeEventDetails = () => {
    setSelectedEvent(null);
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
              
              {/* Price Tag */}
              <div className="absolute bottom-4 right-4">
                <span className="px-3 py-1 bg-green-500 text-white text-sm font-bold rounded-full">
                  {event.price}
                </span>
              </div>
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
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-500" />
                  {event.attendees} attendees
                </div>
              </div>
              
              {/* Register Button */}
              <div className="mt-6 flex gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRegister(event.id);
                  }}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
                    registeredEvents.has(event.id)
                      ? 'bg-green-500 text-white hover:bg-green-600'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  {registeredEvents.has(event.id) ? 'Registered ✓' : 'Register'}
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

      {/* Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
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
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="w-5 h-5 text-blue-500" />
                  <span>{selectedEvent.attendees} attendees</span>
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

              {/* Highlights */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Event Highlights</h3>
                <div className="grid md:grid-cols-2 gap-2">
                  {selectedEvent.highlights?.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedEvent.tags?.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Organizer */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Organizer</h3>
                <p className="text-gray-600">{selectedEvent.organizer}</p>
              </div>

              {/* Price and Register */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <span className="text-2xl font-bold text-green-600">{selectedEvent.price}</span>
                  <span className="text-gray-500 ml-2">per person</span>
                </div>
                <button
                  onClick={() => handleRegister(selectedEvent.id)}
                  className={`py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    registeredEvents.has(selectedEvent.id)
                      ? 'bg-green-500 text-white hover:bg-green-600'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  {registeredEvents.has(selectedEvent.id) ? 'Registered ✓' : 'Register Now'}
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