import React from 'react';

 const Eventsheader =()=> {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Main Title */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
        Our Flagship Events
      </h1>
      
      {/* Content Container */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
        {/* Image Container */}
        <div className="w-full lg:w-1/2 flex-shrink-0">
          <div className="bg-gray-300 rounded-lg aspect-[4/3] w-full"></div>
        </div>
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            Event Name
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed text-justify">
            The Garba Night showcased a perfect blend of traditional and contemporary performances. The rhythmic footwork of the participants echoed the age-old traditions of Garba, while modern choreography infused a dynamic and youthful energy into the celebrations. Dance circles formed spontaneously as participants moved in sync with the beats, creating an immersive experience for everyone involved. The event was a celebration of unity and cultural diversity. The cultural exchange was evident as individuals from different regions came together to embrace the cultural heritage of Gujarat.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Eventsheader