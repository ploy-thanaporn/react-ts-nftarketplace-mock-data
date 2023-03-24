/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins"],
      },
      fontSize: {
        4: ["4.49px", "5.38px"],
        6: ["6.28px", "7.54px"],
        7: ["7.19368px", "9px"],
        8: ["8.8px", "10.68px"],
        10: ["10px", "12px"],
        14: ["14px", "17px"],
        12: ["12px", "14px"],
        16: ["16px", "19px"],
        18: ["18px", "27px"],
        19: ["19px", "23px"],
        20: ["20px", "24px"],
        23: ["23px", "28px"],
        28: ["28px", "34px"],
        33: ["33px", "40px"],
        39: ["39px", "47px"],
        34: ["34px", "49px"],
        48: ["48px", "56px"],
        xs: ["12px", "18px"],
        sm: ["14px", "21px"],
        nav: ["16px", "19.2px"],
        tw: ["12.53px", "14.88px"],
        twelve: ["12px", "18px"],
        seven: ["7.83", "10px"],
        sevenn: ["7.66px", "9.2px"],
        ten: ["10.97px", "13.32px"],
        tenn: ["10px", "15px"],
        tenFooter: ["10.76px", "12.91px"],
        six: ["6.71px", "10.06px"],
        fourteen: ["14px", "16.8px"],
        sixteen: ["16px", "19.2px"],
        eighteen: ["18px", "21.6px"],
        twentyeight: ["28px", "42px"],
      },
      colors: {
        primary: "#DE4343",
        secondary: "#255495",
        loading: "#F6F5F5",
        200: "#F9FAFA",
        300: "#DBE1E1",
        400: "#C4CACA",
        500: "#6C7474",
        600: "#393A3A",
        700: "#1E1E1E",
      },
      boxShadow: {
        trendMb: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        trend: "0px 6px 12px rgba(0, 0, 0, 0.1)",
        explore: [
          "0px 0px 1px rgba(0, 0, 0, 0.25)",
          "0px 0px 1px rgba(0, 0, 0, 0.06);",
        ],
        previewAsset: "0px 8px 24px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
