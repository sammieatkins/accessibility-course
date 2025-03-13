/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,css}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'], // Set Nunito as the default sans-serif font
        nunito: ['Nunito', 'sans-serif'], // Explicitly define "font-nunito" class
      },
    },
  },
  plugins: [],
};
