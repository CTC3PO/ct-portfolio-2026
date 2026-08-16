import React from 'react';
import { Github, Linkedin, FileText, Mail, ArrowDown } from 'lucide-react';
import { bioData } from '../../data/projects';

const HeroSection = ({ isDark, scrollToSection }) => {
    return (
        <section id="home" className="pt-36 pb-24 md:pt-48 md:pb-36 px-6 relative">
            <div className="max-w-4xl mx-auto">
                {/* Location / Status Pill */}
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full mb-8 text-xs font-medium border transition-colors duration-200 border-neutral-200 dark:border-slate-800 bg-neutral-50 dark:bg-slate-800/50 text-neutral-600 dark:text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Based in Philadelphia & NYC</span>
                    <span className="text-neutral-400 dark:text-slate-500">•</span>
                    <span>Open to Opportunities</span>
                </div>

                {/* Main Headline */}
                <h1 className={`text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.08] ${
                    isDark ? 'text-white' : 'text-neutral-900'
                }`}>
                    {bioData.name}
                </h1>

                {/* Subtitle */}
                <h2 className={`text-2xl sm:text-3xl md:text-3xl font-medium tracking-tight mb-8 ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                }`}>
                    {bioData.title}
                </h2>

                {/* Narrative Summary */}
                <p className={`text-lg sm:text-xl md:text-xl leading-relaxed mb-12 max-w-3xl font-normal ${
                    isDark ? 'text-slate-300' : 'text-neutral-600'
                }`}>
                    Full-stack developer with a background in urban systems at the <span className="font-semibold text-neutral-900 dark:text-white">NYC Department of City Planning</span>, completing a Master's in IT at the <span className="font-semibold text-neutral-900 dark:text-white">University of Pennsylvania</span>. Crafting high-utility web applications, 3D spatial platforms, and intelligent machine learning systems.
                </p>

                {/* CTAs and Social Links */}
                <div className="flex flex-col sm:flex-row sm:items-center space-y-6 sm:space-y-0 sm:space-x-8">
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => scrollToSection('projects')}
                            className={`inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer shadow-sm active:scale-95 ${
                                isDark
                                    ? 'bg-white text-slate-900 hover:bg-slate-100'
                                    : 'bg-neutral-900 text-white hover:bg-neutral-800'
                            }`}
                        >
                            View Selected Work
                            <ArrowDown size={16} className="ml-2" />
                        </button>

                        <button
                            onClick={() => scrollToSection('contact')}
                            className={`inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium border transition-all duration-200 cursor-pointer active:scale-95 ${
                                isDark
                                    ? 'border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-slate-600'
                                    : 'border-neutral-300 text-neutral-800 hover:bg-neutral-100 hover:border-neutral-400'
                            }`}
                        >
                            Get in Touch
                        </button>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center space-x-5 pt-2 sm:pt-0 border-t sm:border-t-0 border-neutral-200 dark:border-slate-800">
                        <SocialIcon
                            href={bioData.socials.github}
                            icon={<Github size={20} />}
                            label="GitHub"
                            isDark={isDark}
                        />
                        <SocialIcon
                            href={bioData.socials.linkedin}
                            icon={<Linkedin size={20} />}
                            label="LinkedIn"
                            isDark={isDark}
                        />
                        <SocialIcon
                            href={bioData.socials.resume}
                            icon={<FileText size={20} />}
                            label="Resume"
                            isDark={isDark}
                        />
                        <SocialIcon
                            href={`mailto:${bioData.socials.email}`}
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
                ? 'text-slate-400 hover:text-white hover:bg-slate-800/80'
                : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100'
        }`}
    >
        {icon}
    </a>
);

export default HeroSection;
