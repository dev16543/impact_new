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
  const academicYears = ['2022-23', '2023-24', '2024-25', '2025-26'];
  const currentYearIndex = academicYears.indexOf(selectedYear);

  // Sample milestone data - organized by academic year and month
  const timelineData = {
    '2022-23': {
      'May': [
        {
          id: 1,
          month: 'May',
          image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=300&h=300&fit=crop',
          title: 'National Youth Celebration 2023',
          details: [
          { 
  "text": "National Youth Day Celebration", 
  "pdfUrl": "https://docs.google.com/presentation/d/1fvXqbxhgeBW_GyEecSIMzxDVOFmI_GDwpd-9L9vmVDY/edit?usp=drivesdk",
  "description": "A patriotic celebration honoring Swami Vivekananda's birthday and the spirit of Indian youth. The event featured inspirational speeches, cultural programs, and activities promoting youth empowerment.",
  "date": "12/01/25",
  "venue": "RK Auditorium",
  "resourcePersons": [
    "Dr. Mahesh Chopade",
    "Prof. Dr. Suraj Bhoyar", 
    "Dr. Hanumant Pawar",
    "Prof. Padmakar Phad"
  ],
  "highlights": [
    "Inspirational speeches on youth empowerment",
    "Cultural performances celebrating Indian heritage",
    "Interactive workshops on leadership development",
    "Awards ceremony recognizing outstanding students"
  ],
  "additionalInfo": "The celebration attracted over 800 participants and featured special performances by local artists."
},
            { 
              text: 'Dance Rally', 
              pdfUrl: 'https://www.example.com/dance-rally-2023.pdf',
              description: 'An energetic dance competition that brought together talented performers from various colleges, showcasing diverse dance forms and cultural expressions.'
            },
            { 
              text: 'Interactive Session with Hostel Representatives', 
              pdfUrl: 'https://www.example.com/hostel-session-2023.pdf',
              description: 'A productive dialogue session between students and hostel management to address concerns, improve facilities, and enhance the residential experience.'
            },
            { 
              text: '22nd JNU Inter University Youth Festival', 
              pdfUrl: 'https://www.example.com/jnu-festival-2023.pdf',
              description: 'A prestigious inter-university competition featuring various cultural, literary, and artistic events that celebrated youth talent and fostered inter-institutional collaboration.'
            },
            { 
              text: 'Conference 2023', 
              pdfUrl: 'https://www.example.com/conference-2023.pdf',
              description: 'An academic conference featuring expert speakers, research presentations, and discussions on contemporary issues relevant to student development and career growth.'
            }
          ]
        }
      ],
      'Jun': [
        {
          id: 2,
          month: 'Jun',
          image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=300&fit=crop',
          title: 'Summer Festival 2023',
          details: [
            { 
              text: 'Music Concert', 
              pdfUrl: 'https://www.example.com/music-concert-2023.pdf',
              description: 'A spectacular musical evening featuring local bands, solo artists, and collaborative performances that entertained the entire campus community.'
            },
            { 
              text: 'Art Exhibition', 
              pdfUrl: 'https://www.example.com/art-exhibition-2023.pdf',
              description: 'A showcase of creative talent displaying paintings, sculptures, digital art, and photography created by students and faculty members.'
            },
            { 
              text: 'Food Festival', 
              pdfUrl: 'https://www.example.com/food-festival-2023.pdf',
              description: 'A culinary celebration featuring diverse cuisines from different regions, cooking competitions, and food stalls managed by student volunteers.'
            },
            { 
              text: 'Community Gathering', 
              pdfUrl: 'https://www.example.com/community-gathering-2023.pdf',
              description: 'A warm community event that brought together students, faculty, staff, and local residents for socializing, games, and cultural exchange.'
            }
          ]
        }
      ]
    },
    '2023-24': {
      'May': [
        {
          id: 3,
          month: 'May',
          image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
          title: 'Sports Day 2024',
          details: [
            { 
              text: 'Athletic Events', 
              pdfUrl: 'https://www.example.com/athletic-events-2024.pdf',
              description: 'A comprehensive sports meet featuring track and field events, including sprints, relays, long jump, high jump, and throwing competitions.'
            },
            { 
              text: 'Team Sports', 
              pdfUrl: 'https://www.example.com/team-sports-2024.pdf',
              description: 'Exciting team-based competitions including football, basketball, volleyball, and cricket matches between different departments and hostels.'
            },
            { 
              text: 'Individual Competitions', 
              pdfUrl: 'https://www.example.com/individual-competitions-2024.pdf',
              description: 'Individual sporting events showcasing personal excellence in badminton, table tennis, chess, and other skill-based competitions.'
            },
            { 
              text: 'Prize Distribution', 
              pdfUrl: 'https://www.example.com/prize-distribution-2024.pdf',
              description: 'A formal ceremony recognizing and rewarding the outstanding achievements of athletes and participants in various sporting events.'
            },
            { 
              text: 'Closing Ceremony', 
              pdfUrl: 'https://www.example.com/closing-ceremony-2024.pdf',
              description: 'A grand finale celebrating the spirit of sportsmanship with cultural performances, speeches, and the official closing of the sports festival.'
            }
          ]
        }
      ],
      'Jan': [
        {
          id: 4,
          month: 'Jan',
          image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=300&h=300&fit=crop',
          title: 'New Year Celebration 2024',
          details: [
            { 
              text: 'Cultural Program', 
              pdfUrl: 'https://www.example.com/cultural-program-2024.pdf',
              description: 'A vibrant cultural showcase featuring traditional and contemporary performances, celebrating the diversity and talent of our student community.'
            },
            { 
              text: 'Student Awards', 
              pdfUrl: 'https://www.example.com/student-awards-2024.pdf',
              description: 'Recognition ceremony honoring academic excellence, leadership achievements, and outstanding contributions by students throughout the year.'
            },
            { 
              text: 'Annual Meeting', 
              pdfUrl: 'https://www.example.com/annual-meeting-2024.pdf',
              description: 'Strategic planning session involving student representatives, faculty, and administration to discuss goals and initiatives for the upcoming year.'
            },
            { 
              text: 'Networking Session', 
              pdfUrl: 'https://www.example.com/networking-session-2024.pdf',
              description: 'Professional networking event connecting students with alumni, industry professionals, and potential mentors for career development opportunities.'
            }
          ]
        }
      ]
    },
    '2024-25': {
      "Jul": [
        {
          "id": 1,
          "month": "July",
          "image": july2425,
          "title": "Monthly Events",
          "details": [
            { 
              "text": "Orientation of Alumni 2024-25", 
              "pdfUrl": "https://docs.google.com/presentation/d/1wqJNp3K1uwBAAH0C4Dbo-QScdeuQ-RBHYzPsc_7PWvI/edit?usp=drivesdk",
              "description": "A comprehensive orientation program designed to welcome and engage our alumni community for the academic year 2024-25. This event focused on reconnecting former students with their alma mater and creating networking opportunities."
            },
            { 
              "text": "Inauguration - Green Campus Initiative", 
              "pdfUrl": "https://docs.google.com/presentation/d/10hogqRbhXa1JKU2yYUD-Xnn2PMpYiMMJctELJ3tk5LU/edit?usp=drivesdk",
              "description": "The official launch of our Green Campus Initiative, marking the beginning of our commitment to environmental sustainability. This program aims to create an eco-friendly campus environment through various green practices and student involvement."
            },
            { 
              "text": "Nasha Mukti Abhiyan - Bhira Village", 
              "pdfUrl": "https://docs.google.com/presentation/d/1WRlFxDQXtFmVOmCq6CSG8poNO0WOMzcnBkVGFcWEZHE/edit?usp=drivesdk",
              "description": "A social awareness campaign conducted in Bhira Village aimed at promoting drug-free living and creating awareness about the harmful effects of substance abuse among the youth and community members."
            },
            { 
              "text": "World Youth Skills Day Celebration", 
              "pdfUrl": "https://docs.google.com/presentation/d/18m3D0tyaoW6awT7Hyb1iygN4k1jhMQCBTU_7AMKWW7Y/edit?usp=drivesdk",
              "description": "A special celebration of World Youth Skills Day featuring workshops, demonstrations, and skill development activities. This event highlighted the importance of technical and vocational skills for young people's employment and entrepreneurship."
            },
            { 
              "text": "Facilitation of Athletes", 
              "pdfUrl": "https://docs.google.com/presentation/d/1IFmcoKmDr1UtiDEO_8SxowDRPI9hIEo9n9LPMQXxWWE/edit?usp=drivesdk",
              "description": "A recognition ceremony honoring our talented athletes for their outstanding achievements in various sports competitions. The event celebrated their dedication, hard work, and sporting excellence."
            },
            { 
              "text": "Cycling Expedition - Nasha Mukta Bharat", 
              "pdfUrl": "https://docs.google.com/presentation/d/1We1IJRTDZ-XbiEWUA717Ju3kyhTjFn71hC2Li9AfA9U/edit?usp=drivesdk",
              "description": "An inspiring cycling expedition promoting the 'Drug-Free India' campaign. This initiative combined physical fitness with social awareness, encouraging youth to adopt healthy lifestyles and reject substance abuse."
            }
          ]
        }
      ],
      "Aug": [
        {
          "id": 2,
          "month": "August",
          "image": august2425,
          "title": "Monthly Events",
          "details": [
            { 
              "text": "Club Orientation Meeting", 
              "pdfUrl": "https://docs.google.com/presentation/d/1NksB_SrQPe6m2wsTuP3s8U3SKXZz1amszEXILU1cnNg/edit?usp=drivesdk",
              "description": "An introductory meeting for all student clubs and societies, providing guidance on club activities, leadership opportunities, and how to make the most of extracurricular involvement during the academic year.",
              "highlights": [
                "Introduction to 25+ active student clubs and societies",
                "Leadership development workshops and training sessions",
                "Networking opportunities with senior student leaders",
                "Guidelines for club registration and activity planning",
                "Resource allocation and funding application processes"
              ],
              "additionalInfo": "This orientation serves as the foundation for student engagement throughout the academic year, with over 300 students participating and 85% joining at least one club or society."
            },
            { 
              "text": "42nd Foundation Day Celebration - MAEERS Group of Institution", 
              "pdfUrl": "https://docs.google.com/presentation/d/1dvtJQ9hjq3j3Ni8Vxm7rx1tAWsYqEvSJ9zqK_AYy6Mk/edit?usp=drivesdk",
              "description": "A grand celebration marking the 42nd anniversary of MAEERS Group of Institutions. The event featured cultural performances, speeches by dignitaries, and a showcase of the institution's achievements over the decades.",
              "highlights": [
                "Keynote speeches by distinguished alumni and industry leaders",
                "Cultural performances showcasing diverse talents",
                "Exhibition of 42 years of institutional achievements",
                "Launch of new academic programs and research initiatives",
                "Recognition ceremony for outstanding faculty and staff"
              ],
              "additionalInfo": "The celebration brought together over 2,000 attendees including students, faculty, alumni, and dignitaries, highlighting the institution's journey from a small college to a premier university."
            },
            { 
              "text": "Empowering Sports Coordinators for a Fit and Sharp Student Community", 
              "pdfUrl": "https://docs.google.com/presentation/d/1BENc8i-1aRQo-WQL1OPU-fsXgAjTgt18h4dZOXEXR6k/edit?usp=drivesdk",
              "description": "A training and development session for sports coordinators focusing on leadership skills, event management, and strategies to promote physical fitness and sports culture among students.",
              "highlights": [
                "Leadership training for 50+ sports coordinators",
                "Event management and logistics planning workshops",
                "Sports psychology and motivation techniques",
                "First aid and safety protocols training",
                "Equipment management and maintenance guidelines"
              ],
              "additionalInfo": "This program resulted in a 40% increase in sports participation across all departments and improved coordination of inter-collegiate competitions."
            },
            { 
              "text": "CLUB CATALYST", 
              "pdfUrl": "https://docs.google.com/presentation/d/1lVl7YaF4ngQxEKQ0AIOp4kaNGG7E-wjrw-xOT-aqpBQ/edit?usp=drivesdk",
              "description": "An innovative program designed to boost club activities and student engagement. This initiative aimed to catalyze the growth and impact of various student organizations on campus.",
              "highlights": [
                "Mentorship program pairing new clubs with established ones",
                "Funding support and resource sharing initiatives",
                "Digital platform for club collaboration and communication",
                "Monthly club showcases and achievement recognition",
                "Inter-club collaboration projects and joint events"
              ],
              "additionalInfo": "The program led to the formation of 8 new clubs and increased overall club membership by 60%, fostering a more vibrant campus community."
            },
            { 
              "text": "SPECTRA 5.0", 
              "pdfUrl": "https://docs.google.com/presentation/d/15AzlS0KSa2xin1qEHOVZ5ATUJMLMeuHmdBlOB6luvJI/edit?usp=drivesdk",
              "description": "The fifth edition of SPECTRA, our flagship cultural and technical festival. This event brought together students from various disciplines to showcase their talents in competitions, exhibitions, and performances.",
              "highlights": [
                "50+ competitions across technical, cultural, and literary domains",
                "Guest lectures by industry experts and thought leaders",
                "Innovation showcase featuring student research projects",
                "Cultural nights with performances by renowned artists",
                "Job fair and internship opportunities with 30+ companies"
              ],
              "additionalInfo": "SPECTRA 5.0 attracted over 5,000 participants from 100+ colleges across the region, establishing new records for participation and sponsorship."
            },
            { 
              "text": "Pedal for Freedom: Cycle for Green and Drug-Free Tomorrow", 
              "pdfUrl": "https://docs.google.com/presentation/d/1qtN88mYaMV7P9N3EDQXTSL81WVNKx0WL-NCAMHqwigU/edit?usp=drivesdk",
              "description": "A cycling initiative promoting environmental consciousness and drug-free living. This event combined physical activity with social messaging, encouraging sustainable transportation and healthy lifestyle choices.",
              "highlights": [
                "15 km cycling rally with 200+ participants",
                "Environmental awareness campaign and tree plantation",
                "Drug abuse prevention workshops and counseling sessions",
                "Sustainable transportation advocacy and education",
                "Community engagement with local environmental groups"
              ],
              "additionalInfo": "The initiative resulted in the planting of 500 trees and reached over 1,000 community members with awareness messages about environmental protection and healthy living."
            },
            { 
              "text": "Nurturing Communities: MIT ADT University's Commitment to Social Responsibility through the Induction Program Food Distribution", 
              "pdfUrl": "https://docs.google.com/presentation/d/1dsz3lePzdwFn1tZbjIof4y9ns_u3IGD6TQhRwIGV1-w/edit?usp=drivesdk",
              "description": "A community service initiative as part of the student induction program, involving food distribution to underprivileged communities. This program emphasized social responsibility and community engagement among new students.",
              "highlights": [
                "Food distribution to 500+ families in nearby communities",
                "Collaboration with local NGOs and charitable organizations",
                "Student volunteer training and community service orientation",
                "Sustainable packaging and eco-friendly distribution methods",
                "Long-term community partnership development"
              ],
              "additionalInfo": "This initiative involved 400+ first-year students and established ongoing partnerships with 5 local NGOs, creating a sustainable model for community service."
            }
          ]
        }
      ],
      "Sep": [
        {
          "id": 3,
          "month": "September",
          "image": september2425,
          "title": "Monthly Events",
          "details": [
            { 
              "text": "IMPACT Student Council - Interview", 
              "pdfUrl": "https://docs.google.com/presentation/d/1gbW25GvZoR0CEwnlVu09X8S2Lj3KbxfloHR52ISYWX0/edit?usp=drivesdk",
              "description": "Selection process for the IMPACT Student Council featuring interviews with aspiring student leaders. This process identified dedicated individuals to represent student interests and drive campus initiatives."
            },
            { 
              "text": "Spectra 6.0", 
              "pdfUrl": "https://docs.google.com/presentation/d/1CusKnoNJOtebltGv6UqsnC9Yxrdr51e52tQI9X4cl2I/edit?usp=drivesdk",
              "description": "The sixth iteration of our popular SPECTRA event series, featuring enhanced cultural programs, technical competitions, and interactive workshops that engaged students across multiple disciplines."
            },
            { 
              "text": "Council Meeting", 
              "pdfUrl": "https://docs.google.com/presentation/d/1kFT0KcyqA7Q9jycIrFAelACICvzjKEorHvvnlpjOnHk/edit?usp=drivesdk",
              "description": "Strategic planning meeting of the student council to discuss upcoming events, address student concerns, and coordinate various campus activities for the semester."
            },
            { 
              "text": "Viksit Bharat", 
              "pdfUrl": "https://docs.google.com/presentation/d/12b0NNdmBB7pvnhtUKKp14Zp8hpqrw6gLrMm8hffx7_A/edit?usp=drivesdk",
              "description": "A program aligned with the national vision of 'Developed India' featuring discussions, presentations, and activities focused on India's development goals and youth contribution to national progress."
            },
            { 
              "text": "Mega Blood Donation Camp", 
              "pdfUrl": "https://docs.google.com/presentation/d/1LN4o9sfB0WdmlBz4PXg0lztI1Jj9RtztG0ILSHqzGc4/edit?usp=drivesdk",
              "description": "A large-scale blood donation drive organized in collaboration with local hospitals and blood banks. This humanitarian initiative demonstrated our commitment to community health and social service."
            },
            { 
              "text": "Tree Plantation Drive", 
              "pdfUrl": "https://docs.google.com/presentation/d/1OzYvPSUrbwenHHWt2UokVelXXkP408tLcGoRIoZBEZA/edit?usp=drivesdk",
              "description": "An environmental conservation initiative involving mass tree plantation on campus and surrounding areas. This green drive emphasized ecological responsibility and sustainable development practices."
            }
          ]
        }
      ],
      "Oct": [
        {
          "id": 4,
          "month": "October",
          "image": october2425,
          "title": "Monthly Events",
          "details": [
            { 
              "text": "Talent Fusion 2024", 
              "pdfUrl": "https://docs.google.com/presentation/d/1eFymPhWte2omlbE7HFSPMVMhUO9FkozAcRFUOi-aD7s/edit?usp=drivesdk",
              "description": "A vibrant talent showcase event where students demonstrated their diverse skills in performing arts, creative writing, public speaking, and other artistic endeavors."
            },
            { 
              "text": "Psycogn", 
              "pdfUrl": "https://docs.google.com/presentation/d/1EsZKV_nitHYuY2HrKdp7yuC8hjfDpFK3vT33b6IPTIw/edit?usp=drivesdk",
              "description": "A psychology-focused event featuring mental health awareness sessions, cognitive skill workshops, and discussions on psychological well-being and personal development."
            },
            { 
              "text": "Team Bonding Session", 
              "pdfUrl": "https://docs.google.com/presentation/d/1PNWUBxJ-pVWdOeNxVg3rplc5DZarvO-IA4pFqTa9Y-g/edit?usp=drivesdk",
              "description": "Interactive team-building activities designed to strengthen relationships among student council members and enhance collaborative working skills through fun and engaging exercises."
            },
            { 
              "text": "Halloween Screening and Cosplay Event", 
              "pdfUrl": "https://docs.google.com/presentation/d/1utXGS1bGV1yuD8JCDxTYSy0aD0l3VYFBiFixalBgLPE/edit?usp=drivesdk",
              "description": "A spooky Halloween celebration featuring horror movie screenings, costume competitions, and cosplay contests that brought out the creative and theatrical side of our student community."
            },
            { 
              "text": "Cleanliness Drive", 
              "pdfUrl": "https://docs.google.com/presentation/d/160ogWVDlmD93Ids_Fk6laSIK51jyBxse8m-0VhZowBo/edit?usp=drivesdk",
              "description": "A campus-wide cleanliness initiative promoting hygiene and environmental responsibility. Students participated in cleaning activities and awareness campaigns for maintaining a pristine campus environment."
            },
            { 
              "text": "Ek Ped Maa Ke Naam",
              "pdfUrl": "https://docs.google.com/presentation/d/1H_ocsPIQq9uL-O636A7u8pdZ18JAiSw_0k2byVnMDfU/edit?usp=drivesdk",
              "description": "A tree plantation initiative dedicated to mothers, symbolizing growth, nurturing, and environmental conservation. This meaningful event combined environmental awareness with emotional significance."
            },
            { 
              "text": "MIT ADT Dandiya Nights", 
              "pdfUrl": "https://docs.google.com/presentation/d/1-16Iy3fHn4lyQnKCQaXHNmXzBczYOmbSX73cozxD5nE/edit?usp=drivesdk",
              "description": "Traditional Gujarati folk dance celebration featuring energetic Dandiya and Garba performances. This festive event celebrated cultural diversity and brought together students in a joyous celebration."
            },
            { 
              "text": "Art Therapy Workshop", 
              "pdfUrl": "https://docs.google.com/presentation/d/15GZQLqYK6zBvB4gbuf2wjjfXWnCv8t4M3W1sOe0VzUk/edit?usp=drivesdk",
              "description": "A therapeutic workshop exploring the healing power of art and creativity. Students learned stress management techniques through various artistic mediums and creative expression."
            },
            { 
              "text": "Deepostav", 
              "pdfUrl": "https://docs.google.com/presentation/d/1vjH3nk0sxH72anarciP6NCpJ2Sx-AGB66W2LaZ2NViw/edit?usp=drivesdk",
              "description": "A beautiful Diwali celebration featuring traditional lamp lighting ceremonies, cultural performances, and festive activities that illuminated the campus with joy and prosperity."
            }
          ]
        }
      ],
      "Nov": [
        {
          "id": 5,
          "month": "November",
          "image": november2425,
          "title": "Monthly Events",
          "details": [
            { 
              "text": "Spectra 8.0", 
              "pdfUrl": "https://docs.google.com/presentation/d/1k_HgJUIV6NA2TdXEgwejiWMM0dz_yMsIQtMg2aYuNK0/edit?usp=drivesdk",
              "description": "The eighth edition of our signature SPECTRA event, featuring advanced technical competitions, innovative workshops, and collaborative projects that showcased student creativity and technical expertise."
            },
            { 
              "text": "Debate Competition", 
              "pdfUrl": "https://docs.google.com/presentation/d/1kJzEsLslMFWIcrF4dmdTiLncXtwG6261n1FDXI7cY2U/edit?usp=drivesdk",
              "description": "An intellectual competition featuring passionate debates on contemporary issues. Students demonstrated their oratory skills, critical thinking, and ability to articulate complex arguments effectively."
            },
            { 
              "text": "Voting Awareness Drive", 
              "pdfUrl": "https://docs.google.com/presentation/d/1ZMKFTL1sJcgDJuaMPfosH0x8gzGc_bF9QRoHISUnrno/edit?usp=drivesdk",
              "description": "A civic engagement initiative educating students about the importance of voting and democratic participation. The drive emphasized responsible citizenship and electoral awareness."
            },
            { 
              "text": "Blood Donation Camp", 
              "pdfUrl": "https://docs.google.com/presentation/d/1L0Fsy7lDS-I1ra-MwlL_8UctfDFL__2unAY6AuOtIII/edit?usp=drivesdk",
              "description": "Another successful blood donation drive contributing to the community health needs. This ongoing humanitarian effort reflected our commitment to social service and helping those in need."
            }
          ]
        }
      ],
      "Dec": [
        {
          "id": 6,
          "month": "December",
          "image": december2425,
          "title": "Monthly Events",
          "details": [
            { 
              "text": "Unlock Java", 
              "pdfUrl": "https://docs.google.com/presentation/d/1A26t7637U4rreqMo2vpCp-bqqJxgEEFeyomwOIc2gtk/edit?usp=drivesdk",
              "description": "A comprehensive Java programming workshop designed to enhance coding skills and introduce students to advanced programming concepts, frameworks, and best practices in software development."
            },
            { 
              "text": "Python Odyssey", 
              "pdfUrl": "https://docs.google.com/presentation/d/16k8nydsEFPDTY5sZbL_uVcNTDMsjm80lltg8CH2gmWU/edit?usp=drivesdk",
              "description": "An immersive Python programming journey covering web development, data science, machine learning, and automation. This workshop catered to both beginners and advanced programmers."
            },
            { 
              "text": "Official Handover", 
              "pdfUrl": "https://docs.google.com/presentation/d/1dIdXDzYXZY9VuPNkB2ldhaxrS4HkIiCT1TVnhH539mM/edit?usp=drivesdk",
              "description": "The formal transition ceremony where outgoing student council members passed their responsibilities to newly elected representatives, ensuring continuity in student leadership and governance."
            },
            { 
              "text": "Spectra 9.0: The Final Showdown of 38th West Zone Youth Festival", 
              "pdfUrl": "https://docs.google.com/presentation/d/1S_HjdfFrKgd1_GpCKr8bP7GQ7IsvSoGn2QTk5WLhO_8/edit?usp=drivesdk",
              "description": "The culminating event of SPECTRA 9.0, featuring the most competitive and spectacular performances of the 38th West Zone Youth Festival, showcasing the best talent from across the region."
            }
          ]
        }
      ],
      "Jan": [
        {
          "id": 7,
          "month": "January",
          "image": january2425,
          "title": "Monthly Events",
          "details": [
            { 
              "text": "National Youth Day Celebration", 
              "pdfUrl": "https://docs.google.com/presentation/d/1fvXqbxhgeBW_GyEecSIMzxDVOFmI_GDwpd-9L9vmVDY/edit?usp=drivesdk",
              "description": "A patriotic celebration honoring Swami Vivekananda's birthday and the spirit of Indian youth. The event featured inspirational speeches, cultural programs, and activities promoting youth empowerment."
            },
            { 
              "text": "Cycle Rally", 
              "pdfUrl": "https://docs.google.com/presentation/d/1n7T2ELv2dgxHWiMGRW8hSSffFvUWpgQ77LGqan-tsis/edit?usp=drivesdk",
              "description": "An energetic cycling event promoting fitness, environmental awareness, and healthy lifestyle choices. Participants rode through scenic routes while spreading messages of sustainability."
            },
            { 
              "text": "38th AIU Inter University Youth Festival", 
              "pdfUrl": "https://docs.google.com/presentation/d/10LtH5MXR5krmWCGiA_tUhmumEurKrCgeOLFUBTB0qiA/edit?usp=drivesdk",
              "description": "A prestigious inter-university competition featuring diverse cultural, literary, and artistic events. Our students represented the institution with pride and achieved remarkable success."
            },
            { 
              "text": "Confluence 2025", 
              "pdfUrl": "https://docs.google.com/presentation/d/142ClEFOvzCN9xgHVCj6LtvtarMZldtKylvpVNXM5z7I/edit?usp=drivesdk",
              "description": "A grand convergence event bringing together students, faculty, alumni, and industry professionals for networking, knowledge sharing, and collaborative learning opportunities."
            }
          ]
        }
      ],
      "Feb": [
        {
          "id": 8,
          "month": "February",
          "image": february2425,
          "title": "Monthly Events",
          "details": [
            { 
              "text": "Spectra 11.0", 
              "pdfUrl": "https://docs.google.com/presentation/d/1kRORPOQj-_zqFjk6sALkhKHAsKE2vWsZlSrCiae6DdU/edit?usp=drivesdk",
              "description": "The eleventh iteration of SPECTRA, featuring cutting-edge technology demonstrations, innovative student projects, and competitive events that pushed the boundaries of creativity and technical excellence."
            },
            { 
              "text": "Shiv Jayanti Celebration", 
              "pdfUrl": "https://docs.google.com/presentation/d/1OdzcloRV2XX3xEy4LYpZ5otqxNU3MKs_RzTzPRqqTlE/edit?usp=drivesdk",
              "description": "A cultural celebration honoring Chhatrapati Shivaji Maharaj's legacy, featuring traditional performances, historical presentations, and activities that celebrated Marathi culture and heritage."
            }
          ]
        }
      ],
      "Mar": [
        {
          "id": 9,
          "month": "March",
          "image": march2425,
          "title": "Monthly Events",
          "details": [
            { 
              "text": "Preparatory Meeting for Persona 2025", 
              "pdfUrl": "https://docs.google.com/presentation/d/1GvFvAGxhPLiRsMQBKgku_rFM-NUtV-WV2kitGdVoIh0/edit?usp=drivesdk",
              "description": "Strategic planning session for the upcoming Persona 2025 event, involving detailed discussions on logistics, programming, participant engagement, and resource allocation."
            },
            { 
              "text": "Viksit Bharat", 
              "pdfUrl": "https://docs.google.com/presentation/d/1mnVwNB-1-DHNVRDqSbpP2-Fft6_PZslLsko70ed_ats/edit?usp=drivesdk",
              "description": "A continuation of the 'Developed India' program featuring advanced discussions on national development, youth leadership, and innovative solutions for contemporary challenges facing the country."
            }
          ]
        }
      ]
    },
    '2025-26': {
      'May': [
        {
          id: 10,
          month: 'May',
          image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=300&h=300&fit=crop',
          title: 'Upcoming Youth Event 2026',
          details: [
            { 
              text: 'Planned Youth Celebration', 
              pdfUrl: 'https://www.example.com/planned-youth-2026.pdf',
              description: 'An exciting youth celebration event being planned for the upcoming academic year, featuring innovative programs and enhanced student engagement activities.'
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
                : 'bg-[#9b28b1] text-white hover:bg-[#7d1f8f]'
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
                : 'bg-[#9b28b1] text-white hover:bg-[#7d1f8f]'
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
              className="px-6 py-3 rounded-full font-medium transition-all text-base bg-[#e4abf0ff] text-[#9b28b1] hover:shadow-lg hover:bg-[#d494e0]"
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