import React, { useState } from 'react';
import { Mail, Github, Linkedin, MessageCircle, Send, FileText } from 'lucide-react';

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
        const mailtoLink = `mailto:chautrancmt26@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-20 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                        Let's Connect
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6 rounded-full"></div>
                    <p className={`max-w-2xl mx-auto text-lg ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
                    </p>
                </div>

                <div className={`grid md:grid-cols-2 rounded-3xl shadow-xl overflow-hidden transition-all duration-300 border ${isDark ? 'bg-slate-800/40 border-slate-700/50' : 'bg-white border-white'}`}>
                    <div className="p-12">
                        <h3 className="text-3xl font-bold mb-8 text-blue-600 flex items-center">
                            <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 mr-4">
                                <MessageCircle className="text-blue-600 dark:text-blue-400" size={28} />
                            </div>
                            Get in Touch
                        </h3>

                        <div className="space-y-8">
                            <ContactLink
                                icon={<Mail size={24} />}
                                text="chautrancmt26@gmail.com"
                                href="mailto:chautrancmt26@gmail.com"
                                isDark={isDark}
                            />
                            <ContactLink
                                icon={<Github size={24} />}
                                text="github.com/CTC3PO"
                                href="https://github.com/CTC3PO"
                                isDark={isDark}
                            />
                            <ContactLink
                                icon={<Linkedin size={24} />}
                                text="linkedin.com/in/chautrancmt26"
                                href="https://www.linkedin.com/in/chautrancmt26/"
                                isDark={isDark}
                            />
                            <ContactLink
                                icon={<FileText size={24} />}
                                text="Resume"
                                href="https://drive.google.com/open?id=1WfGw3e__WtNQTwTZZvE3IxkYwMsnLONK&usp=drive_fs"
                                isDark={isDark}
                            />
                        </div>
                    </div>
                    <div className={`p-12 ${isDark ? 'bg-slate-800/40 border-l border-slate-700/50' : 'bg-slate-50/50 border-l border-slate-100'}`}>
                        <form onSubmit={handleFormSubmit} className="space-y-6">
                            <div className="relative group">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleFormChange}
                                    placeholder="Your Name"
                                    required
                                    className={`w-full px-5 py-4 rounded-xl outline-none transition-all duration-300 border ${isDark
                                        ? 'bg-slate-700/60 border-transparent text-white placeholder-slate-400 focus:bg-slate-700 focus:border-blue-500'
                                        : 'bg-white border-slate-200 focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.1)]'
                                        }`}
                                />
                            </div>
                            <div className="relative group">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleFormChange}
                                    placeholder="Your Email"
                                    required
                                    className={`w-full px-5 py-4 rounded-xl outline-none transition-all duration-300 border ${isDark
                                        ? 'bg-slate-700/60 border-transparent text-white placeholder-slate-400 focus:bg-slate-700 focus:border-blue-500'
                                        : 'bg-white border-slate-200 focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.1)]'
                                        }`}
                                />
                            </div>
                            <div className="relative group">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleFormChange}
                                    placeholder="Your Message..."
                                    required
                                    rows="4"
                                    className={`w-full px-5 py-4 rounded-xl outline-none transition-all duration-300 resize-none border ${isDark
                                        ? 'bg-slate-700/60 border-transparent text-white placeholder-slate-400 focus:bg-slate-700 focus:border-blue-500'
                                        : 'bg-white border-slate-200 focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.1)]'
                                        }`}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-[1.02] text-white w-full flex items-center justify-center shadow-lg shadow-blue-500/25"
                            >
                                <Send size={20} className="mr-3" />
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
    <div className="flex items-center group cursor-pointer p-4 rounded-xl transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800/60">
        <div className="mr-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
            {icon}
        </div>
        <a
            href={href}
            target={href.startsWith('mailto') ? undefined : "_blank"}
            rel={href.startsWith('mailto') ? undefined : "noopener noreferrer"}
            className={`text-lg font-medium transition-colors duration-300 ${isDark ? 'text-slate-300 group-hover:text-white' : 'text-slate-600 group-hover:text-slate-900'
                }`}
        >
            {text}
        </a>
    </div>
);

export default ContactSection;
