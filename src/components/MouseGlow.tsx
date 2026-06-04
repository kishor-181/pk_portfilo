import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MouseGlow() {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const x = useSpring(rawX, { stiffness: 80, damping: 30 });
  const y = useSpring(rawY, { stiffness: 80, damping: 30 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[1]"
      style={{
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
        width:  600,
        height: 600,
        background:
          'radial-gradient(circle, rgba(0,245,255,0.028) 0%, rgba(123,97,255,0.018) 40%, transparent 70%)',
        borderRadius: '50%',
      }}
    />
  );
}
