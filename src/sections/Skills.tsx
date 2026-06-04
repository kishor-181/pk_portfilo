import React from 'react';
import { SectionHeader, ScrollReveal } from 'components/index';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    title: 'Frontend',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    title: 'Backend',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008V17.25zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008V17.25zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    skills: ['Node.js', 'Express.js'],
  },
  {
    title: 'Database',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    skills: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Programming',
    color: 'text-violet-600',
    bgColor: 'bg-violet-50',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    skills: ['Java', 'Python', 'C', 'C++'],
  },
  {
    title: 'Tools & Platforms',
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.1-3.4a1.5 1.5 0 010-2.54l5.1-3.4a1.5 1.5 0 012.08.54l2.42 4.84a1.5 1.5 0 01-.54 2.08l-4.84 2.42a1.5 1.5 0 01-2.08-.54zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    skills: ['Git', 'GitHub', 'AWS', 'NumPy', 'Pandas'],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <ScrollReveal>
          <SectionHeader
            label="Skills"
            title="Technical Skills"
            subtitle="Technologies and tools I work with to bring ideas to life."
          />
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 80}>
              <div className="card p-6 h-full">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl ${cat.bgColor} ${cat.color} flex items-center justify-center`}>
                    {cat.icon}
                  </div>
                  <h3 className="font-semibold text-secondary-900">{cat.title}</h3>
                </div>

                {/* Skills list */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="chip"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
