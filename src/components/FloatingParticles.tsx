import React, { useEffect, useRef } from 'react';

const COLORS = ['#00F5FF', '#7B61FF', '#FF4FD8', '#00FFC6'];

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  r: number; alpha: number;
  color: string;
  pulse: number; pulseSpeed: number;
}

export default function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let raf: number;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: 50 }, () => ({
        x:          Math.random() * canvas.width,
        y:          Math.random() * canvas.height,
        vx:         (Math.random() - 0.5) * 0.2,
        vy:         (Math.random() - 0.5) * 0.2,
        r:          Math.random() * 1.3 + 0.3,
        alpha:      Math.random() * 0.3 + 0.05,
        color:      COLORS[Math.floor(Math.random() * COLORS.length)],
        pulse:      Math.random() * Math.PI * 2,
        pulseSpeed: 0.008 + Math.random() * 0.01,
      }));
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.globalAlpha = p.alpha * (0.7 + 0.3 * Math.sin(p.pulse));
        ctx.fillStyle   = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Connecting lines — only nearest neighbours
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x;
          const dy   = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.globalAlpha = (1 - dist / 100) * 0.055;
            ctx.strokeStyle = '#00F5FF';
            ctx.lineWidth   = 0.4;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0, opacity: 0.65 }}
    />
  );
}
