import React from 'react';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/projects';

const ProjectsSection = ({ isDark }) => {
    return (
        <section id="projects" className={`py-24 md:py-32 px-6 border-t ${
            isDark ? 'border-[#2E2C28]' : 'border-[#DDD9CE]'
        }`}>
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="mb-16">
                    <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase mb-3 ${
                        isDark ? 'text-[#F5F3EC]' : 'text-[#1C1C1A]'
                    }`}>
                        Featured Projects
                    </h2>
                    <p className={`text-base md:text-lg max-w-2xl font-normal ${
                        isDark ? 'text-[#8E8D86]' : 'text-[#75746E]'
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
