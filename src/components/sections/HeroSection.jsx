import React from 'react';
import { Github, Linkedin, FileText, Mail, ArrowDown } from 'lucide-react';

const HeroSection = ({ isDark, scrollToSection }) => {
    return (
        <section id="home" className="pt-36 pb-24 md:pt-48 md:pb-36 px-6 relative">
            <div className="max-w-4xl mx-auto text-left">
                {/* Profile Photo with subtle warm framing */}
                <div className="mb-10 inline-block">
                    <div className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 transition-transform duration-300 hover:scale-105 ${
                        isDark ? 'border-[#2E3B50] bg-[#18202E]' : 'border-[#DDD7C8] bg-[#EAE5D8] shadow-sm'
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
                <h1 className={`text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 leading-none ${
                    isDark ? 'text-white' : 'text-[#1E1D1A]'
                }`}>
                    Chau Tran
                </h1>

                {/* Subtitle with refined warm terracotta accent */}
                <h2 className={`text-2xl sm:text-3xl font-medium tracking-tight mb-8 ${
                    isDark ? 'text-[#F59E0B]' : 'text-[#B45309]'
                }`}>
                    Full Stack Developer
                </h2>

                {/* Exact Bio */}
                <p className={`text-lg sm:text-xl md:text-xl leading-relaxed mb-12 max-w-3xl font-normal ${
                    isDark ? 'text-[#D5D2CA]' : 'text-[#55524B]'
                }`}>
                    Full-stack developer specializing in modern web technologies, while actively exploring machine learning and big data to build more intelligent solutions.
                </p>

                {/* Actions & Social Links */}
                <div className="flex flex-col sm:flex-row sm:items-center space-y-6 sm:space-y-0 sm:space-x-8">
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => scrollToSection('projects')}
                            className={`inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer shadow-sm active:scale-95 ${
                                isDark
                                    ? 'bg-white text-slate-900 hover:bg-slate-100'
                                    : 'bg-[#1E1D1A] text-[#F7F5F0] hover:bg-neutral-800'
                            }`}
                        >
                            View My Work
                            <ArrowDown size={16} className="ml-2" />
                        </button>

                        <button
                            onClick={() => scrollToSection('contact')}
                            className={`inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer active:scale-95 ${
                                isDark
                                    ? 'border-[#2E3B50] text-[#D5D2CA] hover:bg-[#18202E] hover:border-[#3E4E68]'
                                    : 'border-[#DDD7C8] text-[#3E3C36] hover:bg-[#ECE8DC] hover:border-[#CCC5B4]'
                            }`}
                        >
                            Get in Touch
                        </button>
                    </div>

                    {/* Social Icons */}
                    <div className={`flex items-center space-x-5 pt-2 sm:pt-0 border-t sm:border-t-0 ${
                        isDark ? 'border-[#222C3D]' : 'border-[#E6E1D5]'
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
        className={`p-2 rounded-full transition-colors ${
            isDark
                ? 'text-slate-400 hover:text-white hover:bg-[#18202E]'
                : 'text-[#68655E] hover:text-[#1E1D1A] hover:bg-[#EAE5D8]'
        }`}
    >
        {icon}
    </a>
);

export default HeroSection;
