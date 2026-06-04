/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB",
          50:  "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#2563EB",
          600: "#1D4ED8",
          700: "#1E40AF",
          800: "#1E3A8A",
          900: "#172554",
        },
        secondary: {
          DEFAULT: "#0F172A",
          50:  "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
        accent: {
          DEFAULT: "#14B8A6",
          50:  "#F0FDFA",
          100: "#CCFBF1",
          200: "#99F6E4",
          300: "#5EEAD4",
          400: "#2DD4BF",
          500: "#14B8A6",
          600: "#0D9488",
          700: "#0F766E",
        },
      },
      fontFamily: {
        sans:    ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "Inter", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["4.5rem",  { lineHeight: "1.1",  letterSpacing: "-0.02em" }],
        "display-lg": ["3.75rem", { lineHeight: "1.1",  letterSpacing: "-0.02em" }],
        "display":    ["3rem",    { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-sm": ["2.25rem", { lineHeight: "1.2",  letterSpacing: "-0.01em" }],
      },
      boxShadow: {
        "soft":    "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        "card":    "0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.04)",
        "elevated":"0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 20px 60px -15px rgba(0, 0, 0, 0.1)",
        "glow":    "0 0 30px rgba(37, 99, 235, 0.15)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      animation: {
        "fade-in":      "fadeIn 0.6s ease-out forwards",
        "slide-up":     "slideUp 0.6s ease-out forwards",
        "slide-right":  "slideRight 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideRight: {
          "0%":   { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
