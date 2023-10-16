/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        current: 'currentColor',
        'bluegreen': {
          800: '#79A3A0',
          600: '#33C4B8',
          500: '#65DBD1',
          400: '#91DBD5',
          300: '#A2DBD7'
        }
      }
    },
  },
  plugins: [],
}
