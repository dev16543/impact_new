import React, { useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import imp1 from "../assets/im1.png"
import ShinyText from "../Component/shinyText";
const getRotationTransition = (duration, from, loop = true) => ({
  from,
  to: from + 360,
  ease: "linear",
  duration,
  type: "tween",
  repeat: loop ? Infinity : 0,
});

const getTransition = (duration, from) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: "spring",
    damping: 20,
    stiffness: 300,
  },
});

const CircularText = ({
  text,
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
  centerImage,
  centerAlt = "Center Image"
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation = useMotionValue(0);

  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    });
  }, [spinDuration, text, onHover, controls, rotation]);

  const handleHoverStart = () => {
    const start = rotation.get();
    if (!onHover) return;

    let transitionConfig;
    let scaleVal = 1;

    switch (onHover) {
      case "slowDown":
        transitionConfig = getTransition(spinDuration * 2, start);
        break;
      case "speedUp":
        transitionConfig = getTransition(spinDuration / 4, start);
        break;
      case "pause":
        transitionConfig = {
          rotate: { type: "spring", damping: 20, stiffness: 300 },
          scale: { type: "spring", damping: 20, stiffness: 300 },
        };
        scaleVal = 1;
        break;
      case "goBonkers":
        transitionConfig = getTransition(spinDuration / 20, start);
        scaleVal = 0.8;
        break;
      default:
        transitionConfig = getTransition(spinDuration, start);
    }

    controls.start({
      rotate: start + 360,
      scale: scaleVal,
      transition: transitionConfig,
    });
  };

  const handleHoverEnd = () => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    });
  };

  return (
    <div className="relative">
      <motion.div
        className={`m-0 mx-auto rounded-full w-[300px] h-[300px] relative text-white font-bold text-center cursor-pointer origin-center ${className}`}
        style={{ rotate: rotation }}
        initial={{ rotate: 0 }}
        animate={controls}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
      >
        {letters.map((letter, i) => {
          const rotationDeg = (360 / letters.length) * i;
          const radius = 133; // Increased radius for bigger circles
          const angleInRadians = (rotationDeg * Math.PI) / 180;
          const x = Math.cos(angleInRadians) * radius;
          const y = Math.sin(angleInRadians) * radius;

          return (
            <span
              key={i}
              className="absolute text-base font-bold text-white select-none"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${rotationDeg + 90}deg)`,
                transformOrigin: 'center center',
              }}
            >
              {letter}
            </span>
          );
        })}
      </motion.div>
      
      {/* Center Image */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-60 h-60 rounded-full bg-white flex items-center justify-center shadow-lg overflow-hidden">
          {centerImage ? (
            <img 
              src={centerImage} 
              alt={centerAlt}
              className="w-60 h-60 rounded-full object-cover"
            />
          ) : (
            <div className="w-12 h-12 bg-blue-500 rounded-full"></div>
          )}
        </div>
      </div>
    </div>
  );
};

const OurImpactSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl  font-bold mb-4"><ShinyText text="Our Impact " disabled={false} speed={3} className='custom-class' />
</h2>
        </div>

        {/* Circular Text Animations */}
        <div className="flex flex-wrap justify-center items-center gap-22 lg:gap-24">
          {/* First Circle - Inspiring Minds */}
          <div className="flex flex-col items-center">
            <CircularText
              text="INSPIRING MINDS • INSPIRING MINDS • "
              spinDuration={25}
              onHover="speedUp"
              className="bg-black rounded-full w-[300px] h-[300px]"
              centerImage={imp1}
              centerAlt="Inspiring Minds"
            />
          </div>

          {/* Second Circle - Promoting Achievement */}
          <div className="flex flex-col items-center">
            <CircularText
              text="PROMOTING ACHIEVEMENT • PROMOTING ACHIEVEMENT • "
              spinDuration={20}
              onHover="speedUp"
              className="bg-black rounded-full w-[250px] h-[250px]"
              centerImage="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
              centerAlt="Promoting Achievement"
            />
          </div>

          {/* Third Circle - Cultivating Societies */}
          <div className="flex flex-col items-center">
            <CircularText
              text="CULTIVATING SOCIETIES • CULTIVATING SOCIETIES • "
              spinDuration={30}
              onHover="speedUp"
              className="bg-black rounded-full w-[250px] h-[250px]"
              centerImage="https://images.unsplash.com/photo-1494790108755-2616b612b65c?w=100&h=100&fit=crop&crop=face"
              centerAlt="Cultivating Societies"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurImpactSection;