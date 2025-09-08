import React, { useEffect, useRef, useCallback, useState } from "react";
import { ChevronDown, Mail, MapPin, Calendar, Award, Users, Sparkles, Star, Heart, Phone, Globe, Linkedin, Code, Zap, Trophy, Target, Clock } from "lucide-react";
import past_ev from "../assets/Bannerpage/Team.jpg";
import HeroBanner from "../Component/HeroBanner";
// Import all team images
import SharvilImg from "../assets/team_image/Sharvil.png";
import MugdhaImg from "../assets/team_image/Mugdha.png";
import DadasahebImg from "../assets/team_image/Dadasaheb.png";
import SwaraImg from "../assets/team_image/Swara.png";
import YuvrajImg from "../assets/team_image/uvraj.png";
import VedantImg from "../assets/team_image/Vedant.png";
import GauriImg from "../assets/team_image/Gauri.png";
import ShrutiImg from "../assets/team_image/Shrushti.png";
import PrakritiImg from "../assets/team_image/Prakriti.png";
import GirirajImg from "../assets/team_image/Giriraj.png";
import KhushiImg from "../assets/team_image/Khushi.png";
import YashImg from "../assets/team_image/Yash.png";
import AryaImg from "../assets/team_image/Arya.png";
import AtharvImg from "../assets/team_image/Atharv.png";
import AnayImg from "../assets/team_image/Anay.png";
import AanchalImg from "../assets/team_image/Aanchal.png";
import VisakhaImg from "../assets/team_image/Vishaka.png";
import KaveriImg from "../assets/team_image/Kaveri.png";
import SwapnilImg from "../assets/team_image/Swapnil.png";
import ShubhamImg from "../assets/team_image/Shubham.png";
import TanviImg from "../assets/team_image/Tanvi.png";
import MrinmayiImg from "../assets/team_image/Mrinmayi.png";
import SukhadaImg from "../assets/team_image/Sukhada.png";
import DevImg from "../assets/team_image/Dev.png";
import BhoumikImg from "../assets/team_image/Bhoumik.png";
import AdarshImg from "../assets/team_image/Adarsh.png";
import AnshImg from "../assets/team_image/Ansh.png";
import KrushnarajImg from "../assets/team_image/Krushnaraj.jpg";
import DarshanImg from "../assets/team_image/Darshan.JPG";
import SurajSirImg from "../assets/team_image/SurajSir.png";
import AshishSirImg from "../assets/team_image/ashishsir.png";
import AparnaMamImg from "../assets/team_image/aparnamam.png";
import PratibhaMamImg from "../assets/team_image/prathibhamaam.png";



const COUNCIL_MEMBERS_DATA = [
  {
    name: "Sharvil Maind",
    title: "President",
    avatarUrl: SharvilImg,
    linkedinUrl: "https://www.linkedin.com/in/sharvilmaind"
  },
  {
    name: "Mugdha Sonawane",
    title: "General Secretary",
    avatarUrl: MugdhaImg,
    linkedinUrl: "https://www.linkedin.com/in/mugdha-sonawane-5873162b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  },
  {
    name: "Dadasaheb Bhosure",
    title: "Vice President",
    avatarUrl: DadasahebImg,
    linkedinUrl: "https://www.linkedin.com/in/dadasaheb-bhosure"
  },
  {
    name: "Swara Kodre",
    title: "Joint Secretary",
    avatarUrl: SwaraImg,
    linkedinUrl: "https://www.linkedin.com/in/swara-kodre-016454308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  },
  {
    name: "Yuvraj Bade",
    title: "Treasurer (Budget & Planning)",
    avatarUrl: YuvrajImg,
    linkedinUrl: null
  },
  {
    name: "Vedant Raut",
    title: "Treasurer (Audit & Settlement)",
    avatarUrl: VedantImg,
    linkedinUrl: "https://www.linkedin.com/in/vedant-raut-a51287303"
  },
  {
    name: "Gauri Wankhede",
    title: "Wellbeing Secretary",
    avatarUrl: GauriImg,
    linkedinUrl: "https://linkedin.com/in/gauri-wankhede-g240605"
  },
  {
    name: "Shruti Gosavi",
    title: "Arts Cluster Secretary",
    avatarUrl: ShrutiImg,
    linkedinUrl: "https://www.linkedin.com/in/shruti-gosavi-903008383?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    name: "Prakriti Chakravarty",
    title: "Design Cluster Secretary",
    avatarUrl: PrakritiImg,
    linkedinUrl: "https://in.linkedin.com/in/prakriti-chakravarty-8016b9240"
  },
  {
    name: "Giriraj Baheti",
    title: "Technology Cluster Secretary",
    avatarUrl: GirirajImg,
    linkedinUrl: "https://www.linkedin.com/in/giriraj-baheti-899ab5211/"
  },
  {
    name: "Khushi Warang",
    title: "Cultural Secretary (Girls)",
    avatarUrl: KhushiImg,
    linkedinUrl: "https://www.linkedin.com/in/aryapaturkar1/"
  },
  {
    name: "Yash Gutte",
    title: "Cultural Secretary (Boys)",
    avatarUrl: YashImg,
    linkedinUrl: "https://www.linkedin.com/in/yash-gutte-992b19316/"
  },
  {
    name: "Arya Chaudhary",
    title: "Sports Secretary (Girls)",
    avatarUrl: AryaImg,
    linkedinUrl: "https://www.linkedin.com/in/arya-chaudhary-5256331b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  },
  {
    name: "Atharv Jadhav",
    title: "Sports Secretary (Boys)",
    avatarUrl: AtharvImg,
    linkedinUrl: "https://www.linkedin.com/in/atharv-jadhav-31baa331a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    name: "Anay Ahire",
    title: "Editorial Secretary",
    avatarUrl: AnayImg,
    linkedinUrl: "https://www.linkedin.com/in/anay-ahire-828439332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    name: "Aanchal Tamboli",
    title: "Magazine Secretary",
    avatarUrl: AanchalImg,
    linkedinUrl: "https://linkedin.com/in/aanchaltamboli"
  },
  {
    name: "Visakha Nilakh",
    title: "NCC Secretary",
    avatarUrl: VisakhaImg,
    linkedinUrl: "https://www.linkedin.com/in/vishakha-b-nilakh-b28479369?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    name: "Kaveri Khairnar",
    title: "NSS Secretary",
    avatarUrl: KaveriImg,
    linkedinUrl: "https://www.linkedin.com/in/kaveri-khairnar-b9b9082a2"
  },
  {
    name: "Swapnil Patil",
    title: "Media Secretary (Digital Media & Outreach)",
    avatarUrl: SwapnilImg,
    linkedinUrl: "https://www.linkedin.com/in/swapnil-patil-742697218?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  },
  {
    name: "Shubham Sorate",
    title: "Media Secretary (Creative Design & Content)",
    avatarUrl: ShubhamImg,
    linkedinUrl: "https://www.linkedin.com/in/shubham-sorate-3b8489323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    name: "Tanvi Bokade",
    title: "Executive Member",
    avatarUrl: TanviImg,
    linkedinUrl: "https://www.linkedin.com/in/tanvi-bokade-3817681b0"
  },
  {
    name: "Mrinmayi Gotmare",
    title: "Executive Member",
    avatarUrl: MrinmayiImg,
    linkedinUrl: "https://www.linkedin.com/in/mrinmayi2504/"
  },
  {
    name: "Sukhada Tambe",
    title: "Executive Member",
    avatarUrl: SukhadaImg,
    linkedinUrl: "https://www.linkedin.com/in/sukhada-tambe-5a7b93275"
  },
  {
    name: "Dev Sagani",
    title: "Executive Member",
    avatarUrl: DevImg,
    linkedinUrl: "https://www.linkedin.com/in/dev-sagani-5ba391203"
  },
  {
    name: "Bhoumik Rajput",
    title: "Executive Member",
    avatarUrl: BhoumikImg,
    linkedinUrl: "https://www.linkedin.com/in/bhoumik-rajput-60b2221b7/"
  },
  {
    name: "Adarsh Deshmukh",
    title: "Executive Member",
    avatarUrl: AdarshImg,
    linkedinUrl: "https://www.linkedin.com/in/adarsh-deshmukh-486068197/"
  }
];




const WEBSITE_TEAM = [
  {
    name: "Dev Sagani",
    title: "Lead Developer",
    handle: "dev_16543",
    avatarUrl: DevImg,
    linkedinUrl: "https://www.linkedin.com/in/dev-sagani-5ba391203", // Add LinkedIn URL here
  },
  {
    name: "Ansh Agarwal",
    title: "Full Stack Developer",
    handle: "anshagarwal__007",
    avatarUrl: AnshImg,
    linkedinUrl: "https://in.linkedin.com/in/ansh-agarwal-7275b2249", // Add LinkedIn URL here
  },
  {
    name: "Krushnaraj Bhosale",
    title: "Full Stack Developer",
    handle: "krushnaabhosale",
    avatarUrl: KrushnarajImg,
    linkedinUrl: "https://in.linkedin.com/in/krushnaraj-bhosale-603b48323", // Add LinkedIn URL here
  },
  {
    name: "Darshan Dorik",
    title: "UI/UX Designer & Developer",
    handle: "darshan_dorik",
    avatarUrl: DarshanImg, // Assuming Darshan's image is Harsh's for now
    linkedinUrl: "https://in.linkedin.com/in/darshan-dorik-07a300259", // Add LinkedIn URL here
  }
];

const FACULTY_MENTOR = {
  name: "Dr. Suraj Bhoyar",
  title: "Faculty Mentor",
  avatarUrl: SurajSirImg,
  linkedinUrl: "https://in.linkedin.com/in/drsurajbhoyar",
};

const FACULTY_MENTOR_1 = [
  {
    name: "Prof. Dr. Pratibha Jagtap",
    title: "Asst. Director - Student Welfare",
    avatarUrl: PratibhaMamImg,
    linkedinUrl: "https://linkedin.com/in/dr-pratibha-j-28b2ba15"
  },
  {
    name: "Prof. Aparna Bhadke",
    title: "Senior Administrative Officer - Student Affairs",
    avatarUrl: AparnaMamImg,
    linkedinUrl: "https://in.linkedin.com/in/aparna-bhadke-788a603b"
  },
  {
    name: "Prof. Ashish Honrao",
    title: "Manager - Student Affairs",
    avatarUrl: AshishSirImg,
    linkedinUrl: "https://in.linkedin.com/in/ashish-honrao-530b30292"
  }
];


const FloatingParticles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        >
          <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30"></div>
        </div>
      ))}
    </div>
  );
};

const CompactCard = ({ member, index }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } hover:-translate-y-2 w-full overflow-hidden`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Animated Border */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-900 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
      <div className="absolute inset-[2px] bg-white rounded-2xl"></div>
      
      {/* Content */}
      <div className="relative p-6 text-center">
        {/* Avatar with Enhanced Styling */}
        <div className="flex justify-center mb-6 relative">
          <div className="relative">
            {/* Animated Ring */}
            <div className={`absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 via-blue-900 via-black to-pink-400 to-black animate-spin transition-all duration-500 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`} style={{ animationDuration: '3s' }}></div>
            {/* Avatar Container */}
            <div className="relative w-28 h-28 mx-2 my-2 bg-gray-100 flex items-center justify-center rounded-full">
              <img
                src={member.avatarUrl}
                alt={member.name}
                className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl transform transition-transform duration-300 group-hover:scale-105"
              />
              {/* Sparkle Effect */}
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110">
                <Sparkles className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated Divider */}
        <div className="relative mb-4">
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 via-blue-900 via-black to-black mx-auto rounded-full transform transition-all duration-300 group-hover:w-24"></div>
        </div>
        
        {/* Name with Glow Effect */}
        <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
          {member.name}
        </h3>
        
        {/* Title with Enhanced Styling */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="text-gray-700 font-medium text-sm bg-gray-100 px-3 py-1 rounded-full group-hover:bg-blue-50 group-hover:text-blue-700 transition-all duration-300 text-center">
            {member.title}
          </span>
          {member.linkedinUrl ? (
            <a 
              href={member.linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="transform transition-all duration-300 group-hover:scale-110 group-hover:text-blue-600 cursor-pointer"
            >
              <Linkedin className="w-4 h-4 text-blue-600" />
            </a>
          ) : (
            <div className="transform transition-all duration-300 group-hover:scale-110 group-hover:text-blue-600">
              <Linkedin className="w-4 h-4 text-blue-600" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-8 sm:mb-10 lg:mb-12 px-4">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

const FacultyMentorCard = ({ mentor }) => (
  <div className="bg-white rounded-3xl shadow-2xl border-2 border-blue-200 flex flex-col items-center p-6 sm:p-8 mx-auto mb-6 sm:mb-8 max-w-sm sm:max-w-xl w-full transition-transform duration-300 hover:scale-105">
    <div className="relative mb-4 sm:mb-6">
      <div className="absolute inset-0 w-36 h-36 sm:w-48 sm:h-48 rounded-full bg-gradient-to-r from-blue-400 via-blue-900 via-black to-pink-400 to-black animate-spin" style={{ animationDuration: '5s' }}></div>
      <div className="relative w-32 h-32 sm:w-44 sm:h-44 mx-2 my-2">
        <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center">
          <img
            src={mentor.avatarUrl}
            alt={mentor.name}
            className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
          />
        </div>
      </div>
    </div>
    <h3 className="font-bold text-xl sm:text-2xl text-gray-900 mb-2 text-center">{mentor.name}</h3>
    <span className="text-blue-700 font-semibold text-base sm:text-lg bg-blue-100 px-3 sm:px-4 py-2 rounded-full text-center">{mentor.title}</span>
    {mentor.linkedinUrl && (
      <div className="mt-4">
        <a 
          href={mentor.linkedinUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          <Linkedin className="w-4 h-4" />
          <span className="text-sm">LinkedIn Profile</span>
        </a>
      </div>
    )}
  </div>
);

const CouncilMembersPage = () => {
  const [loading, setLoading] = useState(true);
  const [councilMembers, setCouncilMembers] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCouncilMembers(COUNCIL_MEMBERS_DATA);
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="text-center px-4">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 sm:h-20 sm:w-20 border-4 border-blue-500 border-t-transparent mb-6 mx-auto"></div>
            <div className="absolute top-5 left-5 sm:top-6 sm:left-6 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
          </div>
          <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Loading Amazing Team...
          </p>
          <div className="mt-4 flex justify-center gap-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      <FloatingParticles />
      
      <HeroBanner
        title="Our Council"
        subtitle="Meet the extraordinary individuals who lead our organization with passion, innovation, and dedication"
        backgroundImage={past_ev}
      />
      
      {/* Faculty Mentor Section */}
<div className="max-w-7xl mx-auto px-4 py-8 sm:py-10 lg:py-12">
  <SectionHeader
    title="Faculty Mentors"
    subtitle="Guiding our council with wisdom and experience"
  />

  {/* Main Faculty Mentor (highlighted separately) */}
  <div className="flex justify-center mb-10">
    <FacultyMentorCard mentor={FACULTY_MENTOR} />
  </div>

  {/* Additional Faculty Mentors (use CompactCard for same look as TorchBearers) */}
  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 lg:gap-10">
    {FACULTY_MENTOR_1.map((mentor, index) => (
      <CompactCard key={index} member={mentor} index={index} />
    ))}
  </div>
</div>

      
      {/* Council Members Section */}
      <div className="w-full px-4 py-8 sm:py-10 lg:py-12">
        <SectionHeader 
          title="Our TorchBearers" 
          subtitle="The visionary leaders shaping our future"
        />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 lg:gap-10">
            {councilMembers.map((member, index) => (
              <div key={index} className="flex justify-center">
                <CompactCard
                  member={member}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Website Team Section */}
      <div className="w-full px-4 py-8 sm:py-10 lg:py-12">
        <SectionHeader 
          title="Website Team" 
          subtitle="The creative minds behind our digital presence"
        />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8 lg:gap-10">
            {WEBSITE_TEAM.map((member, index) => (
              <div key={index} className="flex justify-center">
                <CompactCard
                  member={member}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CouncilMembersPage;