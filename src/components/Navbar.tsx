import React, { useState, useEffect } from 'react';

const navLinks = [
  { label: 'About',        href: '#about' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Education',    href: '#education' },
  { label: 'Contact',      href: '#contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-lg border-b border-secondary-200 shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white font-display font-bold text-sm transition-transform duration-300 group-hover:scale-105">
              KP
            </div>
            <span className="font-display font-semibold text-secondary-900 hidden sm:block">
              Kishore P
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeSection === link.href.slice(1)
                    ? 'text-primary bg-primary-50'
                    : 'text-secondary-500 hover:text-secondary-900 hover:bg-secondary-50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Resume button (desktop) */}
          <a
            href="/resume.pdf"
            download="Kishore_P_Resume.pdf"
            className="hidden lg:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-primary border-2 border-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary-50 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-secondary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-[500px] border-b border-secondary-200' : 'max-h-0'
        } bg-white/95 backdrop-blur-lg`}
      >
        <div className="section-container py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeSection === link.href.slice(1)
                  ? 'text-primary bg-primary-50'
                  : 'text-secondary-600 hover:bg-secondary-50'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-secondary-100">
            <a
              href="/resume.pdf"
              download="Kishore_P_Resume.pdf"
              className="block px-4 py-2.5 text-sm font-semibold text-primary"
            >
              Download Resume →
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
