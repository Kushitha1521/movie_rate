/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {  inter: ['Inter', 'sans-serif']},
  },
  plugins: [ require('@tailwindcss/line-clamp'),],
}
