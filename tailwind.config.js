/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          brand: '#1565C0',
          light: '#1E88E5',
          bright: '#2196F3',
          dark: '#0D47A1',
          accent: '#00B0FF',
        },
        navy: {
          900: '#040d1a',
          800: '#071428',
          700: '#0a1c38',
          600: '#0d2548',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Oswald', 'Impact', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #040d1a 0%, #071428 40%, #0a2040 100%)',
        'blue-gradient': 'linear-gradient(90deg, #1565C0 0%, #00B0FF 100%)',
        'card-gradient': 'linear-gradient(180deg, #0a1c38 0%, #071428 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
