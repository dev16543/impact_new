import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import GudiPadwa from "../assets/GalleryHome/GudiPadwa.png";
import HelmetJanjagrutiAbhiyan from "../assets/GalleryHome/HelmetJanjagrutiAbhiyan.png";
import WestZone from "../assets/GalleryHome/WestZoneYouthFest.png";
import Scifest from "../assets/GalleryHome/SciFest.png";
import ClubCatalyst from "../assets/GalleryHome/ClubCatalyst.png";
import ShivJayanti from "../assets/GalleryHome/ShivJayanti.png";
import HolikaDahan from "../assets/GalleryHome/HolikaDahan.png";

const Gallerynew = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Sample event data - replace with your actual events
  const events = [
    {
      id: 1,
      title: "Gudi Padwa",
      image: GudiPadwa,
      //description: "An elegant evening of celebration and networking"
    },
    {
      id: 2,
      title: "Helmet Janjagruti Abhiyan",
      image: HelmetJanjagrutiAbhiyan,
      //description: "Cutting-edge technology showcase and conferences"
    },
    {
      id: 3,
      title: "West Zone Youth Festival",
      image: WestZone,
      //description: "Fashion meets philanthropy in this stunning event"
    },
    {
      id: 4,
      title: "SciFEST",
      image: Scifest,
      //description: "Recognizing excellence and outstanding achievements"
    },
    {
      id: 5,
      title: "Club Catalyst",
      image: ClubCatalyst,
      //description: "Unveiling our latest innovations with style"
    },
    {
      id: 6,
      title: "Shiv Jayanti",
      image: ShivJayanti,
      //description: "Unveiling our latest innovations with style"
    },
    {
      id: 7,
      title: "Holika Dahan",
      image: HolikaDahan,
      //description: "Unveiling our latest innovations with style"
    }
  ];

  // Auto-advance timer
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === events.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change every 4 seconds

    return () => clearInterval(timer);
  }, [isPlaying, events.length]);

  const goToNext = () => {
    setCurrentIndex(currentIndex === events.length - 1 ? 0 : currentIndex + 1);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? events.length - 1 : currentIndex - 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-4xl lg:text-4xl font-bold text-gray-800 mb-4">
          Some Highlights of our Exclusive Events
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
      </div>

      {/* Main Gallery Container */}
      <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Image Container */}
        <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                index === currentIndex 
                  ? 'opacity-100 translate-x-0' 
                  : index < currentIndex 
                    ? 'opacity-0 -translate-x-full' 
                    : 'opacity-0 translate-x-full'
              }`}
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
            ) : (
              <Play className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </button>

          {/* Event Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 transform transition-all duration-700">
              {events[currentIndex].title}
            </h2>
            <p className="text-sm sm:text-base lg:text-lg opacity-90 transform transition-all duration-700">
              {events[currentIndex].description}
            </p>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center space-x-3 py-6 bg-gray-50">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-8 h-3 bg-gradient-to-r from-blue-500 to-purple-600'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="h-1 bg-gray-200">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-100 ease-linear"
            style={{
              width: isPlaying ? `${((currentIndex + 1) / events.length) * 100}%` : '0%'
            }}
          />
        </div>
      </div>

      {/* Event Counter */}
      <div className="text-center mt-6">
        <span className="text-gray-600 text-sm sm:text-base">
          {currentIndex + 1} of {events.length} events
        </span>
      </div>
    </div>
  );
};

export default Gallerynew;