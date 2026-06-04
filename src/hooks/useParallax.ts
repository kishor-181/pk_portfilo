import { useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { useRef } from 'react';

/**
 * Returns a springified parallax Y value for the given element.
 * @param speed  – positive = moves up slower than scroll (default 0.4)
 * @param offset – input scroll range relative to element visibility
 */
export function useParallax(
  speed  = 0.4,
  offset: [string, string] = ['start end', 'end start']
): { ref: React.RefObject<any>; y: MotionValue<number> } {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target:  ref,
    offset:  offset as any,
  });

  const raw = useTransform(scrollYProgress, [0, 1], [80 * speed, -80 * speed]);
  const y   = useSpring(raw, { stiffness: 60, damping: 20, restDelta: 0.001 });

  return { ref, y };
}
