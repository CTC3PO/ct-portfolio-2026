import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = ({ isDark, toggleTheme, activeSection, scrollToSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'home', num: '00', label: 'INDEX' },
        { id: 'projects', num: '01', label: 'SELECTED WORK' },
        { id: 'about', num: '02', label: 'ABOUT' },
        { id: 'contact', num: '03', label: 'CONTACT' }
    ];

    const handleNavClick = (sectionId) => {
        scrollToSection(sectionId);
        setIsMenuOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
                isDark
                    ? 'bg-[#191816]/90 border-[#2E2C28] text-[#F5F3EC]'
                    : 'bg-[#F6F4EE]/90 border-[#DDD9CE] text-[#1C1C1A]'
            } backdrop-blur-md`}
        >
            <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
                {/* Brand / Logo */}
                <button
                    onClick={() => handleNavClick('home')}
                    className="text-left group cursor-pointer focus:outline-none"
                >
                    <span className="text-base sm:text-lg font-bold tracking-[0.12em] uppercase">
                        CHAU TRAN
                    </span>
                </button>

                {/* Desktop Nav Links */}
                <nav className="hidden md:flex items-center space-x-8">
                    <div className="flex items-center space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleNavClick(item.id)}
                                className={`text-xs font-semibold tracking-[0.15em] transition-colors cursor-pointer py-1 ${
                                    activeSection === item.id
                                        ? isDark
                                            ? 'text-white border-b border-white'
                                            : 'text-black border-b border-black'
                                        : isDark
                                            ? 'text-[#8E8D86] hover:text-[#F5F3EC]'
                                            : 'text-[#75746E] hover:text-[#1C1C1A]'
                                }`}
                            >
                                <span className="opacity-50 mr-1.5">{item.num}</span>
                                {item.label}
                            </button>
                        ))}
                    </div>

                    <div className={`h-4 w-px ${isDark ? 'bg-[#2E2C28]' : 'bg-[#DDD9CE]'}`} />

                    {/* Resume & Theme Toggle */}
                    <div className="flex items-center space-x-5">
                        <a
                            href="/Ctran_Resume_v2.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center text-xs font-semibold tracking-[0.12em] uppercase hover:underline ${
                                isDark ? 'text-[#F5F3EC]' : 'text-[#1C1C1A]'
                            }`}
                        >
                            Resume
                            <ArrowUpRight size={13} className="ml-1 opacity-70" />
                        </a>

                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle color theme"
                            className={`p-1.5 transition-colors cursor-pointer ${
                                isDark
                                    ? 'text-[#8E8D86] hover:text-[#F5F3EC]'
                                    : 'text-[#75746E] hover:text-[#1C1C1A]'
                            }`}
                        >
                            {isDark ? <Sun size={17} /> : <Moon size={17} />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center space-x-3">
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle color theme"
                        className="p-1.5"
                    >
                        {isDark ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                        className="p-1.5"
                    >
                        {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isMenuOpen && (
                <div
                    className={`md:hidden border-b px-6 py-6 space-y-4 ${
                        isDark ? 'bg-[#191816] border-[#2E2C28]' : 'bg-[#F6F4EE] border-[#DDD9CE]'
                    }`}
                >
                    <div className="flex flex-col space-y-3">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleNavClick(item.id)}
                                className={`text-left text-sm font-semibold tracking-[0.12em] uppercase py-1.5 ${
                                    activeSection === item.id
                                        ? isDark ? 'text-white font-bold' : 'text-black font-bold'
                                        : isDark ? 'text-[#8E8D86]' : 'text-[#75746E]'
                                }`}
                            >
                                <span className="opacity-50 mr-2">{item.num}</span>
                                {item.label}
                            </button>
                        ))}
                    </div>
                    <div className={`pt-3 border-t flex justify-between items-center ${
                        isDark ? 'border-[#2E2C28]' : 'border-[#DDD9CE]'
                    }`}>
                        <a
                            href="/Ctran_Resume_v2.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-xs font-semibold tracking-[0.12em] uppercase"
                        >
                            View Resume (PDF)
                            <ArrowUpRight size={14} className="ml-1" />
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
