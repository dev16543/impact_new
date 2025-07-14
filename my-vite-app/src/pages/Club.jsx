import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import banner from "../assets/banner.png";

// Enhanced ChromaGrid Component with colorful hover effects
const ChromaGrid = ({
  items,
  className = "",
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  // Default club data with colorful hover effects
  const defaultClubData = [
    {
      image: "../assets/profile.jpeg",
      title: "The Electoral Literacy Club (ELC)",
      subtitle: "Democratic Engagement & Civic Responsibility",
      handle: "@elc_mitadt",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg, #1e3a8a, #000)",
      hoverColor: "rgba(79, 70, 229, 0.5)", // Blue
      president: "Bhoumik Rajput",
      facultyCoordinator: "Prof. Dr. Suraj Bhoyar",
      contact: "bhoumikrajput2002@gmail.com",
      url: "mailto:bhoumikrajput2002@gmail.com",
    },
    {
      image: "../assets/profile.jpeg",
      title: "Tech Innovation Club",
      subtitle: "Innovation & Technology Development",
      handle: "@tech_mitadt",
      borderColor: "#10B981",
      gradient: "linear-gradient(210deg, #059669, #000)",
      hoverColor: "rgba(16, 185, 129, 0.5)", // Green
      president: "Tech Lead",
      facultyCoordinator: "Prof. Tech Coordinator",
      contact: "tech@mitadt.edu.in",
      url: "mailto:tech@mitadt.edu.in",
    },
    {
      image: "../assets/profile.jpeg",
      title: "Cultural Society",
      subtitle: "Arts, Culture & Creative Expression",
      handle: "@culture_mitadt",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(165deg, #d97706, #000)",
      hoverColor: "rgba(245, 158, 11, 0.5)", // Orange
      president: "Cultural Head",
      facultyCoordinator: "Prof. Cultural Coordinator",
      contact: "cultural@mitadt.edu.in",
      url: "mailto:cultural@mitadt.edu.in",
    },
    {
      image: "../assets/profile.jpeg",
      title: "Sports Club",
      subtitle: "Athletic Excellence & Team Spirit",
      handle: "@sports_mitadt",
      borderColor: "#EF4444",
      gradient: "linear-gradient(195deg, #dc2626, #000)",
      hoverColor: "rgba(239, 68, 68, 0.5)", // Red
      president: "Sports Captain",
      facultyCoordinator: "Prof. Sports Coordinator",
      contact: "sports@mitadt.edu.in",
      url: "mailto:sports@mitadt.edu.in",
    },
    {
      image: "../assets/profile.jpeg",
      title: "Literature Club",
      subtitle: "Writing, Reading & Literary Arts",
      handle: "@lit_mitadt",
      borderColor: "#8B5CF6",
      gradient: "linear-gradient(225deg, #7c3aed, #000)",
      hoverColor: "rgba(139, 92, 246, 0.5)", // Purple
      president: "Literature Head",
      facultyCoordinator: "Prof. Literature Coordinator",
      contact: "literature@mitadt.edu.in",
      url: "mailto:literature@mitadt.edu.in",
    },
    {
      image: "../assets/profile.jpeg",
      title: "Science Club",
      subtitle: "Research & Scientific Discovery",
      handle: "@science_mitadt",
      borderColor: "#06B6D4",
      gradient: "linear-gradient(135deg, #0891b2, #000)",
      hoverColor: "rgba(6, 182, 212, 0.5)", // Cyan
      president: "Science Head",
      facultyCoordinator: "Prof. Science Coordinator",
      contact: "science@mitadt.edu.in",
      url: "mailto:science@mitadt.edu.in",
    },
  ];

  const data = items?.length ? items : defaultClubData;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, "--x", "px");
    setY.current = gsap.quickSetter(el, "--y", "px");
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e) => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };

  const handleCardClick = (url) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCardMove = (e) => {
    const c = e.currentTarget;
    const rect = c.getBoundingClientRect();
    c.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    c.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={rootRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative w-full min-h-full flex flex-wrap justify-center items-start gap-6 p-8 !bg-white ${className}`}
      style={{
        "--r": `${radius}px`,
        "--x": "50%",
        "--y": "50%",
      }}
    >
      {data.map((club, i) => (
        <article
          key={i}
          onMouseMove={handleCardMove}
          onClick={() => handleCardClick(club.url)}
          className="group relative flex flex-col w-[380px] h-[550px] rounded-[20px] overflow-hidden border-2 border-transparent transition-all duration-300 cursor-pointer hover:scale-105"
          style={{
            "--card-border": club.borderColor || "transparent",
            background: club.gradient,
            "--spotlight-color": club.hoverColor || "rgba(255,255,255,0.3)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)",
            }}
          />
          
          {/* Profile Image Section */}
          <div className="relative z-10 flex justify-center items-center p-6 bg-gradient-to-b from-white/10 to-transparent">
            <img 
              src={club.image} 
              alt={club.title} 
              className="w-20 h-20 rounded-full object-cover"
            />
          </div>
          
          {/* Content Section */}
          <div className="relative z-10 flex-1 p-6 text-white overflow-y-auto">
            <h3 className="text-xl font-bold mb-3 leading-tight">{club.title}</h3>
            <p className="text-sm opacity-85 mb-4 leading-relaxed line-clamp-4">{club.subtitle}</p>
            
            {/* Club Details */}
            <div className="space-y-2 text-sm">
              <div>
                <span className="font-semibold">President:</span> 
                <span className="ml-1">{club.president}</span>
              </div>
              <div>
                <span className="font-semibold">Faculty Coordinator:</span> 
                <span className="ml-1">{club.facultyCoordinator}</span>
              </div>
              <div>
                <span className="font-semibold">Contact:</span> 
                <a href={club.url} className="text-blue-300 hover:text-blue-200 ml-1 break-all text-xs">
                  {club.contact}
                </a>
              </div>
            </div>
            
            {/* Handle */}
            {club.handle && (
              <div className="mt-4 pt-4 border-t border-white/20">
                <span className="text-sm opacity-70">{club.handle}</span>
              </div>
            )}
          </div>
        </article>
      ))}
      
      {/* Grayscale mask effect */}
      <div
        className="absolute inset-0 pointer-events-none z-30"
        style={{
          backdropFilter: "grayscale(1) brightness(0.78)",
          WebkitBackdropFilter: "grayscale(1) brightness(0.78)",
          background: "rgba(0,0,0,0.001)",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
        }}
      />
      
      {/* Fade overlay */}
      <div
        ref={fadeRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-40"
        style={{
          backdropFilter: "grayscale(1) brightness(0.78)",
          WebkitBackdropFilter: "grayscale(1) brightness(0.78)",
          background: "rgba(0,0,0,0.001)",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
          opacity: 1,
        }}
      />
    </div>
  );
};

// Main Club Page Component
const EnhancedClubPage = () => {
  // Club data with colorful hover effects
  const clubData = [
    {
      image: "../assets/profile.jpeg",
      title: "The Electoral Literacy Club (ELC)",
      subtitle: "The Electoral Literacy Club (ELC) at MIT ADT University, established on August 15, 2023, under the Office of Student Affairs, aims to foster democratic engagement, civic responsibility, and leadership among students. Through initiatives like voter registration drives, electoral fairs, and campaign participation, the ELC promotes electoral awareness, ethical voting practices, and hands-on civic learning. With educational programs such as lecture series and interactive exhibitions, the club empowers students to actively engage in the democratic process, building a socially responsible and informed community.",
      handle: "@elc_mitadt",
      borderColor: "#4F46E5",
      gradient: "linear-gradient(145deg, #1e3a8a, #000)",
      hoverColor: "rgba(79, 70, 229, 0.6)",
      president: "Bhoumik Rajput",
      facultyCoordinator: "Prof. Dr. Suraj Bhoyar",
      contact: "bhoumikrajput2002@gmail.com",
      url: "mailto:bhoumikrajput2002@gmail.com",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero Section with banner image */}
      <section 
        className="relative w-full h-[220px] md:h-[260px] bg-cover bg-center" 
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 flex items-center justify-center h-full mt-6">
          <h1 className="text-3xl md:text-4xl font-bold text-black bg-white bg-opacity-80 px-6 py-2 rounded shadow">
            Club Nexus: Where Interests Ignite
          </h1>
        </div>
      </section>

      {/* ChromaGrid Section */}
      <section className="flex-1 bg-white py-12">
        <div className="max-w-7xl mx-auto">
          <div className="min-h-[800px]">
            <ChromaGrid 
              items={[...clubData, ...clubData, ...clubData, ...clubData,...clubData, ...clubData]} // Duplicate the club data thrice
              radius={350}
              damping={0.5}
              fadeOut={0.7}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-600 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500">
            Join a club today and become part of MIT ADT University's vibrant community!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default EnhancedClubPage;