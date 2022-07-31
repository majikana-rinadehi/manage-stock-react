/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '40px': '40px'
      },
      minWidth: {
        '400': '400px'
      },
      boxShadow: {
        around: '0 0 1em rgb(109, 101, 101)'
      }
    },
  },
  plugins: [],
}
