/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#3490dc',
        },
        purple: {
          500: '#9561e2',
        },
        green: {
          500: '#38a169',
        },
      },
    },
  },
  plugins: [],
}