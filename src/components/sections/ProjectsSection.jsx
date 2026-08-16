import React, { useState } from 'react';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/projects';

const ProjectsSection = ({ isDark }) => {
    const [activeFilter, setActiveFilter] = useState('All');

    const categories = ['All', 'Spatial & 3D', 'Full Stack', 'AI & ML'];

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <section id="projects" className="py-28 md:py-36 px-6 border-t border-neutral-200/60 dark:border-slate-800/80">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <span className={`text-xs font-bold uppercase tracking-wider mb-2 block ${
                            isDark ? 'text-blue-400' : 'text-blue-600'
                        }`}>
                            Portfolio Showcase
                        </span>
                        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight ${
                            isDark ? 'text-white' : 'text-neutral-900'
                        }`}>
                            Featured Work
                        </h2>
                    </div>

                    {/* Filter Pills */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                                    activeFilter === category
                                        ? isDark
                                            ? 'bg-white text-slate-900 shadow-sm'
                                            : 'bg-neutral-900 text-white shadow-sm'
                                        : isDark
                                            ? 'bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/60'
                                            : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900 border border-neutral-200/80'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 2-Column Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-10">
                    {filteredProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            isDark={isDark}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
