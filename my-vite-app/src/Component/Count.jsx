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
      <div className="text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-xs font-medium text-gray-600 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

const LeadershipStatsSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px is Tailwind's lg breakpoint
    };

    // Set initial state
    handleResize();

    // Update on resize
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const layoutClass = isMobile ? 'flex-col' : 'flex-row';
  const dividerClass = isMobile ? 'w-16 h-px' : 'w-px h-20';

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-tight">
            Unleash Your Leadership
          </h2>
          <p className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
            Potential with Council Connect
          </p>
        </div>

        {/* Dynamic Layout */}
        <div className={`flex ${layoutClass} items-center justify-center gap-8`}>
          {/* Students Community */}
          <div className="flex flex-col items-center flex-1">
            <CountingNumber target={15000} duration={2500} suffix="+" label="STUDENTS COMMUNITY" />
          </div>

          {/* Divider */}
          <div className={`${dividerClass} bg-gray-300`}></div>

          {/* Clubs */}
          <div className="flex flex-col items-center flex-1">
            <CountingNumber target={50} duration={2500} suffix="+" label="CLUBS" />
          </div>

          {/* Divider */}
          <div className={`${dividerClass} bg-gray-300`}></div>

          {/* Events Organized */}
          <div className="flex flex-col items-center flex-1">
            <CountingNumber target={500} duration={2500} suffix="+" label="EVENTS ORGANIZED" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipStatsSection;
