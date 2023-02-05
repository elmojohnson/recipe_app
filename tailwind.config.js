/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f59e0b",
        accent: "#d97706",
        secondary: "#84cc16",
        muted: "#9ca3af"
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
