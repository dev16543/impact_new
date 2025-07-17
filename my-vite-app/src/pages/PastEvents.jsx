import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PastEventsTimeline = () => {
  const [selectedMonth, setSelectedMonth] = useState('May');
  
  const months = ['May', 'Jun', 'May', 'Jun', 'May', 'May'];
  const monthsBottom = ['Jan', 'Jan', 'Jan', 'Jan', 'Jan', 'Jan'];
  
  const events = [
    {
      id: 1,
      image: "/api/placeholder/120/120",
      title: "National Youth Celebration",
      details: [
        "Circle Rally",
        "Film in Co-operation with Health and Mass Representatives",
        "38th AIU Inter University Youth Festival",
        "Confluence 2024"
      ],
      position: "right"
    },
    {
      id: 2,
      image: "/api/placeholder/120/120", 
      title: "National Youth Celebration",
      details: [
        "Circle Rally",
        "Film in Co-operation with Health and Mass Representatives",
        "38th AIU Inter University Youth Festival",
        "Confluence 2024"
      ],
      position: "left"
    },
    {
      id: 3,
      image: "/api/placeholder/120/120",
      title: "National Youth Celebration", 
      details: [
        "Circle Rally",
        "Film in Co-operation with Health and Mass Representatives",
        "38th AIU Inter University Youth Festival",
        "Confluence 2024"
      ],
      position: "right"
    },
    {
      id: 4,
      image: "/api/placeholder/120/120",
      title: "National Youth Celebration",
      details: [
        "Circle Rally", 
        "Film in Co-operation with Health and Mass Representatives",
        "38th AIU Inter University Youth Festival",
        "Confluence 2024"
      ],
      position: "left"
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Past Events Timeline</h1>
        <p className="text-gray-600 mb-6">Academic year 2024-25</p>
        
        {/* Navigation arrows */}
        <div className="flex justify-center items-center gap-4 mb-6">
          <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
            <ChevronLeft size={20} />
          </button>
          <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
        
        {/* Month tabs - top row */}
        <div className="flex justify-center gap-2 mb-3">
          {months.map((month, index) => (
            <button
              key={`top-${index}`}
              onClick={() => setSelectedMonth(month)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedMonth === month 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
              }`}
            >
              {month}
            </button>
          ))}
        </div>
        
        {/* Month tabs - bottom row */}
        <div className="flex justify-center gap-2">
          {monthsBottom.map((month, index) => (
            <button
              key={`bottom-${index}`}
              onClick={() => setSelectedMonth(month)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedMonth === month 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
              }`}
            >
              {month}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-600 h-full"></div>
        
        {/* Events */}
        <div className="space-y-12">
          {events.map((event, index) => (
            <div key={event.id} className="relative flex items-center">
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full z-10"></div>
              
              {/* Event content */}
              <div className={`w-1/2 ${event.position === 'right' ? 'ml-auto pl-8' : 'pr-8'}`}>
                <div className="flex items-start gap-4">
                  {/* Event image */}
                  <div className={`flex-shrink-0 ${event.position === 'left' ? 'order-2' : ''}`}>
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center transform rotate-12 shadow-lg">
                      <div className="text-white text-2xl font-bold">🎉</div>
                    </div>
                  </div>
                  
                  {/* Event details */}
                  <div className={`flex-1 ${event.position === 'left' ? 'order-1 text-right' : ''}`}>
                    {/* Date pill */}
                    <div className={`inline-block mb-3 ${event.position === 'left' ? 'float-right' : ''}`}>
                      <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        {selectedMonth}
                      </div>
                    </div>
                    
                    {/* Event card */}
                    <div className="bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                      <h3 className="font-bold text-lg mb-3">{event.title}</h3>
                      <ul className="space-y-1">
                        {event.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <span className="text-blue-200 mt-1">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PastEventsTimeline;