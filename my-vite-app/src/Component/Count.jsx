import React, { useState, useEffect, useRef } from 'react';

const CountingNumber = ({ target, duration = 2000, suffix = "", label }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * target);

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, target, duration]);

  return (
    <div ref={elementRef} className="text-center">
      <div className="text-5xl lg:text-6xl font-bold text-gray-800 mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

const LeadershipStatsSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            Unleash Your Leadership
          </h2>
          <p className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Potential with Council Connect
          </p>
        </div>

        {/* Stats Container */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Countries Exported */}
          <div className="flex flex-col items-center">
            <CountingNumber 
              target={15000} 
              duration={2500}
              suffix="+"
              label="STUDENTS COMMUNITY"
            />
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px h-24 bg-gray-300"></div>

          {/* Years of Experience */}
          <div className="flex flex-col items-center">
            <CountingNumber 
              target={50} 
              duration={2500}
              suffix="+"
              label="CLUBS"
            />
          </div>


          {/* Divider */}
          <div className="hidden lg:block w-px h-24 bg-gray-300"></div>

          {/* Installations */}
          <div className="flex flex-col items-center">
            <CountingNumber 
              target={500} 
              duration={2500}
              suffix="+"
              label="EVENTS ORGANIZED"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipStatsSection;