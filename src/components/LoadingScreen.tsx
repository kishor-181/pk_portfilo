import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BOOT_LINES = [
  { text: 'BIOS v2.4.1 — System Check', delay: 0 },
  { text: 'Loading identity_kernel.exe…', delay: 180 },
  { text: 'Mounting neural_filesystem [OK]', delay: 360 },
  { text: 'Initialising portfolio_runtime…', delay: 540 },
  { text: 'Connecting to matrix [SECURE]', delay: 720 },
  { text: 'All systems nominal. Launching UI.', delay: 900 },
];

interface Props { onComplete: () => void; }

export default function LoadingScreen({ onComplete }: Props) {
  const [progress, setProgress]   = useState(0);
  const [lines,    setLines]      = useState<string[]>([]);
  const [exiting,  setExiting]    = useState(false);

  useEffect(() => {
    // Increment progress
    const progressTimer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) { clearInterval(progressTimer); return 100; }
        return p + 2;
      });
    }, 28);

    // Stream boot lines
    BOOT_LINES.forEach(({ text, delay }) => {
      setTimeout(() => setLines((l) => [...l, text]), delay + 200);
    });

    // Exit after ~1.8s
    const exitTimer = setTimeout(() => {
      setExiting(true);
      setTimeout(onComplete, 700);
    }, 1800);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: '#050816' }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0,245,255,1) 1px, transparent 1px),' +
                'linear-gradient(90deg, rgba(0,245,255,1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          {/* Radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,245,255,0.06) 0%, transparent 70%)' }}
          />

          {/* Scanline overlay */}
          <motion.div
            className="absolute inset-x-0 h-[2px] pointer-events-none"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(0,245,255,0.4), transparent)' }}
            animate={{ top: ['-2px', '100vh'] }}
            transition={{ duration: 1.8, ease: 'linear', repeat: Infinity }}
          />

          <div className="relative z-10 flex flex-col items-center gap-8 px-6 w-full max-w-md">
            {/* Logo mark */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="relative flex items-center justify-center w-20 h-20"
            >
              {/* Outer ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ border: '1px solid rgba(0,245,255,0.3)' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              />
              {/* Inner ring */}
              <motion.div
                className="absolute rounded-full"
                style={{ inset: 10, border: '1px dashed rgba(123,97,255,0.4)' }}
                animate={{ rotate: -360 }}
                transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
              />
              {/* Core */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-black"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,245,255,0.15), rgba(123,97,255,0.15))',
                  border: '1px solid rgba(0,245,255,0.4)',
                  color: '#00F5FF',
                  textShadow: '0 0 16px rgba(0,245,255,0.8)',
                  boxShadow: '0 0 30px rgba(0,245,255,0.2)',
                }}
              >
                K
              </div>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <p className="font-mono text-xs tracking-[0.4em] uppercase text-white/30 mb-1">
                Kishore AI Portfolio
              </p>
              <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-white/15">
                Operating System v2.4.1
              </p>
            </motion.div>

            {/* Terminal lines */}
            <div
              className="w-full rounded-lg p-4 font-mono text-xs space-y-1.5"
              style={{
                background: 'rgba(0,0,0,0.5)',
                border: '1px solid rgba(0,245,255,0.1)',
                minHeight: 120,
              }}
            >
              <AnimatePresence>
                {lines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex gap-2"
                  >
                    <span style={{ color: '#00FFC6' }}>{'>'}</span>
                    <span className="text-white/50">{line}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
              {lines.length < BOOT_LINES.length && (
                <span className="text-primary animate-pulse">▋</span>
              )}
            </div>

            {/* Progress bar */}
            <div className="w-full space-y-2">
              <div className="w-full h-[2px] rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, #00F5FF, #7B61FF)',
                    boxShadow: '0 0 10px rgba(0,245,255,0.6)',
                    transition: 'width 0.05s linear',
                  }}
                />
              </div>
              <div className="flex justify-between font-mono text-[9px] text-white/20 tracking-widest">
                <span>LOADING</span>
                <span>{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
