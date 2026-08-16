import React, { useState } from 'react';
import { Mail, Github, Linkedin, FileText, Send, Check, Copy } from 'lucide-react';
import { bioData } from '../../data/projects';

const ContactSection = ({ isDark }) => {
    const [copied, setCopied] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const copyEmail = () => {
        navigator.clipboard.writeText(bioData.socials.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const subject = `Portfolio Inquiry from ${formData.name}`;
        const body = `Hello Chau,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`;
        const mailtoLink = `mailto:${bioData.socials.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-28 md:py-36 px-6 border-t border-neutral-200/60 dark:border-slate-800/80">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <span className={`text-xs font-bold uppercase tracking-wider mb-2 block ${
                        isDark ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                        Get In Touch
                    </span>
                    <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 ${
                        isDark ? 'text-white' : 'text-neutral-900'
                    }`}>
                        Let's Connect
                    </h2>
                    <p className={`text-base md:text-lg max-w-xl mx-auto ${
                        isDark ? 'text-slate-400' : 'text-neutral-600'
                    }`}>
                        Open to full-time opportunities, collaborations in spatial computing, and technical discussions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Left: Contact Info & Quick Actions */}
                    <div className="flex flex-col justify-between space-y-8">
                        <div>
                            <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                                Direct Contact
                            </h3>
                            <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-neutral-600'}`}>
                                Feel free to reach out directly via email or connect on professional platforms.
                            </p>

                            {/* 1-Click Email Copy Card */}
                            <div className={`p-4 rounded-xl border flex items-center justify-between transition-colors mb-6 ${
                                isDark ? 'bg-[#141B28] border-slate-800/80' : 'bg-neutral-50 border-neutral-200/80'
                            }`}>
                                <div className="flex items-center space-x-3 overflow-hidden">
                                    <Mail size={18} className="text-blue-500 shrink-0" />
                                    <span className={`text-sm font-medium truncate ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                                        {bioData.socials.email}
                                    </span>
                                </div>
                                <button
                                    onClick={copyEmail}
                                    className={`inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer shrink-0 ml-3 ${
                                        copied
                                            ? 'bg-emerald-500 text-white'
                                            : isDark
                                                ? 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                                                : 'bg-white text-neutral-800 border border-neutral-200 hover:bg-neutral-100 shadow-xs'
                                    }`}
                                >
                                    {copied ? (
                                        <>
                                            <Check size={12} className="mr-1" />
                                            Copied!
                                        </>
                                    ) : (
                                        <>
                                            <Copy size={12} className="mr-1" />
                                            Copy
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Social Links List */}
                        <div className="space-y-3">
                            <ContactLink
                                icon={<Linkedin size={18} />}
                                label="LinkedIn"
                                text="linkedin.com/in/chautrancmt26"
                                href={bioData.socials.linkedin}
                                isDark={isDark}
                            />
                            <ContactLink
                                icon={<Github size={18} />}
                                label="GitHub"
                                text="github.com/CTC3PO"
                                href={bioData.socials.github}
                                isDark={isDark}
                            />
                            <ContactLink
                                icon={<FileText size={18} />}
                                label="Resume"
                                text="View Resume (PDF)"
                                href={bioData.socials.resume}
                                isDark={isDark}
                            />
                        </div>
                    </div>

                    {/* Right: Clean Inquiry Form */}
                    <div className={`p-8 rounded-2xl border transition-colors ${
                        isDark ? 'bg-[#141B28] border-slate-800/80' : 'bg-white border-neutral-200/80 shadow-sm'
                    }`}>
                        <h3 className={`text-lg font-bold mb-6 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                            Send a Message
                        </h3>

                        <form onSubmit={handleFormSubmit} className="space-y-4">
                            <div>
                                <label className={`block text-xs font-medium mb-1.5 ${isDark ? 'text-slate-300' : 'text-neutral-700'}`}>
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleFormChange}
                                    placeholder="Jane Doe"
                                    required
                                    className={`w-full px-4 py-2.5 rounded-lg text-sm border outline-none transition-colors ${
                                        isDark
                                            ? 'bg-slate-900/80 border-slate-700 text-white placeholder-slate-500 focus:border-blue-500'
                                            : 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-neutral-900'
                                    }`}
                                />
                            </div>

                            <div>
                                <label className={`block text-xs font-medium mb-1.5 ${isDark ? 'text-slate-300' : 'text-neutral-700'}`}>
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleFormChange}
                                    placeholder="jane@example.com"
                                    required
                                    className={`w-full px-4 py-2.5 rounded-lg text-sm border outline-none transition-colors ${
                                        isDark
                                            ? 'bg-slate-900/80 border-slate-700 text-white placeholder-slate-500 focus:border-blue-500'
                                            : 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-neutral-900'
                                    }`}
                                />
                            </div>

                            <div>
                                <label className={`block text-xs font-medium mb-1.5 ${isDark ? 'text-slate-300' : 'text-neutral-700'}`}>
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleFormChange}
                                    placeholder="Hi Chau, I'd like to talk about..."
                                    required
                                    rows="4"
                                    className={`w-full px-4 py-2.5 rounded-lg text-sm border outline-none transition-colors resize-none ${
                                        isDark
                                            ? 'bg-slate-900/80 border-slate-700 text-white placeholder-slate-500 focus:border-blue-500'
                                            : 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-neutral-900'
                                    }`}
                                />
                            </div>

                            <button
                                type="submit"
                                className={`w-full py-3 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center justify-center cursor-pointer active:scale-98 ${
                                    isDark
                                        ? 'bg-white text-slate-900 hover:bg-slate-100'
                                        : 'bg-neutral-900 text-white hover:bg-neutral-800'
                                }`}
                            >
                                <Send size={15} className="mr-2" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ContactLink = ({ icon, text, href, isDark }) => (
    <a
        href={href}
        target={href.startsWith('mailto') ? undefined : "_blank"}
        rel={href.startsWith('mailto') ? undefined : "noopener noreferrer"}
        className={`flex items-center space-x-3 p-3 rounded-xl border transition-colors ${
            isDark
                ? 'border-slate-800/80 hover:bg-slate-800/60 text-slate-300 hover:text-white'
                : 'border-neutral-200/80 hover:bg-neutral-50 text-neutral-700 hover:text-neutral-900'
        }`}
    >
        <span className="text-blue-500">{icon}</span>
        <span className="text-xs font-medium truncate">{text}</span>
    </a>
);

export default ContactSection;
