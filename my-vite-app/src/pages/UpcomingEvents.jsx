import React from 'react';
import FeaturedEventGallery from '../Component/FeaturedEvents';
import HeroBanner from '../Component/HeroBanner';
import past_ev from '../assets/Bannerpage/past_events.png';

const UpcomingEvent = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroBanner
        title="Upcoming Events"
        subtitle="Stay updated with our latest events and activities"
        backgroundImage={past_ev}
        height="50vh"
      />
      
      {/* Featured Events Section */}
      <div className="py-8">
        <FeaturedEventGallery/>
      </div>
    </div>
  );
};

export default UpcomingEvent;
