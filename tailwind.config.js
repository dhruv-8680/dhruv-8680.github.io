/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "ai-tree": "url('/src/assets/background.webp)",
      },
    },
  },
  plugins: [],
};
