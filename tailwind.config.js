/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body: ['"Outfit"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        navy: {
          950: '#020818',
          900: '#030d1f',
          800: '#061228',
          700: '#0a1a35',
          600: '#0f2347',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
        teal: {
          400: '#2dd4bf',
          500: '#14b8a6',
        },
        slate: {
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(34,211,238,0.15), transparent)',
        'card-shine': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%, rgba(255,255,255,0.02) 100%)',
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(34,211,238,0.2)',
        'glow-md': '0 0 30px rgba(34,211,238,0.25)',
        'glow-lg': '0 0 60px rgba(34,211,238,0.2)',
        'glow-cyan': '0 0 40px rgba(34,211,238,0.3), 0 0 80px rgba(34,211,238,0.1)',
        'card': '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.5), 0 0 20px rgba(34,211,238,0.1), inset 0 1px 0 rgba(255,255,255,0.08)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
