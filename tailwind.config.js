/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      fira: ["Fira Code", "monospace"],
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/assets/pattern-3.png')",
      },
    },
  },
  plugins: [],
};
