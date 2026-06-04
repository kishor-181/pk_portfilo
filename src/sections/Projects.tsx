import React from 'react';
import { SectionHeader, ScrollReveal } from 'components/index';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];
  gradient: string;
  iconBg: string;
  icon: React.ReactNode;
}

const projects: Project[] = [
  {
    title: 'Contractor Job & Work Order Management Platform',
    description:
      'Developed a role-based Contractor Work Order Management Platform using the MERN stack. The system supports contractor onboarding, work assignment management, progress tracking, invoice processing, payment workflows, RBAC, audit logging, and real-time status monitoring.',
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    highlights: [
      'Role-based access control (RBAC)',
      'Real-time status monitoring',
      'Invoice & payment workflows',
      'Audit logging system',
    ],
    gradient: 'from-primary-500 to-primary-700',
    iconBg: 'bg-primary-50 text-primary',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: 'Vehicle Parking Management System',
    description:
      'Developed a Python-based Vehicle Parking Management System to manage vehicle entry, exit, parking slot allocation, record maintenance, and automated parking fee calculation.',
    techStack: ['Python', 'SQLite'],
    highlights: [
      'Automated fee calculation',
      'Parking slot allocation',
      'Vehicle entry & exit tracking',
      'Record maintenance',
    ],
    gradient: 'from-accent-500 to-accent-700',
    iconBg: 'bg-accent-50 text-accent',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    title: 'E-Commerce Management System',
    description:
      'Built a full-featured Spring Boot REST API backend for an E-Commerce platform with product management, order processing, payment handling, user management, and real-time analytics tracking.',
    techStack: ['Java', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL', 'Lombok', 'Maven'],
    highlights: [
      'Product & inventory management',
      'Order lifecycle & status tracking',
      'Payment processing module',
      'Analytics & reporting API',
    ],
    gradient: 'from-emerald-500 to-emerald-700',
    iconBg: 'bg-emerald-50 text-emerald-600',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-padding bg-secondary-50/50">
      <div className="section-container">
        <ScrollReveal>
          <SectionHeader
            label="Projects"
            title="Featured Projects"
            subtitle="Some of the key projects I've worked on, showcasing my problem-solving abilities and technical skills."
          />
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="card overflow-hidden h-full flex flex-col">
                {/* Colored header bar */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

                <div className="p-7 flex flex-col flex-1">
                  {/* Icon + Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${project.iconBg} flex items-center justify-center`}>
                      {project.icon}
                    </div>
                    <h3 className="font-bold text-lg text-secondary-900 leading-snug pt-1">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-secondary-500 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Key highlights */}
                  <div className="mb-6 flex-1">
                    <p className="text-xs font-semibold text-secondary-400 uppercase tracking-wider mb-3">
                      Key Features
                    </p>
                    <ul className="grid grid-cols-2 gap-2">
                      {project.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-sm text-secondary-600">
                          <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-secondary-100">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
