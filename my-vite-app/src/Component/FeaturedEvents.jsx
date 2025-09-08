import React, { useState } from 'react';
import { Calendar, MapPin, X, Clock } from 'lucide-react';
import Trek from '../assets/Trek.webp';
import Induction from '../assets/pastevents/timeline_23-24/Jul.png';
import Onam from '../assets/onam.jpg'
import Garba from '../assets/pastevents/garba.png'
import Football from '../assets/pastevents/football.png'
import Garbaw from '../assets/garbaw.webp'

const UpcomingEventsPage = ({ events, className = "" }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Demo data
  const demoEvents = [
    {
      id: 1,
      title: "MIT ADT Dandiya Nights",
      date: "31 September and 1 October 2025",
      time: "Evening onwards",
      location: "Pune, Maharashtra, India",
      venue: "MIT ADT University Campus",
      attendees: "10000+",
      price: "Free",
      image: Garba,
      category: "Cultural Festival",
      featured: true,
      description:
        "Join the vibrant celebration of Navratri at MIT ADT University with colorful Dandiya Nights full of music, dance, and festive joy.",
      organizer: "MIT ADT University",
    },
    {
      id: 2,
      title: "MIT ADT Onam Celebration",
      date: "12 September 2025",
      time: "10:00 AM - 1:00 PM",
      location: "Pune, Maharashtra, India",
      venue: "MIT ADT University",
      attendees: "300+",
      price: "Free",
      image: Onam,
      category: "Cultural Festival",
      featured: true,
      description:
        "Celebrate the vibrant festival of Onam with stunning pookalams, traditional dances, and cultural performances showcasing the spirit of Kerala.",
      organizer: "MIT ADT University",
    },
    {
      id: 3,
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
      description:
        "Join the MIT Adventure Club for Trek N Trail every weekend. Experience thrilling trekking routes with expert guides, fostering camaraderie and a spirit of exploration through nature-focused adventure activities that connect you with the great outdoors.",
      organizer: "MIT Adventure Club & Kafila Adventures",
    },
    {
      id: 4,
      title: "Annual Inter Collegiate Sports",
      date: "9 September 2025 to 30 October 2025",
      time: "All Day",
      location: "Pune, Maharashtra, India",
      venue: "MIT ADT University Campus Sports Complex",
      attendees: "4000+ participants from 140+ institutions",
      price: "Free",
      image: Football,
      category: "Sports Event",
      featured: true,
      description:
        "A grand state-level inter-collegiate and inter-university sports competition featuring 15 sports categories including cricket, basketball, football, badminton, kho-kho, kabaddi, tennis, volleyball, and more.",
      organizer: "MIT ADT University",
    },
    {
      id: 5,
      title: "Garba Workshop - Leap of Grace",
      date: "September 2025",
      time: "Evening onwards",
      location: "Pune, Maharashtra, India",
      venue: "MIT ADT University Campus",
      attendees: "700+",
      price: "Free",
      image: Garbaw,
      category: "Cultural Festival",
      featured: true,
      description:
        "A lively workshop focusing on traditional Garba dance with enthusiastic participation from students attending the Annual Inter Collegiate Sports event.",
      organizer: "MIT ADT University",
    },
    {
      id: 6,
      title: "ADT Talk - SHD",
      date: "29 September 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Pune, Maharashtra, India",
      venue: "School of Holistic Development, MIT ADT University",
      attendees: "500+",
      price: "Free",
      image: Induction,
      category: "Oratory & Public Speaking",
      featured: true,
      description:
        "An engaging oratorical championship and public speaking platform organized by the School of Holistic Development. ADT Talk is a multi-round event aimed at enhancing public speaking skills, confidence, and leadership among students across the university.",
      organizer: "MIT ADT University - School of Holistic Development",
    },
  ];

  const data = events?.length ? events : demoEvents;

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

              {/* Details Button */}
              <div className="mt-6 flex gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openEventDetails(event);
                  }}
                  className="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-300"
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpcomingEventsPage;
