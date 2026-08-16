import React from 'react';
import { skills } from '../../data/projects';

const AboutSection = ({ isDark }) => {
    return (
        <section id="about" className={`py-24 md:py-32 px-6 border-t ${
            isDark ? 'border-[#2E2C28]' : 'border-[#DDD9CE]'
        }`}>
            <div className="max-w-6xl mx-auto">
                <div className="mb-16">
                    <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase ${
                        isDark ? 'text-[#F5F3EC]' : 'text-[#1C1C1A]'
                    }`}>
                        About Me
                    </h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
                    {/* Left Column: My Story */}
                    <div className={`lg:col-span-7 p-8 md:p-10 border transition-colors flex flex-col justify-between ${
                        isDark ? 'bg-[#1E1D1A]/50 border-[#2E2C28]' : 'bg-[#F2EFE7]/50 border-[#DDD9CE]'
                    }`}>
                        <div>
                            <h3 className={`text-xl font-bold tracking-tight mb-6 uppercase ${
                                isDark ? 'text-[#C89B6D]' : 'text-[#7A4623]'
                            }`}>
                                My Story
                            </h3>
                            <div className="space-y-6">
                                <p className={`leading-relaxed text-base md:text-lg ${isDark ? 'text-[#D0CDC4]' : 'text-[#3E3D38]'}`}>
                                    I'm a full-stack developer with a unique background in urban planning at the NYC Department of City Planning, now pursuing a Master's in Information Technology at the University of Pennsylvania.
                                </p>
                                <p className={`leading-relaxed text-base md:text-lg ${isDark ? 'text-[#D0CDC4]' : 'text-[#3E3D38]'}`}>
                                    My technical focus spans modern web development, 3D interactive applications, and machine learning. Through my projects, I've demonstrated the ability to build scalable interfaces with React and Next.js, render 3D environments using Three.js and Unreal Engine, and design intelligent systems leveraging generative AI and reinforcement learning.
                                </p>
                                <p className={`leading-relaxed text-base md:text-lg ${isDark ? 'text-[#D0CDC4]' : 'text-[#3E3D38]'}`}>
                                    When not coding, I explore new tech trends, practice urban sketching, and enjoy outdoor adventures with my Australian cattle dog.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Technical Skills */}
                    <div className={`lg:col-span-5 p-8 md:p-10 border transition-colors flex flex-col justify-between ${
                        isDark ? 'bg-[#1E1D1A]/50 border-[#2E2C28]' : 'bg-[#F2EFE7]/50 border-[#DDD9CE]'
                    }`}>
                        <div>
                            <h3 className={`text-xl font-bold tracking-tight mb-6 uppercase ${
                                isDark ? 'text-[#C89B6D]' : 'text-[#7A4623]'
                            }`}>
                                Technical Skills
                            </h3>
                            <div className="grid grid-cols-3 gap-2">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className={`px-3 py-2 text-[11px] font-semibold tracking-[0.08em] uppercase border text-center leading-tight ${
                                            isDark
                                                ? 'border-[#2E2C28] text-[#F5F3EC] bg-[#191816]'
                                                : 'border-[#DDD9CE] text-[#1C1C1A] bg-[#F6F4EE]'
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
