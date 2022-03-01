module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        1: "0.5px",
      },
      colors: {
        customGray: "#EFF2F6",
        customBlue: "#0059D2",
        gray: "#d6dce5",
        darkBlue: "#000724",
      },
    },
  },
  plugins: [],
};
