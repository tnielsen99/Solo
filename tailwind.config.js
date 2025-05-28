/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Helvetica Neue"', 'sans-serif'],
      },
      colors: {
        primary: '#0f172a',
        accent: '#f97316',
      },
    },
  },
  plugins: [],
};