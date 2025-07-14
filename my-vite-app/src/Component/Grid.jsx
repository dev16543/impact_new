import React from 'react';

const FlagshipEvents = () => {
  const events = [
    {
      id: 1,
      title: "Summer Conference 2024",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=300&fit=crop",
      description: "Join us for our biggest annual conference featuring industry leaders and innovative workshops.",
      date: "July 15-17, 2024"
    },
    {
      id: 2,
      title: "Tech Innovation Summit", 
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=400&fit=crop",
      description: "Explore cutting-edge technologies and network with tech pioneers from around the world.",
      date: "August 22-24, 2024"
    },
    {
      id: 3,
      title: "Leadership Workshop",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=600&fit=crop", 
      description: "Develop your leadership skills with hands-on workshops and expert mentorship sessions.",
      date: "September 10-12, 2024"
    },
    {
      id: 4,
      title: "Networking Gala",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=400&fit=crop",
      description: "An elegant evening of networking, entertainment, and celebrating achievements in our industry.",
      date: "October 5, 2024"
    }
  ];

  return (
    <>
      <style jsx>{`
        .flip-card {
          perspective: 1000px;
        }
        
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 1rem;
          overflow: hidden;
        }
        
        .flip-card-back {
          transform: rotateY(180deg);
        }
        
        .grid-container {
          display: grid;
          grid-template-columns: 2fr 1.5fr;
          gap: 1.5rem;
          height: 700px;
        }
        
        .left-column {
          display: grid;
          grid-template-rows: 1.5fr 2.5fr;
          gap: 1.5rem;
        }
        
        .right-column {
          display: grid;
          grid-template-rows: 1fr 1fr;
          gap: 1.5rem;
        }
        
        @media (max-width: 768px) {
          .grid-container {
            grid-template-columns: 1fr;
            height: auto;
          }
          
          .left-column,
          .right-column {
            grid-template-rows: 200px 200px;
          }
        }
      `}</style>
      
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Our Flagship Events
          </h1>
          
          <div className="grid-container">
            {/* Left Column */}
            <div className="left-column">
              {/* Top Rectangle */}
              <div>
                <EventCard event={events[0]} />
              </div>
              
              {/* Bottom Large Square */}
              <div>
                <EventCard event={events[2]} />
              </div>
            </div>
            
            {/* Right Column */}
            <div className="right-column">
              {/* Top Square */}
              <div>
                <EventCard event={events[1]} />
              </div>
              
              {/* Bottom Square */}
              <div>
                <EventCard event={events[3]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const EventCard = ({ event }) => {
  return (
    <div className="flip-card w-full h-full">
      <div className="flip-card-inner">
        {/* Front of card */}
        <div className="flip-card-front shadow-lg bg-gradient-to-br from-blue-900 to-blue-600">
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-lg font-bold mb-1">{event.title}</h3>
            <p className="text-sm opacity-90">{event.date}</p>
          </div>
        </div>
        
        {/* Back of card */}
        <div className="flip-card-back shadow-lg bg-gradient-to-br from-blue-900 to-blue-600">
          <div className="flex flex-col justify-center items-center h-full p-6 text-white text-center">
            <h3 className="text-xl font-bold mb-4">{event.title}</h3>
            <p className="text-sm leading-relaxed mb-4">{event.description}</p>
            <div className="mt-auto">
              <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-xs font-medium">
                {event.date}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlagshipEvents;