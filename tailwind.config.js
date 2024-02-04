/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "pop-animation": {
          from: { transform: "scale(0.95)" },
          "50%": { transform: "scale(1)" },
          to: { transform: "scale(0.95)" },
        },
      },
      animation: {
        pop:"pop-animation 0.58s infinite"
      },
    },
  },
  plugins: [],
};
