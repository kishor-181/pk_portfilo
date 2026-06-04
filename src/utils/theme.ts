// ─── Theme Constants ────────────────────────────────────────────────────────
// Single source of truth for the Luxury AI OS theme.
// Use in Framer Motion variants, Three.js materials, and inline styles.

export const colors = {
  bg: {
    DEFAULT:   "#050816",
    secondary: "#0A0F2C",
    tertiary:  "#0D1333",
  },
  primary: {
    DEFAULT: "#00F5FF",
    dim:     "#00C4CC",
    glow:    "rgba(0,245,255,0.15)",
  },
  secondary: {
    DEFAULT: "#7B61FF",
    dim:     "#5A45CC",
    glow:    "rgba(123,97,255,0.15)",
  },
  accent: {
    DEFAULT: "#FF4FD8",
    dim:     "#CC3FAD",
    glow:    "rgba(255,79,216,0.15)",
  },
  success: {
    DEFAULT: "#00FFC6",
    dim:     "#00CC9E",
    glow:    "rgba(0,255,198,0.15)",
  },
  white: "#FFFFFF",
  muted: "rgba(255,255,255,0.5)",
  subtle: "rgba(255,255,255,0.25)",
} as const;

export const shadows = {
  neonPrimary:   "0 0 20px rgba(0,245,255,0.4), 0 0 60px rgba(0,245,255,0.15)",
  neonSecondary: "0 0 20px rgba(123,97,255,0.4), 0 0 60px rgba(123,97,255,0.15)",
  neonAccent:    "0 0 20px rgba(255,79,216,0.4), 0 0 60px rgba(255,79,216,0.15)",
  neonSuccess:   "0 0 20px rgba(0,255,198,0.4), 0 0 60px rgba(0,255,198,0.15)",
  glass:         "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
  glassLg:       "0 16px 64px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)",
} as const;

export const transitions = {
  fast:    { duration: 0.15, ease: "easeOut" },
  base:    { duration: 0.3,  ease: "easeOut" },
  slow:    { duration: 0.6,  ease: "easeOut" },
  spring:  { type: "spring", stiffness: 300, damping: 24 },
  springSlug: { type: "spring", stiffness: 120, damping: 20 },
} as const;

// Shared Framer Motion fade-up variant used across sections
export const fadeUpVariant = {
  hidden:  { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { ...transitions.slow, delay },
  }),
} as const;

// Stagger container variant
export const staggerContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
} as const;

export type ThemeColor = keyof typeof colors;
