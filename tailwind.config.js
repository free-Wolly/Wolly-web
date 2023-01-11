/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        light: "rgb(0 0 0 / 25%) 0px 10px 30px -20px",
      },
    },
  },
  plugins: [],
};
