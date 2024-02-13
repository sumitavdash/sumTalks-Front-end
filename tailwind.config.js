/** @type {import('tailwindcss').Config} */
 // tailwind.config.js
export const content = [
  './src/**/*.{html,ts,css,scss}',
];
export const theme = {
  extend: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
    },
  },
};
export const plugins = [];

