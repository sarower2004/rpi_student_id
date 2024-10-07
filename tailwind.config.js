/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'back_logo': "url('/back_logo.png')",
        '50%': '50%',
      '16': '4rem',
      },
      rotate: {
        '-45': '45deg',
      }
    },
  
  },
  plugins: [],
}