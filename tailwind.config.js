/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
  animation: {
    wiggle: "wiggle 0.5s ease-in-out",
  },
  keyframes: {
    wiggle: {
      "0%, 100%": { transform: "rotate(-2deg)" },
      "50%": { transform: "rotate(2deg)" },
    },
  },
    },
  },
  plugins: [],
}
