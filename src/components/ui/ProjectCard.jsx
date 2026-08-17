import React from 'react';
import { Github, ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project, isDark }) => {
    const isDualImage = Array.isArray(project.image);

    return (
        <article
            className={`group rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col ${
                isDark
                    ? 'bg-[#242A34] border-[#363E4D] hover:border-[#4E586A] hover:shadow-2xl hover:shadow-black/20'
                    : 'bg-white border-[#EDE8DE] hover:border-[#DDD6C8] hover:shadow-2xl hover:shadow-[#1E1D1A]/4'
            }`}
        >
            {/* Project Image Container */}
            <div className={`relative w-full overflow-hidden aspect-[16/10] border-b ${
                isDark ? 'bg-[#181C23] border-[#363E4D]' : 'bg-[#F2ECE1] border-[#EDE8DE]'
            }`}>
                {isDualImage ? (
                    <div className="w-full h-full grid grid-cols-2 gap-1.5 p-3 bg-neutral-900/10">
                        {project.image.map((img, idx) => (
                            <div key={idx} className="w-full h-full rounded-xl overflow-hidden bg-neutral-900/20">
                                <img
                                    src={img}
                                    alt={`${project.title} screenshot ${idx + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    onError={(e) => {
                                        e.target.src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop';
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                ) : (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                            e.target.src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop';
                        }}
                    />
                )}
            </div>

            {/* Content Area */}
            <div className="p-8 md:p-10 flex-1 flex flex-col justify-between">
                <div>
                    <h3 className={`text-2xl md:text-3xl font-bold tracking-tight mb-3 transition-colors ${
                        isDark ? 'text-[#C89B6D] group-hover:text-[#DEB288]' : 'text-[#7A4623] group-hover:text-[#5A3115]'
                    }`}>
                        {project.title}
                    </h3>

                    <p className={`text-base leading-relaxed mb-8 font-normal ${
                        isDark ? 'text-[#CBD2DC]' : 'text-[#55524B]'
                    }`}>
                        {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map((tech) => (
                            <span
                                key={tech}
                                className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-colors ${
                                    isDark
                                        ? 'bg-[#1C2026] text-[#CBD2DC] border border-[#363E4D]'
                                        : 'bg-[#F7F4EC] text-[#523A2A] border border-[#E5DEC8]'
                                }`}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Action Links */}
                <div className={`pt-6 border-t flex items-center space-x-6 ${
                    isDark ? 'border-[#363E4D]' : 'border-[#EDE8DE]'
                }`}>
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center text-sm font-semibold transition-colors ${
                                isDark
                                    ? 'text-[#F0F2F5] hover:text-[#C89B6D]'
                                    : 'text-[#1E1D1A] hover:text-[#7A4623]'
                            }`}
                        >
                            {project.title.includes('Virtual') ? 'Watch Demo' : 'Live Demo'}
                            <ArrowUpRight size={16} className="ml-1" />
                        </a>
                    )}

                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center text-sm font-medium transition-colors ${
                                isDark
                                    ? 'text-[#9BA1AD] hover:text-white'
                                    : 'text-[#68655E] hover:text-[#7A4623]'
                            }`}
                        >
                            <Github size={15} className="mr-1.5" />
                            Source Code
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;
