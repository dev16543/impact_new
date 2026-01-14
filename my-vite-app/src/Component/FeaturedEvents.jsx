import React, { useState } from 'react';
import { Calendar, MapPin, X, Clock } from 'lucide-react';
import Trek from '../assets/Trek.webp';
// import Induction from '../assets/pastevents/timeline_23-24/Jul.png';
// import Onam from '../assets/onam.jpg'
// import Garba from '../assets/pastevents/garba.png'
import VSM from '../assets/pastevents/vsm2026poster2.png'
// import Football from '../assets/pastevents/football.png'
// import Garbaw from '../assets/garbaw.webp'
import Persona from '../assets/pastevents/Persona2026.png'
import SciFest from '../assets/GalleryHome/ClubCatalyst.png'
const UpcomingEventsPage = ({ events, className = "" }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Demo data
  const demoEvents = [
    {
      id: 1,
  title: "Vishwanath Sports Meet (VSM) 2026",
  date: "23 January – 28 January 2026",
  time: "All Day",
  location: "Pune, Maharashtra, India",
  venue: "MIT Art, Design and Technology University Campus",
  attendees: "10,000+ athletes from institutions across India",
  price: "As per sport / Registration based",
  image: VSM, 
  category: "Sports Event",
  featured: true,
  description:
    "Vishwanath Sports Meet (VSM) 2026 is the 8th National-Level Inter-Collegiate and Inter-University sports championship organized by MIT Art, Design and Technology University, Pune. Guided by the theme 'Nation Building Through Sports', the event brings together athletes from across the country to compete in over 15 sporting disciplines, promoting sportsmanship, unity, leadership, and holistic development.",
  organizer: "MIT ADT University, Pune",
    },
    {
      id: 2,
  title: "Persona 2026",
  date: "19 – 21 February 2026",
  time: "All Day",
  location: "Pune, Maharashtra, India",
  venue: "MIT Art, Design and Technology University Campus",
  attendees: "Thousands of students across multiple universities",
  price: "Varies by event",
  image: Persona, 
  category: "Cultural Festival",
  featured: true,
  description:
    "Persona is MIT ADT University’s flagship annual cultural fest and a three-day celebration of student talent, creativity, and holistic development. More than entertainment, Persona functions as an intensive leadership development platform, reflecting the university’s vision of nurturing well-rounded individuals who excel beyond academics. The fest sets a benchmark for inter-university cultural events through innovation, collaboration, and creative excellence.",
  organizer: "MIT ADT University, Pune",
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
  title: "SciFest 2026 – Club Catalyst",
  date: "27 – 28 February 2026",
  time: "All Day",
  location: "Pune, Maharashtra, India",
  venue: "As per Announcement",
  attendees: "50+ student clubs and university-wide participation",
  price: "Free",
  image: SciFest, 
  category: "Innovation & Leadership",
  featured: true,
  description:
    "SciFest 2026 – Club Catalyst is a flagship innovation and leadership showcase of MIT ADT University, organized by the Office of Student Affairs. The event brings together 50+ student clubs to present innovative ideas, entrepreneurial initiatives, and collaborative solutions. Inaugurated by the Executive President and Vice-Chancellor and led by Prof. Dr. Suraj Bhoyar, the event fosters a culture of creativity, leadership, collaboration, and real-world problem solving among students.",
  organizer: "Office of Student Affairs, MIT ADT University",
}
    
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
