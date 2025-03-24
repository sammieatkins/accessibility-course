/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,css}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--main-font)', 'monospace'], // Use CSS variable
        main: ['var(--main-font)', 'monospace'], // Optional utility: font-main
      },
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        hoverdark: 'var(--hover-dark-color)',
        accent: 'var(--accent-color)',
        accentdark: 'var(--accent-color-dark)',
        text: 'var(--text-color)',
        link: 'var(--link-color)',
        linkhover: 'var(--link-hover-color)',
        muted: 'var(--muted-text)',
        lightgray: 'var(--light-gray)',
        bottomnav: 'var(--bottom-nav-bg)',
        lightgreen: 'var(--light-green)',
      },
    },
  },
  plugins: [],
};
