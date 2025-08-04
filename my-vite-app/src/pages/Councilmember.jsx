import React, { useEffect, useRef, useCallback, useState } from "react";
import { ChevronDown, Mail, MapPin, Calendar, Award, Users, Sparkles, Star, Heart, Phone, Globe, Linkedin, Code, Zap, Trophy, Target, Clock } from "lucide-react";
import past_ev from "../assets/Bannerpage/Team.jpg";
import HeroBanner from "../Component/HeroBanner";
// Import all team images
import AaryanImg from "../assets/team_images/Aaryan.png";
import AbhijeetImg from "../assets/team_images/Abhijeet.png";
import AdarshImg from "../assets/team_images/Adarsh.png";
import AnoushkaImg from "../assets/team_images/Anoushka.png";
import AnshImg from "../assets/team_images/Ansh.png";
import AtharvImg from "../assets/team_images/Atharv.png";
import AyushiImg from "../assets/team_images/Ayushi.png";
import BhoumikImg from "../assets/team_images/Bhoumik.png";
import ChaitraliImg from "../assets/team_images/Chaitrali.png";
import DanikaImg from "../assets/team_images/Danika.png";
import DevImg from "../assets/team_images/Dev.png";
import DhairyaImg from "../assets/team_images/Dhairya.png";
import DarshanImg from "../assets/team_images/Darshan.JPG";
import KhushiImg from "../assets/team_images/Khushi.png";
import KrushnarajImg from "../assets/team_images/Krushnaraj.jpg";
import MrinmayiImg from "../assets/team_images/Mrinmayi.png";
import MugdhaImg from "../assets/team_images/Mugdha.png";
import MuskanImg from "../assets/team_images/Muskan.png";
import SharvilImg from "../assets/team_images/Sharvil.png";
import SohamImg from "../assets/team_images/Soham.png";
import SukhadaImg from "../assets/team_images/Sukhada.png";
import SwaraImg from "../assets/team_images/Swara.png";
import TanviImg from "../assets/team_images/Tanvi.png";
import UditaImg from "../assets/team_images/Udita.png";
import VaibhavImg from "../assets/team_images/Vaibhav.png";
import VaishnaviImg from "../assets/team_images/Vaishnavi.png";
import SurajSirImg from "../assets/team_images/surajsir.png";
import HarshImg from "../assets/team_images/Harsh.png";

const COUNCIL_MEMBERS_DATA = [
  {
    name: "Aaryan Phule",
    title: "President",
    handle: "aaryan_phule__18",
    avatarUrl: AaryanImg,
    linkedinUrl: "https://www.linkedin.com/in/aaryan-phule-2a1688251",
  },
  {
    name: "Dhairya Patwa",
    title: "General Secretary",
    handle: "dhairya_patwa",
    avatarUrl: DhairyaImg,
    linkedinUrl: "https://www.linkedin.com/in/dhairya-patwa-714bb42ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Soham Zope",
    title: "Vice President",
    handle: "soham.zope",
    avatarUrl: SohamImg,
    linkedinUrl: "http://www.linkedin.com/in/soham-zope-",
  },
  {
    name: "Khushi Warang",
    title: "Joint Secretary",
    handle: "khhhuushiiii",
    avatarUrl: KhushiImg,
    linkedinUrl: "https://www.linkedin.com/in/aryapaturkar1/",
  },
  {
    name: "Swara Kodre",
    title: "Treasurer",
    handle: "swara_kodre",
    avatarUrl: SwaraImg,
    linkedinUrl: "https://www.linkedin.com/in/swara-kodre-016454308?trk=contact-info",
  },
  {
    name: "Vaishnavi Angane",
    title: "Art Cluster Secretary",
    handle: "angne.vaishnavi",
    avatarUrl: VaishnaviImg,
    linkedinUrl: "https://www.linkedin.com/in/vaishnavi-angne-9b2074245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Harsh Vora",
    title: "Design Cluster Secretary",
    handle: "harsh_vora_",
    avatarUrl: HarshImg,
    linkedinUrl: "https://www.linkedin.com/in/harsh-vora-339b58228",
  },
  {
    name: "Dev Sagani",
    title: "Technology Cluster Secretary",
    handle: "dev_16543",
    avatarUrl: DevImg,
    linkedinUrl: "https://www.linkedin.com/in/dev-sagani-5ba391203",
  },
  {
    name: "Ayushi Sharma",
    title: "Cultural Secretary(Girls)",
    handle: "ayushisharma_18",
    avatarUrl: AyushiImg,
    linkedinUrl: "https://www.linkedin.com/in/ayushi-sharma-83728223a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Sharvil Maind",
    title: "Cultural Secretary(Boys)",
    handle: "sharvil27maind",
    avatarUrl: SharvilImg,
    linkedinUrl: "https://www.linkedin.com/in/sharvilmaind",
  },
  {
    name: "Chaitrali Patil",
    title: "Sport Secretary(Girls)",
    handle: "chaitrali_patil5",
    avatarUrl: ChaitraliImg,
    linkedinUrl: "https://www.linkedin.com/in/reeva-sadiq-614245280/",
  },
  {
    name: "Atharv Patil",
    title: "Sport Secretary(Boys)",
    handle: "patilatharv_",
    avatarUrl: AtharvImg,
    linkedinUrl: "https://www.linkedin.com/in/atharv-patil-473853301/",
  },
  {
    name: "Danika Patil",
    title: "Well-Being Secretary",
    handle: "danikaa.s",
    avatarUrl: DanikaImg,
    linkedinUrl: "https://www.linkedin.com/in/danika-patil-88435b251/",
  },
  {
    name: "Anouksha Joshi",
    title: "Editorial Secretary",
    handle: "anoushka_2306",
    avatarUrl: AnoushkaImg,
    linkedinUrl: "https://www.linkedin.com/in/anoushkajoshi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", // Name mismatch: "Anouksha" vs "Anoushka"
  },
  {
    name: "Muskan Rai",
    title: "Magazine Secretary",
    handle: "musskannnr",
    avatarUrl: MuskanImg,
    linkedinUrl: "https://www.linkedin.com/in/muskan-rai-92838024b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Abhijeet Varudkar",
    title: "Media & Outreach Secretary",
    handle: "arv_vlogs",
    avatarUrl: AbhijeetImg,
    linkedinUrl: "https://www.linkedin.com/in/abhijeet-varudkar-5241962a2",
  },
  {
    name: "Mugdha Sonawane",
    title: "NCC Secretary",
    handle: "mugdhas_04",
    avatarUrl: MugdhaImg,
    linkedinUrl: "https://www.linkedin.com/in/mugdha-sonawane-5873162b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
  {
    name: "Tanvi Bokade",
    title: "NSS Secretary",
    handle: "tan.tanzzzz",
    avatarUrl: TanviImg,
    linkedinUrl: "https://www.linkedin.com/in/tanvi-bokade-3817681b0",
  },
  {
    name: "Udita Anand",
    title: "Executive Member",
    handle: "uditaaa_",
    avatarUrl: UditaImg,
    linkedinUrl: "https://www.linkedin.com/in/udita-anand-324541250",
  },
  {
    name: "Sukhada Tambe",
    title: "Executive Member",
    handle: "sukhada_photography",
    avatarUrl: SukhadaImg,
    linkedinUrl: "https://www.linkedin.com/in/sukhada-tambe-5a7b93275",
  },
  {
    name: "Mrinmayi Gotmare",
    title: "Executive Member",
    handle: "_mrin___",
    avatarUrl: MrinmayiImg,
    linkedinUrl: "https://www.linkedin.com/in/mrinmayi2504",
  },
  {
    name: "Vaibhav Kalaskar",
    title: "Executive Member",
    handle: "vaibhavv______",
    avatarUrl: VaibhavImg,
    linkedinUrl: "https://www.linkedin.com/in/vaibhav-kalaskar-646213219",
  },
  {
    name: "Bhoumik Rajput",
    title: "Executive Member",
    handle: "bhoumikrajput",
    avatarUrl: BhoumikImg,
    linkedinUrl: "https://www.linkedin.com/in/bhoumik-rajput-60b2221b7/",
  },
  {
    name: "Adarsh Deshmukh",
    title: "Executive Member",
    handle: "adarshdeshmukh",
    avatarUrl: AdarshImg,
    linkedinUrl: "https://www.linkedin.com/in/adarsh-deshmukh-486068197/",
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
          title="Faculty Mentor"
          subtitle="Guiding our council with wisdom and experience"
        />
        <FacultyMentorCard mentor={FACULTY_MENTOR} />
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