import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ isDark, toggleTheme, activeSection, scrollToSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ['home', 'about', 'projects', 'contact'];

    const onNavClick = (section) => {
        scrollToSection(section);
        setIsMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? `${isDark ? 'bg-gray-900/80 border-b border-gray-800' : 'bg-white/80 border-b border-gray-100'} backdrop-blur-xl shadow-lg`
                : 'bg-transparent py-2'
            }`}>
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">

                    <div className="text-2xl font-black tracking-tight cursor-pointer" onClick={() => onNavClick('home')}>
                        <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                            Portfolio
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        <div className={`flex items-center space-x-2 mr-6 px-2 py-1.5 rounded-full ${isDark ? 'bg-gray-800/50' : 'bg-gray-100/50'} backdrop-blur-md`}>
                            {navLinks.map((section) => (
                                <button
                                    key={section}
                                    onClick={() => onNavClick(section)}
                                    className={`capitalize px-4 py-2 rounded-full font-medium transition-all duration-300 ${activeSection === section
                                            ? 'bg-white text-blue-600 shadow-sm dark:bg-gray-700 dark:text-blue-400'
                                            : `hover:bg-white/50 dark:hover:bg-gray-700/50 ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`
                                        }`}
                                >
                                    {section}
                                </button>
                            ))}
                        </div>

                        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
                    </div>

                    {/* Mobile Navigation Toggle */}
                    <div className="md:hidden flex items-center space-x-4">
                        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`p-2 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-100'
                                }`}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <div className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 origin-top ${isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
                    }`}>
                    <div className={`m-4 p-4 rounded-2xl shadow-xl flex flex-col space-y-2 backdrop-blur-xl border ${isDark ? 'bg-gray-900/95 border-gray-800' : 'bg-white/95 border-gray-100'
                        }`}>
                        {navLinks.map((section) => (
                            <button
                                key={section}
                                onClick={() => onNavClick(section)}
                                className={`capitalize text-left px-6 py-4 rounded-xl font-semibold transition-colors duration-300 ${activeSection === section
                                        ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
                                        : `${isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-50'}`
                                    }`}
                            >
                                {section}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

const ThemeToggle = ({ isDark, toggleTheme }) => (
    <button
        onClick={toggleTheme}
        className={`p-2.5 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-12 focus:outline-none focus:ring-2 focus:ring-blue-500/50 ${isDark ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700 shadow-inner' : 'bg-blue-50 text-blue-600 hover:bg-blue-100 shadow-sm'
            }`}
        aria-label="Toggle theme"
        title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
);

export default Navbar;
