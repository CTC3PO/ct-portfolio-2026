import React, { useState } from 'react';
import { Mail, Github, Linkedin, FileText, Send } from 'lucide-react';

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
        <section id="contact" className={`py-24 md:py-32 px-6 border-t ${
            isDark ? 'border-[#2E2C28]' : 'border-[#DDD9CE]'
        }`}>
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase mb-3 ${
                        isDark ? 'text-[#F5F3EC]' : 'text-[#1C1C1A]'
                    }`}>
                        Let's Connect
                    </h2>
                    <p className={`text-base md:text-lg max-w-2xl mx-auto font-normal ${
                        isDark ? 'text-[#8E8D86]' : 'text-[#75746E]'
                    }`}>
                        I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
                    </p>
                </div>

                <div className={`grid md:grid-cols-2 border transition-colors ${
                    isDark ? 'border-[#2E2C28] bg-[#1E1D1A]/50' : 'border-[#DDD9CE] bg-[#F2EFE7]/50'
                }`}>
                    {/* Left: Contact Info */}
                    <div className="p-8 md:p-12 flex flex-col justify-between">
                        <div>
                            <h3 className={`text-xl font-bold tracking-tight mb-8 uppercase ${
                                isDark ? 'text-[#C89B6D]' : 'text-[#7A4623]'
                            }`}>
                                Get in Touch
                            </h3>

                            <div className="space-y-4">
                                <ContactLink
                                    icon={<Mail size={16} />}
                                    text="ctran@alumni.upenn.edu"
                                    href="mailto:ctran@alumni.upenn.edu"
                                    isDark={isDark}
                                />
                                <ContactLink
                                    icon={<Github size={16} />}
                                    text="github.com/CTC3PO"
                                    href="https://github.com/CTC3PO"
                                    isDark={isDark}
                                />
                                <ContactLink
                                    icon={<Linkedin size={16} />}
                                    text="linkedin.com/in/chautrancmt26"
                                    href="https://www.linkedin.com/in/chautrancmt26/"
                                    isDark={isDark}
                                />
                                <ContactLink
                                    icon={<FileText size={16} />}
                                    text="Resume (PDF)"
                                    href="/Ctran_Resume_v2.pdf"
                                    isDark={isDark}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right: Message Form */}
                    <div className={`p-8 md:p-12 border-t md:border-t-0 md:border-l ${
                        isDark ? 'border-[#2E2C28] bg-[#191816]' : 'border-[#DDD9CE] bg-[#F6F4EE]'
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
                                    className={`w-full px-4 py-3 text-sm border outline-none transition-colors ${
                                        isDark
                                            ? 'bg-[#141413] border-[#2E2C28] text-[#F5F3EC] placeholder-[#8E8D86] focus:border-[#C89B6D]'
                                            : 'bg-[#F2EFE7] border-[#DDD9CE] text-[#1C1C1A] placeholder-[#75746E] focus:border-[#1C1C1A]'
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
                                    className={`w-full px-4 py-3 text-sm border outline-none transition-colors ${
                                        isDark
                                            ? 'bg-[#141413] border-[#2E2C28] text-[#F5F3EC] placeholder-[#8E8D86] focus:border-[#C89B6D]'
                                            : 'bg-[#F2EFE7] border-[#DDD9CE] text-[#1C1C1A] placeholder-[#75746E] focus:border-[#1C1C1A]'
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
                                    className={`w-full px-4 py-3 text-sm border outline-none transition-colors resize-none ${
                                        isDark
                                            ? 'bg-[#141413] border-[#2E2C28] text-[#F5F3EC] placeholder-[#8E8D86] focus:border-[#C89B6D]'
                                            : 'bg-[#F2EFE7] border-[#DDD9CE] text-[#1C1C1A] placeholder-[#75746E] focus:border-[#1C1C1A]'
                                    }`}
                                />
                            </div>

                            <button
                                type="submit"
                                className={`w-full py-3.5 text-xs font-bold tracking-[0.15em] uppercase border transition-colors flex items-center justify-center cursor-pointer ${
                                    isDark
                                        ? 'border-[#F5F3EC] text-[#F5F3EC] hover:bg-[#F5F3EC] hover:text-[#191816]'
                                        : 'border-[#1C1C1A] text-[#1C1C1A] hover:bg-[#1C1C1A] hover:text-[#F6F4EE]'
                                }`}
                            >
                                <Send size={14} className="mr-2" />
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
        className={`flex items-center space-x-3 p-3.5 border transition-colors text-xs font-semibold tracking-[0.1em] uppercase ${
            isDark
                ? 'border-[#2E2C28] hover:border-[#4A4740] text-[#D0CDC4] hover:text-[#F5F3EC]'
                : 'border-[#DDD9CE] hover:border-[#B5B0A2] text-[#3E3D38] hover:text-[#1C1C1A]'
        }`}
    >
        <span className={isDark ? 'text-[#C89B6D]' : 'text-[#7A4623]'}>{icon}</span>
        <span className="truncate">{text}</span>
    </a>
);

export default ContactSection;
