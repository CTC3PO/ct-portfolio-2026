import React from 'react';
import { categorizedSkills, bioData } from '../../data/projects';
import { Layers, Globe, Cpu, Wrench } from 'lucide-react';

const categoryIcons = {
    "Spatial & 3D": <Layers size={18} className="text-blue-500" />,
    "Full-Stack Web": <Globe size={18} className="text-teal-500" />,
    "AI & Data Science": <Cpu size={18} className="text-indigo-500" />,
    "Cloud & Tools": <Wrench size={18} className="text-slate-500 dark:text-slate-400" />
};

const AboutSection = ({ isDark }) => {
    return (
        <section id="about" className="py-28 md:py-36 px-6 border-t border-neutral-200/60 dark:border-slate-800/80">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16">
                    <span className={`text-xs font-bold uppercase tracking-wider mb-2 block ${
                        isDark ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                        Background & Philosophy
                    </span>
                    <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight ${
                        isDark ? 'text-white' : 'text-neutral-900'
                    }`}>
                        About Me
                    </h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    {/* Left Column: Narrative Story */}
                    <div className="lg:col-span-7 space-y-6">
                        {bioData.aboutStory.map((paragraph, idx) => (
                            <p
                                key={idx}
                                className={`text-base md:text-lg leading-relaxed font-normal ${
                                    isDark ? 'text-slate-300' : 'text-neutral-600'
                                }`}
                            >
                                {paragraph}
                            </p>
                        ))}

                        {/* Focus Pillars */}
                        <div className="pt-6 grid sm:grid-cols-2 gap-4">
                            <div className={`p-5 rounded-xl border transition-colors ${
                                isDark ? 'bg-[#141B28] border-slate-800/80' : 'bg-neutral-50 border-neutral-200/80'
                            }`}>
                                <h4 className={`text-sm font-bold mb-1 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                                    Urban Planning Heritage
                                </h4>
                                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-neutral-500'}`}>
                                    Deep experience modeling zoning resolutions, land use, and geospatial data for NYC city planning.
                                </p>
                            </div>

                            <div className={`p-5 rounded-xl border transition-colors ${
                                isDark ? 'bg-[#141B28] border-slate-800/80' : 'bg-neutral-50 border-neutral-200/80'
                            }`}>
                                <h4 className={`text-sm font-bold mb-1 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                                    Technical Breadth
                                </h4>
                                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-neutral-500'}`}>
                                    Full-stack architecture from React/Next.js frontend to 3D rendering (Three.js/Unreal) and ML training.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Categorized Technical Skills */}
                    <div className="lg:col-span-5 space-y-6">
                        <h3 className={`text-xl font-bold tracking-tight mb-6 ${
                            isDark ? 'text-white' : 'text-neutral-900'
                        }`}>
                            Technical Stack
                        </h3>

                        <div className="space-y-4">
                            {Object.entries(categorizedSkills).map(([category, items]) => (
                                <div
                                    key={category}
                                    className={`p-5 rounded-xl border transition-colors ${
                                        isDark
                                            ? 'bg-[#141B28] border-slate-800/80'
                                            : 'bg-white border-neutral-200/80'
                                    }`}
                                >
                                    <div className="flex items-center space-x-2 mb-3">
                                        {categoryIcons[category]}
                                        <span className={`text-sm font-bold tracking-tight ${
                                            isDark ? 'text-slate-200' : 'text-neutral-800'
                                        }`}>
                                            {category}
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {items.map((skill) => (
                                            <span
                                                key={skill}
                                                className={`text-xs font-medium px-2.5 py-1 rounded-md ${
                                                    isDark
                                                        ? 'bg-slate-800/90 text-slate-300 border border-slate-700/60'
                                                        : 'bg-neutral-100 text-neutral-700 border border-neutral-200/60'
                                                }`}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
