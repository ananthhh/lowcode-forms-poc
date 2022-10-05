/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {},
    extend: {},
  },
  plugins: [require('daisyui'), require("tailwindcss-radix")()],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          "primary": "#5d507b",
          "secondary": "#877ba3",
          "accent": "#ED2D7b",
          "info": "#83cce2",
          "base-300": "#EBEBEB",
          "success": "#8bc34a",
          "warning": "#f3b265",
          "error": "#f5786f",
        },
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          "primary": "#5d507b",
          "secondary": "#877ba3",
          "accent": "#ED2D7b",
          "info": "#83cce2",
          "success": "#8bc34a",
          "warning": "#f3b265",
          "error": "#f5786f",
        }
      },
    ]
  }
}
