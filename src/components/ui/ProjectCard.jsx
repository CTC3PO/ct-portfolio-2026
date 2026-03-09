import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, isDark }) => {
    return (
        <div
            className={`rounded-xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 shadow-lg border backdrop-blur-sm ${isDark
                    ? 'bg-gray-800/80 border-gray-700 hover:shadow-blue-500/20'
                    : 'bg-white/90 border-gray-200 hover:shadow-xl'
                }`}
        >
            <div className="h-48 bg-gradient-to-br from-blue-500 to-teal-500 relative overflow-hidden group">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                        // Fallback if image not found
                        e.target.src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop';
                    }}
                />
                {project.featured && (
                    <div className="absolute top-3 right-3 shadow-md">
                        <span className="bg-yellow-400 text-yellow-900 text-xs px-2 py-1 rounded-full font-bold tracking-wide">
                            Featured
                        </span>
                    </div>
                )}
            </div>
            <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                </h3>
                <p className={`mb-4 text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                        <span
                            key={tech}
                            className={`text-xs px-2 py-1 rounded-full font-medium ${isDark
                                    ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                                    : 'bg-blue-50 text-blue-700 border border-blue-200'
                                }`}
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex space-x-4 mt-auto pt-2">
                    {project.github && project.github !== "(private)" && (
                        <a
                            href={project.github}
                            className={`flex items-center text-sm font-medium hover:text-blue-600 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'
                                }`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Github size={16} className="mr-2" />
                            Code
                        </a>
                    )}
                    {project.github === "(private)" && (
                        <span
                            className={`flex items-center text-sm font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'
                                }`}
                            title="Repository is private"
                        >
                            <Github size={16} className="mr-2" />
                            Code
                        </span>
                    )}
                    {project.live && (
                        <a
                            href={project.live}
                            className={`flex items-center text-sm font-medium hover:text-blue-600 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-600'
                                }`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ExternalLink size={16} className="mr-2" />
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
