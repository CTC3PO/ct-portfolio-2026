import React from 'react';
import { Github, Linkedin, FileText, Mail, ChevronDown } from 'lucide-react';

const HeroSection = ({ isDark, scrollToSection }) => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
            {/* Background decorations for glassmorphism pop */}
            <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob ${isDark ? 'bg-blue-600' : 'bg-blue-300'}`}></div>
            <div className={`absolute top-1/3 right-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 ${isDark ? 'bg-teal-600' : 'bg-teal-300'}`}></div>
            <div className={`absolute -bottom-8 left-1/3 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 ${isDark ? 'bg-purple-600' : 'bg-purple-300'}`}></div>

            <div className="text-center max-w-4xl mx-auto relative z-10">
                <div className="mb-8 relative inline-block group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-teal-500 p-1 shadow-lg relative">
                        <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/20">
                            <img
                                src="/images/profile.jpg"
                                alt="Chau Tran"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                                onError={(e) => {
                                    e.target.src = 'https://ui-avatars.com/api/?name=Chau+Tran&background=0D8ABC&color=fff&size=256';
                                }}
                            />
                        </div>
                    </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-blue-700 to-teal-700 dark:from-white dark:via-blue-400 dark:to-teal-400 bg-clip-text text-transparent transform transition-all duration-500 hover:scale-105">
                    Chau Tran
                </h1>

                <p className="text-xl md:text-2xl mb-8 text-blue-600 font-medium tracking-wide">
                    Full Stack Developer
                </p>

                <p className={`text-lg mb-12 max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                    Full-stack developer specializing in modern web technologies,
                    while actively exploring machine learning and big data to build
                    more intelligent solutions.
                </p>

                <div className="flex justify-center space-x-6 mb-12">
                    <SocialLink href="https://github.com/CTC3PO" icon={<Github size={28} />} isDark={isDark} ariaLabel="GitHub" />
                    <SocialLink href="https://www.linkedin.com/in/chautrancmt26/" icon={<Linkedin size={28} />} isDark={isDark} ariaLabel="LinkedIn" />
                    <SocialLink href="/Ctran_Resume_v2.pdf" icon={<FileText size={28} />} isDark={isDark} ariaLabel="Resume" />
                    <SocialLink href="mailto:ctran@alumni.upenn.edu" icon={<Mail size={28} />} isDark={isDark} ariaLabel="Email" />
                </div>

                <button
                    onClick={() => scrollToSection('projects')}
                    className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-white shadow-lg shadow-blue-500/30"
                >
                    View My Work
                </button>

                <div className="mt-16 animate-bounce">
                    <ChevronDown size={32} className={`mx-auto ${isDark ? 'text-gray-400' : 'text-gray-400'}`} />
                </div>
            </div>
        </section>
    );
};

const SocialLink = ({ href, icon, isDark, ariaLabel }) => (
    <a
        href={href}
        className={`hover:text-blue-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
        target={href.startsWith('mailto') ? undefined : "_blank"}
        rel={href.startsWith('mailto') ? undefined : "noopener noreferrer"}
        aria-label={ariaLabel}
    >
        {icon}
    </a>
);

export default HeroSection;
