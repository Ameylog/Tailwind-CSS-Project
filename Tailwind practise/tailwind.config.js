/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize:{
        '10xl':['9rem',{lineHeight:'1.2'}],
      }
    },
  },
  plugins: [],
}

