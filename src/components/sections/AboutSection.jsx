import React from 'react';
import { User, Code } from 'lucide-react';
import { skills } from '../../data/projects';

const AboutSection = ({ isDark }) => {
    return (
        <section id="about" className="py-28 md:py-36 px-6 border-t border-neutral-200/60 dark:border-slate-800/80">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16">
                    <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3 ${
                        isDark ? 'text-white' : 'text-neutral-900'
                    }`}>
                        About Me
                    </h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
                    {/* Left Column: My Story */}
                    <div className={`lg:col-span-7 p-8 md:p-10 rounded-2xl border transition-colors flex flex-col justify-between ${
                        isDark ? 'bg-[#151D2A] border-slate-800/80' : 'bg-neutral-50/60 border-neutral-200/80'
                    }`}>
                        <div>
                            <h3 className={`text-xl font-bold mb-6 flex items-center ${
                                isDark ? 'text-blue-400' : 'text-blue-600'
                            }`}>
                                <User size={20} className="mr-2.5" />
                                My Story
                            </h3>
                            <div className="space-y-5">
                                <p className={`leading-relaxed text-base md:text-lg ${isDark ? 'text-slate-300' : 'text-neutral-600'}`}>
                                    I'm a full-stack developer with a unique background in urban planning at the NYC Department of City Planning, now pursuing a Master's in Information Technology at the University of Pennsylvania.
                                </p>
                                <p className={`leading-relaxed text-base md:text-lg ${isDark ? 'text-slate-300' : 'text-neutral-600'}`}>
                                    My technical focus spans modern web development, 3D interactive applications, and machine learning. Through my projects, I've demonstrated the ability to build scalable interfaces with React and Next.js, render 3D environments using Three.js and Unreal Engine, and design intelligent systems leveraging generative AI and reinforcement learning.
                                </p>
                                <p className={`leading-relaxed text-base md:text-lg ${isDark ? 'text-slate-300' : 'text-neutral-600'}`}>
                                    When not coding, I explore new tech trends, practice urban sketching, and enjoy outdoor adventures with my Australian cattle dog.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Technical Skills */}
                    <div className={`lg:col-span-5 p-8 md:p-10 rounded-2xl border transition-colors flex flex-col justify-between ${
                        isDark ? 'bg-[#151D2A] border-slate-800/80' : 'bg-neutral-50/60 border-neutral-200/80'
                    }`}>
                        <div>
                            <h3 className={`text-xl font-bold mb-6 flex items-center ${
                                isDark ? 'text-teal-400' : 'text-teal-600'
                            }`}>
                                <Code size={20} className="mr-2.5" />
                                Technical Skills
                            </h3>
                            <div className="flex flex-wrap gap-2.5">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                                            isDark
                                                ? 'bg-slate-800/90 text-slate-200 border border-slate-700/60 hover:border-slate-600'
                                                : 'bg-white text-neutral-800 border border-neutral-200/80 hover:border-neutral-300 shadow-xs'
                                        }`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
