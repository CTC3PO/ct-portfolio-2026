import React from 'react';
import { Github, ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project, isDark }) => {
    const isDualImage = Array.isArray(project.image);

    return (
        <article
            className={`group rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col ${
                isDark
                    ? 'bg-[#282D36] border-[#3A4250] hover:border-[#4E586A] hover:shadow-xl hover:shadow-black/20'
                    : 'bg-white border-[#E6E1D5] hover:border-[#CCC5B4] hover:shadow-xl hover:shadow-[#1E1D1A]/5'
            }`}
        >
            {/* Project Image Container */}
            <div className={`relative w-full overflow-hidden aspect-[16/10] border-b ${
                isDark ? 'bg-[#1B1E24] border-[#3A4250]' : 'bg-[#EAE5D8] border-[#E6E1D5]'
            }`}>
                {isDualImage ? (
                    <div className="w-full h-full grid grid-cols-2 gap-1 p-2 bg-neutral-900/10">
                        {project.image.map((img, idx) => (
                            <div key={idx} className="w-full h-full rounded-lg overflow-hidden bg-neutral-900/20">
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
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                    <h3 className={`text-xl md:text-2xl font-bold tracking-tight mb-3 transition-colors ${
                        isDark ? 'text-[#F0F2F5] group-hover:text-[#E5A84B]' : 'text-[#1E1D1A] group-hover:text-[#B45309]'
                    }`}>
                        {project.title}
                    </h3>

                    <p className={`text-sm md:text-base leading-relaxed mb-6 font-normal ${
                        isDark ? 'text-[#CBD2DC]' : 'text-[#55524B]'
                    }`}>
                        {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                            <span
                                key={tech}
                                className={`text-xs font-medium px-2.5 py-1 rounded-md transition-colors ${
                                    isDark
                                        ? 'bg-[#1E2228] text-[#CBD2DC] border border-[#3A4250]'
                                        : 'bg-[#F2EFE8] text-[#4A463D] border border-[#E2DDD0]'
                                }`}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Action Links */}
                <div className={`pt-4 border-t flex items-center space-x-5 ${
                    isDark ? 'border-[#3A4250]' : 'border-[#E6E1D5]'
                }`}>
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center text-sm font-semibold transition-colors ${
                                isDark
                                    ? 'text-[#F0F2F5] hover:text-[#E5A84B]'
                                    : 'text-[#1E1D1A] hover:text-[#B45309]'
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
                                    : 'text-[#68655E] hover:text-[#1E1D1A]'
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
