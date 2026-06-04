import React from 'react';
import { SectionHeader, ScrollReveal } from 'components/index';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="section-container">
        <ScrollReveal>
          <SectionHeader
            label="Experience"
            title="Work Experience"
            subtitle="Professional experience that has shaped my development skills."
          />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-secondary-200 hidden md:block" />

            {/* Experience item */}
            <div className="relative md:pl-16">
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-0 top-1 w-12 h-12 rounded-xl bg-primary-50 text-primary items-center justify-center z-10">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                </svg>
              </div>

              <div className="card p-7">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-secondary-900">
                      MERN Stack Internship
                    </h3>
                    <p className="text-sm text-secondary-400 mt-1">Internship</p>
                  </div>
                  <span className="badge">MERN Stack</span>
                </div>

                <p className="text-secondary-500 leading-relaxed mb-5">
                  Developed a Dance School Management System featuring student registration,
                  attendance tracking, instructor management, scheduling, and fee management.
                </p>

                {/* Responsibilities */}
                <div className="space-y-2.5">
                  {[
                    'Built student registration and profile management modules',
                    'Implemented attendance tracking and instructor management features',
                    'Developed scheduling system and fee management workflows',
                    'Worked with React, Node.js, Express.js, and MongoDB',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                      </svg>
                      <span className="text-sm text-secondary-600">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-secondary-100">
                  {['React', 'Node.js', 'Express.js', 'MongoDB'].map((tech) => (
                    <span key={tech} className="chip">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Experience;
