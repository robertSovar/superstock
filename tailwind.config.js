/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: "#ddeedf",
        customOrange: "#e8630a",
      },
    },
  },
  plugins: [],
};
