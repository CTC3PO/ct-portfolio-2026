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
        ? 'bg-[#0F141E] text-slate-100'
        : 'bg-[#FFFFFF] text-neutral-900'
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

      {/* Clean Minimalist Footer */}
      <footer className={`py-12 px-6 text-center border-t transition-colors ${
        isDark ? 'border-slate-800/80 text-slate-500 bg-[#0C1018]' : 'border-neutral-200/80 text-neutral-500 bg-neutral-50'
      }`}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} Chau Tran. All rights reserved.</p>
          <p>Built with React & Tailwind CSS • Philadelphia & NYC</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;