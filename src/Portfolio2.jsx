import React, { useState, useEffect } from 'react';
import { useTheme } from './use_theme_hook';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold based on section height if needed
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 overflow-hidden ${isDark
        ? 'bg-[#0f172a] text-gray-50'
        : 'bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 text-slate-900'
      }`}>
      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      {/* 
        Wrap sections in a container that handles the smooth fade transitions 
        and structural padding 
      */}
      <main className="relative z-10 w-full">
        <HeroSection isDark={isDark} scrollToSection={scrollToSection} />
        <AboutSection isDark={isDark} />
        <ProjectsSection isDark={isDark} />
        <ContactSection isDark={isDark} />
      </main>

      {/* Footer */}
      <footer className={`py-8 text-center border-t transition-colors duration-300 ${isDark ? 'border-gray-800 bg-gray-950/50' : 'border-blue-100 bg-white/50'}`}>
        <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
          © {new Date().getFullYear()} Chau Tran. Built with React & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;