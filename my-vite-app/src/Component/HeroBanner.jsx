import React from 'react';

const HeroBanner = ({ 
  title = "Your Text Here", 
  subtitle = "Add your subtitle or description here", 
  backgroundImage = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  height = "500px",
  overlayOpacity = "50",
  textColor = "white",
  subtitleColor = "gray-200"
}) => {
  return (
    <div className={`relative w-full bg-gray-800 flex items-center justify-center`} style={{ height }}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImage}')`
        }}
      ></div>
      
      {/* Dark Overlay for better text readability */}
      <div className={`absolute inset-0 bg-black bg-opacity-${overlayOpacity}`}></div>
      
      {/* Text Content Container */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-${textColor} mb-6 leading-tight`}>
          {title}
        </h1>
        {subtitle && (
          <p className={`text-lg sm:text-xl md:text-2xl text-${subtitleColor} leading-relaxed`}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default HeroBanner;