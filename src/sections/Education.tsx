import React from 'react';
import { SectionHeader, ScrollReveal } from 'components/index';

const Education: React.FC = () => {
  return (
    <section id="education" className="section-padding">
      <div className="section-container">
        <ScrollReveal>
          <SectionHeader
            label="Education"
            title="Education"
            subtitle="My academic background in Computer Science."
          />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="card p-7 max-w-2xl">
            <div className="flex items-start gap-5">
              {/* Icon */}
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary-50 text-primary flex items-center justify-center">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                </svg>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-secondary-900 mb-1">
                  Sri Eshwar College of Engineering
                </h3>
                <p className="text-secondary-500 mb-3">
                  B.E Computer Science Engineering
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-accent-50 text-accent flex items-center justify-center">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-secondary-400 uppercase tracking-wide font-medium">CGPA</p>
                      <p className="text-lg font-bold text-secondary-900">7.5</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Education;
