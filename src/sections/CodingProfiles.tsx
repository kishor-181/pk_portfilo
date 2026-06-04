import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionReveal from 'components/SectionReveal';

interface Platform {
  name: string;
  color: string;
  glowColor: string;
  borderColor: string;
  icon: string;
  profileUrl: string;
  username: string;
  ranking: string;
  problemsSolved: number;
  totalProblems: number;
  stats: { label: string; value: string; color: string }[];
}

const platforms: Platform[] = [
  {
    name: 'LeetCode',
    color: '#FFA116',
    glowColor: 'rgba(255,161,22,0.35)',
    borderColor: 'rgba(255,161,22,0.4)',
    icon: '⚡',
    profileUrl: 'https://leetcode.com/u/kishoreganesh2004/',
    username: 'kishoreganesh2004',
    ranking: '#Top 25%',
    problemsSolved: 112,
    totalProblems: 3400,
    stats: [
      { label: 'Easy', value: '60', color: '#00FFC6' },
      { label: 'Medium', value: '45', color: '#FFA116' },
      { label: 'Hard', value: '7', color: '#FF4FD8' },
    ],
  },
  {
    name: 'SkillRack',
    color: '#00F5FF',
    glowColor: 'rgba(0,245,255,0.35)',
    borderColor: 'rgba(0,245,255,0.4)',
    icon: '🎯',
    profileUrl: 'https://www.skillrack.com/faces/resume.xhtml?id=406981&key=aa5e6b92cfb0e42cee56b7e8f8f0fdd04ff49dc8',
    username: 'Kishore Ganesh S',
    ranking: 'Top Performer',
    problemsSolved: 510,
    totalProblems: 600,
    stats: [
      { label: 'Programs', value: '510', color: '#00F5FF' },
      { label: 'Score', value: '5100', color: '#7B61FF' },
      { label: 'Streak', value: '30d', color: '#00FFC6' },
    ],
  },
  {
    name: 'CodeChef',
    color: '#7B61FF',
    glowColor: 'rgba(123,97,255,0.35)',
    borderColor: 'rgba(123,97,255,0.4)',
    icon: '👨‍🍳',
    profileUrl: 'https://www.codechef.com/users/kishore_2004',
    username: 'kishore_2004',
    ranking: '3★ Coder',
    problemsSolved: 75,
    totalProblems: 200,
    stats: [
      { label: 'Rating', value: '1652', color: '#7B61FF' },
      { label: 'Stars', value: '3★', color: '#FFA116' },
      { label: 'Division', value: 'Div 3', color: '#FF4FD8' },
    ],
  },
];

function AnimatedNumber({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(target / 50);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 25);
    return () => clearInterval(timer);
  }, [target]);
  return <>{count}</>;
}

function ProgressBar({ solved, total, color, glowColor }: { solved: number; total: number; color: string; glowColor: string }) {
  const pct = Math.min((solved / total) * 100, 100);
  return (
    <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
        style={{ background: color, boxShadow: `0 0 8px ${glowColor}` }}
      />
    </div>
  );
}

export default function CodingProfiles() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="coding-profiles" className="section-padding">
      <div className="section-container">
        {/* Header */}
        <SectionReveal>
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-primary/70 mb-3 font-mono">
              {'<'} competitive programming {'>'}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Coding Profiles
            </h2>
            <p className="text-white/40 max-w-md mx-auto text-sm">
              Live stats across competitive programming platforms
            </p>
            <div className="inline-flex items-center gap-2 mt-4 px-3 py-1 rounded-full bg-white/5 border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
              </span>
              <span className="text-2xs text-white/50 font-mono uppercase tracking-widest">Live Dashboard</span>
            </div>
          </div>
        </SectionReveal>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              onHoverStart={() => setHovered(p.name)}
              onHoverEnd={() => setHovered(null)}
              className="relative glass rounded-2xl p-6 cursor-pointer overflow-hidden group"
              style={{
                borderColor: hovered === p.name ? p.borderColor : 'rgba(255,255,255,0.08)',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                boxShadow: hovered === p.name
                  ? `0 0 30px ${p.glowColor}, 0 8px 32px rgba(0,0,0,0.5)`
                  : '0 8px 32px rgba(0,0,0,0.4)',
              }}
            >
              {/* Background glow blob */}
              <div
                className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-3xl transition-opacity duration-500 pointer-events-none"
                style={{
                  background: p.color,
                  opacity: hovered === p.name ? 0.12 : 0.05,
                }}
              />

              {/* Scan line on hover */}
              {hovered === p.name && (
                <motion.div
                  className="absolute inset-x-0 h-px pointer-events-none"
                  style={{ background: `linear-gradient(90deg, transparent, ${p.color}, transparent)` }}
                  initial={{ top: 0, opacity: 0 }}
                  animate={{ top: '100%', opacity: [0, 1, 0] }}
                  transition={{ duration: 1.2, ease: 'linear', repeat: Infinity }}
                />
              )}

              {/* Header */}
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: `${p.color}18`, border: `1px solid ${p.color}40` }}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base leading-tight">{p.name}</h3>
                    <p className="text-2xs font-mono" style={{ color: p.color }}>@{p.username}</p>
                  </div>
                </div>
                <span
                  className="text-2xs font-semibold px-2.5 py-1 rounded-full font-mono"
                  style={{ background: `${p.color}15`, color: p.color, border: `1px solid ${p.color}35` }}
                >
                  {p.ranking}
                </span>
              </div>

              {/* Problems Solved */}
              <div className="mb-4">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-white/50 text-xs uppercase tracking-wider">Problems Solved</span>
                  <span className="text-2xl font-bold font-mono" style={{ color: p.color }}>
                    <AnimatedNumber target={p.problemsSolved} />
                    <span className="text-sm text-white/30 font-normal">/{p.totalProblems}</span>
                  </span>
                </div>
                <ProgressBar solved={p.problemsSolved} total={p.totalProblems} color={p.color} glowColor={p.glowColor} />
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-2 mb-5">
                {p.stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-lg p-2 text-center"
                    style={{ background: `${s.color}0d`, border: `1px solid ${s.color}25` }}
                  >
                    <div className="text-sm font-bold font-mono" style={{ color: s.color }}>{s.value}</div>
                    <div className="text-2xs text-white/40 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Profile Link */}
              <a
                href={p.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-semibold uppercase tracking-widest transition-all duration-300"
                style={{
                  border: `1px solid ${p.color}40`,
                  color: p.color,
                  background: hovered === p.name ? `${p.color}15` : 'transparent',
                }}
              >
                View Profile
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom total */}
        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="glass rounded-2xl px-8 py-4 flex gap-10">
            {[
              { label: 'Total Solved', value: platforms.reduce((a, p) => a + p.problemsSolved, 0), color: '#00F5FF' },
              { label: 'Platforms', value: platforms.length, color: '#7B61FF' },
              { label: 'Best Rating', value: '1652', color: '#FFA116' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-bold font-mono" style={{ color: s.color }}>{s.value}</div>
                <div className="text-2xs text-white/40 uppercase tracking-wider mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
