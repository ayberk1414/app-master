/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./src/components/*.{html,js,jsx}"],
  theme: {
    extend: {
      padding: {
        '450': '450px',
      }
    },
  },
  plugins: [],
}
