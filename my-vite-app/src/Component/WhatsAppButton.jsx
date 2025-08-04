import React from 'react';

const waLogo = "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg";
const instaLogo = "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"; // Clean white icon with transparent background

const SocialButtons = () => {
  const whatsappLink = 'https://whatsapp.com/channel/0029Vaj1uxsLdQekIvxGyu2W';
  const instagramLink = 'https://www.instagram.com/impactmitadt/';

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end space-y-3 sm:space-y-4">
      {/* Instagram Button */}
      <a
        href={instagramLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#E4405F] text-white text-xs sm:text-sm md:text-base px-3 sm:px-4 py-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-[#d63050] transition-all duration-300"
      >
        <img
          src={instaLogo}
          alt="Instagram"
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
        />
        <span>Follow us for Updates!</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white text-xs sm:text-sm md:text-base px-3 sm:px-4 py-2 rounded-full shadow-lg flex items-center gap-2 hover:bg-green-600 transition-all duration-300"
      >
        <img
          src={waLogo}
          alt="WhatsApp"
          className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
        />
        <span>Join our Community!</span>
      </a>
    </div>
  );
};

export default SocialButtons;
