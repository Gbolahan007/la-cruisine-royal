/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Ponomar', 'sans-serif'],
        primary2: ['Pacifico', 'sans-serif'],
        primary3: ['Kaushan Script', 'cursive'],
      },
    },
  },
  plugins: [],
};
