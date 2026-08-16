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
      const sections = ['home', 'projects', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 250 && rect.bottom >= 250;
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
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark
        ? 'bg-[#191816] text-[#F5F3EC]'
        : 'bg-[#F6F4EE] text-[#1C1C1A]'
    }`}>
      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      <main className="relative z-10 w-full">
        <HeroSection isDark={isDark} scrollToSection={scrollToSection} />
        <ProjectsSection isDark={isDark} />
        <AboutSection isDark={isDark} />
        <ContactSection isDark={isDark} />
      </main>

      {/* Architectural Footer */}
      <footer className={`py-12 px-6 border-t text-xs font-semibold tracking-[0.15em] uppercase transition-colors ${
        isDark ? 'border-[#2E2C28] text-[#8E8D86] bg-[#141413]' : 'border-[#DDD9CE] text-[#75746E] bg-[#EFECE3]'
      }`}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} CHAU TRAN. ALL RIGHTS RESERVED.</p>
          <p>BUILT WITH REACT & TAILWIND CSS • PHILADELPHIA & NYC</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;