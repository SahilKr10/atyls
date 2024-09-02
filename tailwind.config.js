/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'blackish' : '#131319',
        'greeyish' : '#26292d',
        'border-dark': '#656565',
        'border-light': '#36373b',
        'primary-cta': '#4b96ff'
      },
      // that is animation class
      animation: {
        fadeIn: 'fadeIn 0.2s ease-in',
        fadeOut: 'fadeOut 0.2s ease-in',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      }),
    },
  },
  plugins: [],
}

