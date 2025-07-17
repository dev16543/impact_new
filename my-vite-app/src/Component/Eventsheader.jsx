import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Eventsheader = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Event data with images, titles, and descriptions
  const events = [
    {
      id: 1,
      title: "Garba Night",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      description: "The Garba Night showcased a perfect blend of traditional and contemporary performances. The rhythmic footwork of the participants echoed the age-old traditions of Garba, while modern choreography infused a dynamic and youthful energy into the celebrations. Dance circles formed spontaneously as participants moved in sync with the beats, creating an immersive experience for everyone involved. The event was a celebration of unity and cultural diversity."
    },
    {
      id: 2,
      title: "Cultural Festival",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop",
      description: "Our annual Cultural Festival brought together diverse communities in a spectacular showcase of art, music, and tradition. Students and faculty collaborated to present performances spanning classical dance, contemporary music, and theatrical presentations. The festival served as a platform for cultural exchange, fostering understanding and appreciation among participants from various backgrounds. Food stalls featuring cuisines from different regions added to the festive atmosphere."
    },
    {
      id: 3,
      title: "Tech Conference",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      description: "The annual Tech Conference gathered industry leaders, innovators, and students to explore cutting-edge technologies and emerging trends. Keynote speakers shared insights on artificial intelligence, blockchain, and sustainable technology solutions. Interactive workshops and panel discussions provided hands-on learning experiences. The event facilitated networking opportunities and sparked collaborations between academia and industry professionals."
    },
    {
      id: 4,
      title: "Sports Championship",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      description: "The Inter-College Sports Championship witnessed fierce competition across multiple disciplines including cricket, football, basketball, and athletics. Teams from various colleges participated with exceptional sportsmanship and determination. The event promoted physical fitness, teamwork, and healthy competition among students. Victory ceremonies celebrated not just the winners but all participants who demonstrated dedication and perseverance."
    },
    {
      id: 5,
      title: "Art Exhibition",
      image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=800&h=600&fit=crop",
      description: "The Art Exhibition featured stunning works from talented students and renowned artists, showcasing paintings, sculptures, digital art, and mixed media installations. Visitors explored diverse artistic expressions ranging from traditional techniques to contemporary experimental forms. The exhibition served as an inspiring platform for emerging artists to display their creativity and connect with art enthusiasts and collectors."
    }
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [events.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 pt-20 pb-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-8 sm:mb-12 lg:mb-16">
        Our Flagship Events
      </h1>
      
      {/* Content Container */}
      <div className="lg:flex lg:items-stretch">
        {/* Image Container with Slideshow */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 relative">
          <div className="relative h-64 lg:h-full w-full rounded-lg overflow-hidden lg:min-h-[400px] group">
            {/* Main Image */}
            <img 
              src={events[currentSlide].image} 
              alt={events[currentSlide].title}
              className="w-full h-full object-cover transition-all duration-500 ease-in-out"
            />
            
            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 bg-black bg-opacity-10"></div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
            
            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {events.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide 
                      ? 'bg-white shadow-lg' 
                      : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                  }`}
                />
              ))}
            </div>
            
            {/* Slide Counter */}
            <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
              {currentSlide + 1} / {events.length}
            </div>
          </div>
        </div>
        
        {/* Text Content - Changes with slideshow */}
        <div className="w-full lg:w-1/2 lg:pl-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 transition-all duration-500 ease-in-out">
            {events[currentSlide].title}
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed text-justify transition-all duration-500 ease-in-out">
            {events[currentSlide].description}
          </p>
 
        </div>
      </div>
    </div>
  );
};

export default Eventsheader;