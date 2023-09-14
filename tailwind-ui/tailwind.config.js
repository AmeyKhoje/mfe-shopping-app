/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      
    },
    colors: {
      'primary': '#1d3557',
      'secondary': '#457b9d',
      'light-blue': '#a8dadc',
      'light': '#f1faee',
      'black': '#000000',
      'white': '#FFFFFF',
      'green': '#52b788',
      'yellow': '#fee440',
      'accent-black': '#d1d1d1',
      'accent-black-border': '#a5a5a5',
      'accent-black-light': '#e7e7e7'
    },
    fontFamily: {
      rubik: `'Rubik', sans-serif`,
      cinzel: `'Cinzel', serif`,
    },
    spacing: {
      0: '0rem',
      0.5: '0.5rem',
      1: '1rem',
      1.5: '1.5rem',
      2: '2rem',
      2.5: '2.5rem',
      3: '3rem',
      3.5: '3.5rem',
      4: '4rem',
      5: '5rem',
      5.5: '5.5rem',
      6: '6rem',
      6.5: '6.5rem',
      7: '7rem',
      7.5: '7.5rem',
      8: '8rem',
      8.5: '8.5rem',
      9: '9rem',
      9.5: '9.5rem',
      10: '10rem',
      10.5: '10.5rem'
    },
    borderRadius: {
      'none': '0',
      'xsm': '0.3rem',
      'sm': '0.5rem',
      'xmd': '0.7rem',
      'md': '1rem',
      'xlg': '1.2rem',
      'lg': '1.4rem',
      'all': '989898rem',
      DEFAULT: '0.2rem'
    },
    fontSize: {
      sm: '1.2rem',
      base: '1.7rem',
      md: '2.3rem',
      lg: '3rem',
      xlg: '3.5rem',
      '2xlg': '4rem',
      '3xlg': '4.5rem'
    }
  },
  plugins: [],
};
