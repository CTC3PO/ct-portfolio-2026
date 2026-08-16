import React from 'react';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/projects';

const ProjectsSection = ({ isDark }) => {
    return (
        <section id="projects" className={`py-28 md:py-36 px-6 border-t ${
            isDark ? 'border-[#333945]' : 'border-[#E6E1D5]'
        }`}>
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="mb-16">
                    <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3 ${
                        isDark ? 'text-[#F0F2F5]' : 'text-[#1E1D1A]'
                    }`}>
                        Featured Projects
                    </h2>
                    <p className={`text-base md:text-lg max-w-2xl ${
                        isDark ? 'text-[#9BA1AD]' : 'text-[#68655E]'
                    }`}>
                        Here are some of my recent projects that showcase my skills and passion for development
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-10">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.title}
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
