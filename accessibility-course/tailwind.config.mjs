/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,css,md}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--body-font)', 'monospace'],
      },
      colors: {
        primary: 'var(--primary-color)',
        hoverdark: 'var(--hover-dark-color)',
        accent: 'var(--accent-color)',
        accentdark: 'var(--accent-color-dark)',
        text: 'var(--text-color)',
        lightgray: 'var(--light-gray)',
        lightgreen: 'var(--light-green)',
      },
    },
  },
  // plugins: [require('@tailwindcss/typography')],
};
