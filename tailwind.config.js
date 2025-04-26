/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // 👈 include all files in src
  ],
  theme: {
    extend: {
      colors:{
        amber :{
          800 : '#800000',
          200: "#FFCC00",
          900 : '#800000',
        }
      }
    },
  },
  plugins: [],
}
