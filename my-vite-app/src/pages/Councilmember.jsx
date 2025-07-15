import React, { useEffect, useRef, useCallback, useMemo, useState } from "react";
import profileFallback from "../assets/profile.jpeg";
import Dev from "../assets/Dev.png"

const DEFAULT_BEHIND_GRADIENT =
  "radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#00ffaac4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#00c1ffff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#c137ffff 0%,#07c6ffff 40%,#07c6ffff 60%,#c137ffff 100%)";

const DEFAULT_INNER_GRADIENT =
  "linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)";

const ANIMATION_CONFIG = {
  SMOOTH_DURATION: 600,
  INITIAL_DURATION: 1500,
  INITIAL_X_OFFSET: 70,
  INITIAL_Y_OFFSET: 60,
};

const clamp = (value, min = 0, max = 100) =>
  Math.min(Math.max(value, min), max);

const round = (value, precision = 3) =>
  parseFloat(value.toFixed(precision));

const adjust = (
  value,
  fromMin,
  fromMax,
  toMin,
  toMax
) =>
  round(toMin + ((toMax - toMin) * (value - fromMin)) / (fromMax - fromMin));

const easeInOutCubic = (x) =>
  x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;

const ProfileCard = ({
  avatarUrl = Dev,
  iconUrl = Dev,
  grainUrl = Dev,
  behindGradient,
  innerGradient,
  showBehindGradient = true,
  className = "",
  enableTilt = true,
  miniAvatarUrl,
  name = "Javi A. Torres",
  title = "Software Engineer",
  handle = "javicodes",
  status = "Online",
  contactText = "Contact Me",
  showUserInfo = true,
  onContactClick,
  isFeatured = false,
}) => {
  const wrapRef = useRef(null);
  const cardRef = useRef(null);

  const animationHandlers = useMemo(() => {
    if (!enableTilt) return null;

    let rafId = null;

    const updateCardTransform = (
      offsetX,
      offsetY,
      card,
      wrap
    ) => {
      const width = card.clientWidth;
      const height = card.clientHeight;

      const percentX = clamp((100 / width) * offsetX);
      const percentY = clamp((100 / height) * offsetY);

      const centerX = percentX - 50;
      const centerY = percentY - 50;

      const properties = {
        "--pointer-x": `${percentX}%`,
        "--pointer-y": `${percentY}%`,
        "--background-x": `${adjust(percentX, 0, 100, 35, 65)}%`,
        "--background-y": `${adjust(percentY, 0, 100, 35, 65)}%`,
        "--pointer-from-center": `${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`,
        "--pointer-from-top": `${percentY / 100}`,
        "--pointer-from-left": `${percentX / 100}`,
        "--rotate-x": `${round(-(centerX / 5))}deg`,
        "--rotate-y": `${round(centerY / 4)}deg`,
      };

      Object.entries(properties).forEach(([property, value]) => {
        wrap.style.setProperty(property, value);
      });
    };

    const createSmoothAnimation = (
      duration,
      startX,
      startY,
      card,
      wrap
    ) => {
      const startTime = performance.now();
      const targetX = wrap.clientWidth / 2;
      const targetY = wrap.clientHeight / 2;

      const animationLoop = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = clamp(elapsed / duration);
        const easedProgress = easeInOutCubic(progress);

        const currentX = adjust(easedProgress, 0, 1, startX, targetX);
        const currentY = adjust(easedProgress, 0, 1, startY, targetY);

        updateCardTransform(currentX, currentY, card, wrap);

        if (progress < 1) {
          rafId = requestAnimationFrame(animationLoop);
        }
      };

      rafId = requestAnimationFrame(animationLoop);
    };

    return {
      updateCardTransform,
      createSmoothAnimation,
      cancelAnimation: () => {
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      },
    };
  }, [enableTilt]);

  const handlePointerMove = useCallback(
    (event) => {
      const card = cardRef.current;
      const wrap = wrapRef.current;

      if (!card || !wrap || !animationHandlers) return;

      const rect = card.getBoundingClientRect();
      animationHandlers.updateCardTransform(
        event.clientX - rect.left,
        event.clientY - rect.top,
        card,
        wrap
      );
    },
    [animationHandlers]
  );

  const handlePointerEnter = useCallback(() => {
    const card = cardRef.current;
    const wrap = wrapRef.current;

    if (!card || !wrap || !animationHandlers) return;

    animationHandlers.cancelAnimation();
    wrap.classList.add("profile-card-active");
    card.classList.add("profile-card-section-active");
  }, [animationHandlers]);

  const handlePointerLeave = useCallback(
    (event) => {
      const card = cardRef.current;
      const wrap = wrapRef.current;

      if (!card || !wrap || !animationHandlers) return;

      animationHandlers.createSmoothAnimation(
        ANIMATION_CONFIG.SMOOTH_DURATION,
        event.offsetX,
        event.offsetY,
        card,
        wrap
      );
      wrap.classList.remove("profile-card-active");
      card.classList.remove("profile-card-section-active");
    },
    [animationHandlers]
  );

  useEffect(() => {
    if (!enableTilt || !animationHandlers) return;

    const card = cardRef.current;
    const wrap = wrapRef.current;

    if (!card || !wrap) return;

    const pointerMoveHandler = handlePointerMove;
    const pointerEnterHandler = handlePointerEnter;
    const pointerLeaveHandler = handlePointerLeave;

    card.addEventListener("pointerenter", pointerEnterHandler);
    card.addEventListener("pointermove", pointerMoveHandler);
    card.addEventListener("pointerleave", pointerLeaveHandler);

    const initialX = wrap.clientWidth - ANIMATION_CONFIG.INITIAL_X_OFFSET;
    const initialY = ANIMATION_CONFIG.INITIAL_Y_OFFSET;

    animationHandlers.updateCardTransform(initialX, initialY, card, wrap);
    animationHandlers.createSmoothAnimation(
      ANIMATION_CONFIG.INITIAL_DURATION,
      initialX,
      initialY,
      card,
      wrap
    );

    return () => {
      card.removeEventListener("pointerenter", pointerEnterHandler);
      card.removeEventListener("pointermove", pointerMoveHandler);
      card.removeEventListener("pointerleave", pointerLeaveHandler);
      animationHandlers.cancelAnimation();
    };
  }, [
    enableTilt,
    animationHandlers,
    handlePointerMove,
    handlePointerEnter,
    handlePointerLeave,
  ]);

  const cardStyle = useMemo(
    () => ({
      "--icon": iconUrl ? `url(${iconUrl})` : "none",
      "--grain": grainUrl ? `url(${grainUrl})` : "none",
      "--behind-gradient": showBehindGradient
        ? (behindGradient ?? DEFAULT_BEHIND_GRADIENT)
        : "none",
      "--inner-gradient": innerGradient ?? DEFAULT_INNER_GRADIENT,
      "--pointer-x": "50%",
      "--pointer-y": "50%",
      "--pointer-from-center": "0",
      "--pointer-from-top": "0.5",
      "--pointer-from-left": "0.5",
      "--card-opacity": "0",
      "--rotate-x": "0deg",
      "--rotate-y": "0deg",
      "--background-x": "50%",
      "--background-y": "50%",
      "--sunpillar-1": "hsl(2, 100%, 73%)",
      "--sunpillar-2": "hsl(53, 100%, 69%)",
      "--sunpillar-3": "hsl(93, 100%, 69%)",
      "--sunpillar-4": "hsl(176, 100%, 76%)",
      "--sunpillar-5": "hsl(228, 100%, 74%)",
      "--sunpillar-6": "hsl(283, 100%, 73%)",
      "--sunpillar-clr-1": "var(--sunpillar-1)",
      "--sunpillar-clr-2": "var(--sunpillar-2)",
      "--sunpillar-clr-3": "var(--sunpillar-3)",
      "--sunpillar-clr-4": "var(--sunpillar-4)",
      "--sunpillar-clr-5": "var(--sunpillar-5)",
      "--sunpillar-clr-6": "var(--sunpillar-6)",
      "--card-radius": "30px",
      perspective: "500px",
      transform: "translate3d(0, 0, 0.1px)",
    }),
    [iconUrl, grainUrl, showBehindGradient, behindGradient, innerGradient]
  );

  const handleContactClick = useCallback(() => {
    onContactClick?.();
  }, [onContactClick]);

  const cardHeight = isFeatured ? "50vh" : "35vh";
  const cardMaxHeight = isFeatured ? "400px" : "280px";

  return (
    <>
      <style>{`
        .profile-card-active {
          --card-opacity: 1;
        }
        
        .profile-card-active .profile-card-behind::before {
          filter: contrast(1) saturate(2) blur(40px) opacity(1) !important;
          transform: scale(0.9) translate3d(0, 0, 0.1px) !important;
        }
        
        .profile-card-section-active {
          transition: none !important;
          transform: translate3d(0, 0, 0.1px) rotateX(var(--rotate-y)) rotateY(var(--rotate-x)) !important;
        }
        
        @media (max-width: 768px) {
          .profile-card-section {
            height: ${isFeatured ? "40vh" : "30vh"} !important;
            max-height: ${isFeatured ? "320px" : "240px"} !important;
          }
        }
        
        @media (max-width: 480px) {
          .profile-card-section {
            height: ${isFeatured ? "35vh" : "25vh"} !important;
            max-height: ${isFeatured ? "280px" : "200px"} !important;
          }
        }
      `}</style>
      <div
        ref={wrapRef}
        className={`relative touch-none ${className}`.trim()}
        style={cardStyle}
      >
        <div
          className="profile-card-behind absolute inset-0 -inset-2.5 rounded-3xl transition-all duration-500 scale-80"
          style={{
            background: "var(--behind-gradient)",
            filter: "contrast(2) saturate(2) blur(36px)",
            transform: "scale(0.8) translate3d(0, 0, 0.1px)",
            backgroundSize: "100% 100%",
          }}
        />
        
        <section
          ref={cardRef}
          className="profile-card-section relative grid aspect-[0.718] rounded-3xl overflow-hidden transition-transform duration-1000 ease-out"
          style={{
            height: cardHeight,
            maxHeight: cardMaxHeight,
            minHeight: "250px",
            background: "none", // No gradients or blend modes
            boxShadow: "0 4px 32px 0 rgba(0,0,0,0.12)", // Optional: subtle shadow
            transform: "translate3d(0, 0, 0.1px) rotateX(0deg) rotateY(0deg)",
          }}
        >
          <div className="absolute inset-0 grid grid-cols-1 grid-rows-1 rounded-3xl">
            {/* Only render the raw image and info box/text, no overlays or backgrounds */}
            <img
              className="absolute bottom-0 left-1/2 w-full h-full object-cover object-center transform -translate-x-1/2 z-10 rounded-3xl"
              src={avatarUrl}
              alt={`${name || "User"} avatar`}
              loading="lazy"
              style={{}}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = profileFallback;
              }}
            />
            {showUserInfo && (
              <div className="absolute bottom-3 left-3 right-3 z-30 flex items-center justify-between bg-white/90 backdrop-blur-xl border border-gray-200 rounded-xl p-2.5 pointer-events-auto shadow-md">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-300 flex-shrink-0 bg-white">
                    <img
                      src={miniAvatarUrl || avatarUrl}
                      alt={`${name || "User"} mini avatar`}
                      loading="lazy"
                      className="w-full h-full object-cover rounded-full"
                      style={{}}
                      onError={(e) => {
                        e.target.style.opacity = "0.5";
                        e.target.src = avatarUrl;
                      }}
                    />
                  </div>
                  <div className="flex flex-col items-start gap-0.5">
                    <div className="text-xs font-bold text-gray-900 leading-tight">
                      @{handle}
                    </div>
                    <div className="text-xs text-gray-700 leading-tight">
                      {status}
                    </div>
                  </div>
                </div>
                <button
                  className="border border-gray-300 rounded-lg px-3 py-1.5 text-xs font-semibold text-gray-900 cursor-pointer transition-all duration-200 backdrop-blur-sm hover:border-gray-400 hover:-translate-y-0.5 hover:bg-gray-100"
                  onClick={handleContactClick}
                  type="button"
                  aria-label={`Contact ${name || "user"}`}
                >
                  {contactText}
                </button>
              </div>
            )}
            <div
              className="relative max-h-full overflow-hidden text-center z-40"
              style={{
                transform: "translate3d(calc(var(--pointer-from-left) * -6px + 3px), calc(var(--pointer-from-top) * -6px + 3px), 0.1px)",
              }}
            >
              <div className="absolute top-6 w-full flex flex-col">
                <h3
                  className="font-bold m-0 text-gray-900 leading-tight drop-shadow"
                  style={{
                    fontSize: isFeatured ? "min(4vh, 2.5rem)" : "min(3vh, 1.5rem)",
                  }}
                >
                  {name}
                </h3>
                <p
                  className="font-semibold relative -top-1 whitespace-nowrap m-0 mx-auto w-min text-gray-800 drop-shadow"
                  style={{
                    fontSize: isFeatured ? "min(2.5vh, 1rem)" : "min(2vh, 0.875rem)",
                  }}
                >
                  {title}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

// COUNCIL_MEMBERS_DATA: Replace with 24 unique random names and details
const COUNCIL_MEMBERS_DATA = [
  {
    name: "Javi A. Torres",
    title: "Software Engineer",
    handle: "javicodes",
    status: "Online",
    avatarUrl: Dev,
  },
  {
    name: "Sarah Chen",
    title: "UX Designer",
    handle: "sarahdesigns",
    status: "Online",
    avatarUrl: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Marcus Johnson",
    title: "Product Manager",
    handle: "marcuspm",
    status: "Away",
    avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Emma Rodriguez",
    title: "Data Scientist",
    handle: "emmadata",
    status: "Online",
    avatarUrl: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "David Kim",
    title: "DevOps Engineer",
    handle: "davidops",
    status: "Busy",
    avatarUrl: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Lisa Wang",
    title: "Marketing Lead",
    handle: "lisaMarketing",
    status: "Online",
    avatarUrl: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    name: "Carlos Mendez",
    title: "QA Analyst",
    handle: "carlosqa",
    status: "Online",
    avatarUrl: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    name: "Priya Patel",
    title: "Frontend Developer",
    handle: "priyafront",
    status: "Online",
    avatarUrl: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    name: "Alex Brown",
    title: "Backend Developer",
    handle: "alexback",
    status: "Away",
    avatarUrl: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    name: "Nina Gupta",
    title: "UI Designer",
    handle: "ninaui",
    status: "Online",
    avatarUrl: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    name: "Tom Lee",
    title: "Cloud Architect",
    handle: "tomcloud",
    status: "Busy",
    avatarUrl: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Sofia Rossi",
    title: "Business Analyst",
    handle: "sofiabiz",
    status: "Online",
    avatarUrl: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Ethan Clark",
    title: "Mobile Developer",
    handle: "ethanmobile",
    status: "Online",
    avatarUrl: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    name: "Maya Singh",
    title: "Scrum Master",
    handle: "mayascrum",
    status: "Online",
    avatarUrl: "https://randomuser.me/api/portraits/women/14.jpg",
  },
  {
    name: "Lucas White",
    title: "AI Engineer",
    handle: "lucasai",
    status: "Away",
    avatarUrl: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    name: "Isabella Silva",
    title: "Content Writer",
    handle: "isabellawrites",
    status: "Online",
    avatarUrl: "https://randomuser.me/api/portraits/women/16.jpg",
  },
  {
    name: "Omar Farouk",
    title: "Security Analyst",
    handle: "omarsecure",
    status: "Busy",
    avatarUrl: "https://randomuser.me/api/portraits/men/17.jpg",
  },
  {
    name: "Emily Turner",
    title: "SEO Specialist",
    handle: "emilyseo",
    status: "Online",
    avatarUrl: "https://randomuser.me/api/portraits/women/18.jpg",
  },
  {
    name: "Ryan Adams",
    title: "Full Stack Dev",
    handle: "ryanfullstack",
    status: "Online",
    avatarUrl: "https://randomuser.me/api/portraits/men/19.jpg",
  },
  {
    name: "Ava Müller",
    title: "Graphic Designer",
    handle: "avagraphics",
    status: "Online",
    avatarUrl: "https://randomuser.me/api/portraits/women/20.jpg",
  },
  {
    name: "Noah Dubois",
    title: "Database Admin",
    handle: "noahdb",
    status: "Away",
    avatarUrl: "https://randomuser.me/api/portraits/men/21.jpg",
  },
  {
    name: "Chloe Dubois",
    title: "Support Lead",
    handle: "chloesupport",
    status: "Online",
    avatarUrl: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    name: "Jack Wilson",
    title: "Network Engineer",
    handle: "jacknet",
    status: "Busy",
    avatarUrl: "https://randomuser.me/api/portraits/men/23.jpg",
  },
  {
    name: "Saanvi Sharma",
    title: "Test Engineer",
    handle: "saanvitest",
    status: "Online",
    avatarUrl: "https://randomuser.me/api/portraits/women/24.jpg",
  },
];

// Main Council Members Page Component
const CouncilMembersPage = () => {
  const [councilMembers, setCouncilMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate async data fetch
    setTimeout(() => {
      setCouncilMembers(COUNCIL_MEMBERS_DATA);
      setLoading(false);
    }, 800);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-xl font-semibold">Loading...</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 mt-[80px]">
            Our Council Members
          </h1>
        </div>
        
        {/* Featured Member */}
        <div className="flex justify-center mb-16">
          <div className="w-full max-w-xs">
            {councilMembers[0] && (
              <ProfileCard
                name={councilMembers[0].name}
                title={councilMembers[0].title}
                handle={councilMembers[0].handle}
                status={councilMembers[0].status}
                contactText="Contact Me"
                avatarUrl={councilMembers[0].avatarUrl}
                showUserInfo={true}
                enableTilt={true}
                isFeatured={true}
                onContactClick={() => console.log(`Contact ${councilMembers[0].name} clicked`)}
              />
            )}
          </div>
        </div>
        
        {/* Student Council Section */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900">
            Student Council 24-25
          </h2>
        </div>
        {/* TorchBearers Subheading */}
        <div className="text-center mb-14">
          <h3 className="text-3xl font-semibold text-gray-900">
            Our TorchBearers
          </h3>
        </div>
        
        {/* Council Members Grid */}
        <div className="grid grid-cols-4 gap-6 justify-items-center">
          {councilMembers.slice(1, 25).map((member, index) => (
            <div key={index} className="w-full max-w-[200px]">
              <ProfileCard
                name={member.name}
                title={member.title}
                handle={member.handle}
                status={member.status}
                contactText="Contact Me"
                avatarUrl={member.avatarUrl}
                showUserInfo={true}
                enableTilt={true}
                isFeatured={false}
                onContactClick={() => console.log(`Contact ${member.name} clicked`)}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Website Team Section */}
      <div className="text-center mb-40 mt-20">
        <h4 className="text-3xl font-bold text-gray-900">Our Website Team</h4>
      </div>
      <div className="grid grid-cols-4 gap-6 justify-items-center mb-12">
        {[
          {
            name: "Aarav Mehta",
            title: "Web Lead",
            handle: "aaravweb",
            status: "Online",
            avatarUrl: "https://randomuser.me/api/portraits/men/25.jpg",
          },
          {
            name: "Sophia Lee",
            title: "Frontend Dev",
            handle: "sophiafront",
            status: "Online",
            avatarUrl: "https://randomuser.me/api/portraits/women/26.jpg",
          },
          {
            name: "Mohammed Ali",
            title: "Backend Dev",
            handle: "mohammedback",
            status: "Busy",
            avatarUrl: "https://randomuser.me/api/portraits/men/27.jpg",
          },
          {
            name: "Emma Müller",
            title: "UI/UX Designer",
            handle: "emmaux",
            status: "Online",
            avatarUrl: "https://randomuser.me/api/portraits/women/28.jpg",
          },
        ].map((member, index) => (
          <div key={index} className="w-full max-w-[200px]">
            <ProfileCard
              name={member.name}
              title={member.title}
              handle={member.handle}
              status={member.status}
              contactText="Contact Me"
              avatarUrl={member.avatarUrl}
              showUserInfo={true}
              enableTilt={true}
              isFeatured={false}
              onContactClick={() => console.log(`Contact ${member.name} clicked`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CouncilMembersPage;