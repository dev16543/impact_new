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

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (isMobile) return;
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobile]);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            const navbar = document.querySelector('.navbar');
            if (isMenuOpen && navbar && !navbar.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMenuOpen]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMenuOpen]);

    useEffect(() => {
        const applyMobileStyles = () => {
            document.body.style.paddingTop = window.innerWidth <= 768 ? '80px' : '0px';
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
        {
            to: 'https://docs.google.com/spreadsheets/d/13OhKl7JLLxy4Wun353T0eO2xgXvY-5lS/edit?usp=sharing&ouid=106236639282780490925&rtpof=true&sd=true',
            label: 'Event Calendar',
            newTab: true
        },
        { to: '/contact', label: 'Contact Us' },
        {
            to: 'https://www.iviewd.com/mitadt/',
            label: 'Virtual Tour',
            newTab: true
        }
    ];

    const handleLinkClick = () => setIsMenuOpen(false);

    // Desktop Navbar (unchanged)
    if (!isMobile) {
        return (
            <nav className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full px-6 py-4 ${scrolled ? 'py-3' : 'py-6'}`}>
                <div className="max-w-7xl mx-auto w-full">
                    <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-full shadow-lg px-8 py-4">
                        <div className="flex items-center justify-between w-full">
                            <a href="/" className="flex items-center">
                                <img src={OSALogo} alt="Left Logo" className="h-10 object-contain" />
                            </a>
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
                                                >
                                                    <div className="absolute -top-1 left-0 right-0 h-1"></div>
                                                    <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100/50 py-3 overflow-hidden">
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
                                                target={link.newTab ? "_blank" : "_self"}
                                                rel={link.newTab ? "noopener noreferrer" : undefined}
                                                className="text-gray-700 hover:text-red-500 transition-colors duration-200 font-medium text-sm whitespace-nowrap py-2"
                                                onClick={handleLinkClick}
                                            >
                                                {link.label}
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <a href="https://mituniversity.ac.in/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                                <img src={MITLogo} alt="Right Logo" className="h-10 object-contain" />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }

    // Mobile Navbar (completely redesigned)
    return (
        <>
            {/* Mobile Navigation Bar */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-lg">
                <div className="flex justify-between items-center px-6 py-4 h-20">
                    {/* Logo */}
                    <a href="/" className="flex items-center z-50 relative">
                        <div className="relative">
                            <img 
                                src={OSALogo} 
                                alt="Mobile Logo" 
                                className="h-10 object-contain drop-shadow-lg transition-transform duration-300 hover:scale-105" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-500/20 to-slate-500/20 rounded-full blur-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    </a>

                    {/* Enhanced Hamburger Toggle */}
                    <button
                        className="relative w-12 h-12 flex items-center justify-center z-50 group"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMenuOpen}
                    >
                        {/* Animated Background Circle */}
                        <div className={`absolute inset-0 rounded-xl bg-gradient-to-br transition-all duration-500 ${
                            isMenuOpen 
                                ? 'from-gray-600 via-slate-600 to-gray-700 scale-100 rotate-180 shadow-lg shadow-gray-600/50' 
                                : 'from-gray-200/30 via-gray-100/20 to-transparent scale-90 rotate-0 group-hover:scale-100 group-hover:from-gray-300/40'
                        }`}></div>
                        
                        {/* Pulsing Ring Effect */}
                        <div className={`absolute inset-0 rounded-xl border-2 transition-all duration-700 ${
                            isMenuOpen 
                                ? 'border-white/60 scale-110 animate-pulse' 
                                : 'border-gray-300/40 scale-100 group-hover:border-gray-400/60'
                        }`}></div>

                        {/* Hamburger Lines Container */}
                        <div className="relative w-6 h-6 flex flex-col justify-center items-center">
                            {/* Top Line */}
                            <span className={`absolute w-6 h-0.5 rounded-full transition-all duration-500 shadow-lg ${
                                isMenuOpen 
                                    ? 'rotate-45 translate-y-0 bg-white shadow-white/50' 
                                    : '-translate-y-2 bg-gray-700 group-hover:w-7 group-hover:shadow-gray-700/30'
                            }`}></span>
                            
                            {/* Middle Line */}
                            <span className={`absolute w-6 h-0.5 rounded-full transition-all duration-300 shadow-lg ${
                                isMenuOpen 
                                    ? 'opacity-0 rotate-180 scale-0 bg-white' 
                                    : 'opacity-100 rotate-0 scale-100 bg-gray-700 group-hover:w-5 group-hover:shadow-gray-700/30'
                            }`}></span>
                            
                            {/* Bottom Line */}
                            <span className={`absolute w-6 h-0.5 rounded-full transition-all duration-500 shadow-lg ${
                                isMenuOpen 
                                    ? '-rotate-45 translate-y-0 bg-white shadow-white/50' 
                                    : 'translate-y-2 bg-gray-700 group-hover:w-7 group-hover:shadow-gray-700/30'
                            }`}></span>
                        </div>

                        {/* Glowing Dot Indicators */}
                        <div className={`absolute -top-1 -right-1 w-2 h-2 rounded-full transition-all duration-700 ${
                            isMenuOpen 
                                ? 'bg-green-400 shadow-lg shadow-green-400/50 scale-100 animate-ping' 
                                : 'bg-gray-400 shadow-lg shadow-gray-400/50 scale-0'
                        }`}></div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 transition-all duration-700 ${
                isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
            }`}>
                {/* Background Overlay with Animated Gradient */}
                <div className={`absolute inset-0 transition-all duration-700 ${
                    isMenuOpen 
                        ? 'bg-white backdrop-blur-2xl' 
                        : 'bg-transparent backdrop-blur-0'
                }`}>
                    {/* Animated Pattern Background */}
                    <div className="absolute inset-0 opacity-5">
                        <div className={`absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-gray-500 to-slate-500 rounded-full transition-all duration-1000 ${
                            isMenuOpen ? 'animate-pulse blur-3xl' : 'scale-0'
                        }`}></div>
                        <div className={`absolute bottom-40 right-10 w-24 h-24 bg-gradient-to-r from-blue-gray-500 to-slate-600 rounded-full transition-all duration-1000 delay-300 ${
                            isMenuOpen ? 'animate-pulse blur-2xl' : 'scale-0'
                        }`}></div>
                        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-slate-500 to-gray-600 rounded-full transition-all duration-1000 delay-500 ${
                            isMenuOpen ? 'animate-pulse blur-3xl' : 'scale-0'
                        }`}></div>
                    </div>
                </div>

                {/* Menu Content */}
                <div className={`relative h-full flex flex-col justify-center items-center px-8 transition-all duration-700 ${
                    isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                    {/* Navigation Links */}
                    <div className="w-full max-w-md space-y-2">
                        {navLinks.map((link, index) => (
                            <div 
                                key={index} 
                                className={`transform transition-all duration-700 ${
                                    isMenuOpen 
                                        ? 'translate-x-0 opacity-100' 
                                        : 'translate-x-10 opacity-0'
                                }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                {link.hasDropdown ? (
                                    <div className="space-y-1">
                                        <a
                                            href={link.to}
                                            className="group flex items-center justify-between w-full p-4 text-xl font-bold text-gray-800 bg-gray-50/50 rounded-2xl border border-gray-200/50 hover:bg-gradient-to-r hover:from-gray-100/50 hover:to-slate-100/50 hover:border-gray-400/40 transition-all duration-500 hover:shadow-lg hover:shadow-gray-400/20 backdrop-blur-sm"
                                            onClick={handleLinkClick}
                                        >
                                            <span className="flex items-center">
                                                <span className="w-2 h-2 bg-gradient-to-r from-gray-500 to-slate-500 rounded-full mr-4 group-hover:scale-150 transition-transform duration-300"></span>
                                                {link.label}
                                            </span>
                                            <svg className="w-5 h-5 text-gray-500 group-hover:text-gray-700 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                        {/* Dropdown Items */}
                                        <div className="ml-6 space-y-1">
                                            {link.dropdownItems.map((dropdownItem, dropdownIndex) => (
                                                <a
                                                    key={dropdownIndex}
                                                    href={dropdownItem.to}
                                                    className="group flex items-center w-full p-3 text-lg font-medium text-gray-700 bg-gray-50/30 rounded-xl border border-gray-200/30 hover:bg-gradient-to-r hover:from-gray-100/30 hover:to-slate-100/30 hover:border-gray-400/30 hover:text-gray-800 transition-all duration-400 backdrop-blur-sm"
                                                    onClick={handleLinkClick}
                                                >
                                                    <span className="w-1.5 h-1.5 bg-gradient-to-r from-gray-400 to-slate-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                                                    {dropdownItem.label}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <a
                                        href={link.to}
                                        target={link.newTab ? "_blank" : "_self"}
                                        rel={link.newTab ? "noopener noreferrer" : undefined}
                                        className="group flex items-center w-full p-4 text-xl font-bold text-gray-800 bg-gray-50/50 rounded-2xl border border-gray-200/50 hover:bg-gradient-to-r hover:from-gray-100/50 hover:to-slate-100/50 hover:border-gray-400/40 transition-all duration-500 hover:shadow-lg hover:shadow-gray-400/20 backdrop-blur-sm"
                                        onClick={handleLinkClick}
                                    >
                                        <span className="w-2 h-2 bg-gradient-to-r from-gray-500 to-slate-500 rounded-full mr-4 group-hover:scale-150 transition-transform duration-300"></span>
                                        {link.label}
                                        {link.newTab && (
                                            <svg className="w-4 h-4 ml-auto text-gray-500 group-hover:text-gray-700 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Bottom Logo */}
                    <div className={`mt-12 transform transition-all duration-700 delay-700 ${
                        isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                    }`}>
                        <a href="https://mituniversity.ac.in/" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                            <div className="relative">
                                <img 
                                    src={MITLogo} 
                                    alt="MIT Logo" 
                                    className="h-12 object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-110" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-slate-500/20 to-gray-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;