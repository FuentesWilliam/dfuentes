/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#DBEAFE',
          600: '#2563EB',
        },
        purple: {
          100: '#E9D5FF',
          600: '#7C3AED',
        },
        green: {
          100: '#D1FAE5',
          600: '#10B981',
        },
        orange: {
          100: '#FFEDD5',
          600: '#F97316',
        },
      },
    },
  },
  plugins: [],
};