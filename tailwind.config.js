/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-pink': 'var(--neon-pink)',
        'neon-blue': 'var(--neon-blue)',
        'cyber-black': 'var(--cyber-black)',
      },
    },
  },
  plugins: [],
};