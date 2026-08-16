import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

const HeroSection = ({ isDark, scrollToSection }) => {
    return (
        <section id="home" className="pt-32 pb-24 md:pt-44 md:pb-32 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Profile Photo */}
                <div className="mb-10">
                    <div className={`w-20 h-20 sm:w-24 sm:h-24 overflow-hidden border ${
                        isDark ? 'border-[#2E2C28] bg-[#1E1D1A]' : 'border-[#DDD9CE] bg-[#EFECE3]'
                    }`}>
                        <img
                            src="/images/profile.jpg"
                            alt="Chau Tran"
                            className="w-full h-full object-cover grayscale contrast-105"
                            onError={(e) => {
                                e.target.src = 'https://ui-avatars.com/api/?name=Chau+Tran&background=0D8ABC&color=fff&size=256';
                            }}
                        />
                    </div>
                </div>

                {/* Bold Display Headline (Pentagram style) */}
                <h1 className={`text-5xl sm:text-6xl md:text-8xl font-black tracking-tight mb-4 uppercase leading-[0.95] ${
                    isDark ? 'text-[#F5F3EC]' : 'text-[#1C1C1A]'
                }`}>
                    Chau Tran
                </h1>

                {/* Subtitle */}
                <h2 className={`text-xl sm:text-2xl md:text-3xl font-medium tracking-tight mb-10 ${
                    isDark ? 'text-[#C89B6D]' : 'text-[#7A4623]'
                }`}>
                    Full Stack Developer
                </h2>

                {/* Exact Narrative Bio */}
                <p className={`text-lg sm:text-xl md:text-2xl leading-relaxed mb-12 max-w-3xl font-normal ${
                    isDark ? 'text-[#D0CDC4]' : 'text-[#3E3D38]'
                }`}>
                    Full-stack developer specializing in modern web technologies, while actively exploring machine learning and big data to build more intelligent solutions.
                </p>

                {/* Action Row */}
                <div className="flex flex-col sm:flex-row sm:items-center space-y-6 sm:space-y-0 sm:space-x-8 pt-4">
                    <button
                        onClick={() => scrollToSection('projects')}
                        className={`inline-flex items-center text-xs font-bold tracking-[0.15em] uppercase px-6 py-3.5 border transition-colors cursor-pointer ${
                            isDark
                                ? 'border-[#F5F3EC] text-[#F5F3EC] hover:bg-[#F5F3EC] hover:text-[#191816]'
                                : 'border-[#1C1C1A] text-[#1C1C1A] hover:bg-[#1C1C1A] hover:text-[#F6F4EE]'
                        }`}
                    >
                        View My Work
                        <ArrowDown size={14} className="ml-2" />
                    </button>

                    {/* Editorial Links */}
                    <div className="flex flex-wrap gap-6 text-xs font-semibold tracking-[0.15em] uppercase">
                        <EditorialLink href="https://github.com/CTC3PO" label="GitHub" isDark={isDark} />
                        <EditorialLink href="https://www.linkedin.com/in/chautrancmt26/" label="LinkedIn" isDark={isDark} />
                        <EditorialLink href="/Ctran_Resume_v2.pdf" label="Resume" isDark={isDark} />
                        <EditorialLink href="mailto:ctran@alumni.upenn.edu" label="Email" isDark={isDark} />
                    </div>
                </div>
            </div>
        </section>
    );
};

const EditorialLink = ({ href, label, isDark }) => (
    <a
        href={href}
        target={href.startsWith('mailto') ? undefined : "_blank"}
        rel={href.startsWith('mailto') ? undefined : "noopener noreferrer"}
        className={`inline-flex items-center transition-colors pb-0.5 border-b ${
            isDark
                ? 'text-[#8E8D86] hover:text-[#F5F3EC] border-transparent hover:border-[#F5F3EC]'
                : 'text-[#75746E] hover:text-[#1C1C1A] border-transparent hover:border-[#1C1C1A]'
        }`}
    >
        {label}
        <ArrowUpRight size={12} className="ml-1 opacity-60" />
    </a>
);

export default HeroSection;
