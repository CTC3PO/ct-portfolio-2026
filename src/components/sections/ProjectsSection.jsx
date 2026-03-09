import React, { useState } from 'react';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/projects';

const ProjectsSection = ({ isDark }) => {
    const [showAllProjects, setShowAllProjects] = useState(false);
    const displayedProjects = showAllProjects ? projects : projects.slice(0, 6);

    return (
        <section id="projects" className={`py-20 px-6 ${isDark ? '' : ''}`}>
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent transform transition-all hover:scale-105 duration-300">
                        Featured Projects
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6 rounded-full"></div>
                    <p className={`max-w-2xl mx-auto text-lg ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        Here are some of my recent projects that showcase my skills and passion for development
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid gap-8 mb-12">
                    {/* First 6 projects (2 rows of 3) */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {displayedProjects.slice(0, 6).map((project) => (
                            <ProjectCard key={project.title} project={project} isDark={isDark} />
                        ))}
                    </div>

                    {/* Additional projects */}
                    {showAllProjects && displayedProjects.length > 6 && (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 fade-in-up">
                            {displayedProjects.slice(6).map((project) => (
                                <ProjectCard key={project.title} project={project} isDark={isDark} />
                            ))}
                        </div>
                    )}
                </div>

                {/* Show More/Less Button */}
                {projects.length > 6 && (
                    <div className="text-center mt-12">
                        <button
                            onClick={() => setShowAllProjects(!showAllProjects)}
                            className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-white shadow-lg shadow-blue-500/30"
                        >
                            {showAllProjects ? 'Show Less' : `Show All Projects (${projects.length})`}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectsSection;
