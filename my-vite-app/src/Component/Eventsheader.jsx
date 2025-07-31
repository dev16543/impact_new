import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Ganesh from "../assets/pastevents/GaneshFest.png";
import Football from "../assets/pastevents/football.png";
import Garba from "../assets/pastevents/garba.png";
import Plog from "../assets/pastevents/plog.png";
import Spectra from "../assets/pastevents/spectra.png";

const Eventsheader = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const events = [
    {
      id: 1,
      title: "Spectra Night",
      image: Spectra,
      description:
        "SPECTRA Culture Night was a magnificent event that took place under the night sky to celebrate Kojagiri Purnima, an auspicious occasion. This event aimed to unite people from diverse backgrounds by celebrating their traditions, music, dance, and food. The event was held on a moonlit night to create a celestial atmosphere that fostered unity and understanding. The evening began with a ceremonial lighting of lamps, symbolizing the triumph of light over darkness. Performers from different communities presenting traditional dances, music, and rituals associated with Kojagiri Purnima.",
    },
    {
      id: 2,
      title: "Ganesh Festival",
      image: Ganesh,
      description:
        "Ganesh Chaturthi, also known as Vinayaka Chaturthi, is a festival that celebrates the birth of Lord Ganesha. He is a revered elephant-headed deity who is believed to remove obstacles and is the god of wisdom. The celebrations begin with the installation of elaborately crafted clay idols of Lord Ganesha in homes, public pandals (temporary structures), and temples. Devotees meticulously decorate the idols, often portraying Ganesha in various poses and themes. The entire community comes together to participate in the preparations, fostering a sense of unity and joy.",
    },
    {
      id: 3,
      title: "Plogathon",
      image: Plog,
      description:
        "The annual Tech Conference gathered industry leaders, innovators, and students to explore cutting-edge technologies and emerging trends. Keynote speakers shared insights on artificial intelligence, blockchain, and sustainable technology solutions. Interactive workshops and panel discussions provided hands-on learning experiences. The event facilitated networking opportunities and sparked collaborations between academia and industry professionals.",
    },
    {
      id: 4,
      title: "Football Tournament",
      image: Football,
      description:
        "The inter-college football event brought together 15 colleges for a thrilling display of skill, sportsmanship, and camaraderie. The tournament spanned several weeks and provided a platform for young athletes to showcase their prowess on the field while fostering a sense of unity among participating institutions. The event kicked off with great enthusiasm as teams from diverse backgrounds and regions competed for the coveted trophy. Each college brought a unique style of play, adding an exciting dynamic to the tournament. The matches were a testament to the dedication put in by players.",
    },
    {
      id: 5,
      title: "Garba Night",
      image: Garba,
      description:
        "The Garba Night showcased a perfect blend of traditional and contemporary performances. The rhythmic footwork of the participants echoed the age-old traditions of Garba, while modern choreography infused a dynamic and youthful energy into the celebrations. Dance circles formed spontaneously as participants moved in sync with the beats, creating an immersive experience for everyone involved. The event was a celebration of unity and cultural diversity. The cultural exchange was evident as individuals from different regions came together to embrace the cultural heritage of Gujarat.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length);
    }, 3000); // Auto-slide every 3 seconds

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

      <div className="lg:flex lg:items-stretch">
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0 relative">
          <div className="relative h-64 lg:h-full w-full rounded-lg overflow-hidden lg:min-h-[400px] group">
            <img
              src={events[currentSlide].image}
              alt={events[currentSlide].title}
              className="w-full h-full object-cover transition-all duration-[3000ms] ease-in-out"
            />

            <div className="absolute inset-0 bg-black bg-opacity-10"></div>

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

            <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
              {currentSlide + 1} / {events.length}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:pl-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 transition-all duration-[3000ms] ease-in-out">
            {events[currentSlide].title}
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed text-justify transition-all duration-[3000ms] ease-in-out">
            {events[currentSlide].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Eventsheader;
