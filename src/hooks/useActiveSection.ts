import { useEffect, useState } from 'react';

export const NAV_ITEMS = [
  { id: 'home',             label: 'Home',         number: '01' },
  { id: 'about',            label: 'About',        number: '02' },
  { id: 'skills',           label: 'Skills',       number: '03' },
  { id: 'projects',         label: 'Projects',     number: '04' },
  { id: 'achievements',     label: 'Achievements', number: '05' },
  { id: 'coding-profiles',  label: 'Coding',       number: '06' },
  { id: 'contact',          label: 'Contact',      number: '07' },
] as const;

export type SectionId = (typeof NAV_ITEMS)[number]['id'];

export function useActiveSection() {
  const [active,   setActive]   = useState<SectionId>('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // ── scroll-shrink threshold ─────────────────────────────────────
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });

    // ── section observer ────────────────────────────────────────────
    const observers: IntersectionObserver[] = [];
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id as SectionId); },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  return { active, scrolled };
}
