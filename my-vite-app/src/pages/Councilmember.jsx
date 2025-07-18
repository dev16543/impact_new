import React, { useEffect, useRef, useCallback, useState } from "react";
import { ChevronDown, Mail, MapPin, Calendar, Award, Users, Sparkles, Star, Heart, Phone, Globe, Linkedin, Code, Zap, Trophy, Target, Clock } from "lucide-react";
import AaryanImg from "../assets/team_images/Aaryan.png";
import DhairyaImg from "../assets/team_images/Dhairya.png";
import SohamImg from "../assets/team_images/Soham.png";
import KhushiImg from "../assets/team_images/Khushi.png";
import SwaraImg from "../assets/team_images/Swara.png";
import VaishnaviImg from "../assets/team_images/Vaishnavi.png";
import HarshImg from "../assets/team_images/Harsh.png";
import DevImg from "../assets/team_images/Dev.png";
import AyushiImg from "../assets/team_images/Ayushi.png";
import SharvilImg from "../assets/team_images/Sharvil.png";
import ChaitraliImg from "../assets/team_images/Chaitrali.png";
import AtharvImg from "../assets/team_images/Atharv.png";
import DanikaImg from "../assets/team_images/Danika.png";
import AnoushkaImg from "../assets/team_images/Anoushka.png";
import MuskanImg from "../assets/team_images/Muskan.png";
import AbhijeetImg from "../assets/team_images/Abhijeet.png";
import MugdhaImg from "../assets/team_images/Mugdha.png";
import TanviImg from "../assets/team_images/Tanvi.png";
import UditaImg from "../assets/team_images/Udita.png";
import SukhadaImg from "../assets/team_images/Sukhada.png";
import MrinmayiImg from "../assets/team_images/Mrinmayi.png";
import VaibhavImg from "../assets/team_images/Vaibhav.png";
import BhoumikImg from "../assets/team_images/Bhoumik.png";
import AdarshImg from "../assets/team_images/Adarsh.png";
import AnshImg from "../assets/team_images/Ansh.png";
import KrushnarajImg from "../assets/team_images/Krushnaraj.jpg";
import surajsirImg from "../assets/team_images/surajsir.png";

// Mock images for demo - replace with your actual imports
const createMockImage = (name) => `https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face&auto=format&q=80`;

const COUNCIL_MEMBERS_DATA = [
  {
    name: "Aaryan Phule",
    title: "President",
    handle: "aaryan_phule__18",
    avatarUrl: AaryanImg,
  },
  {
    name: "Dhairya Patwa",
    title: "General Secretary",
    handle: "dhairya_patwa",
    avatarUrl: DhairyaImg,
  },
  {
    name: "Soham Zope",
    title: "Vice President",
    handle: "soham.zope",
    avatarUrl: SohamImg,
  },
  {
    name: "Khushi Warang",
    title: "Joint Secretary",
    handle: "khhhuushiiii",
    avatarUrl: KhushiImg,
  },
  {
    name: "Swara Kodre",
    title: "Treasurer",
    handle: "swara_kodre",
    avatarUrl: SwaraImg,
  },
  {
    name: "Vaishnavi Angane",
    title: "Art Cluster Secretary",
    handle: "angne.vaishnavi",
    avatarUrl: VaishnaviImg,
  },
  {
    name: "Harsh Vora",
    title: "Design Cluster Secretary",
    handle: "harsh_vora_",
    avatarUrl: HarshImg,
  },
  {
    name: "Dev Sagani",
    title: "Technology Cluster Secretary",
    handle: "dev_16543",
    avatarUrl: DevImg,
  },
  {
    name: "Ayushi Sharma",
    title: "Cultural Secretary(Girls)",
    handle: "ayushisharma_18",
    avatarUrl: AyushiImg,
  },
  {
    name: "Sharvil Maind",
    title: "Cultural Secretary(Boys)",
    handle: "sharvil27maind",
    avatarUrl: SharvilImg,
  },
  {
    name: "Chaitrali Patil",
    title: "Sport Secretary(Girls)",
    handle: "chaitrali_patil5",
    avatarUrl: ChaitraliImg,
  },
  {
    name: "Atharv Patil",
    title: "Sport Secretary(Boys)",
    handle: "patilatharv_",
    avatarUrl: AtharvImg,
  },
  {
    name: "Danika Patil",
    title: "Well-Being Secretary",
    handle: "danikaa.s",
    avatarUrl: DanikaImg,
  },
  {
    name: "Anouksha Joshi",
    title: "Editorial Secretary",
    handle: "anoushka_2306",
    avatarUrl: AnoushkaImg,
  },
  {
    name: "Muskan Rai",
    title: "Magazine Secretary",
    handle: "musskannnr",
    avatarUrl: MuskanImg,
  },
  {
    name: "Abhijeet Varudkar",
    title: "Media & Outreach Secretary",
    handle: "arv_vlogs",
    avatarUrl: AbhijeetImg,
  },
  {
    name: "Mugdha Sonawane",
    title: "NCC Secretary",
    handle: "mugdhas_04",
    avatarUrl: MugdhaImg,
  },
  {
    name: "Tanvi Bokade",
    title: "NSS Secretary",
    handle: "tan.tanzzzz",
    avatarUrl: TanviImg,
  },
  {
    name: "Udita Anand",
    title: "Executive Member",
    handle: "uditaaa_",
    avatarUrl: UditaImg,
  },
  {
    name: "Sukhada Tambe",
    title: "Executive Member",
    handle: "sukhada_photography",
    avatarUrl: SukhadaImg,
  },
  {
    name: "Mrinmayi Gotmare",
    title: "Executive Member",
    handle: "_mrin___",
    avatarUrl: MrinmayiImg,
  },
  {
    name: "Vaibhav Kalaskar",
    title: "Executive Member",
    handle: "vaibhavv______",
    avatarUrl: VaibhavImg,
  },
  {
    name: "Bhoumik Rajput",
    title: "Executive Member",
    handle: "bhoumikrajput",
    avatarUrl: BhoumikImg,
  },
  {
    name: "Adarsh Deshmukh",
    title: "Executive Member",
    handle: "adarshdeshmukh",
    avatarUrl: AdarshImg,
  }
];

const WEBSITE_TEAM = [
  {
    name: "Dev Sagani",
    title: "Lead Developer",
    handle: "dev_16543",
    avatarUrl: DevImg,
  },
  {
    name: "Ansh Agarwal",
    title: "Full Stack Developer",
    handle: "anshagarwal__007",
    avatarUrl: AnshImg,
  },
  {
    name: "Krushnaraj Bhosale",
    title: "Full Stack Developer",
    handle: "krushnaabhosale",
    avatarUrl: KrushnarajImg,
  },
  {
    name: "Darshan Dorik",
    title: "UI/UX Designer & Developer",
    handle: "darshan_dorik",
    avatarUrl: createMockImage("Darshan"),
  }
];

const FACULTY_MENTOR = {
  name: "Dr. Suraj Bhoyar",
  title: "Faculty Mentor",
  handle: "zindadilguru",
  avatarUrl: surajsirImg,
};

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
          <div className="transform transition-all duration-300 group-hover:scale-110 group-hover:text-blue-600">
            <Linkedin className="w-4 h-4 text-blue-600" />
          </div>
        </div>
        
        {/* Hidden Hover Content */}
        <div className={`mt-4 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <div className="flex justify-center gap-2">
            <button className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
              <Mail className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-200">
              <Phone className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-200">
              <Globe className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SectionHeader = ({ title, subtitle, icon: Icon }) => {
  return (
    <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-4">
      <div className="flex justify-center items-center gap-4 mb-4 sm:mb-6">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black rounded-full flex items-center justify-center animate-pulse">
          <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </div>
      </div>
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
  <div className="bg-white rounded-3xl shadow-2xl border-2 border-blue-200 flex flex-col items-center p-6 sm:p-8 mx-auto mb-8 sm:mb-12 max-w-sm sm:max-w-xl w-full transition-transform duration-300 hover:scale-105">
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
    <div className="mt-4 text-gray-500 text-sm">@{mentor.handle}</div>
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
      
      {/* Hero Header */}
      <div className="py-12 sm:py-16 lg:py-20 mt-12 sm:mt-16 lg:mt-20 text-center px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-black mb-4 sm:mb-6">
          Our Council
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          Meet the extraordinary individuals who lead our organization with passion, innovation, and dedication
        </p>
      </div>
      
      {/* Faculty Mentor Section */}
      <div className="max-w-7xl mx-auto px-4 pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8">
        <SectionHeader
          title="Faculty Mentor"
          subtitle="Guiding our council with wisdom and experience"
          icon={Users}
        />
        <FacultyMentorCard mentor={FACULTY_MENTOR} />
      </div>
      
      {/* Council Members Section */}
      <div className="w-full px-4 py-12 sm:py-16 lg:py-20">
        <SectionHeader 
          title="Our TorchBearers" 
          subtitle="The visionary leaders shaping our future"
          icon={Award}
        />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 lg:gap-8">
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
      <div className="w-full px-4 py-12 sm:py-16 lg:py-20">
        <SectionHeader 
          title="Website Team" 
          subtitle="The creative minds behind our digital presence"
          icon={Code}
        />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 lg:gap-8">
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
      
      {/* Footer Wave */}
      <div className="relative">
        <svg viewBox="0 0 1200 120" className="w-full h-16 sm:h-20 fill-current text-blue-600">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default CouncilMembersPage;