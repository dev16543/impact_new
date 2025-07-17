import React, { useState, useEffect } from 'react';

export default function CompanyTimeline() {
  const [selectedMonth, setSelectedMonth] = useState('May');
  const [selectedYear, setSelectedYear] = useState('2024-25');

  // Available academic years
  const academicYears = ['2022-23', '2023-24', '2024-25', '2025-26'];
  const currentYearIndex = academicYears.indexOf(selectedYear);

  // Sample milestone data - organized by academic year and month
  const timelineData = {
    '2022-23': {
      'May': [
        {
          id: 1,
          month: 'May',
          image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=300&h=300&fit=crop',
          title: 'National Youth Celebration 2023',
          details: [
            { text: 'National Youth Celebration', pdfUrl: 'https://www.example.com/youth-celebration-2023.pdf' },
            { text: 'Dance Rally', pdfUrl: 'https://www.example.com/dance-rally-2023.pdf' },
            { text: 'Interactive Session with Hostel Representatives', pdfUrl: 'https://www.example.com/hostel-session-2023.pdf' },
            { text: '22nd JNU Inter University Youth Festival', pdfUrl: 'https://www.example.com/jnu-festival-2023.pdf' },
            { text: 'Conference 2023', pdfUrl: 'https://www.example.com/conference-2023.pdf' }
          ]
        }
      ],
      'Jun': [
        {
          id: 2,
          month: 'Jun',
          image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=300&fit=crop',
          title: 'Summer Festival 2023',
          details: [
            { text: 'Music Concert', pdfUrl: 'https://www.example.com/music-concert-2023.pdf' },
            { text: 'Art Exhibition', pdfUrl: 'https://www.example.com/art-exhibition-2023.pdf' },
            { text: 'Food Festival', pdfUrl: 'https://www.example.com/food-festival-2023.pdf' },
            { text: 'Community Gathering', pdfUrl: 'https://www.example.com/community-gathering-2023.pdf' }
          ]
        }
      ]
    },
    '2023-24': {
      'May': [
        {
          id: 3,
          month: 'May',
          image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
          title: 'Sports Day 2024',
          details: [
            { text: 'Athletic Events', pdfUrl: 'https://www.example.com/athletic-events-2024.pdf' },
            { text: 'Team Sports', pdfUrl: 'https://www.example.com/team-sports-2024.pdf' },
            { text: 'Individual Competitions', pdfUrl: 'https://www.example.com/individual-competitions-2024.pdf' },
            { text: 'Prize Distribution', pdfUrl: 'https://www.example.com/prize-distribution-2024.pdf' },
            { text: 'Closing Ceremony', pdfUrl: 'https://www.example.com/closing-ceremony-2024.pdf' }
          ]
        }
      ],
      'Jan': [
        {
          id: 4,
          month: 'Jan',
          image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=300&h=300&fit=crop',
          title: 'New Year Celebration 2024',
          details: [
            { text: 'Cultural Program', pdfUrl: 'https://www.example.com/cultural-program-2024.pdf' },
            { text: 'Student Awards', pdfUrl: 'https://www.example.com/student-awards-2024.pdf' },
            { text: 'Annual Meeting', pdfUrl: 'https://www.example.com/annual-meeting-2024.pdf' },
            { text: 'Networking Session', pdfUrl: 'https://www.example.com/networking-session-2024.pdf' }
          ]
        }
      ]
    },
    '2024-25': {
      'May': [
        {
          id: 5,
          month: 'May',
          image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=300&h=300&fit=crop',
          title: 'National Youth Celebration 2025',
          details: [
            { text: 'National Youth Celebration', pdfUrl: 'https://www.example.com/youth-celebration-2025.pdf' },
            { text: 'Dance Rally', pdfUrl: 'https://www.example.com/dance-rally-2025.pdf' },
            { text: 'Interactive Session with Hostel and Mess Representatives', pdfUrl: 'https://www.example.com/hostel-mess-session-2025.pdf' },
            { text: '24th JNU Inter University Youth Festival', pdfUrl: 'https://www.example.com/jnu-festival-2025.pdf' },
            { text: 'Conference 2025', pdfUrl: 'https://www.example.com/conference-2025.pdf' }
          ]
        },
        {
          id: 6,
          month: 'May',
          image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=300&fit=crop',
          title: 'Cultural Festival 2025',
          details: [
            { text: 'Cultural Program', pdfUrl: 'https://www.example.com/cultural-program-2025.pdf' },
            { text: 'Dance Competition', pdfUrl: 'https://www.example.com/dance-competition-2025.pdf' },
            { text: 'Music Performance', pdfUrl: 'https://www.example.com/music-performance-2025.pdf' },
            { text: 'Art Exhibition', pdfUrl: 'https://www.example.com/art-exhibition-2025.pdf' },
            { text: 'Award Ceremony', pdfUrl: 'https://www.example.com/award-ceremony-2025.pdf' }
          ]
        }
      ],
      'Jun': [
        {
          id: 7,
          month: 'Jun',
          image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=300&h=300&fit=crop',
          title: 'Summer Festival 2025',
          details: [
            { text: 'Music Concert', pdfUrl: 'https://www.example.com/music-concert-2025.pdf' },
            { text: 'Art Exhibition', pdfUrl: 'https://www.example.com/art-exhibition-summer-2025.pdf' },
            { text: 'Food Festival', pdfUrl: 'https://www.example.com/food-festival-2025.pdf' },
            { text: 'Community Gathering', pdfUrl: 'https://www.example.com/community-gathering-2025.pdf' }
          ]
        }
      ],
      'Jan': [
        {
          id: 8,
          month: 'Jan',
          image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=300&h=300&fit=crop',
          title: 'New Year Celebration 2025',
          details: [
            { text: 'Cultural Program', pdfUrl: 'https://www.example.com/cultural-program-newyear-2025.pdf' },
            { text: 'Student Awards', pdfUrl: 'https://www.example.com/student-awards-2025.pdf' },
            { text: 'Annual Meeting', pdfUrl: 'https://www.example.com/annual-meeting-2025.pdf' },
            { text: 'Networking Session', pdfUrl: 'https://www.example.com/networking-session-2025.pdf' }
          ]
        }
      ]
    },
    '2025-26': {
      'May': [
        {
          id: 9,
          month: 'May',
          image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=300&h=300&fit=crop',
          title: 'Upcoming Youth Event 2026',
          details: [
            { text: 'Planned Youth Celebration', pdfUrl: 'https://www.example.com/planned-youth-2026.pdf' },
            { text: 'Future Dance Rally', pdfUrl: 'https://www.example.com/future-dance-2026.pdf' },
            { text: 'Upcoming Interactive Sessions', pdfUrl: 'https://www.example.com/upcoming-sessions-2026.pdf' },
            { text: 'Future Festival Planning', pdfUrl: 'https://www.example.com/future-planning-2026.pdf' }
          ]
        }
      ]
    }
  };

  // Get all months that have events in the current year
  const allMonthsInYear = Object.keys(timelineData[selectedYear] || {});
  
  // Get all events for the current year (all months)
  const allCurrentEvents = allMonthsInYear.reduce((acc, month) => {
    return acc.concat(timelineData[selectedYear][month] || []);
  }, []);

  const months = allMonthsInYear;

  // Function to navigate years
  const navigateYear = (direction) => {
    if (direction === 'prev' && currentYearIndex > 0) {
      const newYear = academicYears[currentYearIndex - 1];
      setSelectedYear(newYear);
      // Set to first available month in new year
      const availableMonths = Object.keys(timelineData[newYear] || {});
      if (availableMonths.length > 0) {
        setSelectedMonth(availableMonths[0]);
      }
    } else if (direction === 'next' && currentYearIndex < academicYears.length - 1) {
      const newYear = academicYears[currentYearIndex + 1];
      setSelectedYear(newYear);
      // Set to first available month in new year
      const availableMonths = Object.keys(timelineData[newYear] || {});
      if (availableMonths.length > 0) {
        setSelectedMonth(availableMonths[0]);
      }
    }
  };

  // Function to scroll to specific milestone
  const scrollToMilestone = (month) => {
    // Don't change the selected month filter, just scroll
    const events = timelineData[selectedYear]?.[month];
    if (events && events.length > 0) {
      const element = document.getElementById(`milestone-${events[0].id}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    document.querySelectorAll('.milestone-content').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [allCurrentEvents]);

  return (
    <div className="w-full min-h-screen bg-gray-50">


      {/* Header Controls */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Company Timeline</h1>
        
        {/* Year Navigation */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button 
            onClick={() => navigateYear('prev')}
            disabled={currentYearIndex === 0}
            className={`p-3 rounded-full transition-colors ${
              currentYearIndex === 0 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <span className="text-lg font-semibold text-gray-700 px-4">
            Academic year: {selectedYear}
          </span>
          <button 
            onClick={() => navigateYear('next')}
            disabled={currentYearIndex === academicYears.length - 1}
            className={`p-3 rounded-full transition-colors ${
              currentYearIndex === academicYears.length - 1 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-blue-600 text-white hover:bg-[#2c6eca]'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Month Buttons - Navigation to scroll to specific months */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {months.map((month, index) => (
            <button
              key={index}
              onClick={() => scrollToMilestone(month)}
              className="px-6 py-3 rounded-full font-medium transition-all text-base bg-blue-100 text-blue-600 hover:bg-blue-200 hover:shadow-lg"
            >
              {month}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Container */}
      <div className="max-w-6xl mx-auto px-8 pb-16 relative">
        {allCurrentEvents.map((milestone, index) => (
          <div key={milestone.id} id={`milestone-${milestone.id}`} className="mb-16 relative flex flex-col items-center">
            {/* Month Label above image (instead of year) */}
            <button
              onClick={() => scrollToMilestone(milestone.month)}
              className="text-center text-3xl font-bold mb-6 px-6 py-2 z-10 bg-white rounded-full cursor-pointer hover:shadow-lg transition-shadow"
              style={{
                background: 'linear-gradient(to right, #002346 0%, #2c6eca 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
                marginTop: '32px'
              }}
            >
              {milestone.month}
            </button>
            
            {/* Timeline Segment */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#2c6eca] z-0"
              style={{
                height: 'calc(100% - 50px)',
                top: '130px'
              }}
            ></div>

            {/* Milestone Content */}
            <div 
              className={`milestone-content flex gap-8 items-center mx-8 opacity-0 w-full transition-all duration-700 ease-out ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
              style={{
                transform: index % 2 === 0 ? 'translateX(-100px)' : 'translateX(100px)'
              }}
            >
              {/* Image Container */}
              <div className="flex-shrink-0 relative">
                <div 
                  className="w-80 h-80 rounded-full overflow-hidden relative"
                  style={{
                    border: '12px solid #2c6eca',
                    aspectRatio: '1/1'
                  }}
                >
                  <div 
                    className="absolute -top-1.5 -left-1.5 -right-1.5 -bottom-1.5 border-12 border-white rounded-full pointer-events-none"
                    style={{
                      border: '12px solid white'
                    }}
                  ></div>
                  <img 
                    src={milestone.image} 
                    alt={`Milestone ${milestone.year}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Description Container */}
              <div className="flex-1 p-6 bg-blue-600 text-white rounded-lg shadow-lg" style={{background:"linear-gradient(to right, #002346 0%, #2c6eca 100%)"}}>
                <h3 className="text-xl font-bold mb-4">{milestone.title}</h3>
                <ul className="space-y-2">
                  {milestone.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-base">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0 mt-2"></div>
                      <a 
                        href={detail.pdfUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-300 hover:underline cursor-pointer transition-colors leading-relaxed"
                      >
                        {detail.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No events message */}
      {allCurrentEvents.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500 text-xl">No events found for {selectedYear}</p>
        </div>
      )}

      <style jsx>{`
        .milestone-content.visible {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
        
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slideIn2 {
          from {
            transform: translateX(200%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .milestone-content {
            flex-direction: column !important;
            gap: 1rem;
          }
          
          .milestone-content > div:first-child {
            width: 200px;
            height: 200px;
            min-width: 200px;
            min-height: 200px;
          }
          
          .milestone-content > div:first-child > div {
            width: 200px !important;
            height: 200px !important;
          }
        }

        @media (max-width: 480px) {
          .milestone-content > div:first-child {
            width: 180px;
            height: 180px;
            min-width: 180px;
            min-height: 180px;
          }
          
          .milestone-content > div:first-child > div {
            width: 180px !important;
            height: 180px !important;
          }
          
          .milestone-content > div:last-child p:first-child {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
}