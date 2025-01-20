/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#00001B",
        'secondary': "#0B163B",
        "griffindor-red": "#740001",
        "griffindor-gold": "#D3A625",
        "slytherin-green": "#1A472A",
        "slytherin-silver": "#aaaaaa",
        "hufflepuff-yellow": "#e2bd00",
        "hufflepuff-black": "#000000",
        "ravenclaw-blue": "#0E1A40",
        "ravenclaw-bronze": "#ad864c",

      },
      fontFamily: {
        "rakkas": ["Rakkas", "serif"],
        magic: ['MagicSchoolOne', 'sans-serif'],
        harry: ['HarryPotter', 'sans-serif'],

      },
      screens: {
        '1sm': { max: '430px' },
        '2sm': { max: '414px' },
        '2.5sm': { max: '400px' },
        '3.5sm': { max: '390px' },
        '3sm': { max: '375px' },
        '4sm': { max: '360px' },
        '5sm': { max: '320px' },
        xs: '320px',
        sm: '375px',
        md: '400px',
        'tablet-mm': '630px',
        'tablet-p': '430px',
        'tablet-m': '768px',
        'desktop-s': '1020px',
        'desktop-p': '1024px',
        'desktop-m': '1280px',
        'desktop-mm': '1366px',
        'desktop-g': '1440px',
        'desktop-xl': '1920px',
      },
    },
  },
  plugins: [],
}

