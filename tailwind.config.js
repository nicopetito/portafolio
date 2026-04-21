/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        jakarta: ['var(--font-jakarta)', 'sans-serif'],
        display: ['Georgia', 'ui-serif', 'serif'],
      },
      colors: {
        bg: '#f8f7f4',
        surface: '#efede7',
        border: '#e2dfd6',
        accent: '#047857',   // Emerald 700 — 6.5:1 contraste sobre blanco
        amber: '#C8923C',    // Ámbar cálido — acento secundario para detalles
        text: '#1c1917',     // Stone 900
        muted: '#78716c',    // Stone 500
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
