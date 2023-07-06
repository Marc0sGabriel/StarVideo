/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {

      fontFamily: {
        sans: 'Roboto, sans-serif'
      },

      colors: {
        red: {
          500: '#F75A68',
        },

        green: {
          300: '#00B37E',
          400: '#00875F',
        },

        blue: {
          500: '#81d8f7',
        },

        gray: {
          500: '#323238',
          600: '#23252b',
          800: '#141519',
          900: '#17171A',
        },

        orange: {
          400: '#FBA94C',
          600: '#f47521',
        },
      },
    },
  },
  plugins: [],
};
