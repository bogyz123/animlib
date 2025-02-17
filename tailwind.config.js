/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["translate-y-[50%]", "translate-y-[100%]", "opacity-0", "opacity-1"],
  theme: {
    extend: {
      animation: {
        'fromLeft': "fromLeft 1s ease-out forwards",
      },
      backgroundImage: {
        gradient: "linear-gradient(to right, red, blue, purple, red)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
      },
      keyframes: {
        scale: {
          '0%': {transform:'scale(0.75)'},
          '100%': {transform: 'scale(1)'},
        },
        fromLeft: {
          to: {
            transform: 'translateX(0)',
          }
        }
      },
    },
  },
  plugins: [],
};
