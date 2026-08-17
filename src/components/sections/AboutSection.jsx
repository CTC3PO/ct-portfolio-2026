import React from 'react';
import { skills } from '../../data/projects';

const AboutSection = ({ isDark }) => {
    return (
        <section id="about" className={`py-36 md:py-48 px-6 border-t ${
            isDark ? 'border-[#2D333F]' : 'border-[#EDE8DE]'
        }`}>
            <div className="max-w-6xl mx-auto">
                <div className="mb-20">
                    <h2 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 ${
                        isDark ? 'text-[#F0F2F5]' : 'text-[#1E1D1A]'
                    }`}>
                        About Me
                    </h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                    {/* Left Column: My Story (Open, unboxed narrative) */}
                    <div className="lg:col-span-7 space-y-8">
                        <h3 className={`text-2xl font-bold tracking-tight mb-6 ${
                            isDark ? 'text-[#C89B6D]' : 'text-[#7A4623]'
                        }`}>
                            My Story
                        </h3>
                        <div className="space-y-6">
                            <p className={`leading-relaxed text-lg md:text-xl font-normal ${
                                isDark ? 'text-[#CBD2DC]' : 'text-[#55524B]'
                            }`}>
                                I'm a full-stack developer with a unique background in urban planning at the NYC Department of City Planning, now pursuing a Master's in Information Technology at the University of Pennsylvania.
                            </p>
                            <p className={`leading-relaxed text-lg md:text-xl font-normal ${
                                isDark ? 'text-[#CBD2DC]' : 'text-[#55524B]'
                            }`}>
                                My technical focus spans modern web development, 3D interactive applications, and machine learning. Through my projects, I've demonstrated the ability to build scalable interfaces with React and Next.js, render 3D environments using Three.js and Unreal Engine, and design intelligent systems leveraging generative AI and reinforcement learning.
                            </p>
                            <p className={`leading-relaxed text-lg md:text-xl font-normal ${
                                isDark ? 'text-[#CBD2DC]' : 'text-[#55524B]'
                            }`}>
                                When not coding, I explore new tech trends, practice urban sketching, and enjoy outdoor adventures with my Australian cattle dog.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Technical Skills (Airy, unboxed tags) */}
                    <div className="lg:col-span-5 space-y-6">
                        <h3 className={`text-2xl font-bold tracking-tight mb-6 ${
                            isDark ? 'text-[#C89B6D]' : 'text-[#7A4623]'
                        }`}>
                            Technical Skills
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                                        isDark
                                            ? 'bg-[#242A34] text-[#CBD2DC] border border-[#363E4D] hover:border-[#C89B6D]/50 hover:text-[#C89B6D]'
                                            : 'bg-white text-[#3E3C36] border border-[#EDE8DE] hover:border-[#7A4623]/40 hover:text-[#7A4623] shadow-xs'
                                    }`}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
