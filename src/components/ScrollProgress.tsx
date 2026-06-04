import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { NAV_ITEMS } from 'hooks/useActiveSection';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  const [pct, setPct] = useState(0);

  useEffect(() => {
    return scrollYProgress.on('change', (v) => setPct(Math.round(v * 100)));
  }, [scrollYProgress]);

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[9998] pointer-events-none"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, #00F5FF, #7B61FF, #FF4FD8)',
          boxShadow: '0 0 12px rgba(0,245,255,0.6)',
        }}
      />

      {/* Right side vertical progress + section dots */}
      <div className="fixed right-5 top-1/2 -translate-y-1/2 z-[60] hidden lg:flex flex-col items-center gap-3 pointer-events-none">
        {/* Percentage */}
        <span
          className="font-mono text-[9px] tracking-widest rotate-0 mb-1"
          style={{ color: 'rgba(0,245,255,0.4)' }}
        >
          {String(pct).padStart(3, '0')}%
        </span>

        {/* Section dots */}
        {NAV_ITEMS.map(({ id, label }) => {
          const el = typeof window !== 'undefined' ? document.getElementById(id) : null;
          return (
            <button
              key={id}
              className="pointer-events-auto group relative flex items-center gap-2"
              onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
              title={label}
            >
              <span
                className="absolute right-full mr-2 font-mono text-[9px] tracking-widest uppercase opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity duration-200"
                style={{ color: 'rgba(0,245,255,0.7)' }}
              >
                {label}
              </span>
              <motion.span
                className="block rounded-full transition-all duration-300"
                style={{
                  width:      4,
                  height:     4,
                  background: 'rgba(0,245,255,0.3)',
                }}
                whileHover={{ scale: 2, background: '#00F5FF' }}
              />
            </button>
          );
        })}
      </div>
    </>
  );
}
