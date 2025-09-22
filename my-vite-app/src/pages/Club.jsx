import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import sampleLogo from "../assets/Mitcircle.png";
import HeroBanner from "../Component/HeroBanner";
import past_ev from "../assets/banner.png";

const bannerImage =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='400' viewBox='0 0 1200 400'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%234F46E5;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%236366F1;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='400' fill='url(%23grad)'/%3E%3C/svg%3E";

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

            {/* Club Details  -  Compact */}

            <div className="mt-auto space-y-2 text-xs bg-gray-50 p-4 rounded-xl border border-gray-100">
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0"></div>
                <span className="font-semibold text-gray-700 mr-2">
                  President:
                </span>
                <span className="text-gray-600 truncate">{club.president}</span>
              </div>

              <div className="flex items-center">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0"></div>
                <span className="font-semibold text-gray-700 mr-2">
                  Coordinator:
                </span>
                <span className="text-gray-600 truncate">
                  {club.facultyCoordinator}
                </span>
              </div>

              <div className="flex items-center">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0"></div>
                <span className="font-semibold text-gray-700 mr-2">
                  Contact:
                </span>
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
          background:
            "radial-gradient(circle var(--r) at var(--x) var(--y), transparent 0%, rgba(0,0,0,0.02) 50%, rgba(0,0,0,0.05) 100%)",
        }}
      />

      {/* Fade overlay */}
      <div
        ref={fadeRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-40"
        style={{
          background:
            "radial-gradient(circle var(--r) at var(--x) var(--y), transparent 0%, rgba(0,0,0,0.01) 30%, rgba(0,0,0,0.03) 100%)",
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
    image: "sampleLogo",
    title: "Shivray Dhol Tasha Pathak",
    subtitle: "Shivray Dhol Tasha Pathak deeply honors Maharashtra’s vibrant cultural heritage through traditional drumming and dance performances. The club brings together passionate performers to preserve and showcase the rhythmic arts, creating powerful experiences that celebrate unity, tradition, and spirited cultural expression.",
    president: "Satvik Chaudhari",
    facultyCoordinator: "Prof. Dr. Suraj Bhoyar",
    contact: "chaudharisatvik57@gmail.com"
  },
  {
    image: "sampleLogo",
    title: "MIT Adventure Club",
    subtitle: "MIT Adventure Club fosters a spirit of adventure and learning by organizing outdoor expeditions, trekking, and other thrilling activities. It encourages personal growth, resilience, teamwork, and a connection with nature, enabling students to create unforgettable experiences beyond the classroom.",
    president: "Gaurav Bhimache",
    facultyCoordinator: "Mr. Sandeep Bhapkar",
    contact: "mitadventureclub@gmail.com"
  },
  {
    image: "sampleLogo",
    title: "Electoral Literacy Club",
    subtitle: "The Electoral Literacy Club (ELC) promotes awareness of democratic values and electoral processes through engaging campaigns, workshops, and voter education. It empowers students to make informed decisions, enhancing civic responsibility and active participation in democratic governance.",
    president: "Mugdha Sonawane",
    facultyCoordinator: "Prof. Dr. Pratibha Jagtap",
    contact: "mugdhasonawane04@gmail.com"
  },
  {
    image: "sampleLogo",
    title: "Muse",
    subtitle: "Muse Music Club provides a creative platform for musicians, vocalists, and sound engineers to collaborate, learn, and perform. The club celebrates musical diversity, fostering a supportive environment where members hone their skills and share their passion with the community.",
    president: "Ankan Maity",
    facultyCoordinator: "Prof. Dr. Suraj Bhoyar",
    contact: "ankan3555@gmail.com"
  },
  {
    image: "sampleLogo",
    title: "Cloud Computing Club",
    subtitle: "The Cloud Computing Club offers hands-on learning opportunities in cloud technologies, encouraging members to explore, innovate, and apply solutions in real-world contexts. Through workshops and collaborative projects, it prepares students for careers in the evolving cloud computing landscape.",
    president: "Rushikesh Zope",
    facultyCoordinator: "Prof. Sumit Hirve",
    contact: "rushikesh.zope@gmail.com"
  },
  {
    image: "sampleLogo",
    title: "Mechanical Engineering Student Association",
    subtitle: "MESA bridges academic theory with practical engineering applications, supporting students with technical workshops, leadership opportunities, and professional networking. The club nurtures innovation and teamwork to prepare members for successful careers in mechanical engineering.",
    president: "Krishna Bhavsar",
    facultyCoordinator: "Prof. Shashank S. Gawade",
    contact: "bhavsark0099@gmail.com"
  },
  {
    image: "sampleLogo",
    title: "Mirage",
    subtitle: "Mirage is the pioneering AR and VR club dedicated to advancing immersive technology. It offers hands-on projects, expert sessions, and collaborative learning to push the boundaries of virtual experiences, creativity, and digital innovation.",
    president: "Meghraj Nair",
    facultyCoordinator: "Prof. Revati Deshpande",
    contact: "nairmeghraj@gmail.com"
  },
  {
    image: "sampleLogo",
    title: "The Foodpreneurs Club",
    subtitle: "Focused on food technology and entrepreneurship, The Foodpreneurs Club empowers members to develop innovative culinary ideas into successful ventures. It offers mentorship, resources, and events that balance taste, health, and sustainability to advance gastronomical excellence.",
    president: "Akul Agarwal",
    facultyCoordinator: "Dr. Sandip Gaikwad",
    contact: "akulaagrawal@gmail.com"
  },
  {
    image: "sampleLogo",
    title: "Laggar Falcon Aero Club",
    subtitle: "LFAC fosters aerospace enthusiasm through seminars, workshops, and competitions in UAVs, rocketry, and astronomy. The club cultivates innovation and shared learning among members passionate about aerospace technologies and exploration.",
    president: "Shezhan Ghamat",
    facultyCoordinator: "Prof. Krishna Jadhav",
    contact: "shezanghamat@gmail.com"
  },
  {
    image: "sampleLogo",
    title: "ERC-Music Studio (ERCMS)",
    subtitle: "ERCMS is a vibrant community for music lovers, offering platforms for live performances, production workshops, and creative collaborations. It encourages artistic expression and professional skill development in music production and performance.",
    president: "Vaishnavi Yadav",
    facultyCoordinator: "Prof. Vivek Sutar",
    contact: "ercmusicstudios@gmail.com"
  },
  {
    image: "sampleLogo",
    title: "Painting Club",
    subtitle: "The Painting Club nurtures artistic talent and creativity through workshops, exhibitions, and collaborative projects. It provides an encouraging environment for artists of all levels to express themselves and enrich campus culture with visual art.",
    president: "Arya Ashtikar",
    facultyCoordinator: "Prof. Uttam Janawade",
    contact: "ashtikaraarya@gmail.com"
  },
  {
    image: "sampleLogo",
    title: "Techno Smart Campus Club",
    subtitle: "Leading technology-driven campus transformation, this club develops innovative smart solutions for sustainability and digital advancement. It cultivates student collaboration on cutting-edge projects to modernize and enhance campus life.",
    president: "Parissa Matey",
    facultyCoordinator: "Prof. Dr. Rajani Sajjan",
    contact: "parissamatey405@gmail.com"
  },
  {
    image: "sampleLogo",
    title: "Geeks For Geeks Student Chapter",
    subtitle: "This chapter fuels tech innovation by hosting workshops, hackathons, and collaborative learning opportunities. It equips students with skills and knowledge to excel in competitive programming and software development.",
    president: "Kunal Singh",
    facultyCoordinator: "Prof. Hemant Shinde",
    contact: "kunalsingh2514@gmail.com"
  },
  {
    image: "sampleLogo",
    title: "ASTECH",
    subtitle: "ASTECH catalyzes student interest in aerospace technology through hands-on education, seminars, and exploration of emerging space innovations. It inspires future aerospace professionals to excel in the dynamic field.",
    president: "Yash Gutte",
    facultyCoordinator: "Prof. Benazir Pirjade",
    contact: "yashgutte13@gmail.com"
  },
  {
    image: "sampleLogo",
    title: "Speedtail Racing",
    subtitle: "This club champions automotive innovation and sustainability through practical projects and competitions. Members develop engineering expertise, embracing creativity and leadership to impact the future of transportation.",
    president: "Abhishek Saha",
    facultyCoordinator: "Dr. Anurag Nema",
    contact: "abhisheksaha.speedtail.raicing@gmail.com"
  },
  {
    image: "sampleLogo",
    title: "Aws Cloud Club",
    subtitle: "AWS Cloud Club delves deep into cloud computing, organizing workshops and certification preparation to build career-ready skills in cloud technologies and Amazon Web Services.",
    president: "Parth Shah",
    facultyCoordinator: "Prof. Dr. Rajani Sajjan",
    contact: "parths.1305@gmail.com"
  },
  {
    image: "sampleLogo",
    title: "The Log Book",
    subtitle: "Dedicated to campus journalism and content creation, The Log Book hones storytelling, photography, and editorial abilities, engaging students in documenting vibrant campus life and events.",
    president: "Sumeet Patankar",
    facultyCoordinator: "Prof. Nilambari Jadhav",
    contact: "sumeetpatankar21@gmail.com"
  },
  {
    image: "sampleLogo",
    title: "MIT ADT Consulting Club (MACC)",
    subtitle: "MACC nurtures consulting skills by immersing members in case studies, workshops, and mentorship programs. It prepares students to excel in business problem-solving and strategic thinking.",
    president: "Pranita Potghan",
    facultyCoordinator: "Prof. Palash Sontakke",
    contact: "pranitapp1587@gmail.com"
  },
  {
    image: "sampleLogo",
    title: "Gearhead Riders Bikers Community",
    subtitle: "This passionate community of bikers celebrates freedom, adventure, and camaraderie through organized rides and events, creating strong bonds and unforgettable experiences on the road.",
    president: "Mayank Mandiya",
    facultyCoordinator: "Prof. Dr. Swapnil Shirsath",
    contact: "mandiyamayank533@gmail.com"
  },
  {
    image: "sampleLogo",
    title: "SAE Collegiate Club",
    subtitle: "The SAE Club promotes excellence in mobility engineering through workshops, technical skill-building, and expert guidance. It supports students aiming to innovate in automotive and aerospace industries.",
    president: "Athrva Bagul",
    facultyCoordinator: "Dr. Anurag Nema",
    contact: "atharvb214@gmail.com"
  },
  {
    image: "sampleLogo",
    title: "MIT Swift Coding Club",
    subtitle: "Focused on Swift programming, this club encourages skill growth, coding challenges, and collaboration to empower budding developers in app development and software engineering.",
    president: "Ms. Sanskriti Khamkar",
    facultyCoordinator: "Prof. Reetika Kerketta",
    contact: "sanskriti.khamkar.101@gmail.com"
  },
  {
    image: "sampleLogo",
    title: "Yuvarth",
    subtitle: "Yuvarth inspires innovative problem-solving by fostering teamwork in competitions, workshops, and project development. It enhances members' abilities to tackle real-world challenges creatively.",
    president: "Shivam Mhamane",
    facultyCoordinator: "Prof. Kiran Shinde",
    contact: "shivammhamane28@gmail.com"
  },
  {
    image: "sampleLogo",
    title: "Innovation And Entrepreneurship Club",
    subtitle: "This dynamic club accelerates innovation and entrepreneurial skill-building through mentorship, startup workshops, and networking, preparing students to transform ideas into impactful ventures.",
    president: "Divyam Prabhudessai",
    facultyCoordinator: "Moushmee Kuri",
    contact: "divyamprabhudessai26@gmail.com"
  },
  {
    image: "sampleLogo",
    title: "Panchayati Drama Club",
    subtitle: "Panchayati Drama Club revives the spirit of Indian theater, offering rich experiences in acting, stagecraft, direction, and scriptwriting, cultivating confidence and cultural appreciation among members.",
    president: "Dadasaheb Bhosure",
    facultyCoordinator: "Prof. Kiran Pavaskar",
    contact: "dadabhosure0049@gmail.com"
  },
  {
    image: "sampleLogo",
    title: "Words' Worth Club",
    subtitle: "Focused on enhancing English language proficiency and creativity, Words' Worth Club offers workshops in writing, storytelling, and literature appreciation to nurture expressive communication.",
    president: "Ziyan Jahagirdar",
    facultyCoordinator: "Prof. Balasaheb Wakde",
    contact: "krishjha.1909@gmail.com"
  },
  {
    image: "sampleLogo",
    title: "Photography Club",
    subtitle: "The Photography Club provides a community for enthusiasts to master the art of photography, sharing techniques through workshops, photo walks, and exhibitions to capture compelling stories visually.",
    president: "Saurav Sharma",
    facultyCoordinator: "Prof. Tushar Panke",
    contact: "sauravkumarssingh1399@gmail.com"
  },
  {
    image: "sampleLogo",
    title: "Synapse AI",
    subtitle: "Synapse AI fosters passion for artificial intelligence by promoting research projects, workshops, and collaborative innovation aimed at advancing AI applications within and beyond campus.",
    president: "Shifa Pathan",
    facultyCoordinator: "Prof. Shahin Makubhai",
    contact: "shifa.pathan1908@gmail.com"
  },
  {
    image: "sampleLogo",
    title: "MIT CBC (Cybersecurity And Blockchain Club)",
    subtitle: "MIT CBC Club empowers students in the growing fields of cybersecurity and blockchain through hands-on workshops, expert-led seminars, and collaborative problem-solving activities.",
    president: "Ritik Singh",
    facultyCoordinator: "Prof. Aman Kamble",
    contact: "singhritik62@gmail.com"
  },
  {
    image: "sampleLogo",
    title: "Java Brewers",
    subtitle: "Java Brewers Club hones students' Java programming skills via coding challenges, collaborative projects, and knowledge-sharing sessions preparing members for successful tech careers.",
    president: "Lalit Deshmukh",
    facultyCoordinator: "Prof. Rahul More",
    contact: "lalitdeshmukh018@gmail.com"
  },
  {
    image: "sampleLogo",
    title: "Leap Of Grace",
    subtitle: "Leap Of Grace Dance Club encourages dancers of all experience levels to explore movement artistry through performances, workshops, and peer mentorship in an inclusive and dynamic setting.",
    president: "Ketan Malviya",
    facultyCoordinator: "Prof. Reshma Girigosavi",
    contact: "ketanmalviya20@gmail.com"
  },
  {
    image: "sampleLogo",
    title: "Ted-X",
    subtitle: "The TEDx Club cultivates a platform for spreading transformative ideas through self-organized events featuring engaging speakers who inspire the university community.",
    president: "Abhinav Jaiswal",
    facultyCoordinator: "Prof. Moushmee Kuri",
    contact: "abhinavjaiswal1201@gmail.com"
  },
  {
    image: "sampleLogo",
    title: "The Psychology Club",
    subtitle: "The Psychology Club promotes mental wellness and resilience by organizing workshops and events that deepen understanding of mind-body health and stress management strategies.",
    president: "Shriya Purandare",
    facultyCoordinator: "Prof. Ekta Shipure",
    contact: "shriyapurandarex16@gmail.com"
  },
  {
    image: "sampleLogo",
    title: "The Infusion Club",
    subtitle: "The Infusion Club innovates in culinary arts with a focus on wellness, teaching members to craft herbal and fruit infusions that enhance health, flavor, and creativity in beverage preparation.",
    president: "Shreya Patil",
    facultyCoordinator: "Prof. Yogita Chavan",
    contact: "shreyaapatil28@gmail.com"
  },
  {
    image: "sampleLogo",
    title: "The Alpha Cell",
    subtitle: "The Alpha Cell unites diverse artists, providing workshops, exhibitions, and collaborative platforms that inspire creativity, foster artistic growth, and celebrate original expression across mediums.",
    president: "Deepesh Patil",
    facultyCoordinator: "Prof. Balaji Jadhav",
    contact: "deepeshpatil0101@gmail.com"
  },
  {
    image: "sampleLogo",
    title: "The Log Book",
    subtitle: "The Log Book drives journalistic and editorial innovation, encouraging members to craft compelling media content that chronicles campus culture and significant events with integrity and creativity.",
    president: "Sumeet Patankar",
    facultyCoordinator: "Prof. Nilambari Jadhav",
    contact: "sumeetpatankar21@gmail.com"
  },
  {
    image: "sampleLogo",
    title: "Vidyut Veda",
    subtitle: "Vidyut Veda empowers engineering students with hands-on hackathons, workshops, and industrial visits that build technical expertise and teamwork skills essential for technological innovation.",
    president: "Taresh Chabukswar",
    facultyCoordinator: "Prof. Mahesh A. Kamthe",
    contact: "taresh1008@gmail.com"
  },
  {
    image: "sampleLogo",
    title: "ACM-W",
    subtitle: "ACM-W is a supportive community promoting the advancement and leadership of women in technology and entrepreneurship with mentorship programs, skill-building workshops, and networking events.",
    president: "Malavika Unnikrishnan",
    facultyCoordinator: "Prof. Dr. Ayesha Butalia",
    contact: "malavikapdm@gmail.com"
  },
  {
    image: "sampleLogo",
    title: "Codechef",
    subtitle: "Codechef fosters passionate coders through competitive programming, challenges, and educational resources focused on preparing students for excellence in coding and software development careers.",
    president: "Shreeya Phapale",
    facultyCoordinator: "Prof. Ravi Chaudhari",
    contact: "shreeya.phapale@gmail.com"
  },
  {
    image: "sampleLogo",
    title: "Ignite",
    subtitle: "IGNITE sparks creativity and innovation by hosting inspiring events, collaborative workshops, and projects that encourage experimentation and personal growth among members.",
    president: "Parth Datar",
    facultyCoordinator: "Prof. Pallavi Bhujbal",
    contact: "parthdatar18@gmail.com"
  },
  {
    image: "sampleLogo",
    title: "Ideate",
    subtitle: "IDEATE pioneers UI/UX excellence by fostering a creative community of designers and developers dedicated to crafting user-centric, innovative digital experiences through workshops and ideation sessions.",
    president: "Tejas Gavhane",
    facultyCoordinator: "Prof. Dr. Anant Kaulage",
    contact: "tgavhane340@gmail.com"
  },
  {
    image: "sampleLogo",
    title: "Team Volta",
    subtitle: "Team Volta drives technological innovation by collaboratively solving engineering challenges, encouraging creativity, and delivering impactful solutions that advance industry and academia.",
    president: "Atharav Phadtare",
    facultyCoordinator: "Prof. Praveen Bhojane",
    contact: "patharav2005@gmail.com"
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
            Join a club today and become part of MIT ADT University's vibrant
            community!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ModernClubPage;
