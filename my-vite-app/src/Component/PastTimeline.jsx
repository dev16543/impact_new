import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import july2425 from '/src/assets/pastevents/timeline_24-25/July.jpg';
import august2425 from '/src/assets/pastevents/timeline_24-25/Aug.jpg';
import september2425 from '/src/assets/pastevents/timeline_24-25/Sept.jpg';
import october2425 from '/src/assets/pastevents/timeline_24-25/Oct.jpg';
import november2425 from '/src/assets/pastevents/timeline_24-25/Nov.jpg';
import december2425 from '/src/assets/pastevents/timeline_24-25/Dec.jpg';
import january2425 from '/src/assets/pastevents/timeline_24-25/Jan.jpg';
import february2425 from '/src/assets/pastevents/timeline_24-25/Feb.png';
import march2425 from '/src/assets/pastevents/timeline_24-25/Marc.webp';
import april2324 from '/src/assets/pastevents/timeline_23-24/Apr.png';
import may2324 from '/src/assets/pastevents/timeline_23-24/May.png';
import june2324 from '/src/assets/pastevents/timeline_23-24/Jun.png';
import july2324 from '/src/assets/pastevents/timeline_23-24/Jul.png';
import august2324 from '/src/assets/pastevents/timeline_23-24/Aug.png';
import september2324 from '/src/assets/pastevents/timeline_23-24/Sep.png';
import october2324 from '/src/assets/pastevents/timeline_23-24/Oct.png';
import november2324 from '/src/assets/pastevents/timeline_23-24/Nov.jpg';
import january2324 from '/src/assets/pastevents/timeline_23-24/Jan.png';
import february2324 from '/src/assets/pastevents/timeline_23-24/Feb.png';
import march2324 from '/src/assets/pastevents/timeline_23-24/Mar.png';



// EventModal Component
const EventModal = ({ isOpen, onClose, event }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-4 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-black p-3 sm:p-4 md:p-6 flex-shrink-0">
          <div className="text-center">
            <p className="text-xs opacity-90 mb-1 sm:mb-2">Event Topic</p>
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-tight">{event.title}</h2>
            {event.date && (
              <p className="text-xs opacity-90 mt-1 sm:mt-2">{event.date}</p>
            )}
          </div>
          
          {/* Resource Persons and Venue Row */}
          <div className="flex justify-between items-start mt-3 sm:mt-4 text-xs sm:text-sm gap-2">
            {/* Resource Persons - Left Side */}
            <div className="flex-1">
              {event.resourcePersons && event.resourcePersons.length > 0 && (
                <div>
                  <h4 className="font-semibold opacity-90 mb-1">Resource Persons</h4>
                  <div className="opacity-80">
                    {event.resourcePersons.map((person, index) => (
                      <p key={index} className="text-xs sm:text-sm leading-tight">{person}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Venue - Right Side */}
            <div className="flex-1 text-right">
              {event.venue && (
                <div>
                  <h4 className="font-semibold opacity-90 mb-1">Venue</h4>
                  <p className="text-xs sm:text-sm opacity-80">{event.venue}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6">
          <div className="space-y-3 sm:space-y-4">
            <div className="border-l-4 border-purple-500 pl-2 sm:pl-3 md:pl-4">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-2">Event Description</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                {event.description || "This was an exciting event organized by the student council. It brought together students from various departments and created memorable experiences for all participants. The event featured engaging activities, meaningful interactions, and valuable learning opportunities."}
              </p>
            </div>
            
            {event.highlights && event.highlights.length > 0 && (
              <div className="border-l-4 border-orange-500 pl-2 sm:pl-3 md:pl-4">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-2">Event Highlights</h3>
                <ul className="space-y-2 text-xs sm:text-sm md:text-base text-gray-600">
                  {event.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></span>
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {event.additionalInfo && (
              <div className="border-l-4 border-blue-500 pl-2 sm:pl-3 md:pl-4">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-2">Additional Information</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                  {event.additionalInfo}
                </p>
              </div>
            )}
          </div>
        </div>
        
        {/* Footer */}
        <div className="bg-gray-50 px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 border-t flex-shrink-0">
          <div className="flex justify-between items-center">
            <div className="text-xs sm:text-sm text-gray-500">
              Event organized in {event.month}
            </div>
            <button
              onClick={onClose}
              className="px-3 sm:px-4 py-1.5 sm:py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-200 rounded-lg transition-colors text-xs sm:text-sm font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CompanyTimeline() {
  const [selectedMonth, setSelectedMonth] = useState('May');
  const [selectedYear, setSelectedYear] = useState('2024-25');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Available academic years
  const academicYears = ['2023-24', '2024-25'];
  const currentYearIndex = academicYears.indexOf(selectedYear);

  // Sample milestone data - organized by academic year and month
const timelineData = {
  '2023-24': {
    'Jun': [
      {
        id: 1,
        month: 'June',
        image: june2324,
        title: 'International Day of Yoga and Gender Sensitization Workshop',
        details: [
          {
            text: 'International Day of Yoga',
            description: 'The celebration of Yoga Day was a wonderful event that brought together yoga enthusiasts and practitioners from various backgrounds to embrace the ancient practice of yoga. The event aimed to promote physical, mental, and spiritual well-being through the art of yoga on a day dedicated to holistic wellness. The day began with a calm and serene atmosphere as participants gathered in a tranquil setting, creating an ambiance that was conducive to the practice of yoga. Experienced yoga instructors led the event, starting with a collective session of deep breathing exercises to cultivate mindfulness and relaxation among attendees. Throughout the day, various forms of yoga were practiced, catering to both beginners and seasoned practitioners. From gentle Hatha yoga to dynamic Vinyasa flows, the diverse range of practices ensure an inclusive and accessible experience for all. The Yoga Day was a unifying and enriching experience that promoted the timeless practice of yoga as a holistic approach to overall well-being. Participants left the event feeling physically invigorated and with a renewed sense of mindfulness, balance, and a commitment to incorporating the principles of yoga into their daily lives for sustained health and harmony.',
            date: 'June 21, 2023',
            venue: 'World Peace Dome',
            resourcePersons: [
              'Prof. Dr. Mangesh Karad',
              'Prof. Dr. Sunita Karad',
              'Prof. Dr. Mahesh Chopade',
              'Prof. Dr. Suraj Bhoyar'
            ]
          },
          {
            text: 'Workshop on Gender Sensitization',
            description: 'The Gender Sensitization session was held with the aim of fostering awareness and understanding of gender-related issues among attendees, particularly focusing on women seafarers. The session covered various topics ranging from the basics of gender sensitization to specific challenges faced by women in the maritime industry. The Gender Sensitization session received positive feedback from attendees, who expressed a greater awareness and understanding of gender-related issues in the maritime industry. Participants reported feeling more equipped to address discrimination and harassment and implement gender-sensitive practices in their professional roles. Additionally, the session sparked discussions among attendees, fostering a supportive environment for addressing gender equality challenges in the maritime sector. Overall, the session was successful in achieving its objectives of promoting gender sensitization and empowering attendees to contribute to a more inclusive and equitable maritime industry.',
            date: 'June, 2023',
            venue: 'MANET Building',
            resourcePersons: [
              'Dr. Atul Patil',
              'Prof. Dr. Suraj Bhoyar'
            ]
          }
        ]
      }
    ],
    'Jul': [
      {
        id: 2,
        month: 'July',
        image: july2324,
        title: 'Sports and Awareness Programs',
        details: [
          {
            text: '5th Board of Sports Committee Meeting',
            description: 'The 5th Board of Sports Committee meeting convened with a primary focus on fostering and encouraging active student participation in various sports events. Held as a crucial platform for decision-making and strategic planning, the meeting aimed to discuss initiatives that would enhance the engagement of students in sports and promote a culture of physical activity within the academic community. The discussion also revolved around creating awareness campaigns and promotional activities to ignite interest in sports among the student body. Strategies for effective communication, including the use of social media platforms and campus events, were considered to ensure that students were well-informed about the opportunities available to them.',
            date: 'July 11, 2023',
            venue: 'Sports Complex',
            resourcePersons: ['Prof. Dr. Suraj Bhoyar']
          },
          {
            text: 'Session on NPTEL Awareness',
            description: 'The National Programme on Technology Enhanced Learning (NPTEL) organized an awareness session for students and faculty to introduce them to the various opportunities and benefits offered by NPTEL. The event was held within the college premises and brought together academic enthusiasts, educators, and administrators who were interested in exploring the resources provided by NPTEL to enhance learning and skill development. The session began with an introductory address by the organizing committee, highlighting the pivotal role of NPTEL in revolutionizing the education landscape. The mission of NPTEL to make high-quality education accessible to all, especially in the field of engineering, technology, and sciences, was emphasized. A series of informative presentations followed, elucidating the various courses and certifications available on the NPTEL platform. The speakers explained the diverse array of subjects covered, ranging from core engineering disciplines to emerging technologies and interdisciplinary studies. Attendees were informed of the flexible learning modules, allowing participants to engage with the content at their own pace, fostering a conducive and personalized learning environment. The session also highlighted the esteemed faculty associated with NPTEL, including professors from renowned institutions, ensuring that learners receive instruction from experts in their respective fields. The seamless integration of multimedia elements and interactive assessments within the courses was emphasized, promoting an immersive and effective learning experience.',
            date: 'July 12, 2023',
            venue: 'RK Auditorium',
            resourcePersons: ['Prof. Dr. Suraj Bhoyar']
          },
          {
            text: 'Orientation Session for Club Activities',
            description: 'The inaugural kick-off meeting for clubs and chapters provided an innovative platform for students to initiate change within the academic landscape. The meeting was attended by proactive students from diverse backgrounds, who came together to generate ideas that would bring about positive changes, not only in academic structures but also in extracurricular realms. During the meeting, participants discussed various aspects of curricular and co-curricular activities, proposing ideas to create an engaging and relevant learning environment that would better prepare students for the challenges of the modern world. They brainstormed innovative teaching methods, interdisciplinary collaborations, and the integration of real-world applications into academic coursework to enhance the overall student experience. The event laid the foundation for the formation of task forces and committees dedicated to implementing the most promising ideas. It marked the beginning of a transformative era, promising a vibrant and progressive academic environment driven by the innovative spirit of its students.',
            date: 'July 18, 2023',
            venue: 'Sports Complex MIT ADT University',
            resourcePersons: ['Prof. Dr. Suraj Bhoyar']
          },
          {
            text: 'Workshop on "Who Wants to be an ENTREPRENEUR"',
            description: '"Who Wants to be an ENTREPRENEUR" is an exciting and educational event designed to inspire the spirit of entrepreneurship among aspiring business enthusiasts. The event is a platform for individuals to showcase their innovative ideas, learn from successful entrepreneurs, and engage in networking opportunities. A highlight of the event is the Entrepreneurship Challenge, where participants pitch their business ideas to a panel of experienced judges. This interactive segment allows aspiring entrepreneurs to receive constructive feedback and provides a chance to secure financial support or mentorship for their ventures. The diverse range of business ideas presented adds an element of excitement and showcases the innovation and creativity within the entrepreneurial community. Workshops and panel discussions are integral components of the event, covering a wide array of topics such as business strategy, marketing, financial management, and overcoming challenges in the entrepreneurial journey. Renowned industry experts and successful entrepreneurs lead these sessions, providing attendees with practical insights and actionable advice to navigate the complexities of starting and growing a business.',
            date: 'July 20, 2023',
            venue: 'Prof. H. Kumar Vyas Seminar Hall, MIT ADT University',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Prof. H. Kumar Vyas'
            ]
          },
          {
            text: 'National Workshop on IPR and Patent Facilitation',
            description: 'In the present world characterized by the primacy of innovation and creativity, the significance of intellectual property rights cannot be overstated. This is why the National Intellectual Property Awareness Mission (NIPAM) is playing a pivotal role in promoting IP awareness among students across India. As a part of the Indian Government\'s "Azadi ka Amrit Mahotsav" initiative, NIPAM is committed to fostering a culture of innovation and entrepreneurship in the nation, and the recent National Workshop on IPR & IP Management for Start-ups has been a significant milestone in this journey. Overall, the National Workshop on IPR & IP Management for Start-ups was an important initiative that furthered the goal of NIPAM to promote innovation and creativity among students across India. It is hoped that such initiatives will continue to be organized, and students will benefit from them to create an ecosystem of innovation and entrepreneurship in the country.',
            date: 'July 20, 2023',
            venue: 'Prof. H. Kumar Vyas Seminar Hall, MIT ADT University',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Prof. H. Kumar Vyas'
            ]
          },
          {
            text: 'Cycling Expedition to Malhargad',
            description: 'The Cycling Expedition to Malhargad was an exhilarating and adventurous event that captivated cycling enthusiasts with its scenic route and challenging terrain. Taking place on a memorable day, this expedition offered participants an opportunity to embark on a cycling journey filled with camaraderie, exploration, and a sense of accomplishment. Throughout the journey, experienced guides provided support, ensuring the safety and well-being of the cyclists. The camaraderie among participants flourished as they faced the challenges together, sharing in the triumphs and overcoming the obstacles along the way. The spirit of teamwork and encouragement contributed to the overall sense of achievement. The expedition concluded with a celebratory gathering, where participants shared their experiences and memorable moments. Certificates of completion were awarded, recognizing the cyclists\' determination and spirit throughout the journey. The event not only provided a physical challenge but also fostered a sense of community among cycling enthusiasts, leaving participants with lasting memories and a newfound appreciation for adventure and exploration on two wheels.',
            date: 'July 22, 2023',
            venue: 'Malhargad Fort',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Mr. Sandeep Bhapkar'
            ]
          },
          {
            text: 'Anti-drug Awareness Program Collaboration with Maharashtra Police Pune',
            description: 'A collaborative Anti-Drug Awareness Program was recently organized at MIT ADT University in Pune to address the escalating issue of drug abuse among youngsters. The initiative, a joint venture between the university authorities and the Maharashtra Police, aimed to guide and educate the youth about the perils of drug addiction while fostering a sense of responsibility and awareness within the community. The event was held at a prominent venue and brought together law enforcement officials, community leaders, educators, and concerned citizens to create a united front against the rising tide of drug abuse. The Maharashtra Police played a pivotal role in actively engaging with the youth through interactive sessions, presentations, and open dialogues. Their presence added credibility to the cause, emphasizing the severity of the issue and the need for collective action. By fostering collaboration between law enforcement, community leaders, and young individuals, the Anti-Drug Awareness Program in Pune serves as a beacon of hope in the fight against substance abuse. The event not only raised awareness but also ignited a collective commitment to creating a drug-free community where the youth can thrive and build a healthier, more resilient future.',
            date: 'July 27, 2023',
            venue: 'N518 Hall, MIT ADT University',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Prof. Dr. Ganesh Pathak',
              'Wg. Cdr. Menon'
            ]
          }
        ]
      }
    ],
    'Aug': [
      {
        id: 3,
        month: 'August',
        image: august2324,
        title: 'Adventure and Innovation Events',
        details: [
          {
            text: 'Adventurous Trek to AADRAI JUNGLE & KALU WATERFALL',
            description: 'The AADRAI JUNGLE & KALU WATERFALL expedition, organized by the MIT Adventure Club, was an exciting mix of adventure, nature, and camaraderie. The participants were taken deep into the heart of the Aadrai Jungle, where they got a chance to connect with the wilderness and enjoy its untouched beauty. The journey began early in the morning, with all the adventurers gathering at the starting point. Equipped with a spirit of exploration, the group embarked on a trek through the Aadrai Jungle, which offered a diverse and lush ecosystem that revealed the wonders of nature at every turn. The seasoned guides from the MIT Adventure Club shared insights into the rich biodiversity of the region, and participants marveled at the vibrant flora and fauna. The AADRAI JUNGLE & KALU WATERFALL expedition with MIT Adventure Club was a holistic experience that seamlessly blended adventure, education, and the joy of exploration. Participants left with a renewed appreciation for nature, lasting memories, and new friendships forged through the shared thrill of the expedition.',
            date: 'August 4, 2023',
            venue: 'AADRAI JUNGLE & KALU WATERFALL',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Prof. Rajkumar Patil'
            ]
          },
          {
            text: 'Club Bazaar',
            description: 'The Club Bazaar event, held at the university, was a vibrant showcase of innovation, enthusiasm, and a collective vision for positive change. Over 75+ diverse clubs from across the campus participated in the event, presenting their unique ideas, projects, and initiatives aimed at fostering positive transformations. The atmosphere was buzzing with energy as students, faculty, and visitors navigated through the multitude of stalls, each representing a distinct club. These clubs spanned a wide array of interests, including academic disciplines, cultural pursuits, community service, and various other areas. The diversity of clubs ensured a rich tapestry of ideas and visions for positive change. Club representatives passionately presented their projects, outlining their goals and aspirations. Whether it was an environmental club advocating for sustainable practices, a social justice club championing equality and inclusion, or a technology club developing innovative solutions, each presentation resonated with a commitment to making a meaningful impact.',
            date: 'August 09, 2023',
            venue: 'MIT SFT foyer',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Dr. Virendra Bhojwani',
              'Dr. Rakesh Siddheswar'
            ]
          },
          {
            text: 'SITARA Innovation and Startup Summit 2023',
            description: 'The SiTARA National Innovation & Startup Summit 2023 was held at the MIT-ADT University in Pune in partnership with various industry players like PERA India, FAST India, TCS DISQ, Wadhwani Foundation, TruScholar, IIC-MITADTU, AIC-MITADT Incubator Forum, CRiEYA, and MIT-ID Innovation. The summit was aimed at promoting innovation and entrepreneurship. At the summit, FAST India launched a comprehensive report on "Research Management in Indian Universities: Strengthening the Foundations." Shri Mudit Narain, Director of Policy and Research at FAST India, highlighted the report\'s significance, underscoring the crucial role of research in diverse fields, from AI to climate change, energy, electric vehicles, defence, and drones. He also emphasized that the actions of universities and faculty members today would shape India\'s economy, competitiveness, and governance in the forthcoming decades.',
            date: 'August 10, 2023',
            venue: 'MIT ADT University',
            resourcePersons: ['Prof. Dr. Suraj Bhoyar']
          },
          {
            text: 'Idea Expo: Poster/Drawing Competition',
            description: 'The Idea Expo\'s Poster/Drawing Competition was a vibrant showcase of creativity and innovation that brought together a diverse group of participants eager to express their ideas visually. Held in a dynamic venue adorned with a kaleidoscope of colours, the event aimed to celebrate the power of artistic expression in conveying impactful messages and fostering a culture of innovation. The participants, ranging from students to professionals, were allowed to unleash their artistic talents and communicate their ideas through the medium of posters and drawings. The theme for the competition revolved around innovation, sustainability, and the power of ideas to shape the future. Artists were encouraged to explore a variety of artistic styles and techniques to bring their visions to life on paper. The Idea Expo\'s Poster/Drawing Competition succeeded in fostering a community of creative thinkers, providing a platform for artistic expression, and highlighting the role of visual storytelling in conveying powerful messages. As participants left the venue, they carried with them a renewed appreciation for the intersection of art and innovation, inspired to continue exploring the boundless possibilities of creative expression.',
            date: 'August 10, 2023',
            venue: 'N518',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Prof. Neha Zope'
            ]
          },
          {
            text: 'Workshop on Drone Making',
            description: 'The workshop on Drone Making was an exciting and educational experience that brought together enthusiasts, students, and professionals who were keen on delving into the world of unmanned aerial vehicles. The workshop was hosted at a well-equipped venue and aimed to demystify the process of drone construction, from the basics of aerodynamics to the intricacies of assembling and programming these cutting-edge devices. The event began with an informative introduction to the evolution and diverse applications of drones in fields such as agriculture, surveillance, and cinematography. Experts in the field shared their insights and emphasized the significance of drone technology in today\'s rapidly advancing world. One of the highlights of the workshop was a live demonstration of a fully operational drone, showcasing the fruits of the participants\' labour. This hands-on experience allowed attendees to witness the tangible results of their efforts and boosted their confidence in handling and piloting the devices they had crafted. As the workshop concluded, participants departed with a newfound appreciation for the intricacies of drone technology, equipped with the skills and knowledge to embark on their drone-making journeys. The Workshop on Drone Making not only empowered individuals to explore a fascinating realm of technology but also fostered a community of like-minded enthusiasts eager to push the boundaries of innovation in the realm of unmanned aerial vehicles.',
            date: 'August 11, 2023',
            venue: 'N518',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Prof. Neha Zope'
            ]
          },
          {
            text: 'Converting an Innovative Idea Into A Start Up',
            description: 'The journey from an innovative idea to a thriving startup was revealed in an event that captivated aspiring entrepreneurs and seasoned business enthusiasts. The event was hosted at a dynamic startup hub and served as a blueprint for navigating the intricate path of converting visionary concepts into viable business ventures. Expert mentors and industry leaders offered practical advice on market research, business modelling, funding strategies, and effective team building. Interactive sessions allowed participants to seek guidance on specific challenges, fostering a collaborative atmosphere conducive to learning. A highlight of the event was the "Idea Pitch" session, where budding entrepreneurs had the opportunity to showcase their innovative concepts to a panel of seasoned investors and receive constructive feedback. This platform not only provided visibility to promising ideas but also facilitated networking opportunities between entrepreneurs and potential investors. The event also featured success stories of startups that had successfully navigated the challenging initial phases. Founders shared their pivotal moments, from securing initial funding to overcoming unforeseen obstacles, offering a realistic perspective on the entrepreneurial journey. As the event concluded, the air buzzed with excitement and newfound determination. Attendees departed with not just theoretical knowledge but a practical roadmap to navigate the challenging yet rewarding terrain of entrepreneurship. The event stood as a beacon, guiding passionate innovators on their quest to convert groundbreaking ideas into successful, sustainable startups.',
            date: 'August 11, 2023',
            venue: 'N518',
            resourcePersons: ['Prof. Dr. Suraj Bhoyar']
          },
          {
            text: 'Orientation of Sports Coordinator',
            description: 'The Sports Coordinator Review Meeting convened as a pivotal gathering to assess and strategize the athletic performance and sports programs within the institution. Attended by sports coordinators, coaches, and key stakeholders, the meeting aimed to reflect on past achievements, identify areas for improvement, and outline a roadmap for the upcoming sports season. The meeting kicked off with a comprehensive review of the previous year\'s sports activities. Sports coordinators presented detailed reports highlighting the successes, challenges, and lessons learned. The emphasis was not only on the win-loss records but also on the overall development of athletes, adherence to fair play, and the promotion of a positive sports culture within the institution. The importance of sportsmanship and character development through athletics was a recurring theme. Strategies were devised to instil values like discipline, teamwork, and resilience among athletes, ensuring that the sports programs aligned with the institution\'s broader educational objectives. A key focus of the meeting was the planning for upcoming tournaments and competitions. Coordinators collaborated on scheduling, logistics, and ensuring that athletes were adequately prepared both physically and mentally. Opportunities for cross-disciplinary collaborations and community engagement through sports were also explored.',
            date: 'August 12, 2023',
            venue: 'Sports Complex',
            resourcePersons: ['Prof. Dr. Suraj Bhoyar']
          },
          {
            text: '6th Indoor National Rowing Championship (Men & Women)',
            description: 'Spectacular Success at the 6th Indoor National Rowing Championships: Celebrating Grit, Resilience, and Remarkable Achievements The distinguished inaugural ceremony, held on August 10, was graced by the esteemed Chief Guest, Prof. Dr. Vishwanath D. Karad, Founder of the MIT Group of Institutions and President of MIT Art, Design and Technology University. The event was organized under the aegis of The Rowing Federation of India (RFI), led by Smt. Rajlaxmi Singh Deo, President of RFI and Vice President of the Indian Olympic Association. The championship received unprecedented support and guidance from Shri. M. V. Sriram, Secretary General RFI, Mr. Nababuddin Ahmed, Treasurer RFI, Shri Krishnand Heblekar, President of Maharashtra Rowing Association, and Mr. Sanjay Walvi, Secretary General. The meticulous orchestration of the championship was carried out with precision by Shri Rajendra Deshpande, Head of the Organizing Committee, along with a dedicated team of professionals who ensured the seamless execution of the event. The 6th Indoor National Rowing Championships were not only a showcase of athletic excellence but also a testament to the power of the human spirit. The event embodied the true essence of sportsmanship, camaraderie, and the pursuit of excellence.',
            date: 'August 12, 2023',
            venue: 'Sports Complex MIT ADT University',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Prof. Padmakar Phad'
            ]
          },
          {
            text: 'Adventurous Trek to NANEMACHI & SAATSADA WATERFALL',
            description: 'The NANEMACHI & SAATSADA WATERFALL event, organized by the MIT Adventure Club, was a thrilling exploration of nature that brought adventure enthusiasts together for a memorable day filled with stunning landscapes and exciting activities. The event took place in the picturesque locations of Nanemachi and featured a visit to the breathtaking Saatsada Waterfall. The participants embarked on a journey that blended the thrill of adventure with the tranquillity of nature. The day began with a scenic trek through Nanemachi, a charming town surrounded by lush greenery and rolling hills. Hiking enthusiasts revelled in the beauty of their surroundings, capturing Instagram-worthy moments and forging new friendships along the way. The NANEMACHI & SAATSADA WATERFALL event organized by MIT Adventure Club successfully combined adventure, nature, and community building. Participants left with a sense of accomplishment, having conquered the trails and embraced the beauty of Nanemachi and Saatsada Waterfall, making it a memorable outing for all involved.',
            date: 'August 13, 2023',
            venue: 'NANEMACHI & SAATSADA WATERFALL',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Prof. Rajkumar Patil'
            ]
          },
          {
            text: 'National Workshop on IPR under NIPAM Govt. of India',
            description: 'The significance of intellectual property rights cannot be overstated in a world where innovation and creativity are the driving forces behind success. This is why the National Intellectual Property Awareness Mission (NIPAM), operating under the Indian Government\'s "Azadi ka Amrit Mahotsav" initiative, is playing a significant role in promoting IP awareness among students throughout India. Dr. Suraj Bhoyar recently conducted a National Workshop on IPR & IP Management for Start-ups under the auspices of NIPAM, which was very successful. The workshop aimed to educate students about the importance of intellectual property rights and how startups can safeguard their innovations, creations, and ideas through patents, trademarks, copyrights, and other types of intellectual property rights. Attendees learned about the basics of IP management, licensing, and commercialization. The participants also pledged to serve as IP ambassadors across the campus and raise awareness about the importance of intellectual property. Overall, the National Workshop on IPR & IP Management for Start-ups was a vital initiative conducted under the auspices of NIPAM, which aims to promote innovation and creativity among students throughout India. We hope that such initiatives will continue to be organized, and students will take full advantage of them to create a culture of innovation and entrepreneurship in the nation.',
            date: 'August 17, 2023',
            venue: 'N518',
            resourcePersons: ['Prof. Dr. Suraj Bhoyar']
          },
          {
            text: 'Session on Let\'s Peep into the World of Snakes',
            description: 'The School of Holistic Development organized a guest lecture on \'Let\'s Peep into the World of Snakes\' by renowned herpetologist Prof. Shriram Shinde. The event was attended by students, faculty members, and researchers from various institutions across the city. Prof. Shinde began the lecture by introducing the audience to the fascinating world of snakes and their ecological importance. He explained how snakes play a crucial role in maintaining the balance of ecosystems by controlling rodent populations and serving as prey for larger predators. He also highlighted the unique adaptations that snakes possess, such as their ability to sense heat and their highly flexible jaws, which allow them to swallow prey much larger than their own head. The lecture concluded with a Q&A session, where the audience had the opportunity to ask questions and clarify their doubts. Prof. Shinde answered each question with patience and expertise, leaving the audience with a newfound appreciation for snakes and their importance in our ecosystems.',
            date: 'August 18, 2023',
            venue: 'N518',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Prof. Shriram Shinde',
              'Prof. Dr. Atul Patil'
            ]
          },
          {
            text: 'National Sports Day Celebration',
            description: 'The National Sports Day Celebration was a magnificent event that brought together athletes, sports enthusiasts, and communities from all over the nation to celebrate the spirit of sports and fitness. The event took place to honor the birth anniversary of Major Dhyan Chand, the legendary Indian hockey player. The day began with a grand inauguration ceremony that included inspiring speeches by eminent sports personalities, government officials, and dignitaries. They emphasized the importance of sports in promoting a healthy lifestyle, building a strong and vibrant nation, and fostering teamwork. The speeches also highlighted the need to recognize and support emerging talents in various sports. The National Sports Day Celebration succeeded in fostering a sense of unity and camaraderie among participants and attendees. It served as a reminder of the unifying power of sports, transcending barriers and bringing people together for a common cause. As the day concluded, the echoes of celebration lingered, leaving a lasting impact on the community and reinforcing the belief in the transformative power of sports for the betterment of individuals and society as a whole.',
            date: 'August 23, 2023',
            venue: 'Sports Complex MIT ADT University',
            resourcePersons: [
              'Arjuna Awardee Manoj Pingle',
              'Prof. Dr. Suraj Bhoyar',
              'Prof. Padmakar Phad'
            ]
          },
          {
            text: 'Live Streaming - of Chandrayaan 3 Landing',
            description: 'India launched the Chandrayaan-3 mission, led by the Indian Space Research Organization (ISRO). The mission aimed to achieve a soft landing near the moon\'s south pole, with the primary goal of landing the Vikram lander and rover to conduct scientific research. The landing was expected to take place on August 23, 2023, at about 6 pm Indian time. Eventually, the spacecraft successfully touched down on the moon\'s south pole, making India the fourth nation to achieve a successful moon landing. The mission was significant as the South Pole is believed to be rich in water ice, which can be utilized for various purposes, including the production of fuel for spacecraft and other resources. Overall, the Chandrayaan-3 mission was a significant step forward in India\'s space exploration efforts and was celebrated as a major achievement for the country\'s space program.',
            date: 'August 23, 2023',
            venue: 'RK Auditorium',
            resourcePersons: ['Prof. Dr. Suraj Bhoyar']
          },
          {
            text: 'Ph.D Induction Programme',
            description: 'The Ph.D. induction program is an important event that takes place at the beginning of the academic year to welcome and provide new postgraduate researchers with important information and guidance on the key stages of their research. The program is designed to offer workshops on various topics, including research degree processes and procedures, skills development, open access, library resources, EDI, and research integrity. The program also aims to introduce the researchers to their cohort and colleagues from the Doctoral Academy, making them feel part of the University research community. The researchers are wished a warm welcome and encouraged to commit to their studies at the University. The program aims to help the researchers feel part of the University research community and provide them with the necessary tools and resources to succeed in their Ph.D. program. The event is a great opportunity for the researchers to gain valuable insights and knowledge, network with their peers, and ask questions. The program is an essential event that provides new postgraduate researchers with the necessary information and guidance to succeed in their Ph.D. program. The program is designed to offer a variety of workshops and introduce the researchers to their cohort and colleagues from the Doctoral Academy, making them feel part of the University research community.',
            date: 'August 25, 2023',
            venue: 'Prof. H. Kumar Vyas Seminar Hall, MIT ADT University',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Dr. Virendra Bhojwani'
            ]
          }
        ]
      }
    ],
    'Sep': [
      {
        id: 4,
        month: 'September',
        image: september2324,
        title: 'Cultural and Technical Festivals',
        details: [
          {
            text: 'Janmashtami Celebration',
            description: 'Janmashtami is a revered Hindu festival that celebrates the birth of Lord Krishna, the eighth incarnation of Lord Vishnu. The festival takes place in August or September, depending on the lunar calendar, and is celebrated with great enthusiasm and devotion. Temples witness a surge in devotees who engage in bhajans (devotional songs) and prayers throughout the day and night. The midnight hour, believed to be the time of Lord Krishna\'s birth, is particularly significant. Temples resound with the singing of hymns and the air is thick with the fragrance of incense. Traditional dances, dramas, and processions add a cultural flair to the celebrations. Devotees dress up as characters from Krishna\'s life, with vibrant costumes and elaborate props, narrating stories from the divine tale of the deity. Folk performances and devotional plays, known as \'Rasa Lila,\' depict the various stages of Krishna\'s life, captivating audiences and instilling a sense of spiritual ecstasy. Feasting plays a vital role in Janmashtami celebrations, with devotees preparing special dishes that are offered to the deity and later distributed as prasad. Sweets, particularly those made with butter, are a highlight, paying homage to Lord Krishna\'s love for butter during his childhood. Janmashtami transcends religious boundaries and unites people in the celebration of divine love, spirituality, and joy. The festival serves as a reminder of the timeless teachings of Lord Krishna encapsulated in the Bhagavad Gita, promoting righteousness, devotion, and the path of dharma. Janmashtami is a kaleidoscope of colors, rituals, and devotion that brings communities together in reverence for the beloved Lord Krishna.',
            date: 'September 07, 2023',
            venue: 'Vishwa Roop Devata Mandir',
            resourcePersons: [
              'Prof. Dr. Sunita Karad',
              'Prof. Dr. Suraj Bhoyar'
            ]
          },
          {
            text: 'Workshop on Coastal Hydraulic Structures',
            description: 'A Workshop on Coastal Hydraulic Structures is going to be held on 8 September. The event will bring together experts, researchers, and professionals in the field of coastal engineering. Its aim is to promote knowledge exchange, collaboration, and innovation in the design and implementation of hydraulic structures along coastlines. Given the challenges posed by climate change, rising sea levels, and the need for sustainable development, coastal hydraulic structures are of great significance. The workshop will provide a platform for participants to explore cutting-edge technologies, share best practices, and discuss case studies that showcase successful hydraulic structure projects. The Workshop on Coastal Hydraulic Structures promises to be an informative event that brings together the collective expertise of professionals dedicated to shaping the future of coastal engineering. As coastal areas become increasingly vulnerable to environmental changes, this workshop stands as a beacon, guiding the way toward sustainable and resilient hydraulic structures that protect our shores and promote responsible coastal development.',
            date: 'September 8, 2023',
            venue: 'N218',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Prof. Dr. Viresh Shete',
              'Dr. Satish Patil'
            ]
          },
          {
            text: 'Workshop on Mental Wellbeing by The Givers Club',
            description: 'The Givers Club recently organized an event that aimed to promote the mental and physical well-being of students. The event emphasized the importance of achieving a balance between academic responsibilities and a healthy lifestyle. It provided a platform for students to gain insights into maintaining mental agility, physical fitness, and a seamless work-life culture. The event began with engaging workshops led by experts in mental health and fitness. Students participated in interactive sessions that explored mindfulness techniques, stress management strategies, and effective ways to enhance cognitive abilities. These workshops focused on equipping students with practical tools to handle the pressures of academic life while nurturing a resilient and positive mindset. In addition to the informative sessions, the event featured practical demonstrations and hands-on activities, allowing students to incorporate what they learned into their daily lives. From quick stress-relief exercises to easy-to-follow nutritional guidelines, the event provided a holistic approach to well-being.',
            date: 'September 8, 2023',
            venue: 'IT Auditorium',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Prof. Dr. Atul Patil'
            ]
          },
          {
            text: 'Intercollegiate Football Event',
            description: 'The inter-college football event brought together 15 colleges for a thrilling display of skill, sportsmanship, and camaraderie. The tournament spanned several weeks and provided a platform for young athletes to showcase their prowess on the field while fostering a sense of unity among participating institutions. The event kicked off with great enthusiasm as teams from diverse backgrounds and regions competed for the coveted trophy. Each college brought a unique style of play, adding an exciting dynamic to the tournament. From precision passes to strategic plays, the matches were a testament to the dedication and hard work put in by both players and coaching staff. As the competition progressed, rivalries intensified, and the stakes were raised. The atmosphere in the stadiums was electric, with passionate fans cheering for their respective colleges. Spectators witnessed nail-biting encounters, breathtaking goals, and remarkable saves that left everyone on the edge of their seats. In the culmination of this football extravaganza, the final match showcased the best two teams, delivering a thrilling climax to the tournament. The champions emerged after a hard-fought battle, celebrating their victory with jubilant fans and teammates. The runners-up displayed grace in defeat, acknowledging the efforts of their opponents. The inter-college football event not only celebrated athletic achievement but also created lasting memories for everyone involved. It served as a reminder of the unifying power of sports, bringing together students, faculty, and communities in the spirit of healthy competition and shared passion for the beautiful game.',
            date: 'September 18, 2023',
            venue: 'Sports Complex MIT ADT University',
            resourcePersons: [
              'Prof. Dr. Sunita Karad',
              'Prof. Dr. Suraj Bhoyar',
              'Prof. Padmakar Phad'
            ]
          },
          {
            text: 'Ganesh Festival',
            description: 'Ganesh Chaturthi, also known as Vinayaka Chaturthi, is a festival that celebrates the birth of Lord Ganesha. He is a revered elephant-headed deity who is believed to remove obstacles and is the god of wisdom. The celebrations begin with the installation of elaborately crafted clay idols of Lord Ganesha in homes, public pandals (temporary structures), and temples. Devotees meticulously decorate the idols, often portraying Ganesha in various poses and themes. The entire community comes together to participate in the preparations, fostering a sense of unity and joy. Ganesh Chaturthi transcends religious boundaries and becomes a cultural extravaganza that unites people from diverse backgrounds. The festival promotes community spirit, creativity, and a collective sense of joy. Beyond its religious significance, Ganesh Chaturthi also highlights environmental concerns, prompting efforts to create eco-friendly idols and promote sustainable celebrations. Ganesh Chaturthi is a joyous and colorful festival that encapsulates spiritual devotion, cultural richness, and community bonding. Its ten-day celebration serves as a time for reflection, gratitude, and the collective pursuit of auspicious beginnings.',
            date: 'September 2023',
            venue: 'Institute of Design Lawn',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Prof. Dr. Nachiket Thakur'
            ]
          },
          {
            text: 'Red Bull Racing Rig',
            description: 'The "Red Bull Racing Rig" event was an exhilarating and innovative extravaganza that brought the world of Formula 1 racing to the heart of a college campus. Hosted by the Speed Tail Racing Club, known for its cutting-edge approach to motorsports, the event aimed to engage and thrill students through a unique blend of technology, competition, and the unmistakable Red Bull energy. The event featured the installation of a state-of-the-art Formula 1 simulator that replicated the high-speed, precision driving experience of a real Grand Prix. Placed strategically on the campus grounds, the simulator became the focal point of the event, attracting students eager to test their racing skills in a virtual world that mirrored the challenges faced by professional drivers. Students lined up for their turn to hop into the simulator, each vying for the coveted title of the fastest racer on campus. The hyper-realistic graphics, immersive sound effects, and responsive controls of the simulator provided an authentic taste of the intense world of Formula 1 racing, leaving participants with an unforgettable and exhilarating experience.',
            date: 'September 23, 2023',
            venue: 'Institute of Design Lawn',
            resourcePersons: ['Prof. Dr. Suraj Bhoyar']
          },
          {
            text: 'Smart India Hackathon Internal Rounds',
            description: 'The Smart India Hackathon Internal Rounds (SIH Internal Rounds) is a highly competitive event that is a part of the larger Smart India Hackathon initiative. It is organized by the Ministry of Education and AICTE, and it aims to tap into the creative and problem-solving potential of young minds to address the real-world challenges faced by various industries and sectors. The SIH Internal Rounds serve as a qualifying stage where participating teams showcase their technological prowess and problem-solving abilities. Teams, made up of talented students from all over the country, engage in intense coding sessions and collaborative problem-solving exercises during this phase. The internal rounds act as a crucible, filtering and selecting the most promising and innovative solutions that will advance to the grand finale. During the event, teams are presented with a range of problem statements spanning diverse domains such as healthcare, agriculture, education, finance, and more. These problem statements are crafted in collaboration with industry leaders and government agencies to ensure relevance and impact. The participants then embark on a challenging journey to develop and present viable solutions within a stipulated timeframe. Overall, the Smart India Hackathon Internal Rounds play a pivotal role in identifying and nurturing the immense talent pool of young innovators, encouraging them to contribute to the nation\'s progress through technological solutions. The event aligns with India\'s vision of fostering a culture of innovation and leveraging technology for sustainable development across various sectors.',
            date: '25 September 2023',
            venue: 'MIT ADT University',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Dr. Rekha Sugandhi',
              'Dr. Virendra Bhojwani',
              'Prof. Suresh Kapare'
            ]
          },
          {
            text: 'Adventurous Trek to DEVKUND WATERFALL',
            description: 'The MIT Adventure Club recently organized an exciting trip to Devkund Waterfall, providing participants with a perfect blend of adventure, nature, and companionship. Nestled in the Sahyadri range, Devkund is a hidden gem renowned for its pristine beauty and mesmerizing waterfall that flows into a crystal-clear pool, creating an enchanting setting for outdoor enthusiasts. The journey began with an early morning departure from MIT, setting the stage for an exhilarating day ahead. As the group traversed through scenic trails and lush greenery, the excitement for the hidden waterfall grew. The trek to Devkund is characterized by diverse landscapes, including dense forests, rocky terrains, and meandering streams, providing participants with an immersive and varied experience. The Devkund Waterfall trip with the MIT Adventure Club provided not only a break from the routine but also served as a reminder of the beauty that nature has to offer. It was an adventure that combined physical activity, natural exploration, and a sense of community, leaving participants with a profound appreciation for the great outdoors and the thrill of adventure.',
            date: 'September 29, 2023',
            venue: 'DEVKUND WATERFALL',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Prof. Raj Kumar Patil'
            ]
          }
        ]
      }
    ],
    'Oct': [
      {
        id: 5,
        month: 'October',
        image: october2324,
        title: 'Cultural Celebrations and Sports Championships',
        details: [
          {
            text: 'Workshop on IC ENGINE and REFRIGERATION SYSTEM',
            description: 'The Assembly and Disassembly Workshop on Internal Combustion (IC) Engines and Refrigeration Systems provided a hands-on experience that gave participants a comprehensive insight into the intricate workings of these crucial mechanical systems. The state-of-the-art facility hosted the workshop to improve the participants\' understanding of the assembly and disassembly processes involved in IC engines and refrigeration systems. The workshop started with an informative introduction, which set the stage for the day\'s activities. The expert instructors, possessing extensive knowledge and experience in the field, guided the participants through the theoretical aspects of IC engines and refrigeration systems. They explained the fundamental principles and key components that make these systems function. In the refrigeration system segment, participants explored the assembly and disassembly of vital components like compressors, condensers, and evaporators. The workshop shed light on the refrigeration cycle, heat exchange processes, and the role of each component in maintaining optimal temperature conditions. Throughout the event, participants engaged in interactive discussions, posing questions and receiving expert feedback, fostering a dynamic learning environment. The Assembly and Disassembly Workshop on IC Engines and Refrigeration Systems concluded with a sense of accomplishment and newfound expertise among the participants, equipping them with practical skills and knowledge that will undoubtedly prove beneficial in their academic and professional pursuits within the realm of mechanical engineering.',
            date: 'October 14, 2023',
            venue: 'N518',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Prof. Dr. Anurag Nema'
            ]
          },
          {
            text: 'Garba Night',
            description: 'The campus of MIT ADT University was filled with vibrant energy during the Garba Night, an annual cultural event that combined the rich traditions of Gujarat with the rhythmic beats of taal. The event was a highly anticipated highlight on the university calendar, and both students and faculty came together to celebrate unity and diversity. As the sun set, the campus became a colourful and lively place, setting the stage for a night of dancing, music, and camaraderie. The rhythmic sounds of dhol and other traditional instruments created a festive atmosphere that resonated with the essence of Navratri. Students wore colourful traditional attire, complete with mirrored embroidery and swirling skirts, and gathered at the venue with great enthusiasm. The event organizers had decorated the venue with elements of Gujarati folk art, creating a visually stunning backdrop for the festivities. As the night unfolded, laughter, joy, and the spirit of togetherness filled the air. Garba Night at MIT ADT University was not just a cultural event; it was a testament to the university\'s commitment to fostering a vibrant, inclusive, and culturally rich campus environment where traditions seamlessly met contemporary expressions, and where the essence of Garba met the rhythm of unity.',
            date: 'October 19-20, 2023',
            venue: 'Sports Ground MIT ADT University',
            resourcePersons: [
              'Prof. Dr. Sunita Karad',
              'Prof. Dr. Suraj Bhoyar'
            ]
          },
          {
            text: 'SPECTRA Cultural Night',
            description: '"SPECTRA Culture Night: A Radiant Celebration of Kojagiri Purnima" SPECTRA Culture Night was a magnificent event that took place under the night sky to celebrate Kojagiri Purnima, an auspicious occasion. This event aimed to unite people from diverse backgrounds by celebrating their traditions, music, dance, and food. The event was held on a moonlit night to create a celestial atmosphere that fostered unity and understanding. The evening began with a ceremonial lighting of lamps, symbolizing the triumph of light over darkness. Performers from different communities graced the stage, presenting traditional dances, music, and rituals associated with Kojagiri Purnima. Each performance conveyed a unique story and reflected the cultural diversity that defines our collective identity. The SPECTRA Culture Night was not only an event but also a radiant tapestry of cultural interweaving, fostering harmony and appreciation for the rich heritage that defines our global community. This celebration of Kojagiri Purnima illuminated the night with the brilliance of shared humanity, leaving an indelible mark on the hearts and minds of all who participated in this luminous cultural extravaganza.',
            date: 'October 20, 2023',
            venue: 'Sports Complex MIT ADT University',
            resourcePersons: ['Prof. Dr. Suraj Bhoyar']
          },
          {
            text: 'Swachh Bharat Abhiyaan',
            description: 'The Swachh Bharat Abhiyan is a nationwide cleanliness campaign initiated by the Indian government. It found its resonance at MIT ADT University as students came together to make a significant impact on their campus environment. In a collective effort to promote cleanliness and create a waste-free atmosphere, the students at MIT ADT University organized an event that embodied the spirit of the Swachh Bharat Abhiyan. The initiative brought together a diverse group of students who were committed to fostering a cleaner and healthier living space. The event began with an inspiring opening ceremony, where speakers emphasized the importance of maintaining a clean campus for the well-being of the entire university community. Students were encouraged to take ownership of their surroundings and contribute to the larger goal of a Swachh Bharat. The impact of the Swachh Bharat Abhiyan at MIT ADT University was tangible. The campus underwent a remarkable transformation, with visibly cleaner and more organized spaces. The event not only succeeded in achieving its immediate goals but also created a lasting impact by fostering a culture of cleanliness and environmental consciousness among the students. As a result, MIT ADT University emerged as a model for other educational institutions, showcasing the power of collective effort in creating a Swachh Bharat. The event exemplified the potential of youth-driven initiatives in bringing about positive change and contributing to the larger national goal of a cleaner and greener India.',
            date: 'October 22, 2023',
            venue: 'Sports Ground MIT ADT University',
            resourcePersons: ['Prof. Dr. Suraj Bhoyar']
          },
          {
            text: 'PERA Premier Championship',
            description: 'The Preeminent Education and Research Association, India, in collaboration with MIT Art, Design and Technology University, Pune, proudly hosted the PERA Premier Championship 2023, a grand sporting event that witnessed the participation of more than 35+ universities and institutes from Maharashtra. The PERA Premier Championship was a celebration of sportsmanship, talent, and teamwork. It was a showcase of the competitive spirit and the collective effort of students from diverse educational institutions. The championship featured a wide range of 15+ different sports events, and the participants demonstrated exceptional skills and dedication throughout the event. At the heart of the championship\'s success was the fierce competition among the universities and institutes. Prof. Dr. Mangesh Karad, the President of the Preeminent Education and Research Association, India, and the driving force behind this initiative, shared the genesis of the championship. He emphasized the significance of providing platforms like the PERA Premier Championship to harness the potential of young athletes. Dr. Karad underscored that it is high time to recognize the role of sports in nation-building. He commended MIT Art, Design & Technology University for its holistic approach in shaping the future of young India, which includes nurturing and promoting sports as an essential part of overall development.',
            date: 'October 23, 2023',
            venue: 'Sports Complex MIT ADT University',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Prof. Padmakar Phad',
              'Prof. Hanumant Pawar'
            ]
          },
          {
            text: 'Inter College Kho-Kho',
            description: 'The Inter-college Kho-Kho event was a thrilling showcase of skill, agility, and teamwork, highlighting the rich cultural heritage and sporting spirit of the participants. Kho-Kho, a traditional Indian sport, took centre stage as teams from various regions competed in a high-energy tournament that left spectators captivated. The event was organized with meticulous planning and precision, bringing together teams representing different states and communities, adding a diverse and inclusive flavour to the competition. Kho-Kho enthusiasts and sports lovers alike gathered to witness the intense battles on the playing field. The event also celebrated the cultural significance of Kho-Kho, highlighting its roots in Indian traditions and its evolution into a competitive sport. Spectators were treated to not only thrilling matches but also cultural performances, adding an extra layer of entertainment to the event.',
            date: 'October 23, 2023',
            venue: 'Sports Complex MIT ADT University',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Prof. Padmakar Phad'
            ]
          },
          {
            text: 'Adventurous Trek to Harishchandragad',
            description: 'The night trek to Harishchandragad, which was organized by the MIT Adventure Club, was an exhilarating and unforgettable experience. The trek combined the thrill of trekking under the starry sky with the rich history and breathtaking landscapes of the Harishchandragad fort. The event took place over a weekend and attracted adventure enthusiasts from all walks of life. The participants gathered at the meeting point, in high spirits and ready to embark on a journey that promised both physical challenge and scenic beauty. As the group set out under the cover of darkness, the crisp mountain air and the distant twinkling of stars created the perfect ambience for the night trek. The trek was led by experienced guides from the MIT Adventure Club, who offered a unique perspective of the rugged terrain, with the silhouettes of the Sahyadri mountain range providing a stunning backdrop. The trek to Harishchandragad is known for its varied landscapes, and the participants navigated through dense forests, rocky trails, and open fields, each step revealing a different facet of the natural beauty surrounding them. The trek reached its peak during the early morning hours, allowing participants to witness a breathtaking sunrise from the summit of Harishchandragad. The panoramic views of the surrounding valleys and hills, coupled with the ethereal play of light as the sun rose, created a truly magical moment for all. Apart from the physical challenges and scenic rewards, the trek also provided opportunities for camaraderie and bonding among the participants. Campfires and storytelling sessions at the base camp added a social dimension to the adventure, fostering a sense of community among the trekkers.',
            date: 'October 28, 2023',
            venue: 'HARISHCHANDRAGAD',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Dr. Rajesh Jadhav'
            ]
          },
          {
            text: 'Geek Of The Month',
            description: 'Geek of the Month was an exciting event that provided students with a platform to showcase their technical skills and enhance their problem-solving abilities. The event was hosted in a vibrant and technology-driven environment, with the aim of fostering a community of innovative thinkers and enthusiasts. The event began with an engaging orientation session, which set the tone for a challenging but rewarding experience. Students were introduced to a series of technical problem-solving challenges designed to test their logical thinking capabilities. These challenges spanned various domains, including programming, cryptography, and algorithmic problem-solving. Participants enthusiastically embraced the opportunity to apply their theoretical knowledge to practical scenarios, solving complex problems with creativity and precision. The highlight of Geek of the Month was the grand finale, where top-performing students were recognized and rewarded for their exceptional problem-solving skills and logical acumen. The sense of achievement and camaraderie among participants added a touch of celebration to the event, creating lasting memories for everyone involved.',
            date: 'October 30, 2023',
            venue: 'MIT ADT University',
            resourcePersons: ['Prof. Dr. Suraj Bhoyar']
          }
        ]
      }
    ],
    'Nov': [
      {
        id: 6,
        month: 'November',
        image: november2324,
        title: 'Community Service and Educational Visits',
        details: [
          {
            text: 'Blood Donation Camp',
            description: 'The Blood Donation Camp was a huge success, highlighting the community\'s spirit of altruism and compassion. The event was hosted at a central location accessible to the public with the aim of addressing the constant need for blood donations, emphasizing the life-saving impact each donor could make. The camp began with an opening ceremony where organizers, local health officials, and community leaders emphasized the critical importance of voluntary blood donation. The atmosphere was filled with anticipation and goodwill as donors, both seasoned and first-timers, queued up to contribute to the noble cause. The success of the Blood Donation Camp not only addressed the immediate need for blood but also promoted a culture of regular voluntary donations within the community. The collaborative effort between organizers, medical professionals, donors, and volunteers underscored the power of collective action in contributing to the well-being of society.',
            date: 'November 3, 2023',
            venue: 'IT Library',
            resourcePersons: [
              'Prof. Dr. Mahesh Chopade',
              'Prof. Dr. Suraj Bhoyar',
              'Prof. Dr. Shrikant Gunjal'
            ]
          },
          {
            text: 'Visit to Tata Central Archives',
            description: 'The students had an enriching and immersive experience during their visit to the Tata Central Archives. The archives are located at the Tata Institute of Social Sciences and offer a rare opportunity to delve into the history and legacy of one of India\'s most renowned industrial conglomerates. Upon arrival, knowledgeable archivists greeted the students and guided them through the extensive collection of documents, photographs, and artefacts that chronicle the Tata Group\'s illustrious journey. The atmosphere buzzed with curiosity and excitement as the students were encouraged to explore the archives, offering a tangible connection to the past. The hands-on encounter with historical records instilled a sense of pride and inspiration, motivating the students to carry forward the ethos of innovation, integrity, and social responsibility that defines the Tata Group. The visit to Tata Central Archives proved to be an invaluable educational experience, bridging the gap between theory and real-world business history for the students.',
            date: 'November 22, 2023',
            venue: 'Tata Central Archives',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Dr. Jayashree Prasad'
            ]
          }
        ]
      }
    ],
    'Jan': [
      {
        id: 8,
        month: 'January',
        image: january2324,
        title: 'New Year Celebrations and Cultural Events',
        details: [
          {
            text: 'MOU with Kafila',
            description: 'In a monumental stride towards holistic student growth and societal engagement, Kafila Adventures and MIT Art, Design, and Technology University officially sealed a visionary Memorandum of Understanding (MoU) on January 1, 2024. The ceremonious event, held at MIT Art, Design and Technology University, marked the inauguration of an ambitious partnership poised to redefine experiential learning through adventure initiatives for students. Kafila Adventures, an esteemed non-profit organization specializing in outdoor adventure activities, has consistently championed excellence in curating safe, transformative outdoor experiences. Renowned for organizing expeditions, safaris, treks, backpacking tours, and various thrilling escapades, the organization\'s dedication to fostering an appreciation for nature while ensuring safety has garnered widespread acclaim. The collaboration outlined in the MoU encapsulates an array of initiatives designed to cultivate leadership, promote social responsibility, facilitate knowledge exchange, and raise awareness of critical societal issues among students. Emphasizing an amalgamation of academic learning and experiential exploration, the partnership seeks to empower students by offering a diverse spectrum of adventurous activities aligned with Sustainable Development Goals (SDGs) 03, 04, 05, 06, 07, 11, 12, 13, 15, and 17. These endeavours are poised to instil invaluable skills like teamwork, resilience, cultural sensitivity, and environmental consciousness among students. The collaboration between Kafila Adventures and MIT Art, Design and Technology University heralds an era of immersive learning, bridging academia with real-world experiences. It sets a precedent for educational institutions to embrace holistic development by amalgamating adventure, societal engagement, and academic rigour.',
            date: 'January 01, 2024',
            venue: 'MIT ADT University',
            resourcePersons: [
              'Prof. Dr. Mangesh Karad',
              'Prof. Dr. Suraj Bhoyar'
            ]
          },
          {
            text: 'Plogathon',
            description: 'In a remarkable display of environmental stewardship and collective action, the Plogathon Drive, hosted by MIT Art, Design and Technology University, brought the attention to the imperative need for sustainable practices and environmental consciousness. As the clock struck 7:30 am, hundreds gathered for this significant event, marking National Youth Day 2024 with an ardent commitment to tackle waste management and foster a cleaner future. This event aimed to go beyond mere clean-up activities under the collaborative efforts of MIT Art, Design and Technology University, the Swedish Institute, and Sweden Alumni Network India - Maharashtra & Goa Chapter. It sought to ingrain a sense of responsibility towards the environment while actively engaging participants in realizing the Sustainable Development Goals (SDGs). The morning commenced with a spiritually enriching note as prayers and pooja took place at the Ramdara Temple. Dr. Suraj Bhoyar, extending a warm welcome to the esteemed guests, shed light on the significance of this initiative. He underscored the collaboration\'s goal to instil environmental consciousness while partnering with various organizations and university departments. The event saw the gracious presence of notable personalities - Chief Guest, Mr. Yogesh Shinde, a visionary leading the Bamboo India Mission, alongside esteemed Guests of Honour: Ms. Ritu Kedia, a Tenzing Norgay National Adventure Awardee and Founder of Cubane Solutions Pvt. Ltd.; Mrs. Nirmala Thormote, President of Do Save Foundation; Mr. Aniket Thormote, Founder of Do Save Foundation; and Shri Amit Jagtap from Green Foundation. Mr. Yogesh Shinde, a trailblazer in replacing plastic waste with sustainable bamboo products, inspired attendees with his vision. "India is a significant bamboo grower but paradoxically a major bamboo importer. We need to harness our bamboo resources effectively," he articulated, encouraging students to embark on their ventures.',
            date: 'January 10, 2024',
            venue: 'RAMDARA TEMPLE',
            resourcePersons: [
              'Mrs. Nirmala Thormote',
              'Miss. Ritu Kedia',
              'Shri. Yogesh Shinde',
              'Shri. Aniket Thormote',
              'Shri. Tejas Karad'
            ]
          },
          {
            text: 'Swami Vivekananda Jayanti',
            description: 'On the occasion of Swami Vivekananda Jayanti, the campus was filled with energy and purpose as students and faculty organized a lively rally to promote a drug-free India and impart the timeless teachings of Swami Vivekananda. The event was a powerful fusion of celebrating the birth anniversary of the spiritual luminary and addressing a critical societal issue. The day began with a tribute to Swami Vivekananda, as participants gathered to pay homage to the great philosopher and spiritual leader. Inspirational quotes and excerpts from his speeches set the tone for the day, emphasizing the values of education, spirituality, and service to humanity. The rally culminated in a central gathering area, where a stage was set for a series of engaging talks and cultural performances. Students showcased skits and performances that illustrated the consequences of drug abuse and the transformative power of adopting Vivekananda\'s teachings. The audience was captivated by the creative and impactful presentations, reinforcing the event\'s dual objectives. A pledge ceremony marked the conclusion of the event, where participants, inspired by Swami Vivekananda\'s principles, committed to leading a drug-free and purposeful life. The day served as a powerful reminder that education and spirituality are formidable tools in the fight against societal challenges and that young people have the potential to be a force for positive change in the nation. The Swami Vivekananda Jayanti rally promoting a drug-free India not only celebrated the wisdom of a revered spiritual leader but also ignited a sense of responsibility among the youth to contribute towards building a healthier and more conscious society. The event left an indelible impact, fostering a commitment to both personal growth and social well-being.',
            date: 'January 12, 2024',
            venue: 'MIT ADT University',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Prof. Dr. Atul Patil',
              'Mr. Chinmay Moghe'
            ]
          },
          {
            text: 'Youth Awareness of India\'s Recent Achievements',
            description: 'During an enlightening session led by Prof. Dr. Suraj Bhoyar and Prof. Dr. Atul Patil, the youth were taken on an insightful journey through India\'s recent achievements across diverse domains. The aim was to foster a sense of pride and awareness among the younger generation. The duo, with their extensive knowledge and experience, provided a comprehensive overview of India\'s strides in sports, startups, entrepreneurship, and various other fields under the guidance of the Government of India. The session strategically integrated discussions on India\'s achievements in various domains, fostering a holistic understanding among the youth. The speakers passionately advocated for the exploration of opportunities in sports, entrepreneurship, and startups, aligning with the national agenda of self-reliance and innovation. Guided by the belief that awareness breeds inspiration, Prof. Dr Suraj Bhoyar and Prof. Dr. Atul Patil aimed to instil a sense of pride and motivation among the youth. By showcasing India\'s recent triumphs, the session not only celebrated the nation\'s accomplishments but also encouraged the younger generation to actively participate in shaping India\'s future across diverse fields. The session served as a beacon of inspiration, urging the youth to take note of India\'s recent achievements and consider the vast opportunities available in sports, startups, and entrepreneurship. Prof. Dr. Suraj Bhoyar and Prof. Dr. Atul Patil successfully illuminated the path for the youth to contribute meaningfully to the nation\'s continued success and growth.',
            date: 'January 17, 2024',
            venue: 'AIC-MITADT Incubator Forum',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Prof. Dr. Atul Patil'
            ]
          },
          {
            text: 'India Science Festival 2024',
            description: 'The India Science Festival 2024, hosted at IISER, was a captivating exploration into the realms of innovation, discovery, and the awe-inspiring wonders of science. The event spanned multiple days and brought together enthusiasts, researchers, and students from diverse backgrounds to create a vibrant platform for the exchange of knowledge and ideas. Film screenings, science-themed art exhibitions, and science-related games added an entertaining and creative dimension to the festival. The blend of education and entertainment created an immersive experience, making science accessible and enjoyable for people of all ages. Closing ceremonies featured accolades for outstanding contributions to science, acknowledging researchers, students, and educators who demonstrated exceptional dedication and passion. As the curtains fell on the India Science Festival 2024, the echoes of scientific exploration, discovery, and collaboration lingered, leaving an indelible mark on the minds of attendees and reaffirming the importance of fostering a scientific ethos in society.',
            date: 'January 21, 2024',
            venue: 'IISER',
            resourcePersons: ['Prof. Dr. Suraj Bhoyar']
          },
          {
            text: 'Representation at West Zone All India Youth Festival',
            description: 'The participation of students from our university in the West Zone All India Youth Festival held in Nagpur was a remarkable experience that left an enduring impact on both the participants and the institution. Our students exhibited their talents and skills across various domains, including dance, singing, and arts, representing our university on a prestigious platform. The festival provided an invaluable opportunity for our students to showcase their talents, interact with peers from other institutions, exchange ideas, and immerse themselves in a diverse cultural environment. Through their performances and presentations, our students displayed exceptional creativity, dedication, and passion, earning admiration and applause from the audience and judges alike. Overall, the West Zone All India Youth Festival served as a platform for our students to shine bright, showcasing their talents on a larger stage and bringing laurels to our university. As we celebrate their achievements, we remain committed to providing continued support and opportunities for our students to excel and make their mark in the world.',
            date: 'January 21, 2024',
            venue: 'Nagpur',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Prof. Reshma Girigosavi',
              'Prof. Yogesh Bhadke'
            ]
          },
          {
            text: 'Visit to Dharamveer Shambhuraje Anathalaya',
            description: 'On the joyous occasion of Makar Sankranti, the students of MIT ADT University, in collaboration with the SAE Collegiate Club and the Office of Student Affairs, orchestrated a heartwarming program at Dharamveer Shambhuraje Orphanage in Hadapsar, Pune. Recognizing that not everyone has the privilege of celebrating festivals, especially the vibrant kite-flying festivities of Makar Sankranti, the students aimed to spread joy among those less fortunate. The event, graced by Prof. Dr. Sudarshan Sanap, Dean of MIT School of Engineering and Science, witnessed an outpouring of generosity. Cricket sets, carrom boards, badminton equipment, tennis rackets, footballs, basketballs, volleyballs, throw balls, kites, manja, chess sets, ludo, and more were distributed to the residents. Prof. Dr. Suraj Bhoyar, Associate Director of Student Affairs, commended the SAE Collegiate Club for their invaluable contribution. President Maruti Aba Tupe and Manager Kunal Chaware of Dharmaveer Shambhuraje Orphanage actively participated in the festivities, creating a warm and inclusive atmosphere. Prof. Dr. Anurag Nema, Prof. Ajaykumar Ugle, and Prof. Shashank Gawade also joined in, adding to the joy of the celebration. Student coordinators Aishwarya Bhinge, Ranjit Shelke, and Maviya Tambe led the initiative with enthusiasm, ensuring that the day was not just about distributing sports equipment but fostering a sense of community and inclusion. The residents enjoyed kite flying, interactive sessions, and shared snacks, creating memories that transcended the material gifts. The program extended beyond generosity—it exemplified the power of community. As the day concluded with pasaydana, the students took a collective oath to continue making a positive impact on society. The SAE Collegiate Club at MIT ADT University showcased that small acts of kindness can indeed make a profound difference, leaving an indelible mark on the hearts of those they touched.',
            date: 'January 21, 2024',
            venue: 'Dharamveer Shambhuraje Orphanage',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Prof. Dr. Sudharshan Sanap'
            ]
          },
          {
            text: 'Prabhu Shriram Abhishek Samaroh',
            description: 'In the gentle breeze of MIT ADT University, the echoes of devotion and celebration resonated as students came together for the grand "Prabhu Shriram Abhishek Samaharo." The event marked the auspicious victory achieved after 500 years, symbolizing the culmination of unwavering faith in the establishment of the Shri Ram Mandir in Ayodhya. The festivities commence with a spirited rally, where the vibrant energy of the students was palpable. Adorned in traditional attire and with hearts filled with reverence, they embarked on a procession that reverberated with chants of "Jay Shree Ram," creating an atmosphere charged with positive vibrations. The atmosphere was not merely celebratory; it was an expression of collective joy and happiness as students, with unwavering devotion, immersed themselves in the worship of Lord Ram. The event served as a cultural kaleidoscope, celebrating the rich heritage and spiritual values that define the essence of Indian traditions. As the sun set on this momentous day, the hearts of the participants and attendees alike were filled with gratitude and a sense of fulfillment. The "Prabhu Shriram Abhishek Samaharo" at MIT ADT University not only commemorated a historic victory but also encapsulated the spirit of unity, faith, and cultural pride that binds the community together.',
            date: 'January 22, 2024',
            venue: 'Vishwaroop Devta Mandir MIT ADT University',
            resourcePersons: [
              'Prof. Dr. Mangesh Karad',
              'Prof. Dr. Sunita Karad',
              'Prof. Dr. Ramchandra Pujeri',
              'Prof. Dr. Sudharshan Sanap',
              'Prof. Dr. Virendra Shette'
            ]
          },
          {
            text: 'Swachata Abhiyan at Sinhgad Fort',
            description: 'In a resounding demonstration of civic responsibility and environmental stewardship, MIT ADT University orchestrated a highly successful Swachta Abhiyan at the historic Sinhagad Fort. The event drew together a dedicated cohort of students, faculty, and staff, united by a shared commitment to preserve the cultural heritage and natural beauty encapsulated within the fort\'s walls. The day unfolded with meticulous planning and coordination, as participants gathered with a collective sense of purpose. The panoramic views of the fort, a testament to its rich historical significance, set the stage for a transformative initiative aimed at restoring its pristine charm. Armed with eco-friendly cleaning supplies, including gloves, trash bags, and recycling bins, the volunteers set out to tackle accumulated litter and debris. The cleanup was not merely about physical restoration but symbolized a symbolic gesture to restore the fort\'s integrity and pay homage to its historical importance. Engaging in both individual and collaborative efforts, participants combed through the fort\'s various sections, from courtyards to pathways, leaving no stone unturned. The spirit of teamwork resonated through the air as everyone worked seamlessly, embodying the essence of community engagement and shared responsibility. MIT ADT University\'s commitment to societal well-being and environmental stewardship was vividly demonstrated, leaving an enduring mark on both the fort and the hearts of all those who participated.',
            date: 'January 24, 2024',
            venue: 'Sinhagad Fort',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Prof. Vishal Patil'
            ]
          },
          {
            text: 'Mini Marathon',
            description: 'The Mini Marathon that took place at MIT-ADT University was an enormous success. Participants from different backgrounds came together on campus to promote the importance of a healthy mind and body. The committee organized the event with great care, aiming to encourage the university\'s community to prioritize physical fitness and wellness. The atmosphere was electric as participants, dressed in colorful athletic gear, gathered at the starting line. The marathon was designed to suit people with varying fitness levels and featured routes that offered stunning views of the surrounding landscapes. Runners, joggers, and walkers all embraced the event\'s spirit, fostering a sense of camaraderie that transcended individual fitness goals. In essence, the Mini Marathon at MIT-ADT University was more than a race - it was a celebration of wellness, a testament to the university\'s commitment to holistic development, and a reminder that the journey towards a healthy mind and body is one worth embarking upon together.',
            date: 'January 25, 2024',
            venue: 'MIT ADT University',
            resourcePersons: [
              'Prof. Dr. Sunita Karad',
              'Prof. Dr. Suraj Bhoyar',
              'Prof. Dr. Atul Patil',
              'Prof. Dr. Tejas Karad'
            ]
          },
          {
            text: 'TIRANGA ABHIYAN ANI JANJAGRUTI ABHIYAN',
            description: 'The "Tiranga Abhiyan ani Janjagruti Abhiyan" was organized by the students of MIT ADT University. The event aimed to spread awareness and foster a sense of patriotism. It took place at Pruthiraj Kapoor Memorial School, where students from the university collaborated to instill the values of unity, awareness, and love for the nation. The students used the tricolor flag as the symbol of unity and diversity. They embarked on a mission to promote civic consciousness and a deep understanding of the significance of the national flag. The day began with a fervent rally where students, adorned in patriotic colors, carried the national flag with pride through the streets, resonating with patriotic chants and slogans. The event also featured cultural performances, including patriotic songs, skits, and dances, adding a touch of celebration to the day. The collaborative effort between the students of MIT ADT University and Pruthiraj Kapoor Memorial School not only spread awareness but also fostered a sense of camaraderie and community spirit. The Tiranga Abhiyan ani Janjagruti Abhiyan concluded, leaving a lasting impact on both the organizers and the participants. It reinforced the importance of civic responsibility and instilled a sense of national pride among the young minds. The event stood as a shining example of how collective efforts can create a positive impact on society, one flag at a time.',
            date: 'January 25, 2025',
            venue: 'Pruthiraj Kapoor Memorial School, Loni',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Prof. Vishal Patil'
            ]
          },
          {
            text: 'College Rivals',
            description: 'The "College Rivals" event, was organized by the MIT Adventure Club in partnership with Boom Panda. The event aimed to promote camaraderie, healthy competition, and a strong sense of community among college students. The event offered a fun and accessible venue for participants to come together and participate in a variety of engaging activities. The Gaming Truck and Red Bull F1 Simulator were the main attractions of the event, offering attendees an exhilarating experience of high-speed action. Participants enjoyed heart-pumping races, thrilling virtual adventures, and other adrenaline-fueled activities. Overall, the "College Rivals" event was a resounding success, providing students with three days of thrilling entertainment, camaraderie, and lasting memories. By bringing students from different colleges together, the event demonstrated the power of unity and collaboration in creating unforgettable experiences. It served as a testament to the importance of community-building and the impact of shared experiences in fostering a sense of belonging and connection among participants.',
            date: 'January 29-31, 2024',
            venue: 'Tuck Shop Lawn',
            resourcePersons: ['Prof. Dr. Suraj Bhoyar']
          },
          {
            text: 'Student Council Initiation Meeting',
            description: 'The "Kick Off the Student Council Journey" event held at MIT-ADT University was aimed at empowering the newly formed Student Council by setting the stage for a transformative leadership journey. Dr. Bhoyar, a guiding force and mentor, took center stage to enlighten the council members about their roles and responsibilities while instilling a vision of fostering a positive buzz within the university. Dr. Bhoyar\'s address was not just a speech but a roadmap for effective leadership. He briefed each individual on their specific roles, emphasizing the unique contributions they bring to the council. From presidents to secretaries, every role was imbued with significance, highlighting the diverse talents and skills required for effective collaboration. The core message of the event was the importance of creating a positive environment that nurtures growth and inclusivity. Dr. Bhoyar envisioned a collaborative space where innovative ideas flourish, and diverse perspectives converge to shape a vibrant community. The emphasis was on bringing out the best opportunities, underscoring the potential for untapped talent within the university, waiting to be harnessed. The journey ahead was not just about fulfilling responsibilities; it was about collectively crafting a narrative that elevates MIT-ADT University to new heights. In essence, "Kick Off the Student Council Journey" was a declaration of a shared commitment to excellence, collaboration, and the pursuit of a positive and vibrant academic environment at MIT-ADT University.',
            date: 'January 30, 2024',
            venue: 'S113 IT Building',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Prof. Dr. Ullas Malawade',
              'Prof. Dr. Pratibha Jagtap'
            ]
          }
        ]
      }
    ],
    'Feb': [
      {
        id: 9,
        month: 'Febuary',
        image: february2324,
        title: 'Cultural Festivities and Academic Programs',
        details: [
          {
            text: 'Food Safety Awareness Campaign',
            description: 'The "Food Safety Awareness Campaign" was a notable partnership between MIT ADT University and MIT School of Food Technology, led by the National Service Scheme Department. The campaign was held in various hotels in Loni Kalbhor to spread essential knowledge about food safety practices to the broader community. Under the leadership of Prof. Dr. Mangesh Karad, the Executive President and Vice-Chancellor of MIT ADT University, the campaign was meticulously planned and executed. It saw active participation from enthusiastic National Service Scheme volunteers, along with dedicated students and professors from the School of Food Technology. Together, they conducted interactive sessions and demonstrations to educate people on the fundamental principles of food handling, preservation, and hygiene. By providing valuable insights and practical know-how, the campaign succeeded in not only raising awareness but also instilling a culture of responsible food practices among participants, contributing to the collective health and welfare of the community.',
            date: 'February 08, 2024',
            venue: 'Loni Kalbhor',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Prof. Vishal Patil',
              'Prof. Neelesh Kardile'
            ]
          },
          {
            text: 'Shiv Jayanti Orientation and Planning',
            description: 'The Shiv Jayanti review meeting was an inspiring gathering of passionate individuals who came together to brainstorm and share their visionary ideas. The candidates showed great enthusiasm as they discussed creative solutions and strategies to ensure the upcoming event\'s success. The ideas presented during the meeting ranged from captivating cultural performances to engaging community outreach initiatives, each showcasing a profound dedication to honoring Shivaji Maharaj\'s legacy in a memorable and impactful manner. As the countdown begins, anticipation fills the air, and the stage is set for a truly remarkable and unforgettable event. The team is determined to bring their collective vision to life, inspiring and uniting communities far and wide in celebration of Shiv Jayanti.',
            date: 'February 15, 2024',
            venue: 'Manet Auditorium',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Dr. Atul Patil'
            ]
          },
          {
            text: 'Shastra Pradarshan and Blood Donation Camp',
            description: 'The Shastra Pradarshan and Blood Donation Camp marked a momentous occasion where our university community came together in the spirit of service and solidarity. The event, organised with meticulous planning and dedication, served as a platform to showcase our commitment to social responsibility and humanitarian causes. The Shastra Pradarshan, a mesmerising display of traditional weapons and artefacts, captivated the audience with its rich cultural heritage and historical significance. From ancient swords to intricately crafted shields, each exhibit narrated a story of valour and courage, reminding us of our proud heritage and martial traditions. Visitors were enthralled by the craftsmanship and symbolism behind each weapon, fostering a deeper appreciation for our cultural roots. In tandem with the Shastra Pradarshan, the Blood Donation Camp exemplified the spirit of altruism and compassion. Volunteers from across the campus, including students, faculty, and staff, stepped forward to donate blood, contributing to a noble cause that saves lives and promotes the well-being of others. The camp witnessed an overwhelming response, with individuals enthusiastically participating in this act of kindness and generosity. Overall, the Shastra Pradarshan and Blood Donation Camp were resounding successes, underscoring our university\'s commitment to social welfare and community engagement. As we reflect on the impact of these initiatives, we are reminded of the power of collective action and the profound difference we can make when we come together for a common purpose.',
            date: 'February 16, 2024',
            venue: 'New IT Building',
            resourcePersons: [
              'Prof. Dr. Sunita Karad',
              'Shri Shashikant Chavan',
              'Shri Sachin Tupe',
              'Prof. Dr. Suraj Bhoyar'
            ]
          },
          {
            text: 'Shiv Jayanti',
            description: 'The Shiv Jayanti celebration was a vibrant and culturally enriching event that paid homage to the legendary Maratha warrior, Chhatrapati Shivaji Maharaj. The day was filled with patriotic fervour, traditional performances, and insightful speeches that honoured the valour and leadership of this iconic figure. From the auspicious lighting of the lamp to the melodious rendition of devotional songs, every moment of the event resonated with reverence and pride. Captivating dance performances and theatrical reenactments vividly brought to life the heroic tales of Shivaji Maharaj, inspiring admiration from the audience. As the day concluded with the rendition of the Maharashtra anthem, hearts swelled with patriotism and reverence for the great Shivaji Maharaj. The event left an indelible mark on all who attended, serving as a reminder of the values of courage, integrity, and resilience that continue to inspire us today. In essence, the Shiv Jayanti celebration was not just a commemoration of the past, but a celebration of the enduring spirit of Shivaji Maharaj and his timeless legacy of valour and righteousness. The event was a day filled with joy, pride, and reverence, leaving all participants enriched and inspired to uphold the ideals of this great warrior king for generations to come.',
            date: 'February 19, 2024',
            venue: 'MIT ADT University',
            resourcePersons: [
              'Prof. Dr. Mangesh Karad',
              'Prof. Dr. Sunita Karad',
              'Prof. Dr. Suraj Bhoyar',
              'Prof. Dr. Atul Patil'
            ]
          },
          {
            text: 'Club\'s Induction',
            description: 'In a dynamic and inspiring Clubs Review Meeting, Dr. Bhoyar and various club presidents came together to foster a positive change within the student community. Dr. Bhoyar strongly believes in the power of innovation and transformation, and he elaborated on the vision and mission behind the upcoming Catalyst event. The meeting aimed to align club leaders with the goal of creating a more inclusive and vibrant campus environment. Dr. Bhoyar highlighted the pivotal role that clubs play in shaping campus culture and driving impactful change. The participants engaged in interactive sessions and vibrant discussions, guided by their collective belief in student-led initiatives. Dr. Bhoyar\'s visionary leadership resonated as he shared insights into the overarching theme of Catalyst: inspiring, innovating, and transforming. The event aims to ignite a spirit of positive change that transcends boundaries and empowers students to realize their full potential. The meeting served as a catalyst itself, sparking enthusiasm and a renewed sense of purpose among attendees. With each club committed to contributing its unique talents and perspectives, the stage is set for a transformative event that will leave a lasting impact on the student community. As a result of the Clubs Review Meeting, the campus is now buzzing with excitement and anticipation for the upcoming Catalyst event. Dr. Bhoyar\'s visionary leadership, along with the collective dedication of club leaders, serves as a catalyst for a brighter and more inclusive future, where every voice is heard and every idea has the power to make a difference.',
            date: 'February 23, 2024',
            venue: 'S109 New IT Building',
            resourcePersons: ['Prof. Dr. Suraj Bhoyar']
          },
          {
            text: 'SciFEST - National Science Day Celebration',
            description: 'The SciFest 2024, a two-day symposium that brought together over 50 schools from across Maharashtra, including constituent schools of MIT Art, Design and Technology University, Pune. Organized by the Office of Student Affairs in collaboration with the Ministry of Education\'s Institutions Innovation Council, SciFest 2024 was a dynamic demonstration of over 100 scientific projects, emphasizing innovations across various Technology and Manufacturing Readiness Levels. The event was inaugurated by Prof. Dr. Mangesh T. Karad, Executive President and Vice-Chancellor of MIT ADT University, accompanied by Prof. Dr. Sunita Karad, Executive Director MITCOM and ICT, Dr. Anant Chakradeo, Pro Vice Chancellor, and a panel of distinguished Deans and Directors namely Dr. Anand Belhe, Dr. Virendra Shete, Dr. Sudarshan Sanap, Dr. Virendra Bhojwani, Dr. Nachiket Thakur, Dr. Renu Vyas, Dr. Milind Dhobley, Dr. Ashwini Pethe, Prof. Tejas Karad, Dr. Atul Patil. Prof. Dr. Mangesh Karad, in his opening remarks, stated, "SciFest is a testament to the potential that resides within our students. It is a platform for them to not only showcase their innovations but also to learn and be inspired by the incredible work of their peers. The commitment to sustainability and the infusion of spirituality into scientific thought reflects the ethos of MIT ADT University in nurturing well-rounded individuals." The success of SciFest 2024 at MIT-ADT University marks a milestone in fostering a culture of scientific inquiry and innovation, encouraging young minds to explore and contribute to the fields of science and technology with a holistic approach.',
            date: 'February 27, 2024',
            venue: 'MIT IoD Lawn',
            resourcePersons: [
              'Prof. Dr. Mangesh Karad',
              'Prof. Dr. Suraj Bhoyar',
              'Prof. Dr. Virendra Bhojwani',
              'Prof. Dr. Rakesh Sidheswar'
            ]
          },
          {
            text: 'Club CATALYST',
            description: 'The air was charged with excitement and anticipation as MIT ADT University hosted its flagship event, CATALYST. More than 35 clubs from various disciplines. The event was a celebration of innovation, creativity, and collaboration with each club showcasing their unique ideas aimed at bringing positive change to the campus community. CATALYST featured a diverse array of projects and initiatives, spanning across arts, sciences, technology, and beyond, which demonstrated the deep commitment of student clubs to make a meaningful impact in our community. The attendees were treated to interactive demonstrations, thought-provoking discussions, and hands-on activities that provided ample opportunities for engagement and inspiration. The day was filled with excitement, and the atmosphere buzzed with energy as students, faculty, and guests came together to explore, learn, and connect. Collaborations were forged, ideas were shared, and visions of a brighter future were ignited. As the event drew to a close, there was a sense of accomplishment and pride in the air. Each club had made its mark, contributing to a collective vision of positive change and transformation. CATALYST not only showcased the incredible talent and innovation within the university but also laid the foundation for future collaboration and growth. In the end, CATALYST was more than just an event. It was a testament to the power of collective action, the spirit of innovation, and the limitless potential of our student community. As we reflect on the success of CATALYST, we are reminded that together, we can truly make a difference.',
            date: 'February 28, 2024',
            venue: 'MIT IoD Lawn',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Prof. Dr. Anant Chakradeo'
            ]
          },
          {
            text: 'Hands on Drone Workshop',
            description: 'The Drone Making Workshop held recently was an engrossing and informative journey into the exciting realm of unmanned aerial vehicles (UAVs). The workshop, conducted by renowned experts in the field, provided participants with a comprehensive overview of drone technology, offering insights into drone selection and component customization tailored to specific requirements. By the end of the workshop, participants gained a comprehensive understanding of drone selection and component integration while also developing the confidence and skills necessary to embark on their drone-building journey. Equipped with newfound knowledge and enthusiasm, attendees left the workshop inspired to explore the limitless possibilities of drone technology and eager to apply their learning in future endeavors.',
            date: 'February 28, 2024',
            venue: 'Prof. H. Kumar Vyas Hall',
            resourcePersons: [
              'Mr. Ganesh Thorat',
              'Prof. Dr. Suraj Bhoyar',
              'Prof. Pratik Joshi'
            ]
          },
          {
            text: 'SPECTRA 3.0 - Cultural Night',
            description: 'SPECTRA 3.0 was a cultural event that took place at MIT ADT University on the evening of February 28, 2024. The event was a celebration of culture and creativity, featuring a diverse showcase of talent and artistry. Attendees were treated to mesmerizing dance performances and soul-stirring musical acts, as the campus came alive with vibrant colors, pulsating rhythms, and electrifying energy. As the clock struck midnight, the echoes of laughter and applause lingered in the air, a testament to the success of SPECTRA 3.0 in uniting hearts and minds through the universal language of art and music. In essence, SPECTRA 3.0 was more than just a cultural night; it was a celebration of creativity, expression, and the indomitable spirit of the MIT ADT University community. It reaffirmed the belief that through the power of art and culture, we can bridge divides, foster understanding, and create lasting memories that transcend boundaries.',
            date: 'February 28, 2024',
            venue: 'MIT IoD Lawn',
            resourcePersons: [
              'W. Cd. Mohan Menon',
              'Prof. Dr. Suraj Bhoyar'
            ]
          },
          {
            text: 'Orientation of Arts Festival',
            description: 'The recent meeting to introduce the upcoming KAARI event at MIT ADT University was an inspiring and informative gathering that left attendees buzzing with excitement and anticipation. Led by esteemed faculty members Dr. Dhobale and Dr. Bhoyar, the session provided valuable insights into the significance of KAARI and motivated everyone to actively participate and showcase their projects. Dr. Dhobale and Dr. Bhoyar eloquently described the essence of KAARI, emphasizing its role as a platform for innovation, collaboration, and exploration. They highlighted the unique opportunity it presents for students and faculty to share their research, ideas, and initiatives with a wider audience, fostering a culture of creativity and excellence within the university community. Throughout the meeting, attendees were encouraged to harness the full potential of KAARI by actively engaging in the event and seizing the opportunity to showcase their projects. Dr. Dhobale and Dr. Bhoyar\'s impassioned speeches ignited a sense of enthusiasm and purpose among participants, motivating them to strive for excellence and make the most of this valuable platform. In summary, the meeting to introduce the KAARI event was a resounding success, thanks to the insightful guidance and motivational words of Dr. Dhobale and Dr. Bhoyar. As participants eagerly prepare to showcase their projects and ideas at KAARI, the stage is set for a celebration of innovation, creativity, and collaboration that promises to leave a lasting impact on the MIT ADT University community.',
            date: 'February 29, 2024',
            venue: 'MIT School of Fine and Applied Arts',
            resourcePersons: [
              'Prof. Dr. Milind Dhobale',
              'Prof. Dr. Suraj Bhoyar'
            ]
          }
        ]
      }
    ],
    'Mar': [
      {
        id: 10,
        month: 'March',
        image: march2324,
        title: 'Spring Activities and Cultural Celebrations',
        details: [
          {
            text: 'Helmet Janjagruti Abhiyan',
            description: 'In the crisp morning air of MIT ADT University, the campus buzzed with energy and purpose as students gathered for the Helmet Janjagurti Abhiyan. This initiative, aimed at raising awareness about the importance of wearing helmets for personal safety, resonated deeply with the student community. Led Dr.Suraj Bhoyar and the passionate student volunteers, the campaign kicked off with fervour and enthusiasm. Armed with informational pamphlets, posters, and heartfelt appeals, the volunteers set out to engage their peers in meaningful conversations about the significance of helmet usage. In the end, the Helmet Janjagurti Abhiyan was more than just a campaign; it was a testament to the power of collective action and the enduring spirit of empathy and solidarity. By coming together to champion a cause that mattered, the students of MIT ADT University had not only enriched their own lives but also made a lasting impact on the safety and well-being of their peers.',
            date: 'March 06, 2024',
            venue: 'Main Gate MIT ADT University',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Dr. Swapnil Shrishat'
            ]
          },
          {
            text: 'Excursion Tour',
            description: 'The Excursion Tour to Lonavala was a remarkable journey of discovery and rejuvenation amidst serene hills and verdant landscapes. Our esteemed institution hosted the tour, offering participants an unparalleled opportunity to explore the breathtaking beauty and rich cultural heritage of this enchanting destination. The adventure commenced with eager anticipation as participants embarked on a scenic drive, leaving behind the hustle and bustle of city life to immerse themselves in the tranquil ambiance of Lonavala. The winding roads adorned with lush greenery and cascading waterfalls added to the charm of the excursion, creating a sense of anticipation for the exciting activities that lay ahead. In conclusion, the Excursion Tour to Lonavala was a resounding success, leaving participants rejuvenated, inspired, and enriched by the myriad experiences and adventures encountered along the way. As we bid farewell to this enchanting destination, we carry with us memories that will forever remain etched in our hearts, serving as a source of inspiration and joy for years to come.',
            date: 'March 13, 2024',
            venue: 'Lonavla',
            resourcePersons: ['Prof. Dr. Suraj Bhoyar']
          },
          {
            text: 'Holika Dahan',
            description: 'The Holika Dahan event, was a resounding success, weaving together tradition, celebration, and community spirit into an unforgettable evening. As the sun dipped below the horizon, eager participants gathered at the TuckShop Lawn, eagerly anticipating the festivities ahead. The ambiance was electric, with the air filled with excitement and anticipation. Against the backdrop of a mesmerizing sunset, the traditional ritual of Holika Dahan commenced, symbolizing the triumph of good over evil. The crackling bonfire illuminated the faces of attendees, casting a warm glow of camaraderie and unity. Amidst the rhythmic chanting of mantras and the crackling of the bonfire, participants came together to offer prayers and seek blessings for prosperity and well-being. The ritualistic burning of Holika effigies added a dramatic flair to the proceedings, further enhancing the spiritual essence of the event. Overall, the Holika Dahan event was a testament to the vibrancy and richness of our cultural traditions, bringing together people from all walks of life to celebrate unity, love, and togetherness. As the echoes of laughter and music filled the air, it was evident that the spirit of Holi had truly touched every heart present, leaving behind memories to cherish for years to come.',
            date: 'March 24, 2024',
            venue: 'TuckShop Lawn',
            resourcePersons: ['Prof. Dr. Suraj Bhoyar']
          }
        ]
      }
    ],
    'Apr': [
      {
        id: 11,
        month: 'April',
        image: april2324,
        title: 'Spring Cultural Events and Innovation Summits',
        details: [
          {
            text: 'Gudi Padwa Celebration (Folk Dance Competition)',
            description: 'The grand celebration began with the Dhol Tasha Performance by Shiravya Dhol Tasha Pathak, marking the commencement of the GudiPadwa Celebration and Folk Dance Competition at MIT ADT University. This event was a remarkable fusion of tradition, culture, and talent, where participants showcased their skills through over 25 captivating folk dance performances, each representing a unique region of our country. The event featured an eclectic mix of traditional and contemporary folk dances, including Lavni, Jogwa-Gondhal, Telangana folklore, Garba, Mohiniyattam, Bihu Dance, Rajasthani folk (Kalbeliya), Bangla Folk, and Classical Western Fusion. These performances transported the audience on a journey across India, celebrating the beauty and diversity of our cultural tapestry. The GudiPadwa Celebration and Folk Dance Competition culminated with a grand finale, seamlessly transitioning into the much-anticipated SPECTRA 4.0 - the cultural night of our institution. The event was a testament to the spirit of unity, diversity, and artistic expression, leaving a lasting impression on all those who attended.',
            date: 'April 05, 2024',
            venue: 'MIT IoD Lawn',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Shri Tejas Karad',
              'MS ADITI'
            ]
          },
          {
            text: 'Representation of 4th Elets Innovation Summit 2024',
            description: 'The eLets Education Innovation Summit convened a distinguished gathering of thought leaders, educators, and innovators, where Dr. Bhoyar insightful panel discussion illuminated the vital nexus between innovation and entrepreneurship in education. Drawing from his profound experience and the exemplary journey of MIT Art, Design and Technology University (MIT ADT), Dr. Bhoyar vividly portrayed how fostering an environment of innovation and entrepreneurship is paramount for advancing the educational landscape. With vivid examples and tangible success stories, he showcased MIT ADT as a beacon of innovation, empowering students to transform their ideas into reality. Dr. Bhoyar\'s visionary leadership and MIT ADT\'s pioneering initiatives serve as a model for educational institutions globally. Through embracing innovation and entrepreneurship, universities not only adapt to the evolving future but also drive profound societal impact. As the eLets Education Innovation Summit concluded, attendees departed inspired and equipped to embark on their journeys of innovation and entrepreneurship, fueled by the transformative insights shared by Dr. Bhoyar and the remarkable achievements of MIT ADT.',
            date: 'April 12, 2024',
            venue: 'Hotel Radisson Blu',
            resourcePersons: ['Prof. Dr. Suraj Bhoyar']
          }
        ]
      }
    ],
    'May': [
      {
        id: 12,
        month: 'May',
        image: may2324,
        title: 'Community Service and Educational Initiatives',
        details: [
          {
            text: 'Transforming Education and Inclusion through Mural Art by MIT SOFA Students at Aniket Sevabhavi Institute',
            description: 'A four-day laudatory event \'Educational Transformation through Art Education\' at Aniket Sevabhavi Sanstha, Pune organized by MIT School of Fine Arts and Applied Arts (MIT-SOFA), National Service Scheme (NSS), Department of Student Welfare and School of Holistic Development was successfully completed through joint efforts. Under the guidance of Prof. Sheelkumar Kumbhar and Prof. Uttam Janwade, the event saw the enthusiastic participation of MIT ADT University Arts students and 55 children with special disabilities from Aniket Sevabhavi Institute, who worked together to create vibrant murals on the premises of the institute. The mural project aims to bring color and life to the walls of the Aniket charity, fostering a sense of community and inclusiveness. This collaboration not only provided a platform for artistic expression but also highlighted the importance of social integration and empowerment for persons with disabilities. Executive Chairman and Vice-Chancellor of MIT ADT University Prof. Dr. Mangesh Karad commented on the wider implications of this initiative of Aniket Sevabhavi Sanstha and appreciated the efforts of students and faculty. Principal and Principal Dr. Milind Dhoble said the initiative goes beyond art. It\'s about connecting and understanding each person\'s unique abilities. He expressed his pride in the dedication of the students and the impact of the project. Prof. Dr. Suraj Bhoyer, Head of Student Welfare, who was present during the event, highlighted the immense commitment shown by the students and the joy they shared with the children of the Aniket Sevabhavi Institute and highlighted the university\'s commitment to holistic education.',
            date: 'May 20, 2024',
            venue: 'Aniket Sevabhavi Sanstha',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Dr. Milind Dhobale'
            ]
          }
        ]
      }
    ]
  },
  '2024-25': {
    'Jul': [
      {
        id: 13,
        month: 'July',
        image: july2425,
        title: 'Summer Programs and Green Initiatives',
        details: [
          {
            text: 'Orientation of Alumni 2024-25',
            description: 'The highly-anticipated Alumni Meeting successfully convened former students of our esteemed institution, fostering stronger connections and collaboration within our alumni community. Under the guidance of Dr. Suraj Bhoyar, Head of Alumni Relations, the meeting served as a pivotal event aimed at deliberating ideas and plans for upcoming initiatives designed to engage and connect alumni more effectively. Dr. Bhoyar commenced the meeting with a warm welcome, expressing gratitude to all attendees for their sustained support and involvement. He underscored the significance of maintaining robust alumni relations, emphasising how these connections can contribute to both personal and professional growth, as well as the ongoing success of our institution. Key points of discussion encompassed innovative strategies for enhancing alumni engagement through various channels such as social media platforms, regular newsletters, and dedicated alumni events. Dr. Bhoyar introduced the concept of regional alumni chapters, which will enable graduates to network and collaborate more effectively based on their geographical locations. This initiative is anticipated to facilitate local meetups, professional development opportunities, and community service projects. The meeting also delved into the development of an online alumni portal, envisioned as a centralised platform for alumni to connect, share job opportunities, and access exclusive resources. This portal will serve as a pivotal tool for maintaining ongoing communication and support within the alumni network. Furthermore, Dr. Bhoyar delineated plans for a series of upcoming events, including an annual alumni reunion, career mentoring sessions, and industry-specific webinars. These events are designed to leverage the diverse experiences and expertise of our alumni, fostering a culture of continuous learning and mutual support. The Alumni Meeting proved to be a resounding success, laying the groundwork for a more connected and engaged alumni community. We eagerly anticipate the exciting developments and opportunities that lie ahead as we continue to build and fortify our alumni network.',
            date: '17/07/2024',
            venue: '401 ISBJ Office of Student Affairs',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Prof. Dr. Sanket Bapat'
            ]
          },
          {
            text: 'Inauguration - Green Campus Initiative',
            description: 'MIT ADT University is pleased to announce the successful implementation of its Green Campus Initiative, in alignment with the Government of India\'s Fit India Movement. This progressive program is designed to promote health, environmental stewardship, and sustainable transportation within the student community. Central to this initiative is the introduction of a fleet of smart bicycles in collaboration with MYBYK. These bicycles offer students an affordable and eco-friendly transportation option on campus. Accessible through an online application, the smart bicycles can be rented on a daily, weekly, monthly, or yearly basis, providing flexible and convenient access for all students. Equipped with advanced features including inbuilt GPS tracking for safety, smart lock systems, adjustable saddles, sturdy baskets, and puncture-proof tyres, these bicycles are designed for both convenience and durability. Students can easily unlock their bicycles using a smart QR code system, with nominal payments processed through digital wallets. This initiative aims to significantly reduce the use of conventional vehicles, promoting health and fitness among students. To support this sustainable transportation model, the campus has installed Hexi ports and enhanced cycle tracks, ensuring a seamless riding experience. MIT ADT University Green Campus Initiative benefits over 10,000 students by providing a healthy and sustainable transportation option. The initiative not only enhances physical fitness but also contributes to a cleaner environment, embodying a holistic approach to student well-being. The impact on the student community is significant. By integrating physical activity into daily routines, students are expected to experience improved health and fitness, potentially boosting their academic performance and overall quality of life.',
            date: '15/07/2024',
            venue: 'Main Gate - Campus',
            resourcePersons: [
              'Prof. Dr. Mohit Dubey',
              'Dr. Mahesh Chopade',
              'Prof. Dr. Suraj Bhoyar',
              'Prof. Dr. Atul Patil'
            ]
          },
          {
            text: 'Nasha Mukta Abhiyan - Bhira Village',
            description: 'MIT ADT University\'s Office of Student Affairs successfully organized an awareness campaign trekking event as part of the \'Nasha Mukt Bharat Abhiyan\' (NMBA). Supported by the Ministry of Social Justice and Empowerment, the campaign aimed to spread awareness about substance abuse among the masses. Held at Bhira Village, the trek witnessed the active participation of over 80+ student volunteers. Organized by The Adventure Club of MIT ADT University and Kafila Adventures, and led by Prof. Dr. Suraj Bhoyar, Associate Director of Student Affairs, the initiative engaged students from higher education institutions, university campuses, schools, and the local community in combating substance abuse. In his address, Dr. Bhoyar emphasized the significance of the \'Nasha Mukt Bharat Abhiyan,\' highlighting its objective to create awareness through various activities, including awareness generation programs and identifying individuals dependent on substances. MIT ADT University has been continuously organizing activities to strengthen the Nasha Mukt Bharat Abhiyan campaign of the Government of India. A few days prior, students embarked on a cycle rally from Pune to Pandharpur, joining the auspicious cycle waari of God Vithala, spreading the message and raising awareness about the NMBA. During the trek cum plogging activity, the student volunteers not only engaged in cleaning the surroundings but also raised slogans to amplify the campaign\'s message. The successful trekking cum plogging campaign has set an inspiring example for the university and the larger community to unite against substance abuse and create a \'Nasha Mukt Bharat.\' The \'Nasha Mukt Bharat Abhiyan\' trekking campaign is a significant step towards a healthier and drug-free society, aligning with the national goals of progress and well-being. The Office of Student Affairs at MIT ADT University aims to continue organizing such events and engage the youth in meaningful endeavours for the betterment of society.',
            date: '13/07/2024',
            venue: 'Bhira Village',
            resourcePersons: ['Prof. Dr. Suraj Bhoyar']
          },
          {
            text: 'World Youth Skills Day Celebration',
            description: 'In celebration of World Youth Skills Day, MIT ADT University proudly hosted the Career Catalyst Workshop, a landmark event dedicated to empowering students with essential skills for their career journeys and personal development. The workshop, held under the visionary leadership of Prof. Dr. Mangesh Karad, Executive President and Vice-Chancellor of MIT ADT University, aimed to inspire budding entrepreneurs to excel and reach new heights. Dr. Karad\'s unwavering support and dedication to student empowerment were clearly evident throughout the event. Conducted by Prof. Dr. Suraj Bhoyar, Associate Director of Student Affairs at MIT ADT University, the workshop motivated over 300 young minds to equip themselves with the skills necessary to become leaders in today\'s competitive world. Dr. Bhoyar\'s opening remarks encouraged students to harness their potential and strive for excellence in their chosen fields. The workshop covered a range of critical topics, including Career Planning and Development, Skill Enhancement Techniques, Effective Networking Strategies, Personal Branding, and Continuous Learning and Growth. A special emphasis was placed on raising awareness about SWAYAM-NPTEL MOOCs and their significance during graduation. Participants learned how these courses can enhance their learning experience and boost their career prospects by providing access to high-quality educational resources. Organised in association with the MIT School of Food Technology, the NPTEL Local Chapter, and the Office of Student Affairs, the event underscored MIT ADT University\'s dedication to student empowerment. The presence of Dr. Anjali Bhoite, Principal of the MIT School of Food Technology, along with Dr. Fayaj Pathan, Dr. Amrit Kulthe, Dr. Ganesh Bhavsar, and Dr. Rinku Agrawal, highlighted the collective commitment to supporting students. Dr. Bhoyar emphasized the importance of continuous learning and innovation in his address, urging students to take full advantage of the opportunities presented to them. "Our goal is to equip our students with the tools and knowledge they need to succeed and to inspire them to reach new heights in their careers and personal lives," he said.',
            date: '15/07/2024',
            venue: 'RK Auditorium',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Prof. Dr. Anjali Boayte'
            ]
          },
          {
            text: 'Facilitation of Athletes',
            description: 'The Office of Student Affairs recently held a magnificent Felicitation Ceremony to honour the exceptional achievements of our students who participated in two remarkable events: the 7th Indoor Rowing Championship in Punjab and the 210 km Cycle Wari from Pune to Pandharpur. This event celebrated their dedication, perseverance, and outstanding performance, showcasing the university\'s commitment to fostering excellence in both academics and extracurricular activities. Participants of the 7th Indoor Rowing Championship were recognized for their outstanding performance in this prestigious event held in Punjab. The athletes demonstrated remarkable skill, endurance, and sportsmanship, competing against top contenders and making their mark on the national stage. Their dedication and rigorous training were evident as they brought home accolades and set new benchmarks in indoor rowing. Equally commendable were the students who undertook the 210 km Cycle Wari from Pune to Pandharpur in a single day. This challenging journey, blending physical endurance with spiritual devotion, was a testament to their unwavering determination and resilience. Cycling through varied terrains and weather conditions, these students showcased remarkable stamina and a deep sense of purpose, honouring the age-old tradition of pilgrimage. Dr. Suraj Bhoyar, delivered an inspiring speech during the ceremony, motivating the budding athletes to stay consistent and keep chasing their dreams. He emphasised how these achievements not only bring pride to the university but also inspire fellow students to strive for excellence. The Felicitation Ceremony concluded with the presentation of awards and certificates to the athletes, followed by a group photo session. The event was a resounding success, leaving everyone inspired and motivated to pursue their passions with renewed vigour. MIT ADT University remains dedicated to supporting and celebrating the achievements of its students, fostering an environment where they can thrive and excel.',
            date: '18/07/2024',
            venue: 'Sports Complex',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Dr. Fiyaj Pathan'
            ]
          },
          {
            text: 'Cycling Wari - Pune to Pandharpur',
            description: 'The Cycle Waari of Lord Vithala was an inspiring and spiritually enriching event that brought together cycling enthusiasts on a remarkable 210 km journey from Pune to Pandharpur. This event was not only a physical challenge but also a mission to spread the vital message of a drug-free India. The expedition began with a sense of devotion and anticipation as cyclists gathered at the starting point in Pune, ready to embark on this significant journey to the sacred town of Pandharpur. The route was carefully selected to offer participants a blend of scenic beauty and endurance challenges, ensuring a memorable and impactful experience. As cyclists pedaled along the route, they were greeted by the breathtaking landscapes of Maharashtra, passing through lush fields, serene villages, and historic landmarks. The journey tested the participants\' physical endurance with a mix of flat stretches, uphill climbs, and exhilarating descents, making it a comprehensive challenge for both seasoned cyclists and newcomers alike. Throughout the expedition, experienced guides and support teams ensured the safety and well-being of all participants. Regular rest stops were strategically placed, providing opportunities for refreshment and re-energizing, as well as moments to reflect on the purpose of the journey. The camaraderie among cyclists flourished, with participants encouraging each other and sharing in the collective spirit of devotion and determination. Upon reaching the holy town of Pandharpur, participants experienced a profound sense of achievement and spiritual fulfillment. The iconic temple of Lord Vithala served as a magnificent backdrop, offering a moment of reflection and reverence. The journey\'s end was marked by a heartfelt gathering where participants shared their experiences, the challenges they overcame, and the bonds they formed. The Cycle Waari of Lord Vithala from Pune to Pandharpur left participants with lasting memories, a sense of spiritual accomplishment, and a renewed commitment to the cause of a drug-free nation. This journey exemplified the power of cycling to bring people together for a greater purpose, creating a legacy of health, unity, and devotion.',
            date: '15/07/2024',
            venue: 'Malhargad',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Mr. Sandeep Bhapkar'
            ]
          }
        ]
      }
    ],
    'Aug': [
      {
        id: 14,
        month: 'August',
        image: august2425,
        title: 'Foundation Celebrations and Leadership Development',
        details: [
          {
            text: 'Club Orientation Meeting',
            description: 'The Office of Student Affairs hosted a highly engaging and motivating Student Club Orientation meeting, led by Dr. Suraj Bhoyar, the esteemed Director of Student Success. The event marked a significant milestone for the university\'s student clubs, as Dr. Bhoyar inspired and guided the budding Presidents and Vice Presidents in attendance. Dr. Bhoyar commenced the session by sharing his vision for student success and the crucial role that student clubs play in enriching the university experience. He emphasized the importance of leadership, teamwork, and innovation in driving the clubs towards excellence. A key highlight of the meeting was the detailed briefing on the upcoming Club CATALYST event. Dr. Bhoyar elaborated on the significance of this event, which is designed to showcase the strength, impact, and creativity of each club. He outlined the structure and objectives of Club CATALYST, emphasising its role in fostering a spirit of collaboration and healthy competition among the clubs. Dr. Bhoyar also provided an insightful overview of the induction program for new members. He stressed the need for well-planned orientation programs and training sessions to ensure that new members are seamlessly integrated into the club\'s activities. The induction program aims to equip new members with the necessary skills and knowledge to actively participate and contribute to their respective clubs. Additionally, Dr. Bhoyar shared strategic insights on event planning for the academic year 2024-25. He encouraged the club leaders to meticulously plan their calendars, highlighting key activities and events that would drive engagement and participation. He also discussed budgeting and financial planning, offering valuable tips on resource allocation, fundraising strategies, and securing sponsorships. In summary, the Student Club Orientation meeting was a resounding success, thanks to Dr. Suraj Bhoyar\'s inspiring leadership. The session equipped the club leaders with the knowledge, motivation, and strategic direction needed to make the academic year 2024-25 a period of growth, innovation, and success for the student clubs at MIT ADT University.',
            date: '01/08/2024',
            venue: '405- Seminar Hall',
            resourcePersons: ['Prof. Dr. Suraj Bhoyar']
          },
          {
            text: '42nd Foundation Day Celebration - MAEERS Group of Institution',
            description: 'MIT Art, Design, and Technology University celebrated its 42nd Foundation Day with a blood donation campaign, reflecting the institution\'s dedication to community service and social responsibility. This event, held on the same day as Kargil Vijay Diwas, honoured the bravery and sacrifice of freedom fighters. Over 100 selfless donors participated, showcasing the university\'s culture of compassion and service. The inauguration ceremony featured prominent guests, including Prof. Dr. Suraj Bhoyar (Director of Student Affairs), Dr. Atul Patil (Director of MIT School of Holistic Development), Prof. Hanumant Pawar (CEO of Pera India), Dr. Suresh Paradhe (Blood Transfusion Officer, District Hospital, Aundh Pune), Dr. Imran Khan (Blood Transfusion Officer, Sassoon Hospital, Pune), Dr. Ajay Huple, Mr. Sharad Desale (Social Service Superintendent, Sassoon Blood Bank), and Mr. Sudam Bharkade. Under the visionary guidance and support of Prof. Dr. Mangesh Karad, Executive President and Vice-Chancellor, the event was a testament to his leadership and commitment to societal well-being. His involvement was crucial to the success of this life-saving initiative. The blood donation campaign highlighted the university\'s commitment to community service and provided a platform for students and faculty to contribute to the healthcare system. The donations collected will significantly support patients in need, emphasizing the importance of collective action in times of crisis. MIT Art, Design, and Technology University remains dedicated to fostering holistic development, academic excellence, and social responsibility. This blood donation campaign exemplifies the university\'s efforts to make a tangible difference in the community, reinforcing its mission to positively impact society. The event not only honoured the memory of brave soldiers but also demonstrated the power of unity and altruism in saving lives.',
            date: 'August 05, 2024',
            venue: 'MIT SFT Foyer & Reading Hall New IT Building',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Dr. Atul Patil',
              'Prof. Hanumant Pawar'
            ]
          },
          {
            text: 'Empowering Sports Coordinators for a Fit and Sharp Student Community',
            description: 'The recent orientation session for the Sports Coordinators, led by Dr. Bhoyar, was a significant step toward reinforcing the physical fitness and intellectual sharpness of our student community. The session, held on August 12, 2024, at the ISBJ Seminar Hall, served as an essential platform for discussing the strategies and responsibilities that will shape the sports culture in the upcoming academic year. Dr. Bhoyar, a respected authority in sports and physical education, delivered an insightful briefing on the meticulously crafted Sports Calendar for 2024-25. He emphasized the critical role that sports coordinators play in fostering a culture of physical fitness, mental well-being, and intellectual growth among students. The calendar is designed to ensure a balanced and holistic approach, offering a diverse range of sporting activities and events that cater to the varied interests of the student body. Central to Dr. Bhoyar\'s message was the importance of making sports an integral part of students\' daily lives. He stressed that regular physical activity is not only vital for maintaining physical health but also crucial for enhancing cognitive abilities, focus, and academic performance. By integrating sports with academic life, students can achieve a harmonious balance that supports their overall development. The session also covered the roles and responsibilities of the Sports Coordinators in executing the sports calendar, ensuring that all events are well-organized, inclusive, and impactful. Dr. Bhoyar encouraged the coordinators to actively engage with students, inspire participation, and create an environment where sports and academics complement each other. In conclusion, the orientation session was a call to action for all Sports Coordinators to lead by example, promote a healthy lifestyle, and contribute to the intellectual and physical growth of our student community.',
            date: '13/08/2024',
            venue: '401- 4th Floor ISBJ',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Prof. Padmakar Phad'
            ]
          },
          {
            text: 'CLUB CATALYST',
            description: 'CLUB CATALYST, the flagship event of MIT ADT University, was proudly organized by the Office of Student Affairs. This dynamic event brought together over 50+ student clubs, each showcasing their innovative ideas and entrepreneurial spirit to the student community. The event aimed to foster a culture of innovation, leadership, and collaboration among students, empowering them to create meaningful change in various domains. The event was inaugurated by the esteemed Executive President and Vice-Chancellor, whose inspiring address set the tone for the day. He emphasized the importance of maintaining a spirit of change and innovation within the students, urging them to continuously strive for excellence in their respective fields. His motivational words resonated deeply with the attendees, fueling their passion for making a positive impact. Under the exceptional leadership of Prof. Dr. Suraj Bhoyar, who spearheaded the event, CLUB CATALYST proved to be a resounding success. His unwavering commitment to student success was evident throughout the event, as he guided and supported the participating clubs in their endeavors. The event provided a platform for students to network, collaborate, and exchange ideas, further enriching their educational experience. CLUB CATALYST not only highlighted the vibrant and diverse student community at MIT ADT University but also reinforced the institution\'s dedication to nurturing the next generation of innovators and entrepreneurs. The event concluded with a renewed sense of purpose among the students, who left inspired and ready to take on new challenges. This memorable event will undoubtedly have a lasting impact on the student body, encouraging them to continue their journey of growth, discovery, and transformation.',
            date: '10/08/2024',
            venue: 'Bharat Ratna APJ Abdul Kalam Mandapam',
            resourcePersons: [
              'Prof. Dr. Mangesh Karad',
              'Prof. Dr. Sunita Karad',
              'Prof. Dr. Mahesh Chopade'
            ]
          },
          {
            text: 'Pedal for Freedom: Cycle for Green and Drug-Free Tomorrow',
            description: 'On August 15, 2024, MIT ADT University marked the 78th Independence Day with a unique and inspiring initiative, "Pedal for Freedom: Cycle for a Green and Drug-Free Tomorrow." Proudly organised by the Office of Student Affairs in collaboration with ACES MITSOC and MYBYK, this event brought together students, faculty, and staff for a 5km cycle rally that combined the celebration of freedom with a powerful message of environmental responsibility and anti-drug awareness. The rally, which commenced immediately after the Flag Hoisting Ceremony, was a resounding success, with participants enthusiastically embracing the dual cause of promoting a green campus and advocating for a drug-free India. The event was designed not just as a physical activity, but as a symbolic journey towards a healthier, safer, and more sustainable future for the nation. Participants, adorned in white T-shirts and sporting the spirit of patriotism, cycled through the campus, drawing attention to the urgent need for environmental stewardship and the fight against drug abuse. The event highlighted the critical role that the youth can play in driving social change, with each participant becoming a voice for a brighter, cleaner, and drug-free tomorrow. A special highlight of the event was the recognition given to the first 100 participants, who were rewarded with a promo code for a free MYBYK ride for the entire day. This gesture not only acknowledged their commitment but also encouraged the broader community to join the movement. The event culminated in a vibrant display of unity and determination, with participants collectively pledging to continue advocating for a green campus and a drug-free lifestyle. "Pedal for Freedom" stands as a testament to MIT ADT University\'s dedication to fostering a socially conscious and environmentally responsible student body, setting a powerful example for future initiatives. This rally was more than just a ride; it was a movement that will leave a lasting impact on the university and the wider community.',
            date: '15/08/2024',
            venue: 'MIT - ADT University',
            resourcePersons: [
              'Prof. Dr. Mangesh Karad',
              'Prof. Dr. Suraj Bhoyar',
              'Prof Padmakar Phad'
            ]
          },
          {
            text: 'Nurturing Communities: MIT ADT University\'s Commitment to Social Responsibility through the Induction Program Food Distribution',
            description: 'The Induction Program held on the 8th and 9th of August 2024 at MIT ADT University was a thoughtfully organized event designed to warmly welcome new students and their families to the university. The program aimed to introduce the attendees to the campus, faculty, and the university\'s vibrant culture. As a part of this initiative, the university arranged for food packets to ensure the comfort and convenience of all participants. On the first day, 4,000 food packets were prepared, but it was observed that approximately 500 food packets remained unclaimed. To optimize resources, the order was reduced to 3,500 packets for the following day, but still, 475 packets were left unclaimed. Understanding the importance of reducing food wastage and promoting social responsibility, the Vice Chancellor of MIT ADT University, Dr. Mangesh T. Karad, and the Associate Director of Student Affairs, Dr. Suraj Bhoyar, made a commendable decision to donate these surplus food packets. In alignment with the university\'s ethos of community engagement, the unclaimed food packets were distributed to the underprivileged through the Robin Hood Army, a local volunteering organization dedicated to fighting hunger. The food was promptly delivered within an hour of the Induction Program\'s conclusion, ensuring that it reached those in need while still fresh. This initiative reflects MIT ADT University\'s strong commitment to social responsibility and community welfare, echoing the broader objectives of The Indian Food Sharing Alliance (IFSA) by bridging the gap between surplus food and those who need it most. The university extends heartfelt gratitude to Shri. Sawant from Robin Hood Army for his cooperation and swift action in making this distribution possible. Special thanks are also due to the event organizers and volunteers for their diligent efforts in ensuring the success of this initiative.',
            date: '09/08/2024',
            venue: 'Robin Hood Army',
            resourcePersons: [
              'Dr. Fayaz Pathan',
              'Prof. Dr. Suraj Bhoyar'
            ]
          }
        ]
      }
    ],
    'Sep': [
      {
        id: 15,
        month: 'September',
        image: september2425,
        title: 'Student Leadership and National Programs',
        details: [
          {
            text: 'IMPACT Student Council - Interview',
            description: 'The MIT- IMPACT Student Council election process for the academic year 2024-25 witnessed an overwhelming response, with 85 enthusiastic students nominating themselves for various key positions. This strong participation reflects the growing spirit of leadership and commitment among the students, eager to serve and shape the university\'s vibrant community. The election process invited nominations for crucial roles, including President, Vice President, University General Secretary, Joint Secretary, Treasurer, and secretaries for various clusters. These clusters include Cultural, Sports, Wellbeing, Art, Design, and Technology, each playing a pivotal role in enhancing the university experience across different domains. The nominated candidates expressed a strong desire to contribute actively to the holistic development of their peers, foster unity, and uphold the values of the university. The MIT-IMPACT Student Council, known for its student-driven initiatives, aims to build a dynamic governance structure that resonates with the diverse needs of the student community. Each nominated candidate is expected to bring a unique perspective to their role, acting as torchbearers and ambassadors of student interests. The election process has been designed to ensure transparency, fairness, and inclusivity, with clear guidelines laid out for all participants. As the university moves towards the election date, the students\' campaign efforts have been focused on key issues such as student well-being, enhancing extracurricular engagement, and fostering innovation in academics and co-curricular activities. The elected council members will be responsible for leading initiatives that promote student empowerment and creating a vibrant campus environment. This election process has not only given students the opportunity to lead but also encouraged a sense of responsibility, ensuring that the elected members will represent the student body\'s voice effectively and work towards the collective growth of the university community.',
            date: '12 - 19 September 2024',
            venue: 'MIT ADT University',
            resourcePersons: ['Prof. Dr. Suraj Bhoyar']
          },
          {
            text: 'Council Meeting',
            description: 'A productive council meeting took place on 25th September, where members of the student council gathered for an interactive discussion with our esteemed mentor, Prof. Dr. Suraj Bhoyar. The session, held in a blend of formal and informal settings, included an official discussion followed by an informal lunch, fostering a relaxed yet focused atmosphere for ideation and planning. The meeting commenced with a detailed conversation about the upcoming events for the semester. Prof. Dr. Suraj Bhoyar provided invaluable insights on organizing initiatives that not only enhance the student experience but also align with the university\'s vision of holistic growth. He emphasized the importance of efficient teamwork and role clarity for smooth execution. Key points of discussion included forming dedicated committees for logistics, marketing, and content creation, adhering to a structured timeline for event preparation, and fostering inter-departmental collaborations to optimize resources and ensure inclusivity. The council members actively contributed innovative ideas, which Prof. Dr. Bhoyar thoughtfully evaluated, offering constructive feedback to maintain quality while adhering to budget constraints. He highlighted the significance of creative problem-solving and meticulous planning, motivating the team to aim for excellence in every initiative. The informal lunch that followed allowed council members to interact with Prof. Dr. Bhoyar on a personal level, strengthening the mentor-student bond. His approachable demeanor and practical advice left the council inspired and motivated to take their ideas to the next level. This enriching session has laid a solid foundation for the council\'s future activities. With a clear roadmap in place, the council is now energized and focused on executing impactful, memorable events that will leave a lasting impression on the student community.',
            date: '25th September 2024',
            venue: 'Vaishali Bhel',
            resourcePersons: ['Prof. Dr. Suraj Bhoyar']
          },
          {
            text: 'Viksit Bharat',
            description: 'On 25th September, the student council of MIT ADT University participated in the \'Viksit Bharat\' event, hosted at MIT World Peace University (MIT WPU). The event was a prestigious gathering that focused on fostering ideas and discussions on India\'s development and progressive future. A major highlight of the event was the exclusive interaction with Shri Anurag Thakur, the Honorable Former Minister of Information and Broadcasting, and Youth Affairs & Sports, Government of India. During the interactive session, the students had the invaluable opportunity to engage in a dialogue with Shri Thakur on matters concerning youth empowerment, nation-building, and leadership. His motivational insights left a profound impact on the attendees, encouraging them to take a proactive role in shaping India\'s future. Under the insightful guidance of Prof. Dr. Suraj Bhoyar, the student council members engaged actively in various sessions and workshops, which were designed to highlight innovations, policy developments, and strategic initiatives contributing to India\'s growth trajectory. The event facilitated networking opportunities, allowing students to connect with peers from various institutions, exchange ideas, and gain a broader perspective on national development. Under the guidance of Prof. Dr. Suraj Bhoyar, the student council members represented MIT ADT University with professionalism, demonstrating the values and aspirations of the university. This experience will undoubtedly contribute to their personal and professional growth, aligning with MIT ADT\'s vision of creating future leaders. The \'Viksit Bharat\' event was a resounding success, offering a platform for students to interact with leading figures like Shri Anurag Thakur, gain insights on nation-building, and represent MIT ADT University with distinction.',
            date: '25th September 2024',
            venue: 'MIT ADT University',
            resourcePersons: [
              'Shri ANURAG JI (Ministry of Sports and Youth Affairs)',
              'Prof. Dr. Suraj Bhoyar',
              'Prof. Aditya Kedari'
            ]
          },
          {
            text: 'Mega Blood Donation Camp',
            description: 'On 26th September 2024, the NSS Cell and NCC Cell of MIT ADT University organized a Mega Blood Donation Camp to mark the occasion of Engineers\' Day. The event aimed to inspire students and faculty to contribute towards a life-saving cause. The camp, which ran throughout the day, attracted a significant number of volunteers. Healthy donors of all blood types stepped forward to donate, recognizing the importance of their contribution. Many were moved by the fact that each donation could potentially save up to three lives, adding a sense of purpose to the event. A team of trained medical professionals ensured the donation process was smooth, safe, and hygienic. They guided the participants, making the experience comfortable and efficient. Proper medical care was taken to ensure that all donations met health and safety standards. Volunteers from the NSS and NCC Cells played an instrumental role in organizing and managing the event. They assisted in ensuring a seamless process by registering donors, guiding them through the donation procedure, and spreading awareness about the importance of blood donation. Their efforts contributed to the camp\'s overall success. The event saw a tremendous response from the university community, with several faculty members and students taking part in the noble cause. The active participation exemplified the spirit of service and community that MIT ADT University fosters among its members. In total, a significant volume of blood was collected, which will go on to help meet the critical demand in hospitals and healthcare facilities. The event succeeded not only in achieving its immediate objective of blood collection but also in raising awareness about the life-saving potential of blood donation. This Mega Blood Donation Camp was a perfect example of how MIT ADT University continues to contribute towards the betterment of society, with its students and staff embodying the values of service, responsibility, and humanity.',
            date: '26th September 2024',
            venue: 'Library Hall, 3rd floor IT building',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Maj. Suman Kumari',
              'Prof. Vishal Patil'
            ]
          },
          {
            text: 'Tree Plantation Drive',
            description: 'On 27th September 2024, MIT ADT University, under its mission of environmental sustainability, organized the event "Ek Ped Maa ke Naam" near the iconic MIT World Peace Dome. The event was graced by the esteemed presence of Shri Hardeep Singh Puri, Hon\'ble Minister of Petroleum and Natural Gas, Executive President and Vice Chancellor of MIT ADT University, Hon. Prof. Dr. Mangesh Karad, and Director of Student Affairs, Prof. Dr. Suraj Bhoyar. The program aimed at encouraging tree plantation as a tribute to motherhood and to promote the importance of a sustainable environment for future generations. Shri Hardeep Singh Puri, in his address, emphasized the significance of environmental conservation in the face of growing global challenges, urging students and faculty to take proactive steps towards a greener India. Prof. Dr. Mangesh Karad highlighted the university\'s role in spearheading eco-friendly initiatives and its continued efforts to foster environmental consciousness within the student community. He stated, "Each tree planted today will become a symbol of life, contributing to a healthier planet for generations to come." Prof. Dr. Suraj Bhoyar shared insights on the importance of students\' involvement in social and environmental causes, emphasizing their role as future leaders. His guidance underscored the need to develop a personal connection to nature and how each tree planted serves as a reminder of that bond. The event concluded with the ceremonial planting of saplings by the dignitaries, marking a significant contribution towards MIT ADT University\'s ongoing environmental initiatives. Students and faculty actively participated, making it a community-driven effort aimed at creating a cleaner and greener future.',
            date: '27th September 2024',
            venue: 'MIT World Peace Dome',
            resourcePersons: [
              'Prof. Dr. Suraj Bhoyar',
              'Shri HARDEEP SINGH PURI',
              'Prof. Dr. Mangesh Karad'
            ]
          },
          {
            text: 'Teacher\'s Day',
            description: 'ACES and IGNITE joined forces to honor the dedication and hard work of our esteemed faculty members. Recognizing the busy schedules of our educators, the objective of this special event was to pay tribute to their invaluable contributions in shaping the academic journey of students. The celebration began with a warm welcome as each teacher and professor were greeted with a beautiful rose. This gesture set a tone of respect and appreciation that resonated throughout the event. The highlight of the event was a lively quiz competition hosted by our Social Media Lead, Rohit. The faculty members engaged enthusiastically, showcasing their knowledge and competitive spirit. The quiz not only entertained but also fostered a sense of camaraderie among the attendees. The event featured captivating performances that showcased the diverse talents of our faculty. Prof. Haider Ali Sir entertained the audience with a soulful rendition of \'Mei Shayar Nahi,\' while Anuja Ma\'am delighted everyone with her poetic verses. The arrival of Pro Vice Chancellor, Prof. Dr. Ramchandra Pujeri Sir was a significant moment in the event. His motivational words resonated with everyone, reinforcing the importance of dedication and perseverance in the field of education. Dr. Pujeri\'s address served as a powerful reminder of the impact teachers have on shaping future. Overall, the event was a resounding success, providing a meaningful and enjoyable experience for all the faculty members. It was a heartfelt acknowledgment of their unwavering commitment to ensuring that students face no academic difficulties. The day was a testament to the profound influence teachers have and a celebration of their pivotal role in our educational journey.',
            date: '6/09/2024',
            venue: 'MIT SOC',
            resourcePersons: [
              'Prof. Dr. Ramchandra Pujeri',
              'Dr. Rekha Sugandhi',
              'Prof. Tanuja Zhende'
            ]
          }
        ]
      }
    ],
    'Oct': [
  {
    id: 16,
    month: 'October',
    image: october2425,
    title: 'Festival Celebrations and Creative Workshops',
    details: [
      {
        text: 'Talent Fusion 2024',
        description: 'The Psychology Club of MIT School of Vedic Sciences (SVS) hosted its much-anticipated event, PSYCOGN, a unique initiative to explore the hidden potential of the human mind and creativity. Held at the picturesque Institute of Design Lawn, the event provided a refreshing opportunity for students to engage in activities that promote mindfulness and self-expression. The event kicked off at 10:30 a.m. with an enthusiastic crowd eager to dive into the day\'s offerings. Participants were encouraged to reflect on their thoughts and emotions while engaging in various creative exercises. Director of Student Affairs Prof. Dr. Suraj Bhoyar guided students about the importance of Mental Health on the auspicious occasion of Mental Health Day, the team of Impact Student Council also motivated and helped the Psychology club for the event. The activities, designed to stimulate the mind, ranged from mindful meditation sessions to interactive art displays, providing an avenue for attendees to express their inner thoughts through different mediums. One of the key attractions was the "Mind Canvas" activity, where participants were invited to paint their thoughts and emotions, allowing them to embrace their creative potential in a non-judgmental space. The open-air venue further enhanced the experience, offering a calm environment for reflection. PSYCOGN drew a large turnout from students across the university, emphasizing the growing interest in mental health and creative expression within academic environments. The event concluded at 4:30 p.m., leaving participants with a sense of inner peace and newfound self-awareness. The Psychology Club of MIT SVS, through this event, successfully highlighted the importance of mental well-being, creativity, and self-expression, marking PSYCOGN as a memorable experience for all who attended.',
        date: 'October 10, 2024',
        venue: 'IOD lawn',
        resourcePersons: [
          'Prof. Dr. Suraj Bhoyar',
          'Asst. Prof Aishwarya Menon'
        ]
      },
      {
        text: 'Team Bonding Session',
        description: 'On 9th October, the prestigious RK Bungalow played host to an exquisite dinner with RJ Kretex, the distinguished guest of MIT ADT Dandiya Nights. Organized by the Office of Student Affairs in collaboration with the Impact Student Council, the event provided a perfect blend of cultural engagement, meaningful interactions, and gastronomic delights. The evening began with a warm welcome extended to RJ Kretex by the Director of Student Affairs Hon Prof. Dr Suraj Bhoyar, whose energetic and charismatic presence added a unique charm to the gathering. Known for his popularity as a radio jockey and his contributions to youth culture, Kretex\'s participation in the Dandiya Nights had already generated excitement among the students. Guests were treated to a sumptuous dinner, set against the backdrop of the elegant RK Bungalow. The menu was thoughtfully curated to reflect both traditional and contemporary tastes, offering a diverse range of dishes that delighted all in attendance. The gathering provided an intimate setting for students and faculty members to engage with RJ Kretex, discussing not only his career journey but also his thoughts on youth empowerment, culture, and the role of media in shaping public discourse. The evening also celebrated the collaborative efforts of the Office of Student Affairs and the Impact Student Council in bringing together students for such enriching experiences. The experience helped the council members interact and know each other well while enjoying a good feast after such a long and amazing graba event conducted by them. The event was addition to the bonding sessions conducted by council members every week. The dinner at RK Bungalow marked a highlight in the series of events surrounding the MIT ADT Dandiya Nights, fostering connections and memories that will linger long after the festivities.',
        date: '9th October 2024',
        venue: 'RK Bunglow',
        resourcePersons: ['Prof. Dr. Suraj Bhoyar']
      },
      {
        text: 'Halloween Screening and Cosplay Event',
        description: 'The Halloween Screening and Cosplay event, organized on October 10, 2024, by the Cinemaniacs Club in collaboration with the Office of Student Affairs, turned out to be an exceptional blend of fun, creativity, and education. Hosted on the 4th floor of ISBJ, the event welcomed students into a world of cinematic thrills and creative expression, setting a festive tone that celebrated the spooky season. Assistant Professor Siddhi Lonkar\'s insightful session on visual storytelling stood out as one of the highlights of the evening. Her engaging talk unraveled the nuances of crafting impactful horror films, offering students a deeper understanding of how elements like lighting, sound design, and cinematography work together to evoke fear and suspense. By sharing examples from iconic horror films, she ignited curiosity and appreciation for the art of filmmaking among the audience. The cosplay competition was another star attraction of the evening. Students brought their favorite horror characters to life with intricate costumes, makeup, and props. From classic villains to modern ghouls, the variety of characters on display showcased the participants\' artistic talent and attention to detail. The competition created a platform for students to express themselves creatively while embracing the Halloween spirit. The evening concluded with the screening of a classic horror film, bringing the Halloween atmosphere to life. The hauntingly immersive visuals and gripping storyline left the audience thrilled and captivated. The seamless collaboration between the Cinemaniacs Club and the Office of Student Affairs ensured meticulous planning and execution, making the event a standout success. This memorable celebration of Halloween underscored the importance of creativity and innovation in enhancing student life, leaving everyone eagerly anticipating the next event.',
        date: '10th October 2024',
        venue: 'ISBJ 4th floor 401 Seminar Hall',
        resourcePersons: [
          'Assistant Prof. Siddhi Lonkar',
          'Prof. Dr. Suraj Bhoyar'
        ]
      },
      {
        text: 'Cleanliness Drive',
        description: 'The MIT ADT Adventure Club, in collaboration with the Office of Student Affairs, organized a commendable cleanliness drive on 9th October 2024. The initiative, aimed at promoting environmental responsibility and awareness, was a direct response to the plastic waste generated during the Garba Night celebrations. This drive aligned with the university\'s mission to foster sustainable practices and create a green campus. Under the guidance of Prof. Dr. Suraj Bhoyar, Director of Student Affairs, the event witnessed active participation from students who took this opportunity to contribute meaningfully to environmental preservation. The students demonstrated remarkable enthusiasm as they collected, segregated, and disposed of plastic waste in an eco-friendly manner. Armed with gloves and collection bags, they combed through the event areas, ensuring every piece of litter was accounted for. This hands-on experience served as a powerful reminder of the impact of waste on ecosystems and underscored the importance of responsible waste management. Prof. Dr. Bhoyar, in his address, praised the students for their initiative and dedication. He emphasized that such drives are not merely about cleaning spaces but also about instilling habits and values that contribute to larger societal change. Encouraging the students to be consistent in their efforts, he urged them to take this message of sustainability beyond the campus, inspiring their communities to adopt eco-friendly practices. The cleanliness drive also featured an awareness session where participants discussed the detrimental effects of plastic pollution and brainstormed ways to reduce their ecological footprint. The students were reminded of the significant role they play in shaping a sustainable future. This initiative by the MIT ADT Adventure Club stood out as a testament to the power of collaboration and action. The event not only beautified the campus but also fostered a sense of responsibility among the participants. The drive\'s success highlighted the importance of taking small but meaningful steps toward achieving the vision of a green and sustainable India. Such events serve as catalysts for change, motivating everyone to prioritize environmental conservation in their daily lives.',
        date: '9th October 2024',
        venue: 'MIT ADT Shri Samarth Ramdas Swami Sports Complex',
        resourcePersons: ['Prof. Dr. Suraj Bhoyar']
      },
      {
        text: 'Ek Ped Maa Ke Naam',
        description: 'On 27th September 2024, MIT ADT University, under its mission of environmental sustainability, organized the event "Ek Ped Maa ke Naam" near the iconic MIT World Peace Dome. The event was graced by the esteemed presence of Shri Hardeep Singh Puri, Hon\'ble Minister of Petroleum and Natural Gas, Executive President and Vice Chancellor of MIT ADT University, Hon. Prof. Dr. Mangesh Karad, and Director of Student Affairs, Prof. Dr. Suraj Bhoyar. The program aimed at encouraging tree plantation as a tribute to motherhood and to promote the importance of a sustainable environment for future generations. Shri Hardeep Singh Puri, in his address, emphasized the significance of environmental conservation in the face of growing global challenges, urging students and faculty to take proactive steps towards a greener India. Prof. Dr. Mangesh Karad highlighted the university\'s role in spearheading eco-friendly initiatives and its continued efforts to foster environmental consciousness within the student community. He stated, "Each tree planted today will become a symbol of life, contributing to a healthier planet for generations to come." Prof. Dr. Suraj Bhoyar shared insights on the importance of students\' involvement in social and environmental causes, emphasizing their role as future leaders. His guidance underscored the need to develop a personal connection to nature and how each tree planted serves as a reminder of that bond. The event concluded with the ceremonial planting of saplings by the dignitaries, marking a significant contribution towards MIT ADT University\'s ongoing environmental initiatives. Students and faculty actively participated, making it a community-driven effort aimed at creating a cleaner and greener future.',
        date: '27th September 2024',
        venue: 'MIT World Peace Dome',
        resourcePersons: [
          'Prof. Dr. Suraj Bhoyar',
          'Shri HARDEEP SINGH PURI',
          'Prof. Dr. Mangesh Karad'
        ]
      },
      {
        text: 'MIT ADT Dandiya Nights Day-1',
        description: 'The MIT Samarth Ramdas Swami Sports Complex was abuzz with excitement as the vibrant beats of dandiya and garba filled the air during the much-awaited MIT ADT Dandiya Nights on 8th October 2024. Students gathered in colorful traditional attire to celebrate the festival of Navaratri with enthusiasm and grace. The event, organized by the Office of Student Affairs in collaboration with Wadhwa Events, showcased a delightful blend of cultural performances and energetic garba. Various student clubs participated in the event, showcasing their dance performances, and adding to the festive spirit. The highlight of the evening was the professional troupe from Gujarat, who mesmerized the crowd with their authentic and captivating garba moves, giving the students a glimpse of the rich cultural heritage of the state. The event not only brought together the MIT ADT community but also provided an opportunity for students to unwind and immerse themselves in the Navaratri celebrations. The sports complex was adorned with festive decorations, and the rhythmic beats of traditional dandiya music echoed throughout the night, as participants danced in perfect harmony. The Office of Student Affairs, under the guidance of Prof. Dr. Suraj Bhoyar, played a pivotal role in organizing the event, ensuring a seamless and enjoyable experience for all attendees. Wadhwa Events contributed to the success of the night by bringing in the professionals from Gujarat, elevating the cultural significance of the occasion. They ensured that the event ran smoothly, prioritizing both enjoyment and safety for all participants. Wadhwa Events\' contribution in managing logistics and coordinating with the performers added a professional touch that enhanced the night\'s success. As the evening came to a close, students left with hearts full of joy and memories of a night steeped in cultural pride, eagerly awaiting the next Navratri celebration. The Dandiya Nights perfectly captured the festive spirit of Navaratri, leaving an indelible mark on all who attended. MIT ADT Dandiya Nights proved to be an unforgettable evening, filled with joy, tradition, and community spirit, marking a successful celebration of Navaratri within the university campus.',
        date: '8th October 2024',
        venue: 'MIT Samarth Ramdas Swami Sports Complex',
        resourcePersons: [
          'Prof. Dr. Mangesh Karad',
          'Prof. Dr. Suraj Bhoyar',
          'Prof. Dr. Sunita Karad',
          'Dr. Mahesh Chopade'
        ]
      },
      {
        text: 'MIT ADT Dandiya Nights Day-2',
        description: 'Pune, 9th October 2024 – The MIT Samarth Ramdas Swami Sports Complex was buzzing with energy as students gathered for MIT ADT Dandiya Nights, an exciting celebration of Navaratri. Organized by the Office of Student Affairs in collaboration with Wadhwa Events, the event brought together hundreds of students for a night of garba, cultural performances, and unforgettable music. Students dressed in traditional attire performed garba in vibrant circles, their joy and enthusiasm lighting up the night. Various student clubs also took the stage, showcasing impressive dance performances that added to the festive spirit. The highlight of the evening was DJ Kretex, Krunal Ghorpade, who set the crowd on fire with his exhilarating DJ set. Blending modern beats with traditional dandiya music, DJ Kretex kept the energy high and the dance floor packed. His performance was a thrilling fusion of contemporary sounds and Navaratri rhythms, making it a night to remember. The sports complex, beautifully adorned with lights and decorations, added to the charm of the celebration. Under the leadership of Prof. Dr. Suraj Bhoyar, the Office of Student Affairs, in collaboration with Wadhwa Events, ensured the event ran smoothly and provided a festive experience for all. The Office of Student Affairs and Wadhwa Events ensured flawless execution, creating a safe and welcoming environment that allowed everyone to let loose and celebrate. The lights, decorations, and spirit of community made MIT ADT Dandiya Nights 2024 a truly memorable celebration. This remarkable event not only celebrated Navratri traditions but also strengthened the bonds within the MIT ADT community, making it a night that will be cherished by all who attended. MIT ADT Dandiya Nights 2024 was a grand success, celebrating the joy of Navaratri and creating lasting memories for everyone involved.',
        date: '9th October',
        venue: 'MIT Samarth Ramdas Swami Sports Complex',
        resourcePersons: [
          'Prof. Dr. Suraj Bhoyar',
          'Prof. Dr. Mangesh Karad',
          'Prof. Dr. Sunita Karad'
        ]
      },
      {
        text: 'Art Therapy Workshop',
        description: 'On October 22, 2024, MIT ADT University hosted an inspiring art therapy workshop in the SCIL Hall, organized by the Office of Student Affairs and Impact Student Council. Led by Professor Teresa Joshy, an experienced Art Therapist from the School of Fine Arts, the workshop attracted students from various departments seeking creative ways to manage stress and connect with their inner selves. The session ran for an hour and provided a calm, supportive environment, focusing on relaxation and emotional exploration through art. Professor Joshy guided the participants through a series of therapeutic exercises inspired by Japanese cultural practices. These activities encouraged students to express themselves visually, using techniques that emphasize mindfulness, creativity, and self-discovery. Through the process, students were able to channel their emotions, foster mental clarity, and relieve academic stress. Danika Patil, Wellness Secretary of the Student Council, played a crucial role in coordinating the workshop, ensuring a welcoming atmosphere and supporting participants throughout the session. Her efforts contributed to the event\'s overall success by creating a positive environment where students could openly explore art\'s therapeutic effects. Danika emphasized the importance of well-being, encouraging students to embrace creative outlets for stress relief. Feedback from attendees was overwhelmingly positive, with many expressing how the session offered a refreshing escape from academic pressures. The exercises not only helped them relax but also highlighted the potential of art therapy as a tool for emotional growth and resilience. Many students left with a renewed sense of purpose and a desire to incorporate creativity into their routines. The art therapy workshop was a memorable experience for all, underscoring MIT ADT University\'s commitment to holistic student well-being. Through events like these, the university continues to foster a supportive environment where students can thrive both academically and personally.',
        date: '22nd October 2024',
        venue: 'SCIL hall',
        resourcePersons: [
          'Prof. Teresa Joshy',
          'Prof. Dr. Suraj Bhoyar'
        ]
      },
      {
        text: 'Council Meeting',
        description: 'On 9th October 2024, a meeting was held at the South Block, 6th Floor, New IT Building, with the Hon\'ble Executive Director, Prof. Dr. Sunita Karad, to discuss the upcoming events organized by the students of the MIT Impact Student Council, as well as a review and discussion about the successful Navaratri celebrations. The meeting began with a warm welcome and an overview of the student council\'s activities. The members of the Impact Student Council presented a brief outline of the planned upcoming events, including cultural programs, awareness campaigns, and community engagement initiatives. Prof. Dr. Sunita Karad was particularly interested in the council\'s approach to promoting inclusivity, creativity, and student participation in these events. The council members also shared their strategies for fostering collaboration among various student clubs and organizations, ensuring that the events are impactful and reach a wider audience. A significant portion of the discussion was dedicated to the recent Navaratri celebrations, which were deemed a great success. The executive director commended the student council for their role in organizing and executing the event, including the Garba nights, cultural performances, and cleanliness drives. Prof. Dr. Karad praised the council\'s dedication to maintaining cultural traditions while also promoting environmental sustainability, as seen in the cleanliness drive during Navaratri. The meeting concluded with Prof. Dr. Sunita Karad expressing her continued support for the student council\'s initiatives and encouraging further innovation in event planning. She also assured the council of the university\'s full backing in ensuring the smooth execution of their future events. The meeting left everyone feeling motivated and ready to work towards executing the upcoming activities with renewed enthusiasm and vision.',
        date: '9th October 2024',
        venue: 'IT Building',
        resourcePersons: ['Prof. Dr. Sunita Karad']
      },
      {
        text: 'Council Shoot',
        description: 'On 17th October, the Impact Student Council of MIT ADT University held its official team reveal shoot, coordinated by the Central Media Team of MIT ADT University in collaboration with the council\'s own media team. This grand event showcased the new council members in a dynamic and professional setting, embodying the spirit and vision of student leadership at MIT ADT. The shoot was conducted at various prominent locations across the university campus, capturing the team members in engaging and inspiring setups. The presence of Prof. Dr. Suraj Bhoyar, Director of Student Affairs, added a guiding influence to the event. Prof. Dr. Bhoyar took the opportunity to share valuable insights with the council members, explaining the importance of visual representation and professionalism in media. He highlighted how effective media coverage not only enhances the team\'s visibility but also strengthens the council\'s mission to positively impact the student community. The Central Media Team worked in sync with the council\'s media division to ensure every shot was aligned with the council\'s ethos. Team members displayed great enthusiasm, recognizing this as a pivotal moment to connect with the student body. The shoot featured both individual and group portraits, each reflecting the council\'s commitment to fostering leadership, unity, and creativity among students. This event marked a significant milestone for the Impact Student Council as it formally introduced its members to the university. The media team\'s efforts captured the essence of each council member, ensuring a lasting impression. The official reveal will further encourage students to engage with the council\'s initiatives, enhancing the overall student experience at MIT ADT University.',
        date: '17th October 2024',
        venue: 'MIT ADT University',
        resourcePersons: ['Prof. Dr. Suraj Bhoyar']
      },
      {
        text: '38th West Zone Youth Festival Auditions',
        description: 'On October 21, 2024, MIT ADT University hosted auditions for the 38th West Zone Youth Festival at Vishwashanti Sangeet Kala. This event aimed to celebrate India\'s rich cultural diversity by offering a platform for students to showcase their talent in dance and music. With over 200 participants from various institutions, the event drew an enthusiastic response from the youth, each competing for a spot in the prestigious festival. Event Categories and Highlights The auditions spanned across two primary domains—Dance and Music, with each category further divided into sub-genres: • Folk/Tribal Dance: Participants performed regional dance styles like Lavani, Garba, and Ghoomar, emphasizing movement, synchronization, and traditional presentation. • Classical Dance: Students showcased classical forms such as Bharatanatyam and Kathak, focusing on taal, expressive movements, and traditional storytelling. • Vocal Music: Divided into Classical, Light, and Western categories, the auditions displayed a range of vocal traditions, from raga-based compositions to contemporary Western tunes. • Instrumental Music: Solo performances on Indian and Western instruments emphasized technical mastery, improvisation, and rhythm precision. An expert panel in dance and music assessed participants based on technical and artistic criteria, ensuring only the finest talents progressed. The panel included renowned artists in the field, each bringing specialized knowledge in various genres. The auditions concluded successfully, underscoring the event\'s role in fostering cultural appreciation and artistic excellence among youth. MIT ADT University eagerly anticipates the upcoming stages of the festival, which promise further avenues for cultural expression, personal growth, and inter-institutional exchange. Events like these continue to cultivate a thriving community of young artists celebrating India\'s cultural heritage.',
        date: '21st October, 2024',
        venue: 'Vishwashanti Sangeet Kala MIT ADT University',
        resourcePersons: ['Prof. Reshma Gosavi']
      },
      {
        text: 'Deepotsav',
        description: 'The School of Holistic Development, in collaboration with the MIT Impact Student Council, organized a vibrant celebration of Diwali, titled "Deepotsav 2024," on October 23 at the RK Auditorium. This two-hour cultural extravaganza from 2 PM to 4 PM brought together students, faculty, and guests in an atmosphere brimming with enthusiasm, festivity, and cultural pride. The event opened with the lighting of the ceremonial lamp, symbolizing the spirit of Diwali—the triumph of light over darkness and knowledge over ignorance. Esteemed dignitaries and members of the faculty joined in this auspicious beginning, setting the stage for a series of performances that showcased the richness of India\'s cultural heritage. The performances were diverse, reflecting various aspects of Indian traditions. Students presented classical dances that invoked the spiritual essence of Diwali, accompanied by instrumental music that resonated with the festive spirit. The event also featured folk dances from different regions of India, captivating the audience with their energy and color. Each performance was meticulously planned and executed, celebrating the unity in diversity that Diwali represents. In addition to dance, students presented soulful vocal renditions of classical and devotional songs, immersing the audience in a serene and reflective mood. The stage decorations, adorned with vibrant rangoli designs, diyas, and flowers, created an ambiance of warmth and joy, perfectly complementing the festive performances. Deepotsav not only celebrated Diwali but also emphasized the significance of harmony, respect, and joy that the festival embodies. Through their dedication and passion, the organizers and performers succeeded in bringing the community together in celebration of shared values and cultural pride. The event concluded with heartfelt applause and a sense of unity, reminding everyone of the importance of togetherness, which lies at the heart of the Diwali festival.',
        date: '23rd October 2024',
        venue: 'RK Auditorium',
        resourcePersons: ['School of Holistic Development']
      },
      {
        text: 'Diya Painting Competition - WORKSHOP',
        description: 'On October 23, 2024, the School of Holistic Development, in collaboration with the MIT Impact Student Council, organized a vibrant Diya Painting Competition to celebrate the spirit of Diwali. Held at the IT Building 3rd floor, the competition offered students an opportunity to express their creativity and cultural pride by painting diyas in unique styles, symbolizing the festival\'s message of light and positivity. The event attracted enthusiastic participation from students across various disciplines, all eager to showcase their artistic skills. The diya painting commenced in a lively setting, with each participant provided a traditional clay diya to transform into a colorful masterpiece. Equipped with paints, brushes, and decorative materials, students unleashed their creativity, crafting diyas in diverse styles—from traditional patterns with intricate details to contemporary designs with bold colors. The venue was filled with the festive spirit as students carefully painted their diyas, reflecting the warmth and joy of Diwali through their artistic interpretations. Many participants incorporated cultural motifs, geometric patterns, and symbolic elements like flowers, peacocks, and diyas to give their work a traditional touch. Others explored modern aesthetics, blending vibrant colors and abstract designs to create unique and eye-catching diyas. Judges, including faculty members from the School of Holistic Development, evaluated the diyas based on creativity, intricacy, and overall presentation. The diversity of designs made it challenging to choose winners, as each entry displayed remarkable skill and thoughtfulness. After careful deliberation, winners were announced, and prizes were awarded to students whose designs best captured the festival\'s spirit. The Diya Painting Competition concluded on a note of appreciation and joy, celebrating the participants\' efforts and creativity. It offered students a platform to connect with their cultural heritage, express their individuality, and contribute to the festive atmosphere. This successful event underscored the importance of tradition, art, and community, leaving everyone inspired to carry the Diwali spirit forward.',
        date: '23rd October 2024',
        venue: 'IT building 3rd Floor',
        resourcePersons: ['Prof. Atul Patil']
      },
      {
        text: 'Rangoli Making Competition',
        description: 'On October 23, 2024, the School of Holistic Development, in collaboration with the MIT Impact Student Council, hosted a Rangoli Competition at the IT Building\'s 3rd floor to mark the Diwali festivities. This event brought together students from various departments, who showcased their creativity and cultural heritage by designing rangolis with inspiring themes and messages. The competition encouraged students to express Diwali\'s essence—celebrating light, positivity, and harmony—through their intricate and meaningful rangoli designs. Participants used vibrant colors, flowers, and traditional materials to craft elaborate patterns, with each rangoli carrying a unique message. Some students highlighted environmental awareness, advocating for a "Green Diwali" by incorporating symbols like trees, earth, and animals. Others focused on themes of unity and peace, representing India\'s cultural diversity and the importance of harmony. As the students worked diligently on their designs, the venue transformed into a vivid display of artistry and expression, filled with colors and symbolic shapes. Each rangoli reflected the artist\'s personal touch, blending traditional styles with contemporary messages. The participants\' creativity was evident as they seamlessly combined aesthetic appeal with thought-provoking messages, creating rangolis that were visually stunning and socially relevant. A panel of judges, including faculty from the School of Holistic Development, evaluated the rangolis based on creativity, message clarity, and overall presentation. The judges commended the students for their artistic skill and commitment to raising awareness on important issues through their work. After a careful selection process, winners were announced, and prizes were awarded to those whose rangolis best represented the spirit and values of Diwali. This celebration of tradition, creativity, and social consciousness made the event a memorable and impactful part of the Diwali festivities at MIT ADT, highlighting the festival\'s core values of unity, positivity, and community.',
        date: '23rd October 2024',
        venue: 'IT Building 3rd Floor',
        resourcePersons: [
          'Prof. Dr. Suraj Bhoyar',
          'Prof. Dr. Atul Patil'
        ]
      },
      {
        text: 'ADT Master Chef Competition',
        description: 'On World Food Day, the MIT ADT community gathered at the MANET Mess Kitchen for an unforgettable culinary experience—the ADT MasterChef Competition. Organized by the School of Holistic Development, this exciting event celebrated the art of cooking and highlighted the importance of good food, nutrition, and health. Starting at 1:30 PM, the competition attracted aspiring chefs from across the campus, each bringing their culinary skills and unique flavors to the table. The participants were tasked with preparing dishes that showcased their creativity, knowledge of ingredients, and cooking techniques, all while embodying the theme of World Food Day. From traditional recipes with a modern twist to international delicacies, the chefs impressed the audience and judges with a range of vibrant, flavorful dishes. The venue was abuzz with excitement as aromas filled the air, and attendees eagerly awaited the final creations. Participants put forward a stunning variety of dishes, each plated beautifully and reflecting their individual styles and inspirations. The judges—faculty members and culinary experts—evaluated the dishes based on taste, presentation, creativity, and nutritional value. The chefs\' commitment to flavor and health was evident, with many focusing on sustainability and the use of wholesome ingredients. After an intense round of judging, the winners were announced, applauded for their exceptional skills and innovative approach. The competition concluded with words of encouragement from the judges, who praised the participants for their dedication to the culinary arts. The ADT MasterChef Competition not only showcased the talent within the MIT ADT community but also emphasized the significance of World Food Day in promoting health, sustainability, and appreciation for food. The event left everyone inspired to pursue better food practices, making it a memorable celebration of taste, culture, and creativity.',
        date: '16th October, 2024',
        venue: 'MANET Mess Kitchen',
        resourcePersons: [
          'Prof. Dr. Suraj Bhoyar',
          'Shri Krishna Yadav',
          'Dr. Fiyaj Pathan'
        ]
      },
      {
        text: 'PROTECT YOUR IDEA - Session on Intellectual Property',
        description: 'On 14th October 2024, the Office of Student Affairs at MIT ADT University organized an enlightening session on Intellectual Property (IP) at the MANET Building 2nd floor, led by the esteemed Director of Student Affairs, Prof. Dr. Suraj Bhoyar. The session aimed to equip students with essential knowledge about IP rights, empowering them to become IP Ambassadors and advocate for innovation protection through patents, copyrights, and trademarks. The session began with Prof. Dr. Bhoyar explaining the fundamental concepts of intellectual property and its significance in today\'s knowledge-driven world. He emphasized how IP plays a crucial role in fostering innovation, safeguarding creators\' rights, and contributing to economic growth. Addressing a diverse audience of students from various disciplines, he highlighted the different types of IP, including patents, copyrights, trademarks, and trade secrets, and provided real-world examples to illustrate each category relevance. Throughout the presentation, Dr. Bhoyar shared insights on how students can protect their innovative ideas and creations through proper IP registration. He outlined the process for filing patents, registering trademarks, and obtaining copyrights, making the information accessible and actionable. By clarifying common misconceptions and addressing questions from students, he created a strong foundation for understanding the value of IP rights. The session also included an interactive discussion on the role of IP in academia and industry. Dr. Bhoyar encouraged students to think critically about their projects and consider IP protection as an integral part of their innovation journey. He invited students to become IP Ambassadors, responsible for promoting IP awareness and helping their peers understand the importance of safeguarding intellectual assets. As the session concluded, students left with a newfound appreciation for IP and the tools to protect their ideas effectively. This informative and engaging event marked a pivotal step in fostering a culture of innovation at MIT ADT University, inspiring students to be proactive in safeguarding their intellectual contributions and contributing to a future of protected and impactful creations.',
        date: '14th October 2024',
        venue: 'MANET 2nd Floor',
        resourcePersons: ['Prof. Dr. Suraj Bhoyar']
      },
      {
        text: 'Review - Team MIT IMPACT Student Council',
        description: 'On October 11, 2024, the MIT Impact Student Council gathered for a meeting to celebrate the success of the recently concluded Navaratri events and to plan upcoming activities. Held at the MANET Mess, the meeting was attended by council members, event organizers, and faculty mentors who played key roles in the events. The session opened with a warm appreciation from Director of Student Affairs, Prof. Dr. Suraj Bhoyar, who praised the council members for their dedication and coordination in making the Navaratri events memorable. The Navaratri celebrations, including Garba Nights, cleanliness drives, and cultural activities, received widespread appreciation from the university community, and the council took pride in the positive feedback. Each member shared their experience, highlighting what went well and areas for improvement. They discussed the impact of the cleanliness drive, led by the Adventure Club, where students collected plastic waste and promoted a cleaner campus environment. Following the review, the council shifted focus to planning for upcoming events. Among the initiatives discussed was the upcoming Deepotsav Diwali celebration, which would include a series of cultural performances and creative workshops. The council brainstormed ideas to enhance the Diwali events, emphasizing themes of unity, cultural diversity, and sustainability. Additionally, plans for a Halloween-themed event, a blood donation drive, and a sports tournament were outlined, with responsibilities delegated to specific teams. The meeting also addressed logistical challenges faced during Navaratri and proposed solutions to streamline communication, enhance coordination, and manage resources efficiently for future events. Council members were encouraged to collaborate closely, ensuring that each event upholds the high standards set by previous celebrations. The meeting concluded with enthusiasm and a sense of camaraderie, as members looked forward to delivering impactful and engaging events that would further enrich the MIT ADT University experience. The council\'s dedication to fostering a vibrant campus culture through thoughtful planning and teamwork set a promising tone for the months ahead.',
        date: '11/10/2024',
        venue: 'MANET Mess',
        resourcePersons: ['Prof. Dr. Suraj Bhoyar']
      },
      {
        text: 'Khande Navami Pooja',
        description: 'On October 11, 2024, the Office of Student Affairs at MIT ADT University hosted the Khande Navami Pooja, a traditional ceremony to invoke blessings and celebrate the spirit of unity and prosperity. Held at 9:15 AM, the event brought together dignitaries, faculty, and student council members to mark the occasion with reverence and celebration. The ceremony was led by Prof. Dr. Suraj Bhoyar, Director of Student Affairs, who welcomed the esteemed guests and highlighted the significance of Khande Navami. As the pooja commenced, the atmosphere was filled with devotion, with participants offering prayers and honoring the day\'s importance. The ritual aimed to bring positivity and strength to the university community, setting an auspicious tone for the months ahead. A special highlight of the event was the felicitation of two dedicated council members, Anoushka Joshi, Editorial Secretary of the Impact Council, and Ayushi Sharma, Cultural Secretary of the Impact Council. Both students represented MIT ADT University at the prestigious 37th West Zone Youth Festival, showcasing their talent and dedication. In recognition of this achievement, Prof. Dr. Suraj Bhoyar honored them with a ceremonial felicitation, praising their efforts and commitment to excellence. The Khande Navami Pooja provided a meaningful moment of togetherness, allowing students and faculty to reflect on shared values and accomplishments. Following the pooja, participants engaged in a brief gathering where Dr. Bhoyar expressed his appreciation for the student council\'s contributions to MIT ADT\'s vibrant campus life. The event concluded on a celebratory note, symbolizing unity and gratitude. The blessings received during the Khande Navami Pooja left everyone inspired to continue contributing to the university\'s culture and success, with Anoushka Joshi and Ayushi Sharma setting a motivating example for their peers.',
        date: '11th October 2024',
        venue: 'Office of Student Affairs',
        resourcePersons: [
          'Dr. Sambit Pal',
          'Dr. Dilkirat Sarna',
          'Prof. Sanket Bapat',
          'Prof. Dr. Suraj Bhoyar'
        ]
      },
      {
        text: 'TEAM BUILDING - MIT IMPACT STUDENT COUNCIL',
        description: 'On 17th October 2024, the Impact Student Council held its regular Thursday breakfast meeting at the MANET mess, convened by Prof. Dr. Suraj Bhoyar, Director of Student Affairs. This meeting aimed to review recent events and discuss upcoming activities and competitions planned for the MIT ADT University student community. Prof. Dr. Bhoyar initiated the meeting with a brief reflection on past events, expressing appreciation for the council\'s efforts in organizing engaging and well-received activities. He emphasized the importance of building on these successes to create an even more enriching experience for the university\'s diverse student body. Council members were encouraged to share insights on recent events, discussing both positive outcomes and areas for improvement, fostering a culture of continuous learning and refinement. A key focus of the meeting was on planning for future events, with discussions covering a range of potential competitions and activities aimed at promoting student engagement and personal development. Prof. Dr. Bhoyar provided valuable guidance on structuring these events, encouraging the council to prioritize inclusivity, creativity, and student-driven initiatives. Council members brainstormed ideas for upcoming events, considering feedback from previous activities to enhance participation and impact. Various suggestions, including inter-departmental competitions, skill-building workshops, and social impact activities, were deliberated with an eye on maximizing student involvement and fostering a vibrant campus life. The meeting concluded with an reminder to the council to stay proactive and focused on delivering high-quality, impactful events. He reiterated his support for their initiatives, assuring them of the Office of Student Affairs\' assistance in executing their plans. Overall, the Thursday breakfast meeting was productive, setting the stage for a busy and fulfilling calendar of events that will benefit the students and add to MIT ADT University\'s thriving campus culture.',
        date: '17th October 2024',
        venue: 'MANET Mess',
        resourcePersons: ['Prof. Dr. Suraj Bhoyar']
      },
      {
        text: 'Diwali Celebration',
        description: 'On October 18, 2024, the Impact Student Council at MIT ADT University organized a special Diwali Wishes Shoot at MIT VSK to convey festive greetings to students and faculty. The event took place at 2:30 PM and was attended by members of the Impact Student Council, led by the Director of Student Affairs, Prof. Dr. Suraj Bhoyar, who graced the occasion with his presence. The shoot was conducted in collaboration with the official media team of the university, ensuring professional coverage of the event. The shoot was designed to capture the vibrant spirit of Diwali, with council members dressed in traditional attire, reflecting the cultural essence of the festival. The Impact Student Council team worked diligently to create a welcoming and celebratory atmosphere, with beautiful Diwali decorations, including diyas and rangoli designs, adding to the festive vibe. Prof. Dr. Suraj Bhoyar expressed his heartfelt Diwali wishes to the students of MIT ADT University, emphasizing the importance of togetherness, light, and positivity that Diwali represents. He encouraged students to embrace the festival\'s spirit of harmony and peace, while also promoting a safe and eco-friendly Diwali celebration. His words resonated with the students, fostering a sense of community and warmth. The shoot captured not only Diwali greetings but also highlighted the unity and enthusiasm within the MIT ADT student body. The council members, along with Prof. Dr. Bhoyar, conveyed their heartfelt wishes to the university community, hoping that the festive season would bring joy, success, and prosperity to all. The Diwali Wishes Shoot was a great success, bringing students together and spreading the joy and happiness associated with Diwali. The collaboration with the official media team ensured the shoot was professionally executed, leaving a lasting impression and fostering a sense of unity across the university.',
        date: '18th October 2024',
        venue: 'Vishwashanti Sangeetkala Academy',
        resourcePersons: ['Prof. Dr. Suraj Bhoyar']
      },
      {
        text: 'Unlock Java',
        description: 'Java Brewers successfully organised a Java Basics Event from Oct 7th to Oct 9th, aiming to make participants acquainted with basics of java programming. The event recieved overwhelming participation, with over 150 eager participants joining the sessions. The event sessions were conducted from 11 am to 1 pm during accommodated dates. Participants were equipped with foundational knowledge of Java like Operators, Conditional statements, Loops, Classes, Objects & Access specifiers, Inheritance, Encapsulation, Polymorphism and Abstraction. Moreover, they gained exposure to various algorithms and problem-solving techniques. Hands-on problem-solving sessions and implementation exercises, live peer to peer guidance provided practical experience essential for technical interviews and coding challenges. The Unlock Java organized by Java Brewers garnered an exceptional response, underscoring the significance of such initiatives in enhancing participants\' coding skills, getting acquainted with Java environment and preparing them for career advancement in the tech industry. The seamless coordination, insightful sessions, and interactive learning activities showcased exemplary teamwork and dedication towards nurturing thriving community of competitive coders. This event exemplifies Java Brewers\'s commitment to empowering students through quality education and practical skill development, setting a precedent for future endeavours aimed at fostering excellence in programming and beyond.',
        date: '7th, 8th and 9th October 2024',
        venue: 'MIT SOC',
        resourcePersons: ['Prof. Rahul More']
      },
      {
        text: 'Workshop - Python Odyssey',
        description: 'The Python Odyssey, by Synapse AI, was a coding bootcamp organized to introduce students to the fundamental concepts of programming in Python. The goal was to provide an enjoyable and inclusive learning experience and aimed at equipping students with little to no coding skill with a launchpad and help those with prior knowledge to solidify their core concepts. The first day of the Python Odyssey Bootcamp was a dynamic mix of instruction, interaction, and fun activities, setting a positive tone for the days to come. Participants first signed in and mingled, fostering a sense of community. There was an overwhelming amount of participation from students so we had to send back some due to restrictions of space allotted. An overview of Synapse AI Club\'s mission and objectives and brief outline of the bootcamp structure was explained by Instructor: Jeet Mhatre (Tech Team Lead) also swiftly introducing Python programming and guiding to install Python and IDE setup. The event drew to a close with a prize distribution ceremony that celebrated the outstanding performance of top participants, who demonstrated their proficient problem-solving skills and engaged in all the activities throughout the event.The top 10 participants were appreciated as well and were given goodies and merchandise. The event concluded with a closing address, highlighting the success of Python Odyssey and the enthusiasm of the participants. The Python Odyssey exceeded expectations, achieving its objective of making Python accessible to beginners while also reinforcing the basics for experienced coders. Participants found the interactive approach, consisting of real life analogies, fun activities and engaging games, highly effective in breaking down complex concepts into easily digestible parts. They particularly loved our instructors, whose energy, clarity in explanations, and ability to communicate with the audience made learning enjoyable unlike traditional lecture formats. To celebrate the efforts of all participants, everyone received goodies and club merchandise, making the bootcamp a rewarding experience beyond just learning. All in all, the bootcamp not only met its educational objectives but also fostered a lively, collaborative environment. It sparked interest in further learning and left participants with a sense of achievement, enthusiasm and confidence for coding in Python.',
        date: '7th, 8th and 9th October 2024',
        venue: 'MIT SOC',
        resourcePersons: ['Prof. Shahin Makhubhai']
      },
      {
        text: 'Dil Chahta Hai',
        description: 'Apla Ghar, an NGO managed by the Vaibhav Phalnikar Memorial Foundation. Established in 2001 by Shri Vijay Phalnikar and Mrs. Sadhana Phalnikar in memory of their late son Vaibhav, the foundation has grown from offering free ambulance services for economically weaker sections to managing several impactful projects. These include orphanages, old age homes, vocational training for underprivileged students, a rural hospital, and a mobile medical van that serves 16 villages. Notably, all of this is done without government grants, sustained solely by the generosity of donors and corporate support. Currently, Apla Ghar at Donje is home to 35 children and 10 senior women, who lack exposure to essential skills such as computer literacy due to their remote backgrounds. At 11:30 AM, we boarded the bus for APLA GHAR. The ride was filled with laughter, lively conversations, and introductions for our new ACES members. It was the perfect opportunity to bond, turning this trip into a shared experience filled with anticipation and excitement for the day ahead. We spent the afternoon playing games like passing the ball and lagori, filling the space with laughter and smiles. The connection we built with the children through these simple joys was perhaps the most memorable part of our day. We could feel a sense of companionship, bridging us across generations and backgrounds. The donation drive was a heartwarming success, showcasing our college community\'s compassion. We received a generous response of clothing, stationery, bags, and treats from students, staff, and faculty. Special thanks to Aditi, Aditya, and ACES for their contributions of snacks and staples.Our visit to APLA GHAR was memorable, as we connected with children and the elderly as well as this drive fostered unity on campus and inspired us to continue making a difference, strengthening our bonds and laying the groundwork for future initiatives. We are grateful for the opportunity to uplift those around us.',
        date: '24th October 2024',
        venue: 'Apla Ghar NGO',
        resourcePersons: ['Prof. Tanuja Zende']
      },
      {
        text: 'Reality Shift',
        description: 'The "Reality Shift" workshop, organized by Mirage Club, was a two-day event aimed at introducing college students to the basics of Virtual Reality (VR) and 3D environment creation. the workshop aimed to give participants the chance to learn about VR technology and how it\'s used to build virtual worlds. The event began with a warm welcome,an introduction to the workshop\'s objectives, and an overview of the schedule. Participants were introduced to Virtual Reality (VR) and its ability to create immersive digital environments, along with the distinction between VR and Augmented Reality (AR). This foundation prepared them for the hands on Unity development sessions that followed. Participants were then guided through the process of installing Unity, a key platform for VR development. Following the installation, the focus shifted to practical application, with a demonstration on adding various assets, 3D objects, and particle effects to create scenes. After an eventful first day of Reality Shift, the Mirage team kicked off day two with a quick but impactful recap of the previous day\'s activities. Seeing participants reflect on their learning assured the team they were ready to move forward. The "Reality Shift" workshop equipped participants with essential VR concepts, hands-on Unity skills, and advanced tools like XR Plug-In Management for integrating Oculus and MetaQuest features. They developed creative and technical abilities by designing immersive virtual environments with interactive assets, textures, and audio integration. Icebreaker sessions and group activities fostered networking and teamwork, while the prize distribution and VR immersion experiences motivated them to push creative boundaries. Positive feedback and discussions inspired participants to envision future projects, making the workshop a successful and memorable introduction to the world of Virtual Reality.',
        date: '14th October 2024',
        venue: 'MIT SOC',
        resourcePersons: [
          'Prof. Tanuja Zende',
          'Prof. Rajkumar Patil'
        ]
      }
    ]
  }
],
    'Nov': [
  {
    id: 17,
    month: 'November',
    image: november2425,
    title: 'Civic Engagement and Social Awareness Programs',
    details: [
      {
        text: 'Spectra 8.0',
        description: 'MIT ADT University hosted the eighth edition of SPECTRA, a magnificent showcase of talent, creativity, and innovation. The event brought together students from various disciplines to participate in diverse competitions, workshops, and cultural performances. SPECTRA 8.0 featured advanced technical demonstrations, cutting-edge technology showcases, and innovative student projects that pushed the boundaries of creativity and technical excellence. The event served as a platform for students to display their skills in programming, design, engineering, and arts, fostering a spirit of healthy competition and collaborative learning. Participants engaged in various categories including robotics competitions, coding challenges, design thinking workshops, and cultural performances. The event concluded with an awards ceremony recognizing outstanding achievements and innovative solutions presented by the participating students.',
        date: 'November 2024',
        venue: 'MIT ADT University',
        resourcePersons: ['Prof. Dr. Suraj Bhoyar']
      },
      {
        text: 'Debate Competition',
        description: 'The Electoral Literacy Club, in collaboration with the Office of Student Affairs and the Impact Student Council, organized an engaging debate on "Voting and Election Campaigns: A Citizen\'s Responsibility" on 11th November 2024 at the ISBJ Seminar Hall. The event aimed to create awareness about the importance of voting and responsible election campaigning, urging attendees to actively participate in the democratic process. The seminar hall was abuzz with energy as students, faculty, and staff gathered for the discussion. The debate began with an introductory speech by the Electoral Literacy Club\'s faculty coordinator, emphasizing the pivotal role of youth in strengthening democracy. The resource panel, including experts on political science and electoral practices, provided insightful perspectives on the theme, setting the stage for a thought-provoking discussion. Participants, divided into teams, presented diverse viewpoints on the critical aspects of voting and election campaigns. Topics ranged from the necessity of ethical campaigning and combating voter apathy to the role of social media in shaping public opinion. The debate witnessed an array of compelling arguments supported by data, anecdotes, and real-life examples, reflecting the participants\' thorough research and deep understanding of the subject. The audience actively engaged, posing questions to the speakers and sharing their own opinions. The interactive nature of the event helped foster a better understanding of the challenges and responsibilities associated with voting. Notable highlights included discussions on the influence of misinformation during campaigns and innovative solutions to increase voter turnout among urban and rural populations alike. The event concluded with an open forum where faculty members and panelists urged students to recognize the value of their vote in shaping the nation\'s future. They stressed the importance of unbiased decision-making and the need for individuals to evaluate candidates based on their merits rather than external influences.',
        date: '11th November 2024',
        venue: 'ISBJ Seminar Hall',
        resourcePersons: [
          'Prof. Dr. Suraj Bhoyar',
          'Prof. Dr. Ashok Ghuge',
          'Prof. Dilkirat Sarna'
        ]
      },
      {
        text: 'Voting Awareness Drive',
        description: 'The NSS Cell of MIT ADT University organized an impactful awareness drive at Pune Station on 18th November 2024 to promote the importance of voting. This initiative aimed to encourage citizens to exercise their voting rights and spread awareness about the significance of every individual\'s vote in shaping the nation\'s future. The drive commenced with enthusiastic participation from the students of MIT ADT University, who were deeply committed to the cause. Carrying vibrant banners adorned with impactful quotes such as "Your Vote, Your Voice" and "A Nation\'s Strength Lies in the Hands of its Voters," the students walked around the bustling station to capture the attention of commuters and locals. The banners served as visual reminders of the power and responsibility associated with voting, sparking curiosity and conversations among passersby. A key highlight of the awareness drive was the interactive approach adopted by the NSS volunteers. Some students engaged directly with pedestrians and local residents through short interviews, posing thought-provoking questions such as, "Why do you think voting is important?" and "How can voting shape our future?" These interactions revealed diverse perspectives, with many individuals expressing a renewed sense of responsibility towards participating in the democratic process. The candid interviews not only deepened the discussion on voting but also inspired a sense of accountability among those who were initially indifferent. The awareness drive successfully emphasized that voting is not just a right but a duty that empowers citizens to contribute to the democratic process. It underscored the idea that every vote counts and has the potential to influence governance and policy decisions. In conclusion, the NSS Cell of MIT ADT University set a remarkable example through this awareness drive. By blending creativity with interaction, they effectively conveyed the importance of voting and inspired individuals to make informed and responsible decisions as voters. The initiative was a resounding success, leaving a lasting impression on the people of Pune Station.',
        date: '18/11/2024',
        venue: 'Pune Station',
        resourcePersons: [
          'Prof. Dr. Suraj Bhoyar',
          'Prof. Vishal Patil'
        ]
      },
      {
        text: 'Election Day Awareness Campaign',
        description: 'On 20th November 2024, in an effort to engage the community in the democratic process, the Office of Student Affairs, guided by Prof. Dr. Suraj Bhoyar, in collaboration with the Impact Student Council, organized an election awareness initiative. The team visited a local polling station to interview citizens and gather insights about their views on the election process and voting system. This initiative aimed to raise awareness and motivate people to actively participate in the upcoming elections. The team conducted a series of interviews with various citizens, from first-time voters to experienced members of the community, gaining valuable perspectives on the importance of voting and the election system. The citizens expressed their views on the accessibility of the voting process, the ease of understanding candidates, and the role of education in making informed voting decisions. Most respondents emphasized the need for greater transparency and the importance of casting a vote as a civic duty, encouraging others to be part of the democratic process. One of the most significant interviews was with the local Sarpanch and Upa Sarpanch. Both leaders highlighted the vital role of elections in shaping local governance and improving the overall quality of life in the community. The Sarpanch spoke passionately about how local elections directly impact infrastructure development, public services, and education, while the Upa Sarpanch stressed the importance of voter participation in strengthening democracy. They also discussed the various challenges faced in encouraging citizens, especially younger voters, to take part in the elections. In addition to the interviews, the team also used the opportunity to educate the public on the election process, providing information on how to register to vote, the importance of voter IDs, and how the election system works. They encouraged citizens to make their voices heard by voting and underscored that every vote matters in shaping the future of the nation.',
        date: '20th November',
        venue: 'Loni Kalbhor',
        resourcePersons: ['Prof. Dr. Suraj Bhoyar']
      },
      {
        text: 'Vishwanath Sports Meet Discussion',
        description: 'On 26th November 2024, a significant planning meeting was convened at MIT ADT University in preparation for the 7th State-Level Vishwanath Sports Meet. The meeting was graced by distinguished dignitaries, including Registrar of MIT ADT University Dr. Mahesh Chopade, Prof. Dr. Atul Patil, Director of the School of Holistic Development, Director Office of Student Affairs Prof. Dr. Suraj Bhoyar and Mr. Padmakar Phad, Director of Sports. The session focused on ensuring the successful execution of the upcoming sports meet, a prestigious event that highlights the university\'s commitment to promoting sportsmanship and physical excellence. The attendees engaged in detailed discussions about the logistical arrangements, event schedule, athlete participation, and coordination among various departments. Special emphasis was placed on fostering inclusivity, fair play, and the spirit of healthy competition throughout the event. Prof. Dr. Suraj Bhoyar provided insights into the importance of such events in developing students\' overall personality, emphasizing teamwork, discipline, and resilience. Registrar Dr. Mahesh Chopade discussed administrative support and highlighted the significance of seamless collaboration to achieve the event\'s objectives. Mr. Padmakar Phad shared valuable suggestions on sports activities and outlined the necessary preparations for facilitating a smooth experience for participants and spectators. Prof. Dr. Atul Patil emphasized the holistic development aspect of the meet, urging all involved to focus on creating a memorable and impactful event. The meeting concluded with a collective commitment to upholding the legacy of the Vishwanath Sports Meet and ensuring it remains a platform for showcasing talent and fostering camaraderie. Detailed action plans and timelines were established to guarantee the event\'s success. MIT ADT University eagerly anticipates hosting another remarkable edition of this state-level sporting extravaganza.',
        date: '26/11/2024',
        venue: 'MANET Auditorium',
        resourcePersons: [
          'Dr. Mahesh Chopade',
          'Prof. Padmakar Phad',
          'Prof. Dr. Suraj Bhoyar',
          'Dr. Atul Patil'
        ]
      },
      {
        text: 'Nasha Mukt Abhiyan',
        description: 'On 28th November 2024, the Electoral Literacy Club, in association with the Office of Student Affairs and Impact Student Council, successfully organized the Nasha Mukt Abhiyaan (Drug-Free Campaign) at MIT ADT University. The event aimed to educate the youth about the devastating effects of substance abuse while promoting a healthier, drug-free lifestyle. The campaign began sharply at 8:00 AM from the Main Gate of the university, with enthusiastic participation from students, faculty, and staff. Participants carried vibrant banners and placards with impactful slogans such as "Say No to Drugs, Say Yes to Life." The rally moved across the campus, engaging the university community in meaningful discussions about the importance of maintaining a drug-free environment. Prof. Dr. Suraj Bhoyar, Director of Student Affairs, inspired the participants with his words, emphasizing the crucial role of youth in shaping a society free from addiction. He highlighted that such initiatives not only create awareness but also encourage individuals to support those battling substance abuse. The event featured engaging performances, including street plays and skits by students, which creatively depicted the challenges of addiction and the journey to recovery. Informative brochures were distributed, detailing resources and support systems for those in need. Youths were motivated to spread awareness as much as possible and students from the university participated along with the council members. Nasha Mukt Abhiyaan reflected MIT ADT University\'s unwavering commitment to student welfare and societal well-being. It empowered attendees to take responsibility for fostering a supportive, healthy environment on campus and beyond. The overwhelming participation and positive feedback underscored the success of the initiative, leaving a lasting impression and encouraging continued efforts toward a drug-free future.',
        date: '28/11/2024',
        venue: 'MIT ADT University',
        resourcePersons: ['Prof. Dr. Suraj Bhoyar']
      },
      {
        text: 'Blood Donation Campaign',
        description: 'MIT ADT University organized a remarkable Blood Donation Drive, reflecting its commitment to social responsibility and fostering a culture of compassion and humanity among its students and staff. The initiative was held under the visionary leadership of Prof. Dr. Mangesh Karad, Executive President and Vice-Chancellor, and spearheaded by Prof. Dr. Suraj Bhoyar, Director of Student Affairs. It was conducted in collaboration with the Armed Forces Medical College (AFMC) and actively supported by the National Cadet Corps (NCC) and National Service Scheme (NSS). The drive commenced with a ceremonial start as participants gathered in large numbers, demonstrating their dedication to this noble cause. Over 100 donors enthusiastically participated, making a vital contribution to the life-saving initiative. Medical experts from AFMC ensured a safe and efficient donation process, adhering to all health and safety protocols. The entire event was meticulously organized, ensuring a seamless experience for donors. Prof. Dr. Suraj Bhoyar emphasized the significance of such initiatives, stating, "Blood donation is a simple yet profound act of kindness. It reflects the spirit of humanity and the importance of collective action. Special acknowledgement was given to Shri Jayshree Modi Talesra for her invaluable support in making the event a success. The Blood Donation Drive not only underscored the importance of social responsibility but also inspired participants to continue contributing to humanitarian causes. MIT ADT University continues to lead by example, showcasing the power of partnerships and the collective strength of its community. Initiatives like these inspire individuals to take responsibility for the welfare of others and build a healthier society. The Blood Donation Drive stands as a testament to the university\'s mission of creating socially conscious leaders who are committed to making a positive impact on the world.',
        date: '28/11/2024',
        venue: 'IT Building',
        resourcePersons: [
          'Prof. Dr. Suraj Bhoyar',
          'Dr. Vipul Dala',
          'Dr. Dilkirat Sarna',
          'Dr. Atul Patil'
        ]
      }
    ]
  }
],
'Dec': [
  {
    id: 18,
    month: 'December',
    image: december2425,
    title: 'Cultural Festivals and Fitness Campaigns',
    details: [  
      {
        text: 'Preparatory Meeting for 38th West Zone Youth Festival',
        description: 'A preparatory meeting for the 38th West Zone Youth Festival was conducted under the guidance of Prof. Dr. Suraj Bhoyar, Director of Student Affairs at MIT ADT University. The meeting was held to ensure a well-coordinated and confident representation by the university at the prestigious event. Participants from various categories, along with their mentors, attended the session with enthusiasm and a shared vision of excellence. The meeting was graced by the presence of mentor professors, Prof. Reshma Gosavi and Prof. Yogesh Bhadke, who have been instrumental in preparing the participants for the festival. Prof. Dr. Bhoyar addressed the gathering with an inspiring note, emphasizing the importance of cultural and artistic representation in shaping the identity of the institution. He provided detailed guidance for each category, including dance, music, theater, fine arts, and literary events. Key aspects such as performance enhancement, stage presence, and time management were discussed. The students were encouraged to refine their skills and bring out the best in their performances, ensuring a strong and memorable presentation at the festival. The interactive session allowed participants to share their thoughts and provide additional feedback to further improve their preparation. Students highlighted challenges and sought suggestions from their mentors, fostering a collaborative environment. Prof. Reshma Gosavi and Prof. Yogesh Bhadke also shared valuable inputs, further boosting the confidence of the participants. The meeting concluded with a sense of unity and determination among all present. Prof. Dr. Bhoyar expressed his confidence in the students\' abilities and wished them success in representing the university at the 38th West Zone Youth Festival.',
        date: '12/12/2024',
        venue: 'ISBJ Seminar Hall',
        resourcePersons: [
          'Prof. Dr. Suraj Bhoyar',
          'Prof. Reshma Gosavi',
          'Prof. Yogesh Bhadke'
        ]
      },
      {
        text: 'FIT India Cycling Campaign',
        description: 'MIT-ADT University, Loni Kalbhor, successfully hosted the second phase of the FIT India Cycling Campaign, promoting health, sustainability, and community engagement. This initiative united cycling enthusiasts, fitness advocates, and environmental supporters in an inspiring event. The campaign commenced at the world-renowned Philosopher Saint Shri Dnyaneshwara World Peace Prayer Hall, the largest dome in the world. Participants covered cycling routes of 3, 5, and 10 kilometers, emphasizing the importance of fitness and eco-friendly lifestyles. The event\'s Chief Guest, Colonel Chandrashekhar Sathe (Retd.), and Honorable Guest, Shiv Chhatrapati Awardee Prof. Padmakar Phad, graced the occasion with their presence. Prof. Dr. Suraj Bhoyar inaugurated the program with a warm welcome speech, while Prof. Dr. Atul Patil led the participants in taking an oath to adopt fitness and sustainability. Their motivational words inspired the audience to embrace daily fitness routines. The campaign was organized in collaboration with MIT-IMPACT Student Council, the Office of Student Affairs, SAI RC Mumbai, and the Loni Kalbhor Police Station. Aligning with Prime Minister Narendra Modi\'s vision of "Fitness Ki Dose, Aadha Ghanta Roz," the initiative highlighted the dual importance of fitness and environmental responsibility. By promoting cycling as a healthy lifestyle choice and a pollution-free transportation option, the event underscored the significance of reducing carbon footprints. Students, faculty members, and local community members actively participated, fostering unity and a shared commitment to health and sustainability. The FIT India Cycling Campaign successfully conveyed a powerful message of health, environmental consciousness, and sustainable living, urging everyone to join this journey toward fitness and ecological responsibility.',
        date: '22/12/24',
        venue: 'MIT ADT Sports Complex',
        resourcePersons: [
          'Prof. Dr. Suraj Bhoyar',
          'Colonel Chandrashekhar Sathe (Retd.)',
          'Prof. Padmakar Phad',
          'Prof. Dr. Atul Patil'
        ]
      },
      {
        text: 'Fit India Cycling Initiative',
        description: 'MIT ADT University actively participated in the nationwide launch of the Fit India Cycling Tuesdays Campaign on 17th December 2024, aimed at promoting fitness and environmental sustainability. The event witnessed enthusiastic participation from 50 cyclists, who collectively covered a 3-kilometer stretch across iconic and historically significant locations, symbolizing a commitment to a healthier and greener future. The event was inaugurated by prominent dignitaries, including Prof. Dr. Mangesh Karad, Executive President and Vice Chancellor of MIT ADT University, Prof. Dr. Suraj Bhoyar, Director of Student Affairs, and Prof. Padmakar Phad, Director of Sports. Their inspiring addresses emphasized the dual benefits of cycling as a fitness activity and an environmentally sustainable practice. This initiative aligns with the Hon\'ble Prime Minister Narendra Modi\'s vision of "Fitness ki dose, aadha ghanta roz," encouraging citizens to make exercise an integral part of their daily routines. Cycling, as an eco-friendly activity, not only promotes physical fitness but also contributes to reducing pollution and carbon footprints. Participants used the Fit India Mobile App to track their cycling progress, fostering a sense of accountability and engagement. The campaign also served as a platform to raise awareness about the importance of sustainable transportation and its positive impact on the environment. The event\'s success marks the beginning of a series of cycling activities under this campaign. The next Cycling Tuesdays event is scheduled for 22nd December 2024, with 100 participants expected to cycle 3 kilometers, amplifying the message of fitness and sustainability. MIT ADT University remains committed to fostering a culture of health, fitness, and eco-consciousness, inspiring students and the community to contribute towards a healthier and more sustainable tomorrow.',
        date: '17/12/24',
        venue: 'MIT ADT Sports Complex',
        resourcePersons: [
          'Prof. Dr. Suraj Bhoyar',
          'Prof. Dr. Mangesh Karad',
          'Prof. Padmakar Phad'
        ]
      }
    ]
  }
],
    'Jan': [
      {
        id: 19,
        month: 'January',
        image: january2425,
        title: 'New Year Programs and Youth Celebrations',
        details: [
          {
            text: 'National Youth Celebration',
            description: 'MIT-ADT University hosted National Youth Day 2025 with great enthusiasm, celebrating the energy and potential of youth in building India\'s future. The day commenced with a Cycle Rally aimed at spreading awareness about the dangers of drug abuse. Students cycled together, promoting healthy living and the significance of a drug-free lifestyle. The event was inaugurated by Dr. Suraj Bhoyar, who extended a warm welcome to all attendees, including awardees and students. The celebrations featured captivating performances of patriotic songs and classical dances by students, creating an atmosphere of pride and unity. Anoushka Joshi, a student leader, delivered an inspiring speech emphasizing the role of youth in shaping a progressive India. She encouraged her peers to take responsibility and contribute actively toward societal development. One of the event\'s highlights was the felicitation of Sports Directors and Coaches from across western India, honoring their dedication to nurturing young athletes. Additionally, Innovation Evangelists from mentee institutions under the Mentor-Mentee Scheme of MIC, Ministry of Education & AICTE, were recognized for their efforts in fostering innovation with the support of MIT-ADT University. Special recognition was awarded to the Young Trailblazers of MIT-ADT University, who excelled in leadership, innovation, and cultural and sports activities. Shri Sujit Kalbhor, a renowned Ranji player, delivered a Special Address, sharing his journey of perseverance and inspiring students to pursue their dreams with determination. Dignitaries including Dr. Mahesh Chopade, Dr. Hanumant Pawar, and Prof. Padmakar Phad also graced the event and highlighted the institution\'s commitment to shaping leaders who drive transformation. National Youth Day 2025 at MIT-ADT University showcased the immense potential of youth as leaders and changemakers, inspiring them to build a brighter future for India.',
            date: '12/01/25',
            venue: 'RK Auditorium',
            resourcePersons: [
              'Dr. Mahesh Chopade',
              'Prof. Dr. Suraj Bhoyar',
              'Dr. Hanumant Pawar',
              'Prof. Padmakar Phad'
            ]
          },
          {
            text: 'Cycle Rally',
            description: 'On the occasion of National Youth Day, a vibrant Cycle Rally was organized on 12th January to commemorate the ideals of Swami Vivekananda and inspire the youth toward nation-building. The event was inaugurated by Prof. Dr. Suraj Bhoyar, Director of the Office of Student Affairs, along with Dr. Mahesh Chopade, Registrar, and Dr. Hanumant Pawar, CEO of PERA. The rally commenced with a ceremonial flag-off by the dignitaries, who emphasized the pivotal role of youth in shaping a Viksit Bharat (Developed India). The cycle rally aimed to foster the principles of unity, environmental consciousness, and active participation in the mission of a green and clean India. Covering a scenic route of 10 kilometers, the rally witnessed enthusiastic participation from students, faculty, and staff. Riders carried banners and placards highlighting the themes of sustainable living, cleanliness, and national development, creating a powerful visual impact. Prof. Dr. Suraj Bhoyar, in his address, encouraged the participants to embrace Swami Vivekananda\'s vision of self-discipline and dedication toward the upliftment of society. Dr. Mahesh Chopade lauded the efforts of the youth in promoting environmental awareness, while Dr. Hanumant Pawar highlighted the importance of active involvement in initiatives that contribute to a progressive nation. The rally concluded with a motivational gathering where participants shared their experiences and pledged to contribute to the Green India Campaign and the Viksit Bharat Mission. This impactful event successfully instilled the spirit of patriotism, environmental stewardship, and collective responsibility among the youth, aligning with the true essence of National Youth Day.',
            date: '12/01/25',
            venue: 'MIT ADT UNIVERSITY Campus',
            resourcePersons: [
              'Dr. Mahesh Chopade',
              'Prof. Dr. Suraj Bhoyar',
              'Dr. Hanumant Pawar'
            ]
          },
          {
            text: 'Interactive Session with Hostel and Mess Representatives',
            description: 'On 13th January 2025, a significant interaction session was held at the APJ Seminar Hall, organized by the Office of Student Affairs. The session, led by Prof. Dr. Suraj Bhoyar, Director of Student Affairs, aimed to address the concerns of hostel and mess representatives, ensuring a better living experience for the students of MIT ADT University. The event began with Prof. Dr. Bhoyar emphasizing the importance of open communication between the administration and students. He highlighted the university\'s commitment to resolving issues promptly and fostering a harmonious campus environment. Representatives from the hostels and mess facilities actively participated, presenting their challenges and suggestions for improvement. Hostel representatives brought attention to issues such as maintenance, cleanliness, and irregularities in water and electricity supply. They also suggested the need for better recreational facilities in hostel premises. On the other hand, mess representatives voiced concerns regarding the quality, variety, and hygiene of the food served. They emphasized the necessity of accommodating diverse dietary preferences and maintaining consistent standards. Prof. Dr. Bhoyar attentively addressed these concerns, proposing actionable solutions during the session. He assured the students of immediate measures to tackle urgent issues while outlining plans for long-term improvements. The session also served as a platform for students to share constructive feedback and innovative ideas for enhancing campus life. The interaction concluded with Prof. Dr. Bhoyar expressing his gratitude to the representatives for their active participation and constructive input. He reiterated the administration\'s dedication to student welfare and encouraged ongoing collaboration to ensure a positive and enriching environment. The session was widely appreciated by the participants, marking a step forward in strengthening the bond between students and the university administration.',
            date: '13/01/25',
            venue: 'Dr.APJ Abdul Kalam Seminar Hall',
            resourcePersons: ['Prof. Dr. Suraj Bhoyar']
          },
          {
            text: '38th AIU Inter University Youth Festival',
            description: 'The 38th AIU (Association of Indian Universities) Inter-University Youth Festival was held at Ganpat University, Mehsana, Gujarat, from 4th to 8th January 2025. The event brought together talented students from universities across the country, showcasing their skills in a variety of cultural and artistic domains. A contingent of 45 students from MIT ADT University participated enthusiastically in the festival, competing across five diverse categories: dance, music, theatre, fine arts, and literary events. Their performances reflected the vibrant talent and innovative spirit of MIT ADT University, with each participant contributing to the university\'s proud representation at the prestigious platform. The festival provided an invaluable opportunity for students to interact with peers from diverse cultural and academic backgrounds, enhancing their exposure and broadening their horizons. The participants gained insights into the rich cultural diversity of India while sharpening their creative and artistic abilities. A standout achievement for MIT ADT University was the exceptional performance of Ms. Tanya Virmani, who won the first prize in the "On the Spot Painting" competition. Her artistic creativity and skill earned her the top position in this highly competitive event. Ms. Virmani\'s victory has also secured her selection for the national-level competition, which will be held in Noida later this year. This accomplishment serves as an inspiration for her peers and highlights the university\'s commitment to fostering excellence in the arts. The participation and success of the students at the festival underscore the university\'s dedication to holistic development and cultural enrichment. MIT ADT University continues to motivate and support its students in pursuing such prestigious opportunities, contributing to their personal growth and the university\'s legacy. The event concluded with a sense of pride and accomplishment, leaving students motivated to reach greater heights in their future endeavors.',
            date: '4th January- 8th January',
            venue: 'Ganpat University, Gujarat',
            resourcePersons: ['Prof. Dr. Suraj Bhoyar']
          },
          {
            text: 'Confluence 2025',
            description: 'The MIT ADTU Alumni Association hosted its eagerly anticipated Alumni Meet, Confluence 2025, on January 6, 2025. Held at the Bharat Ratna Dr. APJ Abdul Kalam Seminar Hall, the event reunited 50 alumni from various batches, fostering camaraderie and celebrating shared achievements. The gathering commenced with MIT traditions, including a prayer for world peace and Saraswati Poojan, followed by the ceremonial lamp lighting. Dr. Suraj Bhoyar, Head of the MAA Alumni Executive Body, warmly welcomed dignitaries and alumni. He highlighted the association\'s vision and future endeavors, emphasizing the importance of fostering strong connections. Distinguished speakers included: Prof. Dr. Sunita Karad, Dean of MITCOM, who commended alumni for their global contributions and reaffirmed the institution\'s pride in their accomplishments. Prof. Dr. Ramachandra Pujeri, Pro Vice Chancellor, who outlined strategic goals for active alumni engagement. Prof. Dr. Mohit Dube, Pro Vice Chancellor, who encouraged alumni to participate in Crieya, the university\'s research initiative. Dr. Harshit Desai, Director of MIT Institute of Design Innovation, who applauded the alumni\'s achievements. Dr. Sanket Bapat, MAA Member Secretary, who presented a detailed account of the association\'s milestones. The event featured a felicitation ceremony for distinguished alumni and nostalgic storytelling by attendees, recounting their journeys post-MIT ADT. The gathering concluded with the distribution of memorable souvenirs, symbolizing the unbreakable bond between the alumni and their alma mater. Confluence 2025 was a celebration of the enduring spirit of MIT ADT University, inspiring all attendees to continue the legacy of excellence and innovation.',
            date: '06/01/25',
            venue: 'Dr.APJ Abdul Kalam Seminar Hall',
            resourcePersons: [
              'Prof. Dr Sunita Karad',
              'Prof. Dr. Ramchandra Pujeri',
              'Prof. Dr. Mohit Dube',
              'Dr. Harshit Desai',
              'Prof. Sanket Bapat',
              'Prof. Dr. Suraj Bhoyar'
            ]
          }
        ]
      }
    ],
    'Feb': [
  {
    id: 20,
    month: 'Febuary',
    image: february2425,
    title: 'Cultural Heritage and Leadership Events',
    details: [
      {
        text: 'Hindavi Swarajya Killa Spardha',
        description: 'MIT-ADT University, Loni Kalbhor, Pune, witnessed an extraordinary celebration of history, creativity, and teamwork with the Hindavi Swarajya Killa Spardha 2025, held from 13th to 17th February 2025. This unique competition, organized as a tribute to the great Maratha warrior Chhatrapati Shivaji Maharaj, brought together students and fort-building enthusiasts to recreate the iconic forts of the Hindavi Swarajya. The event took place at the IT Building Entrance of the university, transforming the space into a historical arena filled with intricate replicas of Shivaji Maharaj\'s legendary forts. With a team size limit of 10 members, the competition attracted numerous participants from various schools and colleges. Each team was provided with soil and stones as the primary materials, while they were encouraged to use additional resources to bring their creative ideas to life. The central theme of the competition was to replicate any fort associated with Chhatrapati Shivaji Maharaj, celebrating the architectural brilliance and historical significance of the Maratha Empire. Participants showcased their creativity, dedication, and teamwork as they meticulously crafted replicas of iconic forts such as Raigad, Pratapgad, Sinhagad, and Rajgad, among others. The atmosphere was electric with the spirit of Swarajya, as teams worked passionately to bring history to life. The event was not just about fort-building but also about embracing the cultural heritage and leadership values of Shivaji Maharaj. Participants were seen discussing historical facts, sharing insights, and collaborating seamlessly to complete their forts within the stipulated time. The competition concluded with an exciting prize distribution ceremony, where the winners were awarded for their outstanding efforts. The 1st prize of ₹25,000 was bagged by a Team Sthapatis that flawlessly recreated the Raigad Fort, known as the capital of Shivaji Maharaj\'s empire. The 2nd prize of ₹10,000 went to the Team Bhavani Sena presenting the Sindhudurg Fort, while the 3rd prize of ₹5,000 was awarded to Team Shivneri for an impressive replica of the Shivneri Fort. The event not only highlighted architectural creativity but also instilled a sense of pride and admiration for Shivaji Maharaj\'s legacy among the participants and spectators. It was a beautiful blend of history, art, and passion, reminding everyone of the strength, resilience, and vision that the forts of Hindavi Swarajya symbolize. With the echoes of "Jai Bhavani! Jai Shivaji!" resonating through the air, the Hindavi Swarajya Killa Spardha 2025 stood as a remarkable celebration of Maratha pride, youth creativity, and historical reverence.',
        date: '13/02/2025',
        venue: 'IT Building Entrance',
        resourcePersons: ['Prof. Dr. Suraj Bhoyar']
      },
      {
        text: 'Shiv Jayanti Celebration',
        description: 'MIT Art, Design, and Technology University celebrated the birth anniversary of the great Maratha warrior, Chhatrapati Shivaji Maharaj, with unparalleled enthusiasm and cultural vibrancy on Wednesday, 19th February 2025. Organized by the MIT Impact Student Council, the event paid tribute to the legendary king\'s legacy through a series of captivating performances and traditional rituals. The celebration began with students gathering at the Shri Hanuman Ji Statue, dressed in traditional Maharashtrian attire. A spirited cultural procession, accompanied by the rhythmic beats of Dhol Tasha, moved towards the Chhatrapati Shivaji Maharaj Statue, setting an energetic tone for the day. The atmosphere was filled with enthusiasm as the vibrant colors of traditional outfits and the sound of traditional instruments echoed across the campus. The formal ceremony commenced with the arrival of honorable dignitaries, followed by the flag hoisting. Ms. Anoushka Joshi from the MIT Impact Student Council delivered an inspiring speech, emphasizing Shivaji Maharaj\'s visionary leadership, resilience, and inclusive governance. She highlighted how his values remain relevant in contemporary society, inspiring students to lead with integrity and courage. Hon\'ble Vice Chancellor Prof. Dr. Rajesh S. extended a warm welcome, while Hon\'ble Executive President Prof. Dr. Mangesh Karad delivered the presidential address. Both leaders underscored the importance of adopting Shivaji Maharaj\'s principles, such as strategic foresight, compassion, and unwavering dedication, as guiding values in modern life. The highlight of the event was the Shiv Janmotsav, a vibrant cultural showcase by the MITADTU student community. The fearless spirit of the Marathas came alive with the Mardani Khel performance by Team Mission Sahasi. Team Leap of Grace mesmerized the audience with an elegant folk dance, while Hip Hop Kanya delivered a powerful tribute performance. The soul-stirring Powada, performed by Team Panchayati from the Drama Club, glorified Shivaji Maharaj\'s life and achievements through traditional Marathi balladry. Following the cultural extravaganza, a grand Palkhi Procession led participants to the Shri Chhatrapati Shivaji Maharaj Statue, where the poojan and aarti were performed with deep reverence. The event concluded with a heartfelt vote of thanks by Mr. Vaibhav Kalaskar, followed by the national anthem, prasadam distribution, and group photos. Shiv Jayanti 2025 at MIT-ADT University truly embodied the undying spirit of Chhatrapati Shivaji Maharaj, leaving everyone with a profound sense of pride and cultural connection.',
        date: '19/02/25',
        venue: 'MANET Building',
        resourcePersons: [
          'Prof. Dr. Mangesh Karad',
          'Prof. Dr. Sunita Karad',
          'Dr. Rajesh S',
          'Prof. Dr. Atul Patil',
          'Prof. Dr. Suraj Bhoyar'
        ]
      }
    ]
  }
],
'Mar': [
  {
    id: 21,
    month: 'March',
    image: march2425,
    title: 'Festival Planning and Strategic Meetings',
    details: [
      {
        text: 'Preparatory Meeting for Persona 2025',
        description: 'A crucial preparatory meeting for Persona 2025, the much-anticipated fest of MIT ADT University, was held on 3rd March 2025 at the Office of Student Affairs. The meeting, conducted under the leadership of Prof. Dr. Suraj Bhoyar, Director of the Office of Student Affairs, served as the official kick-off to the fest\'s planning and execution. The discussion revolved around structuring the event, defining key responsibilities, and ensuring seamless coordination among the organizing teams. The meeting began with an insightful address by Prof. Dr. Suraj Bhoyar, who highlighted the significance of meticulous planning and teamwork in executing a successful fest. He emphasized the need for a well-structured approach, clear timelines, and innovative ideas to make Persona 2025 a grand success. His words motivated the student organizers, setting the tone for a productive session. One of the key highlights of the meeting was the distribution of roles among students, ensuring that every aspect of the fest was handled with precision. Various committees, including Cultural, Technical, Logistics, Hospitality, Media, and Marketing, were formed, with dedicated student leads taking charge of their respective domains. The Cultural Committee was entrusted with curating performances and competitions, while the Technical Committee focused on stage setups, lighting, and sound management. The Logistics Team took charge of venue management and on-ground execution, ensuring smooth operations. The Hospitality Team was assigned the responsibility of guest relations, ensuring a warm and welcoming experience for visitors and dignitaries. Meanwhile, the Media and Marketing Team strategized promotional campaigns to enhance the outreach and visibility of Persona 2025. A brief yet comprehensive three-day fest plan was also discussed during the meeting, outlining the key events and activities scheduled for each day. The first day was proposed to focus on the grand inauguration ceremony, featuring performances and speeches by esteemed dignitaries. The second day was planned to be dedicated to competitions, cultural performances, and technical events, creating an engaging platform for students to showcase their talents. The third and final day was envisioned as a celebratory conclusion, featuring high-energy performances, award ceremonies, and a memorable closing event. This structured planning ensured that each day of Persona 2025 offered a unique and immersive experience. The session also focused on outlining a structured execution strategy, with deadlines set for various tasks to ensure timely completion. Plans for sponsorships, budgeting, and resource allocation were also discussed, reinforcing the importance of financial planning in large-scale event management. Students actively participated in brainstorming ideas, sharing innovative approaches to enhance engagement and make the fest more immersive. Throughout the meeting, Prof. Dr. Suraj Bhoyar provided valuable insights, encouraging students to take ownership of their roles and execute their responsibilities with dedication. His guidance played a pivotal role in shaping the roadmap for Persona 2025, instilling confidence in the organizing teams. The meeting concluded on a highly energetic note, with students expressing their enthusiasm and commitment to making Persona 2025 a landmark event. With a well-defined three-day plan and a strategic execution roadmap, the organizing team is now fully equipped to bring the fest to life with creativity, passion, and excellence.',
        date: '03/03/2025',
        venue: 'Dr. APJ Abdul Kalam Seminar Hall',
        resourcePersons: ['Prof. Dr. Suraj Bhoyar']
      },
      {
        text: 'Persona Planning Meet',
        description: 'A strategic meeting was held on 4th March 2025 to initiate the planning of the highly anticipated Persona Fest at MIT ADT University. The meeting was chaired by the Honourable Chairman of the Persona Committee, Vice-Chancellor Prof. Dr. Rajesh S, in the presence of esteemed conveners, faculty coordinators, and members of the Impact Student Council. The discussion primarily revolved around outlining the structure of the event, forming committees, and delegating responsibilities to ensure seamless execution. The leadership panel guiding the planning process consisted of Prof. Dr. Suraj Bhoyar, Prof. Dr. Renu Vyas, Prof. Dr. Sudarshan Sarap, and Prof. Dr. Vipul Dalal. Their collective experience and expertise will play a pivotal role in ensuring that all aspects of the fest are managed efficiently. During the meeting, they emphasized the importance of meticulous planning, coordination, and innovation in making Persona Fest a grand success. A significant part of the discussion was dedicated to the formation of various committees, each entrusted with specific responsibilities crucial to the fest\'s smooth operation. Faculty coordinators, along with members of the Impact Student Council, were assigned different roles aligned with their skills and expertise. Committees were structured to handle event planning, sponsorship and budgeting, marketing and promotions, hospitality, logistics, and technical support. Each team was expected to work collaboratively and efficiently under the guidance of the conveners to bring forth a well-organized and engaging event. The Vice-Chancellor and the conveners reiterated the importance of teamwork and professionalism in executing the event successfully. They encouraged the students and faculty coordinators to bring forth innovative ideas that would enhance the overall experience of Persona Fest. The event is envisioned not only as a platform for showcasing talent but also as an opportunity for students to develop leadership, organizational, and collaborative skills. The meeting concluded on a positive note, with a well-structured action plan in place. With clear objectives and dedicated teams working towards its execution, Persona Fest 2025 promises to be a remarkable event that fosters creativity, engagement, and holistic development among students. The enthusiasm and commitment displayed by all members present reflected their collective vision to make this fest a memorable and enriching experience.',
        date: '04/03/2025',
        venue: 'MANET 4th Floor Auditorium',
        resourcePersons: ['Prof. Dr. Rajesh S']
      }
    ]
  }
]
  }
};

  // Get all months that have events in the current year
  const allMonthsInYear = Object.keys(timelineData[selectedYear] || {});
  
  // Get all events for the current year (all months)
  const allCurrentEvents = allMonthsInYear.reduce((acc, month) => {
    return acc.concat(timelineData[selectedYear][month] || []);
  }, []);

  const months = allMonthsInYear;

  // Function to handle event click
  const handleEventClick = (event, detail) => {
    setSelectedEvent({
      ...detail,
      month: event.month,
      title: detail.text
    });
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  // Function to navigate years
  const navigateYear = (direction) => {
    if (direction === 'prev' && currentYearIndex > 0) {
      const newYear = academicYears[currentYearIndex - 1];
      setSelectedYear(newYear);
      const availableMonths = Object.keys(timelineData[newYear] || {});
      if (availableMonths.length > 0) {
        setSelectedMonth(availableMonths[0]);
      }
    } else if (direction === 'next' && currentYearIndex < academicYears.length - 1) {
      const newYear = academicYears[currentYearIndex + 1];
      setSelectedYear(newYear);
      const availableMonths = Object.keys(timelineData[newYear] || {});
      if (availableMonths.length > 0) {
        setSelectedMonth(availableMonths[0]);
      }
    }
  };

  // Function to scroll to specific milestone
  const scrollToMilestone = (month) => {
    const events = timelineData[selectedYear]?.[month];
    if (events && events.length > 0) {
      const element = document.getElementById(`milestone-${events[0].id}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    document.querySelectorAll('.milestone-content').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [allCurrentEvents]);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Header Controls */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Past Events Timeline</h1>
        
        {/* Year Navigation */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button 
            onClick={() => navigateYear('prev')}
            disabled={currentYearIndex === 0}
            className={`p-3 rounded-full transition-colors ${
              currentYearIndex === 0 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-[#3C0A63] text-white hover:bg-[#3C0A63]'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <span className="text-lg font-semibold text-gray-700 px-4">
            Academic year: {selectedYear}
          </span>
          <button 
            onClick={() => navigateYear('next')}
            disabled={currentYearIndex === academicYears.length - 1}
            className={`p-3 rounded-full transition-colors ${
              currentYearIndex === academicYears.length - 1 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-[#3C0A63] text-white hover:bg-[#3C0A63]'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Month Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {months.map((month, index) => (
            <button
              key={index}
              onClick={() => scrollToMilestone(month)}
              className="px-6 py-3 rounded-full font-medium transition-all text-base bg-[#3C0A63] text-[#ffffff] hover:shadow-lg hover:bg-[#d494e0]"
            >
              {month}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Container */}
      <div className="max-w-6xl mx-auto px-8 pb-16 relative">
        {allCurrentEvents.map((milestone, index) => (
          <div key={milestone.id} id={`milestone-${milestone.id}`} className="mb-16 relative flex flex-col items-center">
            {/* Month Label */}
            <button
              onClick={() => scrollToMilestone(milestone.month)}
              className="text-center text-3xl font-bold mb-6 px-6 py-2 z-10 bg-white rounded-full cursor-pointer hover:shadow-lg transition-shadow"
              style={{
                background: 'linear-gradient(to right, #9b28b1, #ff6f3c, #ffb020)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
                marginTop: '32px'
              }}
            >
              {milestone.month}
            </button>
            
            {/* Timeline Segment */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#9b28b1] z-0"
              style={{
                height: 'calc(100% - 50px)',
                top: '130px'
              }}
            ></div>

            {/* Milestone Content */}
            <div 
              className={`milestone-content flex gap-8 items-center mx-8 opacity-0 w-full transition-all duration-700 ease-out ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
              style={{
                transform: index % 2 === 0 ? 'translateX(-100px)' : 'translateX(100px)'
              }}
            >
              {/* Image Container */}
              <div className="flex-shrink-0 relative">
                <div 
                  className="w-80 h-80 rounded-full overflow-hidden relative"
                  style={{
                    border: '12px solid #9b28b1',
                    aspectRatio: '1/1'
                  }}
                >
                  <div 
                    className="absolute -top-1.5 -left-1.5 -right-1.5 -bottom-1.5 border-12 border-white rounded-full pointer-events-none"
                    style={{
                      border: '12px solid white'
                    }}
                  ></div>
                  <img 
                    src={milestone.image} 
                    alt={`Milestone ${milestone.month}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Description Container */}
              <div className="flex-1 p-6 bg-blue-600 text-white rounded-lg shadow-lg" style={{background:"linear-gradient(220deg, #ff9100 0%, #9f008f 90%)"}}>
                <h3 className="text-xl font-bold mb-4">{milestone.title}</h3>
                <ul className="space-y-2">
                  {milestone.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-base">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0 mt-2"></div>
                      <button
                        onClick={() => handleEventClick(milestone, detail)}
                        className="text-white hover:text-blue-300 hover:underline cursor-pointer transition-colors leading-relaxed text-left"
                      >
                        {detail.text}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No events message */}
      {allCurrentEvents.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500 text-xl">No events found for {selectedYear}</p>
        </div>
      )}

      {/* Modal */}
      <EventModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        event={selectedEvent} 
      />

      <style jsx>{`
        .milestone-content.visible {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
        
        @media (max-width: 768px) {
          .milestone-content {
            flex-direction: column !important;
            gap: 1rem;
          }
          
          .milestone-content > div:first-child {
            width: 200px;
            height: 200px;
            min-width: 200px;
            min-height: 200px;
          }
          
          .milestone-content > div:first-child > div {
            width: 200px !important;
            height: 200px !important;
          }
        }

        @media (max-width: 480px) {
          .milestone-content > div:first-child {
            width: 180px;
            height: 180px;
            min-width: 180px;
            min-height: 180px;
          }
          
          .milestone-content > div:first-child > div {
            width: 180px !important;
            height: 180px !important;
          }
        }
      `}</style>
    </div>
  );
}