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
        <section id="contact" className={`py-36 md:py-48 px-6 border-t ${
            isDark ? 'border-[#2D333F]' : 'border-[#EDE8DE]'
        }`}>
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 ${
                        isDark ? 'text-[#F0F2F5]' : 'text-[#1E1D1A]'
                    }`}>
                        Let's Connect
                    </h2>
                    <p className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ${
                        isDark ? 'text-[#9BA1AD]' : 'text-[#68655E]'
                    }`}>
                        I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
                    </p>
                </div>

                <div className={`grid md:grid-cols-2 rounded-3xl border transition-colors overflow-hidden ${
                    isDark ? 'bg-[#242A34] border-[#363E4D]' : 'bg-white border-[#EDE8DE] shadow-sm'
                }`}>
                    {/* Left: Get in Touch */}
                    <div className="p-10 md:p-14 flex flex-col justify-between">
                        <div>
                            <h3 className={`text-2xl font-bold mb-8 flex items-center ${
                                isDark ? 'text-[#E5A84B]' : 'text-[#B45309]'
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
                                    text="Resume (PDF)"
                                    href="/Ctran_Resume_v2.pdf"
                                    isDark={isDark}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right: Message Form */}
                    <div className={`p-10 md:p-14 border-t md:border-t-0 md:border-l ${
                        isDark ? 'bg-[#1D222B] border-[#363E4D]' : 'bg-[#FAF8F5] border-[#EDE8DE]'
                    }`}>
                        <form onSubmit={handleFormSubmit} className="space-y-5">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleFormChange}
                                    placeholder="Your Name"
                                    required
                                    className={`w-full px-5 py-3.5 rounded-xl text-sm border outline-none transition-colors ${
                                        isDark
                                            ? 'bg-[#181C23] border-[#363E4D] text-[#F0F2F5] placeholder-[#798190] focus:border-[#E5A84B]'
                                            : 'bg-white border-[#E0D9C8] text-[#1E1D1A] placeholder-[#8E8A80] focus:border-[#B45309]'
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
                                    className={`w-full px-5 py-3.5 rounded-xl text-sm border outline-none transition-colors ${
                                        isDark
                                            ? 'bg-[#181C23] border-[#363E4D] text-[#F0F2F5] placeholder-[#798190] focus:border-[#E5A84B]'
                                            : 'bg-white border-[#E0D9C8] text-[#1E1D1A] placeholder-[#8E8A80] focus:border-[#B45309]'
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
                                    className={`w-full px-5 py-3.5 rounded-xl text-sm border outline-none transition-colors resize-none ${
                                        isDark
                                            ? 'bg-[#181C23] border-[#363E4D] text-[#F0F2F5] placeholder-[#798190] focus:border-[#E5A84B]'
                                            : 'bg-white border-[#E0D9C8] text-[#1E1D1A] placeholder-[#8E8A80] focus:border-[#B45309]'
                                    }`}
                                />
                            </div>

                            <button
                                type="submit"
                                className={`w-full py-4 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-center cursor-pointer active:scale-98 shadow-sm ${
                                    isDark
                                        ? 'bg-[#E8EAED] text-[#1C2026] hover:bg-white'
                                        : 'bg-[#1E1D1A] text-[#FAF8F5] hover:bg-neutral-800'
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
        className={`flex items-center space-x-3.5 p-3.5 rounded-xl border transition-colors ${
            isDark
                ? 'border-[#363E4D] hover:bg-[#2A313D] text-[#CBD2DC] hover:text-white'
                : 'border-[#EDE8DE] hover:bg-[#F2ECE1] text-[#4A463D] hover:text-[#1E1D1A]'
        }`}
    >
        <span className={isDark ? 'text-[#E5A84B]' : 'text-[#B45309]'}>{icon}</span>
        <span className="text-sm font-medium truncate">{text}</span>
    </a>
);

export default ContactSection;
