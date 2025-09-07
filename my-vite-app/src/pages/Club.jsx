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
      image: sampleLogo,
      title: "Aces MITSOE",
      subtitle:
        "ACES, a dynamic academic community, prioritizes student happiness and holistic development. With a focus on enhancing the student happiness index, it spearheads transformative change through innovative curricular and co-curricular initiatives. Committed to nurturing well-being and empowerment, ACES fosters a sense of purpose and belonging through progressive programs and policies.",
      president: "Aayush Dalvi",
      facultyCoordinator: "Prof. SwapnIl Patil",
      contact: "aayushdalvi485@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Mirage",
      subtitle:
        "Mirage is the AR & VR Club at MIT ADT University, dedicated to pushing the boundaries of immersive technologies. The club serves as a hub for innovation, creativity, and collaboration, bringing together students passionate about building experiences that blend imagination with cutting-edge reality.",
      president: "Meghraj Nair",
      facultyCoordinator: "Prof. Revati Deshpande",
      contact: "nairmeghraj@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Aws Cloud Club",
      subtitle:
        "The AWS Club at MIT ADT University is dedicated to exploring Amazon Web Services and cloud computing technologies through hands-on workshops, projects, and certification preparation. Our club offers opportunities to learn from industry experts, participate in hackathons, and connect with like-minded peers. Join us to enhance your cloud skills and prepare for a future in technology!",
      president: "Parth Shah",
      facultyCoordinator: "Prof. Dr. Rajani Sajjan",
      contact: "parths.1305@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Ideate",
      subtitle:
        "IDEATE pioneers UI/UX design innovation, redefining digital experiences with user-centric principles. It fosters creativity and functionality through a vibrant community of designers, developers, and visionaries. Through ideation sessions, workshops, and industry insights, IDEATE empowers individuals to create immersive, engaging digital experiences, shaping the future of UI/UX with cutting-edge technology.",
      president: "Tejas Gavhane",
      facultyCoordinator: "Prof. Dr. Anant Kaulage",
      contact: "tgavhane340@gmail.com",
    },

    {
      image: sampleLogo,
      title: "Arcade - Game Development And Metaverse Club",
      subtitle:
        "The Arcade Club at MIT ADT University is all about celebrating the joy of gaming and game development. We bring together students who are passionate about retro and modern games to explore game design, development, and play. Whether you're a casual gamer or an aspiring game developer, come be a part of our community where we dive into the world of games and share the excitement!",
      president: "Sarbojit Mandal",
      facultyCoordinator: "Prof. Shubhra Mathur",
      contact: "sarbojit2424@gmail.com",
    },
    {
      image: sampleLogo,
      title: "ASTECH",
      subtitle:
        "The ASTECH Club at MIT ADT University focuses on advancing knowledge in aerospace and space technology. We engage students through workshops, projects, and seminars on topics such as spacecraft design, satellite technology, and space exploration. Our club aims to inspire and prepare the next generation of aerospace engineers and enthusiasts by exploring the latest innovations and challenges in the field.",
      president: "Yash Gutte",
      facultyCoordinator: "Prof. Benazir Pirjade",
      contact: "yashgutte13@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Between The Lines Book Club",
      subtitle:
        "Between The Lines Book Club is a vibrant community fostering a love for literature and meaningful discussions. With a curated selection of diverse works, members embark on enriching literary journeys through engaging discussions and shared experiences. Committed to igniting intellectual curiosity, the club promotes lifelong learning and the power of storytelling.",
      president: "Shreya Pandya",
      facultyCoordinator: "Prof. Siddhi Lonkar",
      contact: "shreya793313@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Cinemaniacs",
      subtitle:
        "Cinemaniacs is the official photography and filmmaking club of MIT ADT University, dedicated to those who love capturing moments, telling stories, and exploring the art of visual expression. The club provides a platform for students to enhance their photography and videography skills through workshops, photo walks, short-film projects, and exhibitions.",
      president: "Vidhi Gandhi",
      facultyCoordinator: "Prof. Siddhi Lonkar",
      contact: "vidhigandhi603@gmail.com",
    },
    
    {
      image: sampleLogo,
      title: "Codechef",
      subtitle:
        "Codechef is a leading competitive programming platform fostering innovation and excellence globally. It ignites passion and sharpens coding skills through contests, challenges, and learning resources. The club nurtures talent, promotes technical proficiency, and empowers aspiring coders to excel in today’s digital world. Embracing collaboration, creativity, and continuous improvement, Codechef inspires transformative journeys in coding excellence.",
      president: "Shreeya Phapale",
      facultyCoordinator: "Prof. Ravi Chaudhari",
      contact: "shreeya.phapale@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Electoral Literacy Club",
      subtitle:
        "The Electoral Literacy Club (ELC) at MIT ADT University, established August 15, 2023, promotes democratic engagement, civic responsibility, and student leadership. Through voter drives, electoral fairs, and campaign participation, it fosters electoral awareness and ethical voting. Educational programs such as lectures and interactive exhibitions empower students to actively participate in democracy, building a socially responsible, informed community.",
      president: "Mugdha Sonawane",
      facultyCoordinator: "Prof. Dr. Pratibha Jagtap",
      contact: "mugdhasonawane04@gmail.com",
    },
    {
      image: sampleLogo,
      title: "ERC-Music Studio (ERCMS)",
      subtitle:
        "The ERC Music Studio Club at MIT ADT University is a vibrant hub for music enthusiasts. It fosters talent and passion by providing a platform to explore, create, and perform across genres and instruments. From live shows and jam sessions to production workshops and original compositions, ERCMS encourages creativity and collaboration among musicians, vocalists, and sound engineers, building a community where rhythm, melody, and innovation unite.",
      president: "Vaishnavi Yadav",
      facultyCoordinator: "Prof. Vivek Sutar",
      contact: "ercmusicstudios@gmail.com",
    },
    {
      image: sampleLogo,
      title: "The Foodpreneurs Club",
      subtitle:
        "The Foodpreneur's Club drives innovation in food technology by empowering aspiring foodpreneurs with tools, mentorship, and resources. Focusing on taste, health, and sustainability, it hosts events and fosters a supportive community to turn creative ideas into successful ventures and advance gastronomic excellence.",
      president: "Akul Agarwal",
      facultyCoordinator: "Dr. Sandip Gaikwad",
      contact: "akulaagrawal@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Gearhead Riders Bikers Community",
      subtitle:
        'The Bikers Community is a tight-knit group of riders bound by their love for the open road and the thrill of adventure. With a motto of "Freedom, Adventure, Camaraderie," they provide a platform for enthusiasts to connect, share stories, and embark on unforgettable journeys together. From scenic cruises to tackling challenging routes, members find solace and excitement in the freedom of the ride.',
      president: "Mayank Mandiya",
      facultyCoordinator: "Prof. Dr. Swapnil Shirsath",
      contact: "mandiyamayank533@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Geeks For Geeks Student Chapter",
      subtitle:
        "The Geeks For Geeks Student Chapter is a vibrant community fostering collaboration and innovation in technology and computer science. It empowers programmers and tech enthusiasts through workshops, hackathons, and guest lectures. Focused on continuous learning, the chapter equips students with up-to-date tools and resources, inspiring the next generation of tech leaders driven by passion and intellectual curiosity.",
      president: "Kunal Singh",
      facultyCoordinator: "Prof. Hemant Shinde",
      contact: "kunalsingh2514@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Groovance",
      subtitle:
        "Groovance, the Classical Dance Club, is dedicated to preserving and promoting the timeless artistry of classical dance forms. With a mission to celebrate heritage and elegance, Groovance offers training sessions, performances, and workshops to nurture talent and foster appreciation for classical dance. Through engaging events, the club aims to enrich the university community with the grace and allure of this traditional form of expression.",
      president: "Bhavya Bhasin",
      facultyCoordinator: "Prof. Aditi Riswadkar",
      contact: "bhavyabhasin337@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Heritage Yatra",
      subtitle:
        "The Heritage Club stands as a bastion of cultural preservation and celebration within the community. With a resolute dedication to honoring collective history and natural heritage, the club's motto is rooted in fostering pride and connection to our roots. Through diverse educational initiatives, community outreach, and preservation efforts, it ensures the cherished treasures of our heritage endure for generations.",
      president: "Harshala M Bhandare",
      facultyCoordinator: "Prof. Ravi Roshan",
      contact: "harshalabhandare9@gmail.com",
    },
    {
      image: sampleLogo,
      title: "IEEE Student Branch MIT-ADT",
      subtitle:
        "The IEEE Student Branch at MIT-ADT is a vibrant community passionate about technology and innovation. It advances knowledge through events, workshops, and competitions, providing hands-on projects and connections with industry leaders. Emphasizing inclusivity and collaboration, the branch empowers students to push boundaries and shape the future through innovation.",
      president: "Roshan Warade",
      facultyCoordinator: "Prof. Reena Pagare",
      contact: "moreshwarnaikwadi@ieee.org",
    },
    {
      image: sampleLogo,
      title: "Ignite",
      subtitle:
        "IGNITE is a dynamic community dedicated to igniting the spark of creativity and innovation within its members. With a clear mission to empower individuals to unleash their full potential, IGNITE offers a vibrant ecosystem of ideas, resources, and mentorship. Through a variety of events, workshops, and projects, IGNITE cultivates a culture of exploration, experimentation, and collaboration, encouraging members to push boundaries and make their mark on the world.",
      president: "Parth Datar",
      facultyCoordinator: "Prof. Pallavi Bhujbal",
      contact: "parthdatar18@gmail.com",
    },
   
    {
      image: sampleLogo,
      title: "ISBJ Binge Watcher's",
      subtitle:
        "The ISBJ Movie Club is a dynamic community united by their devotion to the art of storytelling on the silver screen. With an unwavering passion for cinematic brilliance, members gather to explore, analyze, and revel in the rich tapestry of films. From timeless classics to cutting-edge works, the club offers a platform for enthusiasts to immerse themselves in diverse cinematic experiences. Through lively discussions, screenings, and interactive sessions, participants uncover the intricacies of filmmaking while exchanging valuable insights and perspectives.",
      president: "Fatema Ebrahim",
      facultyCoordinator: "Prof Devashish Shedge",
      contact: "fatemaebrahim2004@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Java Brewers",
      subtitle:
        "The Java Brewers Club at MIT ADT University focuses on mastering Java programming through interactive sessions, coding challenges, and real-world projects. We provide a platform for students to enhance their coding skills, collaborate on innovative solutions, and prepare for careers in software development. Join us to learn, code, and brew your passion for Java!",
      president: "Lalit Deshmukh",
      facultyCoordinator: "Prof. Rahul More",
      contact: "lalitdeshmukh018@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Laggar Falcon Aero Club",
      subtitle:
        "LFAC (MIT's Aerospace Club) has consistently organized a spectrum of engaging events. From Interactive Seminars and Workshops to Podcasts and Technical Competitions, LFAC offers a diverse platform for enthusiasts to delve into UAV, Rocketry, and Astronomy. With a mission to foster innovation and idea acceleration within MIT's aerospace domain, LFAC aims to cultivate a community of passionate learners, dedicated to sharing and exchanging knowledge and experiences.",
      president: "Shezhan Ghamat",
      facultyCoordinator: "Prof. Krishna Jadhav",
      contact: "shezanghamat@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Leap Of Grace",
      subtitle:
        "LEAP OF GRACE Dance Club is a vibrant, inclusive community where dancers of all levels freely express creativity and explore movement artistry. Through dynamic performances, workshops, and collaborations, members experience growth and self-discovery, guided by experienced mentors and supported by peers. Join us to embrace the joy of dance and unleash your artistic passion.",
      president: "Ketan Malviya",
      facultyCoordinator: "Prof. Reshma Girigosavi",
      contact: "ketanmalviya20@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Mechanical Engineering Student Association",
      subtitle:
        "The Mechanical Engineering Student Association (MESA) is a dynamic student-driven body at MIT ADT University that aims to bridge the gap between classroom learning and real-world engineering applications. It provides a collaborative platform for mechanical engineering students to innovate, learn, and lead through a wide range of technical, professional, and cultural activities.",
      president: "Krishna Bhavsar",
      facultyCoordinator: "Prof. Shashank S. Gawade",
      contact: "bhavsark0099@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Muse",
      subtitle:
        "The Muse Music Club is a dynamic community dedicated to fostering creativity, expression, and musical exploration. With a commitment to inclusivity and support, the club offers a platform for musicians of all levels to connect, collaborate, and grow. From jam sessions to workshops, performances to open mic nights, members are encouraged to unleash their artistic potential and contribute to the vibrant tapestry of musical innovation.",
      president: "Ankan Maity",
      facultyCoordinator: "Prof. Dr. Suraj Bhoyar",
      contact: "ankan3555@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Cloud Computing Club",
      subtitle:
        "The Cloud Computing Club is a dynamic community fostering innovation in cloud technology. Dedicated to nurturing talent, the club offers hands-on experience, collaborative projects, and industry insights. Through workshops, seminars, and real-world applications, members gain essential skills for success in today's digital world. With a vision to inspire future leaders in cloud computing, the club drives transformative change across industries.",
      president: "Rushikesh Zope",
      facultyCoordinator: "Prof. Sumit Hirve",
      contact: "rushikesh.zope@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Painting Club",
      subtitle:
        "Step into the world of artistry with the Painting Club, where artists of all levels unite in a supportive atmosphere to hone their skills and unleash their creativity. With a commitment to kindling passion and fostering talent, this vibrant community hosts exhibitions, workshops, and collaborative endeavors, empowering members to explore their imagination with confidence. Join the Painting Club and embark on a journey of artistic discovery and expression.",
      president: "Arya Ashtikar",
      facultyCoordinator: "Prof. Uttam Janawade",
      contact: "ashtikaraarya@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Panchayati Drama Club",
      subtitle:
        "The Panchayati Drama Club, official performing arts society at MIT ADT University, nurtures creativity, expression, and cultural storytelling. It offers a vibrant platform for acting, stagecraft, direction, and scriptwriting. The club revives Indian theatre’s essence while embracing modern drama, exploring genres from classical to experimental. Through workshops, productions, competitions, and events, it hones skills and fosters confidence, teamwork, and leadership.",
      president: "Dadasaheb Bhosure",
      facultyCoordinator: "Prof. Kiran Pavaskar",
      contact: "dadabhosure0049@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Photography Club",
      subtitle:
        "The Photography Club is a dynamic community of photography enthusiasts dedicated to fostering creativity and appreciation for the art of visual storytelling. Through workshops, photo walks, and hands-on sessions, members explore technical skills and unleash their artistic vision. With a focus on collaboration and learning, the club invites all skill levels to join in capturing life's beauty through the lens of imagination.",
      president: "Saurav Sharma",
      facultyCoordinator: "Prof. Tushar Panke",
      contact: "sauravkumarssingh1399@gmail.com",
    },
    {
      image: sampleLogo,
      title: "SAE Collegiate Club",
      subtitle:
        "We are the leading technical body for knowledge dissemination and skill development in mobility. As a trusted think-tank, we advise policymakers on mobility-related matters. Our self-sustaining society includes over 10% of mobility professionals as members. We are a professional organization dedicated to creating value for the mobility engineering community.",
      president: "Athrva Bagul",
      facultyCoordinator: "Dr. Anurag Nema",
      contact: "atharvb214@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Samarpan Club",
      subtitle:
        "MESA stands as a beacon of innovation and collaboration in mechanical engineering, empowering students with knowledge, skills, and opportunities for excellence. Through events, workshops, and projects, MESA inspires creativity, fosters leadership, and builds camaraderie. Committed to pushing boundaries, it catalyzes growth and success in academic and professional endeavors. Join MESA on a journey of discovery and innovation.",
      president: "Runali Tawade",
      facultyCoordinator: "Prof. Komal Gagare",
      contact: "runalitawade@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Shivraya Dhol Tasha Pathak",
      subtitle:
        "Shivraya Dhol Tasha Pathak, immersed in Maharashtra's cultural heritage, is a beacon of tradition and rhythm. With resounding beats, it embodies the state’s rich cultural tapestry. Dedicated to preserving Maharashtra’s legacy, it captivates audiences with mesmerizing performances. Passionate and proud, each beat evokes unity and celebration, showcasing a dynamic fusion of music, dance, and folklore. Their performances ignite pride and nostalgia, weaving tradition and modernity into an unforgettable spectacle.",
      president: "Satvik Chaudhari",
      facultyCoordinator: "Prof. Dr. Suraj Bhoyar",
      contact: "chaudharisatvik57@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Speedtail Racing",
      subtitle:
        "The Speedtail Racing Club is a vibrant community united by a passion for automotive innovation and societal impact. With a focus on fostering competitiveness and sustainability, the club pushes boundaries in technology while making positive contributions to society. Through hands-on projects and competitions, members develop practical skills and strive for excellence. Emphasizing professional and personal growth, the club empowers individuals to excel academically and contribute meaningfully to automotive innovation and beyond.",
      president: "Abhishek Saha",
      facultyCoordinator: "Dr. Anurag Nema",
      contact: "abhisheksaha.speedtail.raicing@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Synapse AI",
      subtitle:
        "Synapse AI, where innovation meets passion! With exceptional leadership, we're poised to achieve groundbreaking advancements and milestones in the world of artificial intelligence. The enthusiasm for AI and remarkable leadership qualities promise an exciting and transformative journey for our club. Join us in celebrating this new chapter and be part of a vibrant community dedicated to pushing the boundaries of AI.",
      president: "Shifa Pathan",
      facultyCoordinator: "Prof. Shahin Makubhai",
      contact: "shifa.pathan1908@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Team Volta",
      subtitle:
        "Team Volta is where innovation and collaboration drive excellence in technology and engineering. The team pushes boundaries, solves complex problems, and creates groundbreaking solutions. Focused on fostering creativity and technical expertise, Team Volta undertakes transformative projects and initiatives. Their commitment shows through collaboration, innovation, and impactful contributions. Join Team Volta to grow, solve challenges, and shape the future.",
      president: "Atharav Phadtare",
      facultyCoordinator: "Prof. Praveen Bhojane",
      contact: "patharav2005@gmail.com",
    },
   
    {
      image: sampleLogo,
      title: "Ted-X",
      subtitle:
        'TEDx clubs are local hubs of innovation and inspiration, driven by the motto "Ideas Worth Spreading." These clubs host self-organized events featuring diverse speakers who share innovative ideas, insights, and stories. Through dynamic and interactive presentations, TEDx clubs foster meaningful dialogue and connections within communities, sparking inspiration and driving positive change.',
      president: "Abhinav Jaiswal",
      facultyCoordinator: "Prof. Moushmee Kuri",
      contact: "abhinavjaiswal1201@gmail.com",
    },
    {
      image: sampleLogo,
      title: "The Alpha Cell",
      subtitle:
        "The Alpha Cell brings artists of all backgrounds together in an enriching environment to cultivate skills and fuel artistic passion. Dedicated to nurturing talent, the community offers exhibitions, workshops, and collaborative projects. Members push creative boundaries, develop unique voices, and build confidence. Join to immerse in a supportive network that champions creativity, personal growth, and artistic achievement.",
      president: "Deepesh Patil",
      facultyCoordinator: "Prof. Balaji Jadhav",
      contact: "deepeshpatil0101@gmail.com",
    },
    {
      image: sampleLogo,
      title: "The Infusion Club",
      subtitle:
        "The Infusion Club blends taste and wellness, redefining flavour through the art of infusion with a focus on health and culinary innovation. Members explore tastes crafted with quality ingredients and mindful preparation, creating refreshing herbal and fruit infusions. Every sip celebrates health, vitality, and culinary excellence.",
      president: "Shreya Patil",
      facultyCoordinator: "Prof. Yogita Chavan",
      contact: "shreyaapatil28@gmail.com",
    },
   
    {
      image: sampleLogo,
      title: "The Psychology Club",
      subtitle:
        "The Psychology Club is a vibrant community dedicated to promoting holistic wellness and resilience. Through engaging events and workshops, they empower individuals to explore the interconnectedness of mind and body, offering tools for managing stress, practicing self-care, and fostering mental fitness. With a vision focused on achieving fulfillment through physical and mental well-being, the club invites all to join in their journey of self-discovery and empowerment.",
      president: "Shriya Purandare",
      facultyCoordinator: "Prof. Ekta Shipure",
      contact: "shriyapurandarex16@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Vidyut Veda",
      subtitle: "At Vidyut Veda, we nurture curiosity and empower students as engineers and problem-solvers. Members compete and secure wins in national-level hackathons, organize hands-on workshops on PCB design, 3D printing, and prototyping, and foster teamwork to turn innovative ideas into real solutions. We also arrange industrial visits to bridge academics and industry, ensuring creativity is paired with technical expertise and practical exposure.",
      president: "Taresh Chabukswar",
      facultyCoordinator: "Prof. Mahesh A. Kamthe",
      contact: "taresh1008@gmail.com",
    },
     {
      image: sampleLogo,
      title: "Yuvarth",
      subtitle:
        "Yuvarth, the club of young minds dedicated to solving challenging problems. In a supportive and collaborative environment, Yuvarth empowers members to tackle real-world issues through creativity, critical thinking, and teamwork. This dynamic community organizes competitions, workshops, and collaborative projects, inspiring members to push boundaries and develop innovative solutions. Join Yuvarth and embark on a journey of intellectual growth and impactful problem-solving.",
      president: "Shivam Mhamane",
      facultyCoordinator: "Prof. Kiran Shinde",
      contact: "shivammhamane28@gmail.com",
    },
    {
      image: sampleLogo,
      title: "Words' Worth Club",
      subtitle: "",
      president: "Ziyan Jahagirdar",
      facultyCoordinator: "Prof. Balasaheb Wakde",
      contact: "krishjha.1909@gmail.com",
    },
     {
      image: sampleLogo,
      title: "ACM-W",
      subtitle: "",
      president: "Malavika Unnikrishnan",
      facultyCoordinator: "Prof. Dr. Ayesha Butalia",
      contact: "malavikapdm@gmail.com",
    },
     {
      image: sampleLogo,
      title: "Techno Smart Campus Club",
      subtitle: "",
      president: "Parissa Matey",
      facultyCoordinator: "Prof. Dr. Rajani Sajjan",
      contact: "parissamatey405@gmail.com",
    },
     {
      image: sampleLogo,
      title: "Innovation And Entrepreneurship Club",
      subtitle: "",
      president: "Divyam Prabhudessai",
      facultyCoordinator: "Moushmee Kuri",
      contact: "divyamprabhudessai26@gmail.com",
    },
    {
      image: sampleLogo,
      title: "The Log Book",
      subtitle: "",
      president: "Sumeet Patankar",
      facultyCoordinator: "Prof. Nilambari Jadhav",
      contact: "sumeetpatankar21@gmail.com",
    },
   
     
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
