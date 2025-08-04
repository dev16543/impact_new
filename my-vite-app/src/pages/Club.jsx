import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import sampleLogo from "../assets/Mitcircle.png";
import HeroBanner from "../Component/HeroBanner";
import past_ev from "../assets/banner.png";

// Sample images - you can replace these with actual club logos

const bannerImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='400' viewBox='0 0 1200 400'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%234F46E5;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%236366F1;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='400' fill='url(%23grad)'/%3E%3C/svg%3E";

// Enhanced ChromaGrid Component with modern white cards
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

  const data = items?.length ? items : [];

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

  return (
    <div
      ref={rootRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative w-full min-h-full flex flex-wrap justify-center items-start gap-8 p-8 bg-gray-50 ${className}`}
      style={{
        "--r": `${radius}px`,
        "--x": "50%",
        "--y": "50%",
      }}
    >
      {data.map((club, i) => (
        <article
          key={i}
          onClick={() => handleCardClick(club.url)}
          className="group relative flex flex-col w-[380px] h-[580px] bg-white rounded-2xl shadow-lg border-2 border-blue-200 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:scale-[1.02] hover:border-blue-400 overflow-hidden"
        >
          {/* Card Header with Logo */}
          <div className="relative flex justify-center items-center pt-6 pb-4 bg-gradient-to-b from-blue-50 to-white">
            <div className="w-20 h-20 rounded-full bg-white shadow-lg border-2 border-blue-100 flex items-center justify-center overflow-hidden">
              <img 
                src={club.image || sampleLogo} 
                alt={club.title} 
                className="w-16 h-16 rounded-full object-cover"
                onError={(e) => {
                  e.target.src = sampleLogo;
                }}
              />
            </div>
          </div>
          
          {/* Card Content */}
          <div className="flex-1 px-6 pb-6 flex flex-col">
            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center leading-tight">
              {club.title}
            </h3>
            
            <p className="text-sm text-gray-600 mb-6 leading-relaxed text-justify flex-1 overflow-y-auto">
              {club.subtitle}
            </p>
            
            {/* Club Details - Compact */}
            <div className="mt-auto space-y-2 text-xs bg-gray-50 p-4 rounded-xl border border-gray-100">
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0"></div>
                <span className="font-semibold text-gray-700 mr-2">President:</span>
                <span className="text-gray-600 truncate">{club.president}</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0"></div>
                <span className="font-semibold text-gray-700 mr-2">Coordinator:</span>
                <span className="text-gray-600 truncate">{club.facultyCoordinator}</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0"></div>
                <span className="font-semibold text-gray-700 mr-2">Contact:</span>
                <span className="text-blue-600 hover:text-blue-800 truncate text-xs">
                  {club.contact}
                </span>
              </div>
            </div>
            
            {/* Social Handle */}
            {club.handle && (
              <div className="mt-4 text-center">
                <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {club.handle}
                </span>
              </div>
            )}
          </div>
          
          {/* Hover Effect Overlay */}
          <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
          
          {/* Bottom Border Accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
        </article>
      ))}
      
      {/* Spotlight Effect */}
      <div
        className="absolute inset-0 pointer-events-none z-30"
        style={{
          background: "radial-gradient(circle var(--r) at var(--x) var(--y), transparent 0%, rgba(0,0,0,0.02) 50%, rgba(0,0,0,0.05) 100%)",
        }}
      />
      
      {/* Fade overlay */}
      <div
        ref={fadeRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-40"
        style={{
          background: "radial-gradient(circle var(--r) at var(--x) var(--y), transparent 0%, rgba(0,0,0,0.01) 30%, rgba(0,0,0,0.03) 100%)",
          opacity: 1,
        }}
      />
    </div>
  );
};

// Main Club Page Component
const ModernClubPage = () => {
  // Club data with modern styling
  
  const clubData = [
    {
      image: sampleLogo,
      title: "Electoral Literacy Club (ELC)",
      subtitle: "The Electoral Literacy Club (ELC) at MIT ADT University, established on August 15, 2023, under the Office of Student Affairs, aims to foster democratic engagement, civic responsibility, and leadership among students. Through initiatives like voter registration drives, electoral fairs, and campaign participation, the ELC promotes electoral awareness, ethical voting practices, and hands-on civic learning.",
      handle: "@electoral_literacy_club",
      president: "Bhoumik Rajput",
      facultyCoordinator: "Prof. Dr. Suraj Bhoyar",
      contact: "bhoumikrajput2002@gmail.com",
      url: "mailto:bhoumikrajput2002@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Cognisance Gaming Club",
      subtitle: "Cognisance - where gaming passion meets camaraderie. This vibrant club ignites excitement and fosters a sense of belonging among gamers of all levels. With a motto centred around embracing the thrill of virtual adventure, Cognisance offers a diverse range of activities, from casual gaming sessions to competitive tournaments.",
      handle: "@cognisance_gaming_club",
      president: "Tanishq Goyal",
      facultyCoordinator: "Prof. Dr Ganesh Pathak, Prof. Dr. NP Kulkarni",
      contact: "goyaltanishq99@gmail.com",
      url: "mailto:goyaltanishq99@gmail.com",
    },
    {
      image: sampleLogo,
      title: "The Infusion Club",
      subtitle: "The Infusion Club, where taste meets wellness in a harmonious blend of flavour and nourishment. This visionary collective is dedicated to redefining taste through the art of infusion, prioritising health and culinary innovation. With a focus on quality ingredients and mindful preparation, members embark on a journey of taste exploration.",
      handle: "@the_infusion_club",
      president: "Arya Paturkar",
      facultyCoordinator: "Prof Yogita Chavan",
      contact: "aryasameerp@gmail.com",
      url: "mailto:aryasameerp@gmail.com",
    },
    {
      image: sampleLogo,
      title: "SAE India Club",
      subtitle: "We are the leading technical body for knowledge dissemination and skill development in mobility. As a trusted think-tank, we advise policymakers on mobility-related matters. Our self-sustaining society includes over 10% of mobility professionals as members. We are a professional organization dedicated to creating value for the mobility engineering community.",
      handle: "@sae_india_club",
      president: "Maviya Tambe",
      facultyCoordinator: "Dr. ANURAG NEMA",
      contact: "tambemawiya120@gmail.com",
      url: "mailto:tambemawiya120@gmail.com",
    },
    {
      image: sampleLogo,
      title: "MIT Cybersecurity and Blockchain Club (CBC)",
      subtitle: "The MIT Cybersecurity and Blockchain Club (CBC) serves as a dynamic hub for students passionate about the fusion of cybersecurity and blockchain technology. Committed to advancing knowledge and fostering collaboration, the CBC empowers members through engaging events, workshops, and expert-led discussions.",
      handle: "@mit_cybersecurity_blockchain_club",
      president: "Anant Jain",
      facultyCoordinator: "Prof. Hingoliwala Hyder Ali",
      contact: "anantniteshjain@gmail.com",
      url: "mailto:anantniteshjain@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Between The Lines Book Club",
      subtitle: "Between The Lines Book Club is a vibrant community fostering a love for literature and meaningful discussions. With a curated selection of diverse works, members embark on enriching literary journeys through engaging discussions and shared experiences.",
      handle: "@between_the_lines_book_club",
      president: "Alisha Desai",
      facultyCoordinator: "Prof Siddhi Lonkar",
      contact: "alishadesai09@gmail.com",
      url: "mailto:alishadesai09@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Photography Club",
      subtitle: "Capture moments and improve your photography skills through workshops, photo walks, and exhibitions.",
      handle: "@photography_club",
      president: "Ealeja Sunil Gaikwad",
      facultyCoordinator: "Prof. Siddhi Lonkar",
      contact: "ealejaealeja@gmail.com",
      url: "mailto:ealejaealeja@gmail.com",
    },
    {
      image: sampleLogo,
      title: "MIT Electric Vehicle (EV) Club",
      subtitle: "The MIT Electric Vehicle (EV) Club is dedicated to pioneering sustainable transportation solutions and reducing carbon emissions. Through innovative technology and collaborative projects, they inspire a new generation of environmental advocates.",
      handle: "@mit_electric_vehicle_club",
      president: "Kastur Raghunath Patil",
      facultyCoordinator: "Prof Shashank Sharad Gawade",
      contact: "kasturpatil9@gmail.com",
      url: "mailto:kasturpatil9@gmail.com",
    },
    {
      image: sampleLogo,
      title: "IDEATE UI/UX Club",
      subtitle: "IDEATE is a pioneering force in the realm of UI/UX design, dedicated to redefining digital experiences through innovation and user-centric principles. With a focus on fostering creativity and functionality, IDEATE cultivates a vibrant community of designers, developers, and visionaries.",
      handle: "@ideate_ui_ux_club",
      president: "Sanskar Khedkar",
      facultyCoordinator: "Prof. Dr. Ganesh Pathak",
      contact: "sanskarkhedkar@gmail.com",
      url: "mailto:sanskarkhedkar@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Synapse AI Club",
      subtitle: "Welcome to Synapse AI, where innovation meets passion! With exceptional leadership, we're poised to achieve groundbreaking advancements and milestones in the world of artificial intelligence. Join us in celebrating this new chapter and be part of a vibrant community dedicated to pushing the boundaries of AI.",
      handle: "@synapse_ai_club",
      president: "Manas Auti",
      facultyCoordinator: "Prof.Shahin Makubhai",
      contact: "manas.auti2909@gmai.com",
      url: "mailto:manas.auti2909@gmai.com",
    },
    {
      image: sampleLogo,
      title: "Psychology Club",
      subtitle: "The Psychology Club is a vibrant community dedicated to promoting holistic wellness and resilience. Through engaging events and workshops, they empower individuals to explore the interconnectedness of mind and body, offering tools for managing stress, practicing self-care, and fostering mental fitness.",
      handle: "@psychology_club",
      president: "Mugdha Jadhav",
      facultyCoordinator: "Ms. Aiswarya Menon",
      contact: "jadhavmugdha6@gmail.com",
      url: "mailto:jadhavmugdha6@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Speedtail Racing Club",
      subtitle: "The Speedtail Racing Club is a vibrant community united by a passion for automotive innovation and societal impact. With a focus on fostering competitiveness and sustainability, the club pushes boundaries in technology while making positive contributions to society.",
      handle: "@speedtail_racing_club",
      president: "Advait Tikam",
      facultyCoordinator: "Prof. Nishigandha Patel",
      contact: "tikamadvait369@gmail.com",
      url: "mailto:tikamadvait369@gmail.com",
    },
    {
      image: sampleLogo,
      title: "IGNITE Club",
      subtitle: "IGNITE is a dynamic community dedicated to igniting the spark of creativity and innovation within its members. With a clear mission to empower individuals to unleash their full potential, IGNITE offers a vibrant ecosystem of ideas, resources, and mentorship.",
      handle: "@ignite_club",
      president: "Sonam Bhul",
      facultyCoordinator: "Prof. Ashvini Jadhav",
      contact: "sonam.bhule9696@gmail.com",
      url: "mailto:sonam.bhule9696@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Google Developers Student Community (GDSC)",
      subtitle: "The Google Developers Student Community (GDSC) is a dynamic hub where students converge to explore technology and drive positive change. With a focus on innovation and collaboration, GDSC empowers students to become problem-solvers and changemakers.",
      handle: "@google_developers_student_community",
      president: "Akshat Vashisht",
      facultyCoordinator: "Prof. Rajkumar Patil",
      contact: "akashat2003@gmail.com",
      url: "mailto:akashat2003@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Foodpreneur's Club",
      subtitle: "The Foodpreneur's Club is a vibrant hub dedicated to fostering innovation in the food technology sector. Committed to empowering aspiring foodpreneurs, the club provides essential tools, resources, and mentorship to cultivate creative ideas into successful ventures.",
      handle: "@foodpreneurs_club",
      president: "Arya Bothe",
      facultyCoordinator: "Dr. Sandip Gaikwad",
      contact: "aryabothe@gmail.com",
      url: "mailto:aryabothe@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Cloud Computing Club",
      subtitle: "The Cloud Computing Club is a dynamic community fostering innovation in cloud technology. Dedicated to nurturing talent, the club offers hands-on experience, collaborative projects, and industry insights. Through workshops, seminars, and real-world applications, members gain essential skills for success in today's digital world.",
      handle: "@cloud_computing_club",
      president: "Mahati Kapuganty",
      facultyCoordinator: "Prof .Dr. Rajani Sajjan",
      contact: "mahatikapuganty@gmail.com",
      url: "mailto:mahatikapuganty@gmail.com",
    },
    {
      image: sampleLogo,
      title: "MIT ADTU Adventure Club",
      subtitle: "The MIT ADTU Adventure Club embarks on a journey to blend exhilaration with education, providing students with thrilling experiences intertwined with valuable lessons. Committed to fostering personal and professional growth, the club offers diverse activities aimed at inspiring curiosity and igniting a passion for adventure.",
      handle: "@mit_adtu_adventure_club",
      president: "Tushar Kumar Tailor",
      facultyCoordinator: "Prof Anandrao Jadhav",
      contact: "tusharkumartailor@gmail.com",
      url: "mailto:tusharkumartailor@gmail.com",
    },
    {
      image: sampleLogo,
      title: "MIT Swift Coding Club",
      subtitle: "The MIT Swift Coding Club is a dynamic community dedicated to empowering students with essential coding skills and fostering a passion for innovation through the Swift programming language. Committed to driving creativity and excellence, the club offers workshops, hackathons, and coding challenges.",
      handle: "@mit_swift_coding_club",
      president: "Kashish Shah",
      facultyCoordinator: "Prof.Reetika Kerketta",
      contact: "kashishshah.in@gmail.com",
      url: "mailto:kashishshah.in@gmail.com",
    },
    {
      image: sampleLogo,
      title: "IEEE Student Branch",
      subtitle: "The IEEE Student Branch at MIT-ADT is a dynamic community driven by a passion for technology and innovation. Committed to advancing knowledge and fostering collaboration, the branch offers diverse opportunities for aspiring engineers and technologists.",
      handle: "@ieee_student_branch",
      president: "Samarth A. Dongare",
      facultyCoordinator: "Prof. Dr. Reena Pagare",
      contact: "sadongare7@gmail.com",
      url: "mailto:sadongare7@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Geeks For Geeks Student Chapter",
      subtitle: "The Geeks For Geeks Student Chapter is a dynamic community dedicated to fostering collaboration and innovation in technology and computer science. With a focus on empowering aspiring programmers and tech enthusiasts, the chapter provides a vibrant platform for exploration in coding, problem-solving, and software development.",
      handle: "@geeks_for_geeks_student_chapter",
      president: "Kunal Taware",
      facultyCoordinator: "Prof. Anuja Chincholkar",
      contact: "kunaltaware210@gmail.com",
      url: "mailto:kunaltaware210@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Institution's Innovation Council (IIC)",
      subtitle: "The Institution's Innovation Council (IIC) is a dynamic platform dedicated to fostering a culture of innovation and entrepreneurship within the institution. With a commitment to nurturing creativity at all levels, the IIC provides a diverse array of programs and workshops aimed at empowering individuals to transform their ideas into practical solutions.",
      handle: "@institutions_innovation_council",
      president: "Atharva Nimbalkar",
      facultyCoordinator: "Prof. Moushmee Kuri Reena Dalvi",
      contact: "atharvanimbalkar36@gmail.com",
      url: "mailto:atharvanimbalkar36@gmail.com",
    },
    {
      image: sampleLogo,
      title: "ACES MITSOE",
      subtitle: "ACES MITSOE, a dynamic academic community, prioritizes student happiness and holistic development. With a focus on enhancing the student happiness index, it spearheads transformative change through innovative curricular and co-curricular initiatives.",
      handle: "@aces_mitsoe",
      president: "Gurbani Gambhir",
      facultyCoordinator: "Prof. Rahul Sonkamble",
      contact: "gurbanigambhir23023@gmail.com",
      url: "mailto:gurbanigambhir23023@gmail.com",
    },
    {
      image: sampleLogo,
      title: "LEAP OF GRACE Dance Club",
      subtitle: "Welcome to LEAP OF GRACE Dance Club, where movement knows no bounds and creativity flourishes. With a dedication to excellence and inclusivity, this vibrant community provides a platform for dancers of all levels to express themselves freely and explore the artistry of movement.",
      handle: "@leap_of_grace_dance_club",
      president: "Aditi Bhattacharya",
      facultyCoordinator: "Prof. Reshma Giri Gosavi",
      contact: "bhattacharyaaditi4all@gmail.com",
      url: "mailto:bhattacharyaaditi4all@gmail.com",
    },
    {
      image: sampleLogo,
      title: "CodeChef Student Chapter",
      subtitle: "Codechef, a prominent platform in competitive programming, is dedicated to fostering innovation and excellence among coding enthusiasts worldwide. With a focus on igniting passion and honing skills, Codechef offers a dynamic space for individuals to push the boundaries of their coding capabilities.",
      handle: "@codechef_student_chapter",
      president: "Sagnik Nayak",
      facultyCoordinator: "Prof. Chaitanya Garware",
      contact: "sagniknayak128@gmail.com",
      url: "mailto:sagniknayak128@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Heritage Club",
      subtitle: "The Heritage Club stands as a bastion of cultural preservation and celebration within the community. With a resolute dedication to honoring collective history and natural heritage, the club's motto is rooted in fostering pride and connection to our roots.",
      handle: "@heritage_club",
      president: "Vaishnavi Khodaskar",
      facultyCoordinator: "Ar. Ketaki Patwardhan",
      contact: "vaishnavikhodaskar@gmail.com",
      url: "mailto:vaishnavikhodaskar@gmail.com",
    },
    {
      image: sampleLogo,
      title: "LFAC (MIT's Aerospace Club)",
      subtitle: "LFAC (MIT's Aerospace Club) has consistently organized a spectrum of engaging events. From Interactive Seminars and Workshops to Podcasts and Technical Competitions, LFAC offers a diverse platform for enthusiasts to delve into UAV, Rocketry, and Astronomy.",
      handle: "@lfac_aerospace_club",
      president: "Pranav Jadhav",
      facultyCoordinator: "Prof. Krishna Jadhav",
      contact: "pranavjadhav942@gmail.com",
      url: "mailto:pranavjadhav942@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Photography Club",
      subtitle: "The Photography Club is a dynamic community of photography enthusiasts dedicated to fostering creativity and appreciation for the art of visual storytelling. Through workshops, photo walks, and hands-on sessions, members explore technical skills and unleash their artistic vision.",
      handle: "@photography_club_2",
      president: "Saurav Sharma",
      facultyCoordinator: "Prof. Tushar Panke",
      contact: "sauravkumarsingh1399@gmail.com",
      url: "mailto:sauravkumarsingh1399@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Painting Club",
      subtitle: "Step into the world of artistry with the Painting Club, where artists of all levels unite in a supportive atmosphere to hone their skills and unleash their creativity. With a commitment to kindling passion and fostering talent, this vibrant community hosts exhibitions, workshops, and collaborative endeavors.",
      handle: "@painting_club",
      president: "Sourish Jape",
      facultyCoordinator: "Prof. Shilkumar Kumbhar",
      contact: "japesourish@gmail.com",
      url: "mailto:japesourish@gmail.com",
    },
    {
      image: sampleLogo,
      title: "TEDx Club",
      subtitle: "TEDx clubs are local hubs of innovation and inspiration, driven by the motto 'Ideas Worth Spreading.' These clubs host self-organized events featuring diverse speakers who share innovative ideas, insights, and stories. Through dynamic and interactive presentations, TEDx clubs foster meaningful dialogue and connections within communities.",
      handle: "@tedx_club",
      president: "Palkesh Laddha",
      facultyCoordinator: "Prof.Moushmee Kuri",
      contact: "laddhapalkesh@gmail.com",
      url: "mailto:laddhapalkesh@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Bikers Community",
      subtitle: "The Bikers Community is a tight-knit group of riders bound by their love for the open road and the thrill of adventure. With a motto of 'Freedom, Adventure, Camaraderie,' they provide a platform for enthusiasts to connect, share stories, and embark on unforgettable journeys together.",
      handle: "@bikers_community",
      president: "Krishna Bhavsar",
      facultyCoordinator: "Dr.Swpanil Shirsath, Prof.Dr.Suraj Bhoyar",
      contact: "bhavsark009@gmail.com",
      url: "mailto:bhavsark009@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Shivraya Dhol Tasha Pathak",
      subtitle: "Immersed in the vibrant tapestry of Maharashtra's cultural heritage, the Shivraya Dhol Tasha Pathak stands as a beacon of tradition and rhythm. With resounding beats that echo through the ages, this illustrious ensemble embodies the essence of Maharashtra's rich cultural tapestry.",
      handle: "@shivraya_dhol_tasha_pathak",
      president: "Sharvil Maind",
      facultyCoordinator: "Prof.Dr.Suraj Bhoyar",
      contact: "sharvil27maind@gmail.com",
      url: "mailto:sharvil27maind@gmail.com",
    },
    {
      image: sampleLogo,
      title: "ISBJ Movie Club",
      subtitle: "The ISBJ Movie Club is a dynamic community united by their devotion to the art of storytelling on the silver screen. With an unwavering passion for cinematic brilliance, members gather to explore, analyze, and revel in the rich tapestry of films.",
      handle: "@isbj_movie_club",
      president: "Amogh Singh",
      facultyCoordinator: "Prof. Sambit Pal",
      contact: "amoghsingh000@gmail.com",
      url: "mailto:amoghsingh000@gmail.com",
    },
    {
      image: sampleLogo,
      title: "MESA (Mechanical Engineering Students Association)",
      subtitle: "MESA, standing as a beacon of innovation and collaboration in mechanical engineering, is dedicated to empowering students with knowledge, skills, and opportunities for academic and professional excellence. Through diverse events, workshops, and projects, MESA inspires creativity, fosters leadership, and builds camaraderie among members.",
      handle: "@mesa_mechanical_engineering",
      president: "Dimple Raju",
      facultyCoordinator: "Prof. Komal Gagare",
      contact: "dimpleofficial43@gmail.com",
      url: "mailto:dimpleofficial43@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Hip-Hop Kanya",
      subtitle: "Hip-Hop Kanya, a dynamic force in the urban culture scene. With a fusion of rhythmic beats and lyrical prowess, this club embodies the essence of urban expression, captivating audiences worldwide. Rooted in authenticity and storytelling, Hip-Hop Kanya's electrifying performances transcend boundaries.",
      handle: "@hip_hop_kanya",
      president: "Pratiksha Behara",
      facultyCoordinator: "Prof.Dr.Suraj Bhoyar",
      contact: "pratiksha.behara@gmail.com",
      url: "mailto:pratiksha.behara@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Groovance (Classical Dance Club)",
      subtitle: "Groovance, the Classical Dance Club, is dedicated to preserving and promoting the timeless artistry of classical dance forms. With a mission to celebrate heritage and elegance, Groovance offers training sessions, performances, and workshops to nurture talent and foster appreciation for classical dance.",
      handle: "@groovance_classical_dance",
      president: "Khushi Warang",
      facultyCoordinator: "Prof. Aditi Riswadkar",
      contact: "aditi.riswadkar@mituniversity.edu.in",
      url: "mailto:aditi.riswadkar@mituniversity.edu.in",
    },
    {
      image: sampleLogo,
      title: "Muse Music Club",
      subtitle: "The Muse Music Club is a dynamic community dedicated to fostering creativity, expression, and musical exploration. With a commitment to inclusivity and support, the club offers a platform for musicians of all levels to connect, collaborate, and grow.",
      handle: "@muse_music_club",
      president: "Shrey Mishra",
      facultyCoordinator: "Prof.Dr.Suraj Bhoyar",
      contact: "shreymishra49@gmail.com",
      url: "mailto:shreymishra49@gmail.com",
    },
    {
      image: sampleLogo,
      title: "AWS Club",
      subtitle: "The AWS Club at MIT ADT University is dedicated to exploring Amazon Web Services and cloud computing technologies through hands-on workshops, projects, and certification preparation. Our club offers opportunities to learn from industry experts, participate in hackathons, and connect with like-minded peers.",
      handle: "@aws_club",
      president: "",
      facultyCoordinator: "Dr.Rajni Sajjan",
      contact: "",
      url: "",
    },
    {
      image: sampleLogo,
      title: "Java Brewers Club",
      subtitle: "The Java Brewers Club at MIT ADT University focuses on mastering Java programming through interactive sessions, coding challenges, and real-world projects. We provide a platform for students to enhance their coding skills, collaborate on innovative solutions, and prepare for careers in software development.",
      handle: "@java_brewers_club",
      president: "",
      facultyCoordinator: "Prof. Rahul More",
      contact: "",
      url: "",
    },
    {
      image: sampleLogo,
      title: "Microsoft Learn Student Chapter",
      subtitle: "The Microsoft Learn Student Chapter at MIT ADT University is dedicated to empowering students with Microsoft technologies through hands-on learning, workshops, and collaborative projects. We offer opportunities to deepen your skills in areas like Azure, .NET, and more, while connecting with industry experts and fellow tech enthusiasts.",
      handle: "@microsoft_learn_student_chapter",
      president: "",
      facultyCoordinator: "Prof. Abhishek Dhore",
      contact: "",
      url: "",
    },
    {
      image: sampleLogo,
      title: "Arcade Club",
      subtitle: "The Arcade Club at MIT ADT University is all about celebrating the joy of gaming and game development. We bring together students who are passionate about retro and modern games to explore game design, development, and play. Whether you're a casual gamer or an aspiring game developer, come be a part of our community.",
      handle: "@arcade_club",
      president: "",
      facultyCoordinator: "Prof. Shubhra Mathur",
      contact: "",
      url: "",
    },
    {
      image: sampleLogo,
      title: "IEEE EMBS Society",
      subtitle: "The IEEE EMBS Society at MIT ADT University is dedicated to exploring the intersection of engineering and medicine, focusing on cutting-edge advancements in biomedical technologies. Our society engages in activities such as workshops, seminars, and collaborative projects to enhance knowledge in areas like medical imaging, bioinstrumentation, and healthcare innovation.",
      handle: "@ieee_embs_society",
      president: "",
      facultyCoordinator: "Dr. Reena Pagare",
      contact: "",
      url: "",
    },
    {
      image: sampleLogo,
      title: "IEEE CIS Society",
      subtitle: "The IEEE CIS Society at MIT ADT University focuses on the fields of computational intelligence, including areas such as neural networks, fuzzy systems, and evolutionary computation. Our society organizes workshops, seminars, and hands-on projects to help students gain a deeper understanding of intelligent systems and their applications.",
      handle: "@ieee_cis_society",
      president: "",
      facultyCoordinator: "Dr. Jayshree Prasad",
      contact: "",
      url: "",
    },
    {
      image: sampleLogo,
      title: "ARjuna Club",
      subtitle: "The ARjuna Club at MIT ADT University is focused on exploring the exciting world of augmented reality (AR). Our club provides a platform for students to learn about AR technologies, engage in hands-on projects, and develop innovative AR applications. We aim to foster creativity and technical skills, helping members bring virtual elements to life.",
      handle: "@arjuna_club",
      president: "",
      facultyCoordinator: "Prof. Rajkumar Patil",
      contact: "",
      url: "",
    },
    {
      image: sampleLogo,
      title: "Words Worth Club",
      subtitle: "The Words Worth Club at MIT ADT University celebrates the power of language and creative expression. We bring together students who are passionate about writing, poetry, and storytelling through workshops, literary discussions, and writing competitions. Our club provides a supportive environment for aspiring writers to hone their craft.",
      handle: "@words_worth_club",
      president: "",
      facultyCoordinator: "Prof. Jayshree Nalkar",
      contact: "",
      url: "",
    },
    {
      image: sampleLogo,
      title: "ASTECH Club",
      subtitle: "The ASTECH Club at MIT ADT University focuses on advancing knowledge in aerospace and space technology. We engage students through workshops, projects, and seminars on topics such as spacecraft design, satellite technology, and space exploration. Our club aims to inspire and prepare the next generation of aerospace engineers and enthusiasts.",
      handle: "@astech_club",
      president: "",
      facultyCoordinator: "Dr. Harshawardhan Bhatkar",
      contact: "",
      url: "",
    },
    {
      image: sampleLogo,
      title: "Indian Society for Technical Education (ISTE)",
      subtitle: "The Indian Society for Technical Education (ISTE) at MIT ADT University is dedicated to fostering technical excellence and professional development among students. Our chapter organizes workshops, seminars, and technical events to enhance skills and knowledge in various engineering and technology fields.",
      handle: "@iste_student_chapter",
      president: "",
      facultyCoordinator: "Dr. Jagannath Nalawade, Dr. N.P.Kulkarni",
      contact: "",
      url: "",
    }
  ];
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <HeroBanner
        title="Club Catalyst"
        subtitle="Where Interests Ignite"
        backgroundImage={past_ev}
        height="65vh"
      />
      
      {/* ChromaGrid Section */}
      <section className="flex-1">
        <div className="w-full">
          <div className="min-h-[800px]">
            <ChromaGrid 
              items={clubData}
              radius={350}
              damping={0.5}
              fadeOut={0.7}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 text-gray-600 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-lg">
            Join a club today and become part of MIT ADT University's vibrant community!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ModernClubPage;