/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "mood-gray-700": "#383737",
        "mood-purple": "#E7E3FF",
        "mood-blue-700": "#6045FF",
      },
    },
  },
  plugins: [],
};
