import React, { useEffect, useState } from 'react';
import pkp from '../assets/pkp.jpeg';

const roles = ['Full Stack Developer', 'MERN Stack Developer', 'AI Enthusiast'];

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayed.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayed(currentRole.slice(0, displayed.length + 1));
      }, 70);
    } else if (!isDeleting && displayed.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(currentRole.slice(0, displayed.length - 1));
      }, 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden py-20 lg:py-0"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #2563EB 0%, transparent 70%)' }}
        />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.03]"
          style={{ background: 'radial-gradient(circle, #14B8A6 0%, transparent 70%)' }}
        />
        {/* Dot grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #0F172A 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="section-container w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-24 lg:pt-0">
          {/* Left column: Bio info */}
          <div className="lg:col-span-7 max-w-2xl">
            {/* Greeting badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-primary-700">
                Available for opportunities
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-display-lg lg:text-display-xl font-bold font-display text-secondary-900 mb-4 animate-slide-up">
              Hi, I'm{' '}
              <span className="gradient-text">Kishore P</span>
            </h1>

            {/* Typing role */}
            <div className="flex items-center gap-1 mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-secondary-400 font-display">
                {displayed}
              </span>
              <span className="w-[3px] h-7 sm:h-8 bg-primary animate-pulse rounded-full" />
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-secondary-500 max-w-xl mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
              I build scalable web applications using the MERN stack and enjoy
              solving real-world problems through software development.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <button
                onClick={() => scrollTo('#projects')}
                className="btn-primary"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                View Projects
              </button>

              <button
                onClick={() => scrollTo('#contact')}
                className="btn-outline"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Me
              </button>

              <a
                href="/resume.pdf"
                download="Kishore_P_Resume.pdf"
                className="btn-ghost"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex gap-8 mt-14 pt-8 border-t border-secondary-100 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              {[
                { value: '800+', label: 'Problems Solved' },
                { value: '3+', label: 'Projects Built' },
                { value: 'MERN', label: 'Stack Expertise' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold font-display text-secondary-900">{stat.value}</p>
                  <p className="text-sm text-secondary-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Photo Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative group">
              {/* Outer glowing background gradient */}
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-primary to-accent opacity-20 blur-xl group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
              
              {/* Image Border/Card container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border border-secondary-200/50 bg-white/40 backdrop-blur-md shadow-card p-3 flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src={pkp}
                  alt="Kishore Ganesh"
                  className="w-full h-full object-cover rounded-xl transition duration-500 group-hover:scale-103"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
