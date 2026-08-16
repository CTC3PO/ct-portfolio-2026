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
        { id: 'home', label: 'Home' },
        { id: 'projects', label: 'Work' },
        { id: 'about', label: 'About' },
        { id: 'contact', label: 'Contact' }
    ];

    const handleNavClick = (sectionId) => {
        scrollToSection(sectionId);
        setIsMenuOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? isDark
                        ? 'bg-[#10151F]/90 border-b border-[#222C3D] shadow-lg shadow-black/10'
                        : 'bg-[#F7F5F0]/90 border-b border-[#E6E1D5] shadow-sm'
                    : 'bg-transparent'
            } backdrop-blur-md`}
        >
            <div className="max-w-6xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
                {/* Brand / Logo */}
                <button
                    onClick={() => handleNavClick('home')}
                    className="text-left group cursor-pointer focus:outline-none flex items-center space-x-3"
                >
                    <span className={`text-lg font-bold tracking-tight transition-colors ${
                        isDark ? 'text-white group-hover:text-amber-400' : 'text-neutral-900 group-hover:text-amber-700'
                    }`}>
                        Chau Tran
                    </span>
                    <span className={`hidden sm:inline-block text-xs px-2.5 py-0.5 rounded-full font-medium border ${
                        isDark
                            ? 'bg-[#18202E] border-[#2E3B50] text-slate-300'
                            : 'bg-[#ECE8DC] border-[#DDD7C8] text-[#5A554A]'
                    }`}>
                        Portfolio
                    </span>
                </button>

                {/* Desktop Nav Links */}
                <nav className="hidden md:flex items-center space-x-8">
                    <div className="flex items-center space-x-6">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleNavClick(item.id)}
                                className={`text-sm font-medium transition-colors cursor-pointer py-1 relative ${
                                    activeSection === item.id
                                        ? isDark
                                            ? 'text-white font-semibold'
                                            : 'text-neutral-900 font-semibold'
                                        : isDark
                                            ? 'text-slate-400 hover:text-slate-200'
                                            : 'text-[#68655E] hover:text-neutral-900'
                                }`}
                            >
                                {item.label}
                                {activeSection === item.id && (
                                    <span className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                                        isDark ? 'bg-amber-400' : 'bg-neutral-900'
                                    }`} />
                                )}
                            </button>
                        ))}
                    </div>

                    <div className={`h-4 w-px ${isDark ? 'bg-[#222C3D]' : 'bg-[#E6E1D5]'}`} />

                    {/* Resume CTA & Theme Toggle */}
                    <div className="flex items-center space-x-4">
                        <a
                            href="/Ctran_Resume_v2.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 transform active:scale-95 ${
                                isDark
                                    ? 'bg-white text-slate-900 hover:bg-slate-100 shadow-sm'
                                    : 'bg-[#1E1D1A] text-[#F7F5F0] hover:bg-neutral-800 shadow-sm'
                            }`}
                        >
                            Resume
                            <ArrowUpRight size={14} className="ml-1" />
                        </a>

                        <button
                            onClick={toggleTheme}
                            aria-label="Toggle color theme"
                            className={`p-2 rounded-full transition-colors cursor-pointer ${
                                isDark
                                    ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                                    : 'text-[#68655E] hover:text-neutral-900 hover:bg-[#EAE5D8]'
                            }`}
                        >
                            {isDark ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center space-x-3">
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle color theme"
                        className={`p-2 rounded-full ${
                            isDark ? 'text-slate-300 hover:bg-slate-800' : 'text-[#68655E] hover:bg-[#EAE5D8]'
                        }`}
                    >
                        {isDark ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                        className={`p-2 rounded-lg ${
                            isDark ? 'text-slate-300 hover:bg-slate-800' : 'text-[#68655E] hover:bg-[#EAE5D8]'
                        }`}
                    >
                        {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isMenuOpen && (
                <div
                    className={`md:hidden border-b px-6 py-6 space-y-4 ${
                        isDark ? 'bg-[#10151F] border-[#222C3D]' : 'bg-[#F7F5F0] border-[#E6E1D5]'
                    }`}
                >
                    <div className="flex flex-col space-y-3">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleNavClick(item.id)}
                                className={`text-left text-base font-medium py-2 ${
                                    activeSection === item.id
                                        ? isDark ? 'text-white font-bold' : 'text-neutral-900 font-bold'
                                        : isDark ? 'text-slate-400' : 'text-[#68655E]'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                    <div className={`pt-3 border-t flex justify-between items-center ${
                        isDark ? 'border-[#222C3D]' : 'border-[#E6E1D5]'
                    }`}>
                        <a
                            href="/Ctran_Resume_v2.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center text-xs font-semibold px-4 py-2.5 rounded-full ${
                                isDark ? 'bg-white text-slate-900' : 'bg-[#1E1D1A] text-[#F7F5F0]'
                            }`}
                        >
                            View Resume
                            <ArrowUpRight size={14} className="ml-1" />
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
