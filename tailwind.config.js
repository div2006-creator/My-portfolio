/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "#030712",
        surface: "#0b0f19",
        "surface-border": "#1e293b",
        cyber: {
          dark: "#030712",
          card: "rgba(15, 23, 42, 0.65)",
          cyan: "#00f0ff",
          purple: "#7000ff",
          pink: "#ff007f",
          emerald: "#00ff9d",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%': { boxShadow: '0 0 15px rgba(0, 240, 255, 0.2)' },
          '100%': { boxShadow: '0 0 35px rgba(112, 0, 255, 0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, rgba(0, 240, 255, 0.15) 0%, rgba(112, 0, 255, 0.15) 100%)',
        'hero-radial': 'radial-gradient(circle at 50% 50%, rgba(112, 0, 255, 0.15) 0%, rgba(3, 7, 18, 0.8) 70%)',
      }
    },
  },
  plugins: [],
}
