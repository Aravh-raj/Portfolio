/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kanit', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif'],
      },
      colors: {
        background: '#0C0C0C',
        brand: {
          light: '#D7E2EA',
          dark: '#0C0C0C',
        }
      },
    },
  },
  plugins: [],
};
