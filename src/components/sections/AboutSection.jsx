import React from 'react';
import { User, Code } from 'lucide-react';
import { skills } from '../../data/projects';

const AboutSection = ({ isDark }) => {
    return (
        <section id="about" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-stretch">
                    <div className={`p-10 rounded-3xl shadow-lg transition-all duration-300 border ${isDark ? 'bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50' : 'bg-white border-white hover:shadow-xl'
                        }`}>
                        <h3 className="text-2xl font-bold mb-6 text-blue-600 flex items-center">
                            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 mr-4">
                                <User className="text-blue-600 dark:text-blue-400" size={24} />
                            </div>
                            My Story
                        </h3>
                        <div className="space-y-6">
                            <p className={`leading-relaxed text-[1.05rem] ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                                I'm a full-stack developer with a unique background in urban planning at the NYC
                                Department of City Planning, now pursuing a Master's in Information Technology
                                at the University of Pennsylvania.
                            </p>
                            <p className={`leading-relaxed text-[1.05rem] ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                                My technical focus spans modern web development, 3D interactive applications, and machine learning. Through my projects, I've demonstrated the ability to build scalable interfaces with React and Next.js, render 3D environments using Three.js and Unreal Engine, and design intelligent systems leveraging generative AI and reinforcement learning.
                            </p>
                            <p className={`leading-relaxed text-[1.05rem] ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                                When not coding, I explore new tech trends, practice urban sketching, and enjoy outdoor adventures with my Australian cattle dog.
                            </p>
                        </div>
                    </div>

                    <div className={`p-10 rounded-3xl shadow-lg transition-all duration-300 border ${isDark ? 'bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50' : 'bg-white border-white hover:shadow-xl'
                        }`}>
                        <h3 className="text-2xl font-bold mb-6 text-teal-600 flex items-center">
                            <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900/30 mr-4">
                                <Code className="text-teal-600 dark:text-teal-400" size={24} />
                            </div>
                            Technical Skills
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${isDark
                                        ? 'bg-slate-800/80 text-teal-300 border border-slate-700/50 hover:border-teal-400/50'
                                        : 'bg-teal-50/50 text-teal-800 border border-teal-100 hover:border-teal-300 hover:shadow-sm'
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
