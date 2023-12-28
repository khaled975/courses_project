/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-1-color": "#00757F",
        "main-2-color": "#8ABCBF",
        "second-color": "#fecf49",
        "dark-color": "#282745",
        "gray-color-1": "#f8f8f8",
        "gray-color-2": "#d9d9d9",
        "gray-color-3": "#c4c4c4",
      },
      backgroundColor: {
        "bg-gray-1": "#f8f8f8",
        "bg-main-1": "#86bdc2",
        "bg-main-2": "#eaf4f5",
      },
      fontFamily: {
        "main-font": "Barlow Condensed",
      },
    },
  },
  plugins: [],
};
