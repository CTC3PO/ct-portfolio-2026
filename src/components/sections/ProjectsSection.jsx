import React from 'react';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/projects';

const ProjectsSection = ({ isDark }) => {
    return (
        <section id="projects" className={`py-36 md:py-48 px-6 border-t ${
            isDark ? 'border-[#2D333F]' : 'border-[#EDE8DE]'
        }`}>
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="mb-20">
                    <h2 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 ${
                        isDark ? 'text-[#F0F2F5]' : 'text-[#1E1D1A]'
                    }`}>
                        Featured Projects
                    </h2>
                    <p className={`text-lg md:text-xl max-w-2xl font-normal leading-relaxed ${
                        isDark ? 'text-[#9BA1AD]' : 'text-[#68655E]'
                    }`}>
                        Here are some of my recent projects that showcase my skills and passion for development
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-10 md:gap-14">
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
