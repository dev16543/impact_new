import React from "react";
import gifVideo from "../assets/GIF.webm";

const BannerGIF = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden min-h-[200px] max-h-[1000px]:max-h-[1000px] max-h-[600px]:h-screen">
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src={gifVideo} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 p-8 lg:p-6 sm:p-4 box-border">
        <h1 className="text-white text-6xl font-bold text-center max-w-[1200px] mx-auto leading-tight transition-all duration-300 ease-in-out
                     2xl:text-6xl 2xl:max-w-[1200px]
                     xl:text-[3.5rem] xl:max-w-[1000px]
                     lg:text-5xl lg:max-w-[800px]
                     md:text-4xl md:max-w-[600px]
                     sm:text-3xl sm:max-w-full
                     xs:text-2xl">
          Redefining Plastic Processing with Innovative Engineering.
        </h1>
      </div>
    </div>
  );
};

export default BannerGIF;