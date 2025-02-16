/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["translate-y-[50%]", "translate-y-[100%]", "opacity-0", "opacity-1"],
  theme: {
    extend: {
      animation: {
        typing: "typing var(--animation-duration) var(--animation-delay) steps(var(--animation-steps), end) forwards",
      },
      colors: {
        dark: "rgb(16,12,36)",
        card: "rgb(29, 23, 58)",
        site: "rgb(16, 12, 36)",
      },
      backgroundImage: {
        gradient: "linear-gradient(to right, red, blue, purple, red)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
      },
      keyframes: {
        typing: {
          from: { width: "var(--from-ch)" },
          to: { width: "var(--to-ch)" },
        },
        scale: {
          '0%': {transform:'scale(0.75)'},
          '100%': {transform: 'scale(1)'},
        },
      },
    },
  },
  plugins: [],
};
