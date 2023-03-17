/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins"],
      },
      colors: {
        primary: "#DE4343",
        secondary: "#255495",
      },
    },
  },
  plugins: [],
};
