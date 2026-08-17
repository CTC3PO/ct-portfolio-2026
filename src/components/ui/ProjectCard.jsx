import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';

const ProjectCard = ({ project, isDark }) => {
    const isDualImage = Array.isArray(project.image);

    return (
        <article
            className={`group border transition-colors flex flex-col justify-between ${
                isDark
                    ? 'border-[#2E2C28] bg-[#1E1D1A]/50 hover:border-[#4A4740]'
                    : 'border-[#DDD9CE] bg-[#F2EFE7]/50 hover:border-[#B5B0A2]'
            }`}
        >
            {/* Image Container */}
            <div className={`relative w-full aspect-[16/10] overflow-hidden border-b ${
                isDark ? 'border-[#2E2C28] bg-[#141413]' : 'border-[#DDD9CE] bg-[#EAE6DC]'
            }`}>
                {isDualImage ? (
                    <div className="w-full h-full grid grid-cols-2 gap-1 p-2">
                        {project.image.map((img, idx) => (
                            <div key={idx} className="w-full h-full overflow-hidden border border-black/10">
                                <img
                                    src={img}
                                    alt={`${project.title} screenshot ${idx + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
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
                        className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                        onError={(e) => {
                            e.target.src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop';
                        }}
                    />
                )}
            </div>

            {/* Content Area */}
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                    <h3 className={`text-xl md:text-2xl font-bold tracking-tight mb-3 transition-colors ${
                        isDark ? 'text-[#C89B6D] group-hover:text-[#DEB288]' : 'text-[#7A4623] group-hover:text-[#5A3115]'
                    }`}>
                        {project.title}
                    </h3>

                    <p className={`text-sm md:text-base leading-relaxed mb-6 font-normal ${
                        isDark ? 'text-[#D0CDC4]' : 'text-[#5A5852]'
                    }`}>
                        {project.description}
                    </p>

                    {/* Small-Caps Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                            <span
                                key={tech}
                                className={`text-[11px] font-semibold tracking-[0.1em] uppercase px-2.5 py-1 border ${
                                    isDark
                                        ? 'border-[#2E2C28] text-[#D0CDC4] bg-[#191816]'
                                        : 'border-[#DDD9CE] text-[#3E3D38] bg-[#F6F4EE]'
                                }`}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Links */}
                <div className={`pt-4 border-t flex items-center space-x-6 text-xs font-semibold tracking-[0.15em] uppercase ${
                    isDark ? 'border-[#2E2C28]' : 'border-[#DDD9CE]'
                }`}>
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center transition-colors ${
                                isDark ? 'text-[#F5F3EC] hover:text-[#C89B6D]' : 'text-[#1C1C1A] hover:text-[#7A4623]'
                            }`}
                        >
                            {project.title.includes('Virtual') ? 'Watch Demo' : 'Live Demo'}
                            <ArrowUpRight size={14} className="ml-1" />
                        </a>
                    )}

                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center transition-colors ${
                                isDark ? 'text-[#8E8D86] hover:text-[#F5F3EC]' : 'text-[#75746E] hover:text-[#1C1C1A]'
                            }`}
                        >
                            <Github size={14} className="mr-1.5" />
                            Source Code
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;
