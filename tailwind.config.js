/** @type {import('tailwindcss').Config} */
const Vayu = require("vayu");

module.exports = {
  content: [
    "./node_modules/vayu-vue/dist/*.js",
    "./node_modules/vayu-vue/dist/*.cjs",
    "./node_modules/vayu/**/*.cjs",
    "./node_modules/vayu/dist/*.{mjs,js}",
  ],
  theme: {
    extend: {},
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
