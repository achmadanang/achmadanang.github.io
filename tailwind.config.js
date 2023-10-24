/** @type {import('tailwindcss').Config} */
module.exports = {
  contents: ["./src/**/*.{html,js}", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("preline/plugin")],
};
