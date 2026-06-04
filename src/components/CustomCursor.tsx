import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailX  = useMotionValue(-100);
  const trailY  = useMotionValue(-100);

  const springCfg = { stiffness: 600, damping: 40, mass: 0.5 };
  const trailCfg  = { stiffness: 180, damping: 28, mass: 0.8 };

  const sx = useSpring(cursorX, springCfg);
  const sy = useSpring(cursorY, springCfg);
  const tx = useSpring(trailX, trailCfg);
  const ty = useSpring(trailY, trailCfg);

  const [variant, setVariant] = useState<'default' | 'hover' | 'text' | 'click'>('default');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const down = () => setVariant('click');
    const up   = () => setVariant('default');

    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest('a, button, [data-cursor="hover"]')) setVariant('hover');
      else if (t.closest('p, h1, h2, h3, h4, span, li')) setVariant('text');
      else setVariant('default');
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup',   up);
    window.addEventListener('mouseover', over);
    document.documentElement.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup',   up);
      window.removeEventListener('mouseover', over);
      document.documentElement.style.cursor = '';
    };
  }, [visible]);

  if (!visible) return null;

  const isHover = variant === 'hover';
  const isClick = variant === 'click';

  return (
    <>
      {/* Outer trail ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: tx,
          y: ty,
          translateX: '-50%',
          translateY: '-50%',
          width:  isHover ? 48 : isClick ? 20 : 32,
          height: isHover ? 48 : isClick ? 20 : 32,
          border: isHover
            ? '1.5px solid rgba(0,245,255,0.8)'
            : '1px solid rgba(0,245,255,0.35)',
          background: isHover ? 'rgba(0,245,255,0.06)' : 'transparent',
          boxShadow: isHover ? '0 0 16px rgba(0,245,255,0.25)' : 'none',
          transition: 'width 0.25s ease, height 0.25s ease, border 0.25s ease, background 0.25s ease',
        }}
      />

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: sx,
          y: sy,
          translateX: '-50%',
          translateY: '-50%',
          width:      isClick ? 3 : isHover ? 6 : 5,
          height:     isClick ? 3 : isHover ? 6 : 5,
          background: isHover ? '#7B61FF' : '#00F5FF',
          boxShadow:  isHover
            ? '0 0 12px rgba(123,97,255,0.9)'
            : '0 0 8px rgba(0,245,255,0.9)',
          transition: 'width 0.15s ease, height 0.15s ease, background 0.15s ease',
        }}
      />
    </>
  );
}
