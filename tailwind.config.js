/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const Vayu = require("vayu");

module.exports = {
  content: [
    "./node_modules/vayu-vue/dist/*.js",
    "./node_modules/vayu-vue/dist/*.cjs",
    "./node_modules/vayu/**/*.cjs",
    "./node_modules/vayu/dist/*.{mjs,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "chakra-petch": ["Chakra Petch", "sans-serif"],
        "jakarta-sans": ["Jakarta Sans", "sans-serif"],
      },
      colors: {
        primary: {
          100: "#FFF0CD",
          200: "#FFDD9B",
          300: "#FFC56A",
          400: "#FFAE45",
          500: "#FF8707",
          600: "#DB6905",
          700: "#B74E03",
          800: "#933802",
          900: "#7A2801",
        },
        secondary: {
          100: "#C7F9E4",
          200: "#92F3D2",
          300: "#58DDBC",
          400: "#2FBCA5",
          500: "#009086",
          600: "#00797B",
          700: "#00605F",
          800: "#004253",
          900: "#003145",
        },
        accent: {
          100: "#F6CCE3",
          200: "#ED9DD1",
          300: "#C963AE",
          400: "#933683",
          500: "#4C0C47",
          600: "#400841",
          700: "#380034",
          800: "#24032C",
          900: "#1A0224",
        },
        grey: {
          100: "#F4F4F5",
          200: "#E4E4E7",
          300: "#D4D4D8",
          400: "#A1A1AA",
          500: "#71717A",
          600: "#525268",
          700: "#383857",
          800: "#242446",
          900: "#15153A",
        },
        success: {
          100: "#DCFCE7",
          200: "#A0F5A6",
          300: "#6DE381",
          400: "#46C769",
          500: "#16A34A",
          600: "#108C4A",
          700: "#0B7547",
          800: "#075E41",
          900: "#044E3C",
        },
        danger: {
          100: "#FDE1D3",
          200: "#FBBDA8",
          300: "#F4907B",
          400: "#EA6558",
          500: "#DC2626",
          600: "#BD1B29",
          700: "#9E132B",
          800: "#7F0C2A",
          900: "#690729",
        },
        info: {
          100: "#F6CCE3",
          200: "#ED9DD1",
          300: "#C963AE",
          400: "#933683",
          500: "#4C0C47",
          600: "#400841",
          700: "#380034",
          800: "#24032C",
          900: "#1A0224",
        },
        black: "#000000",
        white: "#ffffff",
      },
    },
  },
  plugins: [
    Vayu.plugin({
      components: [
        "button",
        "port",
        "modal",
        "confirm",
        "input",
        "field",
        "textbox",
        "textarea",
        "switch",
        "select",
        "choice",
        "notification",
        "table",
        "copy",
      ],
      extend: {
        button: {
          ".button": {
            "&:focus": {
              outlineWidth: "0px",
            },
          },
        },
      },
    }),
  ],
};
// export default {
//   content: [
//     "./node_modules/vayu-vue/**/*.cjs",
//     "./node_modules/vayu-vue/**/*.js",
//     "./node_modules/vayu/**/*.cjs",
//     "./node_modules/vayu/*.cjs",
//   ],

//   plugins: [
//     Vayu.plugin({
//       components: ["button", "notification", "copy", "icon", "select", "field"],
//     }),
//   ],
// };
