/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "rgb(16,12,36)",
        card: "rgb(29, 23, 58)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        typing: "typing var(--animation-duration) var(--animation-delay) steps(var(--animation-steps), end) forwards",
      },
      keyframes: {
        typing: {
          from: { width: "var(--from-ch)" },
          to: { width: "var(--to-ch)" },
        },
      },
    },
  },
  plugins: [],
};
