/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-purple': '#5F27CD',
        'bg-dark': '#111827',
        'bg-card': '#1e2533',
        'purple': {
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
        },
        'border-dark': '#2d3748',
        'border-hover': '#4d5b7c',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'input': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'card': '0 8px 20px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 12px 28px rgba(0, 0, 0, 0.2)',
      },
      spacing: {
        '18': '4.5rem',
      },
    },
  },
  plugins: [],
}