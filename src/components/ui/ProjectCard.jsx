import React from 'react';
import { Github, ArrowUpRight, Play } from 'lucide-react';

const ProjectCard = ({ project, isDark }) => {
    const isDualImage = Array.isArray(project.image);

    return (
        <article
            className={`group rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col ${
                isDark
                    ? 'bg-[#141B28] border-slate-800/80 hover:border-slate-700 hover:shadow-xl hover:shadow-black/20'
                    : 'bg-white border-neutral-200/80 hover:border-neutral-300 hover:shadow-xl hover:shadow-neutral-900/5'
            }`}
        >
            {/* Project Image Container */}
            <div className={`relative w-full overflow-hidden aspect-[16/10] border-b ${
                isDark ? 'bg-slate-900 border-slate-800/80' : 'bg-neutral-100 border-neutral-200/60'
            }`}>
                {isDualImage ? (
                    <div className="w-full h-full grid grid-cols-2 gap-1 p-2 bg-neutral-900/20">
                        {project.image.map((img, idx) => (
                            <div key={idx} className="w-full h-full rounded-lg overflow-hidden bg-neutral-900/50">
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

                {/* Subtle category badge overlay */}
                {project.category && (
                    <div className="absolute top-3 left-3">
                        <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-md ${
                            isDark
                                ? 'bg-slate-900/80 text-slate-300 border border-slate-700/50'
                                : 'bg-white/90 text-neutral-700 border border-neutral-200/80 shadow-xs'
                        }`}>
                            {project.category}
                        </span>
                    </div>
                )}
            </div>

            {/* Content Area */}
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                    <h3 className={`text-xl md:text-2xl font-bold tracking-tight mb-2 transition-colors ${
                        isDark ? 'text-white group-hover:text-blue-400' : 'text-neutral-900 group-hover:text-blue-600'
                    }`}>
                        {project.title}
                    </h3>

                    {project.tagline && (
                        <p className={`text-xs font-medium uppercase tracking-wider mb-4 ${
                            isDark ? 'text-blue-400/90' : 'text-blue-600/90'
                        }`}>
                            {project.tagline}
                        </p>
                    )}

                    <p className={`text-sm md:text-base leading-relaxed mb-6 font-normal ${
                        isDark ? 'text-slate-300' : 'text-neutral-600'
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
                                        ? 'bg-slate-800/80 text-slate-300 border border-slate-700/60'
                                        : 'bg-neutral-100 text-neutral-700 border border-neutral-200/60'
                                }`}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Action Links */}
                <div className={`pt-4 border-t flex items-center space-x-5 ${
                    isDark ? 'border-slate-800/80' : 'border-neutral-200/60'
                }`}>
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center text-sm font-semibold transition-colors ${
                                isDark
                                    ? 'text-white hover:text-blue-400'
                                    : 'text-neutral-900 hover:text-blue-600'
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
                                    ? 'text-slate-400 hover:text-white'
                                    : 'text-neutral-500 hover:text-neutral-900'
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
