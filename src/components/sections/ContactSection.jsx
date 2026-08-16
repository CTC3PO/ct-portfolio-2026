import React, { useState } from 'react';
import { Mail, Github, Linkedin, FileText, Send, MessageCircle } from 'lucide-react';

const ContactSection = ({ isDark }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const subject = `Portfolio Contact from ${formData.name}`;
        const body = `Hello Chau,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`;
        const mailtoLink = `mailto:ctran@alumni.upenn.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-28 md:py-36 px-6 border-t border-neutral-200/60 dark:border-slate-800/80">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3 ${
                        isDark ? 'text-white' : 'text-neutral-900'
                    }`}>
                        Let's Connect
                    </h2>
                    <p className={`text-base md:text-lg max-w-2xl mx-auto ${
                        isDark ? 'text-slate-400' : 'text-neutral-600'
                    }`}>
                        I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
                    </p>
                </div>

                <div className={`grid md:grid-cols-2 rounded-2xl border transition-colors overflow-hidden ${
                    isDark ? 'bg-[#151D2A] border-slate-800/80' : 'bg-white border-neutral-200/80 shadow-sm'
                }`}>
                    {/* Left: Get in Touch */}
                    <div className="p-8 md:p-12 flex flex-col justify-between">
                        <div>
                            <h3 className={`text-2xl font-bold mb-8 flex items-center ${
                                isDark ? 'text-blue-400' : 'text-blue-600'
                            }`}>
                                <MessageCircle size={24} className="mr-3" />
                                Get in Touch
                            </h3>

                            <div className="space-y-5">
                                <ContactLink
                                    icon={<Mail size={18} />}
                                    text="ctran@alumni.upenn.edu"
                                    href="mailto:ctran@alumni.upenn.edu"
                                    isDark={isDark}
                                />
                                <ContactLink
                                    icon={<Github size={18} />}
                                    text="github.com/CTC3PO"
                                    href="https://github.com/CTC3PO"
                                    isDark={isDark}
                                />
                                <ContactLink
                                    icon={<Linkedin size={18} />}
                                    text="linkedin.com/in/chautrancmt26"
                                    href="https://www.linkedin.com/in/chautrancmt26/"
                                    isDark={isDark}
                                />
                                <ContactLink
                                    icon={<FileText size={18} />}
                                    text="Resume"
                                    href="/Ctran_Resume_v2.pdf"
                                    isDark={isDark}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right: Message Form */}
                    <div className={`p-8 md:p-12 border-t md:border-t-0 md:border-l ${
                        isDark ? 'bg-[#111824] border-slate-800/80' : 'bg-neutral-50/60 border-neutral-200/80'
                    }`}>
                        <form onSubmit={handleFormSubmit} className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleFormChange}
                                    placeholder="Your Name"
                                    required
                                    className={`w-full px-4 py-3 rounded-xl text-sm border outline-none transition-colors ${
                                        isDark
                                            ? 'bg-slate-900/80 border-slate-700 text-white placeholder-slate-500 focus:border-blue-500'
                                            : 'bg-white border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-neutral-900'
                                    }`}
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleFormChange}
                                    placeholder="Your Email"
                                    required
                                    className={`w-full px-4 py-3 rounded-xl text-sm border outline-none transition-colors ${
                                        isDark
                                            ? 'bg-slate-900/80 border-slate-700 text-white placeholder-slate-500 focus:border-blue-500'
                                            : 'bg-white border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-neutral-900'
                                    }`}
                                />
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleFormChange}
                                    placeholder="Your Message..."
                                    required
                                    rows="4"
                                    className={`w-full px-4 py-3 rounded-xl text-sm border outline-none transition-colors resize-none ${
                                        isDark
                                            ? 'bg-slate-900/80 border-slate-700 text-white placeholder-slate-500 focus:border-blue-500'
                                            : 'bg-white border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-neutral-900'
                                    }`}
                                />
                            </div>

                            <button
                                type="submit"
                                className={`w-full py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-center cursor-pointer active:scale-98 shadow-sm ${
                                    isDark
                                        ? 'bg-white text-slate-900 hover:bg-slate-100'
                                        : 'bg-neutral-900 text-white hover:bg-neutral-800'
                                }`}
                            >
                                <Send size={16} className="mr-2" />
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
        <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>{icon}</span>
        <span className="text-sm font-medium truncate">{text}</span>
    </a>
);

export default ContactSection;
