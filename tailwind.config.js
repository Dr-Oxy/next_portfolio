/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        milk: '#E2DDAC',
        darkGray: '#515252',
        lightGray: '#D9D9D9',
        darkRed: '#2C0000',
        brandYellow: '#E5B500',
      },
      dropShadow: {
        '3xl': '0px 4px 4px rgba(0, 0, 0, 0.25)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)',
        ],
      },
      height: {
        main: 'calc(100vh - 70px)',
      },
    },
  },
  plugins: [],
};
