/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "mood-gray-700": "#383737",
        "mood-lime-700": "#00C853",
        "mood-lime": "#E8F5E9",
      },
      fontSize: {
        none: 0,
      },
    },
  },
  plugins: [],
};
