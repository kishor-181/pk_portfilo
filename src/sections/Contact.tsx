import React, { useState } from 'react';
import { SectionHeader, ScrollReveal } from 'components/index';

const contactLinks = [
  {
    label: 'Email',
    value: 'kishoredev@email.com',
    href: 'mailto:kishoredev@email.com',
    color: 'text-red-500',
    bg: 'bg-red-50',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/kishore-p',
    href: 'https://linkedin.com/in/kishore-p',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/kishore-p',
    href: 'https://github.com/kishore-p',
    color: 'text-secondary-900',
    bg: 'bg-secondary-50',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    const mailtoLink = `mailto:kishoredev@email.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
    window.open(mailtoLink);
  };

  return (
    <section id="contact" className="section-padding bg-secondary-50/50">
      <div className="section-container">
        <ScrollReveal>
          <SectionHeader
            label="Contact"
            title="Get in Touch"
            subtitle="I'm open to new opportunities and would love to hear from you. Feel free to reach out!"
            align="center"
          />
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-5">
            <ScrollReveal>
              <h3 className="font-semibold text-secondary-900 mb-5 text-lg">
                Let's Connect
              </h3>
            </ScrollReveal>

            {contactLinks.map((link, i) => (
              <ScrollReveal key={link.label} delay={i * 80}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-4 flex items-center gap-4 group"
                >
                  <div className={`w-12 h-12 rounded-xl ${link.bg} ${link.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}>
                    {link.icon}
                  </div>
                  <div>
                    <p className="text-xs text-secondary-400 uppercase tracking-wider font-medium">
                      {link.label}
                    </p>
                    <p className="text-sm font-medium text-secondary-700 group-hover:text-primary transition-colors">
                      {link.value}
                    </p>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <ScrollReveal delay={100}>
              <form onSubmit={handleSubmit} className="card p-7 space-y-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-secondary-700 mb-1.5">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-secondary-200 bg-white text-secondary-900 text-sm placeholder-secondary-400 focus:border-primary focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-secondary-700 mb-1.5">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-secondary-200 bg-white text-secondary-900 text-sm placeholder-secondary-400 focus:border-primary focus:ring-2 focus:ring-primary-100 outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-secondary-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-secondary-200 bg-white text-secondary-900 text-sm placeholder-secondary-400 focus:border-primary focus:ring-2 focus:ring-primary-100 outline-none transition-all resize-none"
                    placeholder="Tell me about the opportunity or project..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                  Send Message
                </button>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
