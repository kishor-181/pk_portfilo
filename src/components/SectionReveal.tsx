import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
}

export default function SectionReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: Props) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const variants = {
    hidden: {
      opacity: 0,
      y:       direction === 'up'   ?  36 : direction === 'down'  ? -36 : 0,
      x:       direction === 'left' ?  36 : direction === 'right' ? -36 : 0,
      scale:   direction === 'fade' ? 0.96 : 1,
    },
    visible: {
      opacity: 1,
      y:       0,
      x:       0,
      scale:   1,
      transition: {
        duration: 0.75,
        delay,
        ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
}
