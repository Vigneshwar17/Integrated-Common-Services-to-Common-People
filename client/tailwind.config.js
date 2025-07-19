/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0b3c5d',
        secondary: '#4199A7',
        accent: '#1a57da',
      }
    },
  },
  plugins: [],
}