import React from 'react';
import { Github, Linkedin, FileText, Mail, ArrowDown } from 'lucide-react';

const HeroSection = ({ isDark, scrollToSection }) => {
    return (
        <section id="home" className="pt-44 pb-36 md:pt-56 md:pb-48 px-6 relative">
            <div className="max-w-4xl mx-auto text-left">
                {/* Profile Photo */}
                <div className="mb-12 inline-block">
                    <div className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 transition-transform duration-300 hover:scale-105 ${
                        isDark ? 'border-[#363E4D] bg-[#262C36]' : 'border-[#E5DEC8] bg-[#F2ECE1] shadow-sm'
                    }`}>
                        <img
                            src="/images/profile.jpg"
                            alt="Chau Tran"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.src = 'https://ui-avatars.com/api/?name=Chau+Tran&background=0D8ABC&color=fff&size=256';
                            }}
                        />
                    </div>
                </div>

                {/* Main Headline */}
                <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-5 leading-none ${
                    isDark ? 'text-[#F0F2F5]' : 'text-[#1E1D1A]'
                }`}>
                    Chau Tran
                </h1>

                {/* Subtitle */}
                <h2 className={`text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight mb-10 ${
                    isDark ? 'text-[#C89B6D]' : 'text-[#7A4623]'
                }`}>
                    Full Stack Developer
                </h2>

                {/* Exact Bio */}
                <p className={`text-lg sm:text-xl md:text-2xl leading-relaxed mb-14 max-w-3xl font-normal ${
                    isDark ? 'text-[#CBD2DC]' : 'text-[#55524B]'
                }`}>
                    Full-stack developer specializing in modern web technologies, while actively exploring machine learning and big data to build more intelligent solutions.
                </p>

                {/* Actions & Social Links */}
                <div className="flex flex-col sm:flex-row sm:items-center space-y-6 sm:space-y-0 sm:space-x-10">
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => scrollToSection('projects')}
                            className={`inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer shadow-sm active:scale-95 ${
                                isDark
                                    ? 'bg-[#E8EAED] text-[#1C2026] hover:bg-white hover:shadow-md'
                                    : 'bg-[#2C241E] text-[#FAF8F5] hover:bg-[#3D332B] hover:shadow-md'
                            }`}
                        >
                            View My Work
                            <ArrowDown size={16} className="ml-2" />
                        </button>

                        <button
                            onClick={() => scrollToSection('contact')}
                            className={`inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer active:scale-95 ${
                                isDark
                                    ? 'border-[#363E4D] text-[#CBD2DC] hover:bg-[#262C36] hover:border-[#4A5364] hover:text-[#C89B6D]'
                                    : 'border-[#E0D9C8] text-[#3E3C36] hover:bg-[#F2ECE1] hover:border-[#CCC5B4] hover:text-[#7A4623]'
                            }`}
                        >
                            Get in Touch
                        </button>
                    </div>

                    {/* Social Icons */}
                    <div className={`flex items-center space-x-5 pt-2 sm:pt-0 border-t sm:border-t-0 ${
                        isDark ? 'border-[#2D333F]' : 'border-[#EDE8DE]'
                    }`}>
                        <SocialIcon
                            href="https://github.com/CTC3PO"
                            icon={<Github size={20} />}
                            label="GitHub"
                            isDark={isDark}
                        />
                        <SocialIcon
                            href="https://www.linkedin.com/in/chautrancmt26/"
                            icon={<Linkedin size={20} />}
                            label="LinkedIn"
                            isDark={isDark}
                        />
                        <SocialIcon
                            href="/Ctran_Resume_v2.pdf"
                            icon={<FileText size={20} />}
                            label="Resume"
                            isDark={isDark}
                        />
                        <SocialIcon
                            href="mailto:ctran@alumni.upenn.edu"
                            icon={<Mail size={20} />}
                            label="Email"
                            isDark={isDark}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const SocialIcon = ({ href, icon, label, isDark }) => (
    <a
        href={href}
        target={href.startsWith('mailto') ? undefined : "_blank"}
        rel={href.startsWith('mailto') ? undefined : "noopener noreferrer"}
        aria-label={label}
        className={`p-2.5 rounded-full transition-colors ${
            isDark
                ? 'text-[#9BA1AD] hover:text-[#C89B6D] hover:bg-[#262C36]'
                : 'text-[#68655E] hover:text-[#7A4623] hover:bg-[#F2ECE1]'
        }`}
    >
        {icon}
    </a>
);

export default HeroSection;
