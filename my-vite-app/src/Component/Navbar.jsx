import React, { useState, useEffect } from 'react';
import OSALogo from "../assets/OSALogo-main.png";
import MITLogo from "../assets/MITLogo.png";

const Navbar = () => {
    const [hoveredLink, setHoveredLink] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Check if device is mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    // Add scroll effect for navbar (only for non-mobile devices)
    useEffect(() => {
        const handleScroll = () => {
            if (isMobile) return;
            
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMobile]);

    // Handle body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            const navbar = document.querySelector('.navbar');
            
            if (isMenuOpen && navbar && !navbar.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    // Close menu on window resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMenuOpen]);

    // Apply mobile styles to body on component mount
    useEffect(() => {
        const applyMobileStyles = () => {
            if (window.innerWidth <= 768) {
                document.body.style.paddingTop = '80px';
            } else {
                document.body.style.paddingTop = '0px';
            }
        };
        
        applyMobileStyles();
        window.addEventListener('resize', applyMobileStyles);
        
        return () => {
            window.removeEventListener('resize', applyMobileStyles);
            document.body.style.paddingTop = '';
        };
    }, []);

    const navLinks = [
        { to: '/', label: 'Home' },
        { 
            to: '/upcomingevents', 
            label: 'Events',
            hasDropdown: true,
            dropdownItems: [
                { to: '/upcomingevents', label: 'Upcoming Events' },
                { to: '/pastevents', label: 'Past Events' }
            ]
        },
        { to: '/team', label: 'Our Team' },
        { to: '/club', label: 'Club' },
        { to: '/event-calendar', label: 'Event Calendar' },
        { to: '/contact', label: 'Contact Us' },
        { to: '/virtual-tour', label: 'Virtual Tour' },
    ];

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isMobile 
                ? 'w-full m-0 px-4 py-3 h-[80px] rounded-none shadow-md bg-black bg-opacity-20 backdrop-blur-sm flex justify-between items-center' 
                : `w-full px-6 py-4 ${
                    scrolled ? 'py-3' : 'py-6'
                }`
        }`}>
            {/* Desktop Layout */}
            {!isMobile && (
                <div className="max-w-7xl mx-auto w-full">
                    <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-full shadow-lg px-8 py-4">
                        <div className="flex items-center justify-between w-full">
                            {/* Left Logo */}
                            <div className="flex items-center">
                                <a href="/" className="flex items-center">
                                    <img 
                                        src={OSALogo} 
                                        alt="Left Logo" 
                                        className="h-10 object-contain"
                                    />
                                </a>
                            </div>
                            
                            {/* Center - Navigation Links */}
                            <div className="flex items-center space-x-8">
                                {navLinks.map((link, index) => (
                                    <div key={index} className="relative group">
                                        {link.hasDropdown ? (
                                            <div 
                                                    className="relative"
                                                    onMouseEnter={() => setActiveDropdown(index)}
                                                    onMouseLeave={() => setActiveDropdown(null)}
                                                >
                                                <a
                                                    href={link.to}
                                                    className="text-gray-700 hover:text-red-500 transition-all duration-300 font-medium text-sm whitespace-nowrap flex items-center py-2"
                                                    onClick={handleLinkClick}
                                                >
                                                    {link.label}
                                                    <svg className={`ml-1 w-4 h-4 transition-transform duration-300 ${activeDropdown === index ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </a>
                                                <div 
                                                    className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-56 transition-all duration-300 ease-out ${
                                                        activeDropdown === index 
                                                            ? 'opacity-100 visible translate-y-0' 
                                                            : 'opacity-0 invisible -translate-y-2'
                                                    }`}
                                                    onMouseEnter={() => setActiveDropdown(index)}
                                                    onMouseLeave={() => setActiveDropdown(null)}
                                                >
                                                    {/* Invisible bridge to prevent flickering */}
                                                    <div className="absolute -top-1 left-0 right-0 h-1"></div>
                                                    
                                                    <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100/50 py-3 overflow-hidden">
                                                        {/* Modern gradient accent */}
                                                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-pink-500 to-red-600"></div>
                                                        
                                                        {link.dropdownItems.map((dropdownItem, dropdownIndex) => (
                                                            <a
                                                                key={dropdownIndex}
                                                                href={dropdownItem.to}
                                                                className="block px-6 py-3 text-sm font-medium text-gray-700 hover:text-red-500 hover:bg-gradient-to-r hover:from-red-50/50 hover:to-pink-50/50 transition-all duration-300 relative group/item"
                                                                onClick={handleLinkClick}
                                                            >
                                                                <div className="flex items-center">
                                                                    <span className="mr-3 w-2 h-2 rounded-full bg-gradient-to-r from-red-400 to-pink-400 opacity-0 group-hover/item:opacity-100 transition-all duration-300 transform group-hover/item:scale-100 scale-75"></span>
                                                                    {dropdownItem.label}
                                                                </div>
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <a
                                                href={link.to}
                                                className="text-gray-700 hover:text-red-500 transition-colors duration-200 font-medium text-sm whitespace-nowrap py-2"
                                                onClick={handleLinkClick}
                                            >
                                                {link.label}
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Right Logo */}
                            <div className="flex items-center">
                                <a href="/" className="flex items-center">
                                    <img 
                                        src={MITLogo} 
                                        alt="Right Logo" 
                                        className="h-10 object-contain"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Mobile Layout */}
            {isMobile && (
                <>
                    {/* Mobile header */}
                    <div className="flex items-center justify-start">
                        <a href="/" className="flex items-center">
                            <img 
                                src={OSALogo} 
                                alt="Mobile Logo" 
                                className="h-8 object-contain"
                            />
                        </a>
                    </div>

                    {/* Mobile menu toggle */}
                    <button
                        className={`flex flex-col justify-between w-8 h-6 bg-transparent border-none cursor-pointer z-[100] ${
                            isMenuOpen ? 'active' : ''
                        }`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span className={`block w-full h-0.5 bg-white rounded-sm transition-all duration-300 drop-shadow-lg ${
                            isMenuOpen ? 'transform rotate-45 translate-y-2.5' : ''
                        }`}></span>
                        <span className={`block w-full h-0.5 bg-white rounded-sm transition-all duration-300 drop-shadow-lg ${
                            isMenuOpen ? 'opacity-0' : ''
                        }`}></span>
                        <span className={`block w-full h-0.5 bg-white rounded-sm transition-all duration-300 drop-shadow-lg ${
                            isMenuOpen ? 'transform -rotate-45 -translate-y-2.5' : ''
                        }`}></span>
                    </button>

                    {/* Mobile menu */}
                    <div className={`fixed top-[80px] left-0 right-0 bottom-0 bg-white p-4 transition-all duration-300 shadow-lg flex flex-col w-full h-[calc(100vh-80px)] overflow-y-auto z-[999] ${
                        isMenuOpen ? 'transform translate-x-0 opacity-100 visible' : 'transform translate-x-full opacity-0 invisible'
                    }`}>
                        <ul className="flex flex-col gap-0 items-center w-full py-5">
                            {navLinks.map((link, index) => (
                                <li className="w-full text-center border-b border-gray-100 last:border-b-0" key={index}>
                                    {link.hasDropdown ? (
                                        <div>
                                            <a
                                                href={link.to}
                                                className="w-full p-5 text-lg font-medium text-gray-800 block transition-all duration-300 hover:text-red-500"
                                                onClick={handleLinkClick}
                                            >
                                                {link.label}
                                            </a>
                                            {link.dropdownItems.map((dropdownItem, dropdownIndex) => (
                                                <a
                                                    key={dropdownIndex}
                                                    href={dropdownItem.to}
                                                    className="w-full p-3 pl-8 text-base font-normal text-gray-600 block transition-all duration-300 hover:text-red-500 border-t border-gray-50"
                                                    onClick={handleLinkClick}
                                                >
                                                    {dropdownItem.label}
                                                </a>
                                            ))}
                                        </div>
                                    ) : (
                                        <a
                                            href={link.to}
                                            className="w-full p-5 text-lg font-medium text-gray-800 block transition-all duration-300 hover:text-red-500"
                                            onClick={handleLinkClick}
                                        >
                                            {link.label}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            )}
        </nav>
    );
};

export default Navbar;