/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "spin-reverse": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "0.4" },
        },
        "robot-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 20s linear infinite",
        "spin-reverse": "spin-reverse 15s linear infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        "robot-float": "robot-float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
