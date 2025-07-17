import React, { useEffect, useRef, useCallback, useState } from "react";
import { ChevronDown, Mail, MapPin, Calendar, Award, Users, Sparkles, Star, Heart, Phone, Globe, Linkedin, Code, Zap, Trophy, Target, Clock } from "lucide-react";
import SurajSir from "../assets/team_images/surajsir.png";
import Aaryan from "../assets/team_images/Aaryan.png";
import Dhairya from "../assets/team_images/Dhairya.png";
import Abhijeet from '../assets/team_images/Abhijeet.png';
import Adarsh from '../assets/team_images/Adarsh.png';
import Anoushka from '../assets/team_images/Anoushka.png';
import Atharv from '../assets/team_images/Atharv.png';
import Ayushi from "../assets/team_images/Ayushi.png";
import Bhoumik from '../assets/team_images/Bhoumik.png';
import Chaitrali from '../assets/team_images/Chaitrali.png';
import Danika from '../assets/team_images/Danika.png';
import Dev from '../assets/team_images/Dev.png';
import Harsh from '../assets/team_images/Harsh.png';
import Khushi from '../assets/team_images/Khushi.png';
import Mrinmayi from '../assets/team_images/Mrinmayi.png';
import Mugdha from '../assets/team_images/Mugdha.png';
import Muskan from '../assets/team_images/Muskan.png';
import Sharvil from '../assets/team_images/Sharvil.png';
import Soham from '../assets/team_images/Soham.png';
import Sukhada from '../assets/team_images/Sukhada.png';
import Swara from '../assets/team_images/Swara.png';
import Tanvi from '../assets/team_images/Tanvi.png';
import Udita from '../assets/team_images/Udita.png';
import Vaibhav from '../assets/team_images/Vaibhav.png';
import Vaishnavi from '../assets/team_images/Vaishnavi.png';
import Ansh from '../assets/team_images/Ansh.png';
import Krushnaraj from '../assets/team_images/Krushnaraj.jpg';

const COUNCIL_MEMBERS_DATA = [
  {
    name: "Aaryan Phule",
    title: "President",
    handle: "aaryan_phule__18",
    avatarUrl: Aaryan,
  },
  {
    name: "Dhairya Patwa",
    title: "General Secretary",
    handle: "dhairya_patwa",
    avatarUrl: Dhairya,
  },
  {
    name: "Soham Zope",
    title: "Vice President",
    handle: "soham.zope",
    avatarUrl: Soham,
  },
  {
    name: "Khushi Warang",
    title: "Joint Secretary",
    handle: "khhhuushiiii",
    avatarUrl: Khushi,
  },
  {
    name: "Swara Kodre",
    title: "Treasurer",
    handle: "swara_kodre",
    avatarUrl: Swara,
  },
  {
    name: "Vaishnavi Angane",
    title: "Art Cluster Secretary",
    handle: "angne.vaishnavi",
    avatarUrl: Vaishnavi,
  },
  {
    name: "Harsh Vora",
    title: "Design Cluster Secretary",
    handle: "harsh_vora_",
    avatarUrl: Harsh,
  },
  {
    name: "Dev Sagani",
    title: "Technology Cluster Secretary",
    handle: "dev_16543",
    avatarUrl: Dev,
  },
  {
    name: "Ayushi Sharma",
    title: "Cultural Secretary(Girls)",
    handle: "ayushisharma_18",
    avatarUrl: Ayushi,
  },
  {
    name: "Sharvil Maind",
    title: "Cultural Secretary(Boys)",
    handle: "sharvil27maind",
    avatarUrl: Sharvil,
  },
  {
    name: "Chaitrali Patil",
    title: "Sport Secretary(Girls)",
    handle: "chaitrali_patil5",
    avatarUrl: Chaitrali,
  },
  {
    name: "Atharv Patil",
    title: "Sport Secretary(Boys)",
    handle: "patilatharv_",
    avatarUrl: Atharv,
  },
  {
    name: "Danika Patil",
    title: "Well-Being Secretary",
    handle: "danikaa.s",
    avatarUrl: Danika,
  },
  {
    name: "Anouksha Joshi",
    title: "Editorial Secretary",
    handle: "anoushka_2306",
    avatarUrl: Anoushka,
  },
  {
    name: "Muskan Rai",
    title: "Magazine Secretary",
    handle: "musskannnr",
    avatarUrl: Muskan,
  },
  {
    name: "Abhijeet Varudkar",
    title: "Media & Outreach Secretary",
    handle: "arv_vlogs",
    avatarUrl: Abhijeet,
  },
  {
    name: "Mugdha Sonawane",
    title: "NCC Secretary",
    handle: "mugdhas_04",
    avatarUrl: Mugdha,
  },
  {
    name: "Tanvi Bokade",
    title: "NSS Secretary",
    handle: "tan.tanzzzz",
    avatarUrl: Tanvi,
  },
  {
    name: "Udita Anand",
    title: "Executive Member",
    handle: "uditaaa_",
    avatarUrl: Udita,
  },
  {
    name: "Sukhada Tambe",
    title: "Executive Member",
    handle: "sukhada_photography",
    avatarUrl: Sukhada,
  },
  {
    name: "Mrinmayi Gotmare",
    title: "Executive Member",
    handle: "_mrin___",
    avatarUrl: Mrinmayi,
  },
  {
    name: "Vaibhav Kalaskar",
    title: "Executive Member",
    handle: "vaibhavv______",
    avatarUrl: Vaibhav,
  },
  {
    name: "Bhoumik Rajput",
    title: "Executive Member",
    handle: "bhoumikrajput",
    avatarUrl: Bhoumik,
  },
  {
    name: "Adarsh Deshmukh",
    title: "Executive Member",
    handle: "adarshdeshmukh",
    avatarUrl: Adarsh,
  }
];

const WEBSITE_TEAM = [
  {
    name: "Dev Sagani",
    title: "Lead Developer",
    handle: "dev_16543",
    avatarUrl: Dev,
  },
  {
    name: "Ansh Agarwal",
    title: "Full Stack Developer",
    handle: "anshagarwal__007",
    avatarUrl: Ansh,
  },
  {
    name: "Krushnaraj Bhosale",
    title: "Full Stack Developer",
    handle: "krushnaabhosale",
    avatarUrl: Krushnaraj,
  },
  {
    name: "Darshan Dorik",
    title: "UI/UX Designer & Developer",
    handle: "darshan_dorik",
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  }
];

const FACULTY_MENTOR = {
  name: "Dr. Suraj Bhoyar",
  title: "Faculty Mentor",
  handle: "zindadilguru",
  avatarUrl: SurajSir,
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

  const getStatusColor = (status) => {
    switch (status) {
      case 'Online': return 'bg-green-400';
      case 'Away': return 'bg-yellow-400';
      case 'Busy': return 'bg-red-400';
      default: return 'bg-gray-400';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Online': return <Zap className="w-3 h-3 text-white" />;
      case 'Away': return <Clock className="w-3 h-3 text-white" />;
      case 'Busy': return <Target className="w-3 h-3 text-white" />;
      default: return null;
    }
  };

  return (
    <div
      ref={cardRef}
      className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } hover:-translate-y-2 w-full max-w-[280px] overflow-hidden`}
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

        
        {/* Avatar with Enhanced Styling (with icons and sparkle) */}
        <div className="flex justify-center mb-6 relative">
          <div className="relative">
            {/* Animated Ring */}
            <div className={`absolute inset-0 w-36 h-36 rounded-full bg-gradient-to-r from-blue-400 via-blue-900 via-black to-pink-400 to-black animate-spin transition-all duration-500 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`} style={{ animationDuration: '3s' }}></div>
            {/* Avatar Container */}
            <div className="relative w-32 h-32 mx-2 my-2 bg-gray-100 flex items-center justify-center rounded-full">
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
        
        {/* Title with Enhanced Styling (with LinkedIn icon) */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="text-gray-700 font-medium text-sm bg-gray-100 px-3 py-1 rounded-full group-hover:bg-blue-50 group-hover:text-blue-700 transition-all duration-300">
            {member.title}
          </span>
          <div className="transform transition-all duration-300 group-hover:scale-110 group-hover:text-blue-600">
            <Linkedin className="w-4 h-4 text-blue-600" />
          </div>
        </div>
        
        
        {/* Hidden Hover Content (icons/buttons) */}
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
    <div className="text-center mb-16">
      <div className="flex justify-center items-center gap-4 mb-6">
        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center animate-pulse">
          <Icon className="w-8 h-8 text-white" />
        </div>
      </div>
      <h2 className="text-5xl font-bold text-black mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

const FacultyMentorCard = ({ mentor }) => (
  <div className="bg-white rounded-3xl shadow-2xl border-2 border-blue-200 flex flex-col items-center p-8 mx-auto mb-12 max-w-xl w-full transition-transform duration-300 hover:scale-105">
    <div className="relative mb-6">
      <div className="absolute inset-0 w-48 h-48 rounded-full bg-gradient-to-r from-blue-400 via-blue-900 via-black to-pink-400 to-black animate-spin" style={{ animationDuration: '5s' }}></div>
      <div className="relative w-44 h-44 mx-2 my-2">
        <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center">
          <img
            src={mentor.avatarUrl}
            alt={mentor.name}
            className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
          />
        </div>
      </div>
    </div>
    <h3 className="font-bold text-2xl text-gray-900 mb-2">{mentor.name}</h3>
    <span className="text-blue-700 font-semibold text-lg bg-blue-100 px-4 py-2 rounded-full">{mentor.title}</span>
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
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-20 w-20 border-4 border-blue-500 border-t-transparent mb-6 mx-auto"></div>
            <div className="absolute top-6 left-6 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
          </div>
          <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
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
      <div className="py-20 mt-20 text-center">
        <h1 className="text-7xl font-extrabold text-black mb-6">
          Our Council
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Meet the extraordinary individuals who lead our organization with passion, innovation, and dedication
        </p>
      </div>
        {/* Faculty Mentor Section */}
        <div className="max-w-7xl mx-auto px-4 pt-20 pb-8">
          <SectionHeader
            title="Faculty Mentor"
            subtitle="Guiding our council with wisdom and experience"
            icon={Users}
          />
          <FacultyMentorCard mentor={FACULTY_MENTOR} />
        </div>
        {/* Council Members Section */}
        <div className="w-full px-4 py-20">
          <SectionHeader 
            title="Our TorchBearers" 
            subtitle="The visionary leaders shaping our future"
            icon={Award}
          />
        
          <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center w-full">
            {councilMembers.map((member, index) => (
              <CompactCard
                key={index}
                member={member}
                index={index}
              />
            ))}
          </div>
        </div>
        
      {/* Website Team Section */}
      <div className="w-full px-4 py-20">
        <SectionHeader 
          title="Website Team" 
          subtitle="The creative minds behind our digital presence"
          icon={Code}
        />
        
        <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center w-full">
          {WEBSITE_TEAM.map((member, index) => (
            <CompactCard
              key={index}
              member={member}
              index={index}
            />
          ))}
        </div>
          </div>
      
      {/* Footer Wave */}
      <div className="relative">
        <svg viewBox="0 0 1200 120" className="w-full h-20 fill-gradient-to-r from-blue-600 to-purple-600">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default CouncilMembersPage;