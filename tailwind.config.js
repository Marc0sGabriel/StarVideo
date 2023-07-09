/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        posters: 'url(/src/assets/moviesPoster.jpg)',
      },
      fontFamily: {
        sans: 'Roboto, sans-serif',
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
          400: '#1A1A26',
          500: '#2C2C40',
          600: '#23252b',
          800: '#0D0D0D',
          900: '#0E0E14',
        },

        orange: {
          400: '#FBA94C',
          600: '#f47521',
        },

        starBlue: {
          200: '#00F7FF',
          300: '#219ebc',
          400: '#609FF7',
          500: '#1673F5',
          600: '#115BC2',
          700: '#2E4C75',
          800: '#0B3775',
          900: '#001233',
        },
      },
    },
  },
  plugins: [],
};
