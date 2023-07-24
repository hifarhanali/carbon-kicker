module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#000000", "900_5e": "#0000005e", "900_63": "#00000063" },
        blue_gray: { 50: "#ebedf2" },
        gray: {
          50: "#f8f8f8",
          300: "#d9dbf1",
          900: "#0a103d",
          "900_87": "#0a103d87",
          "900_01": "#1c083a",
        },
        yellow: { 600: "#f8cc34", 700: "#e0b72b" },
        orange: { 50: "#fff8e2" },
        indigo: { 200: "#9ca1cc" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { jost: "Jost", worksans: "Work Sans" },
      backgroundImage: {
        gradient: "linear-gradient(0deg ,#0000005e,#0000005e)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
