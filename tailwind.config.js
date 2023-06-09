/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: "376px",
      },
      colors: {
        "dark-cyan": "hsl(158, 36%, 37%)",
        "darker-cyan": "hsl(158, 36%, 20%)",
        cream: "hsl(30, 38%, 92%)",
        "very-dark-blue": "hsl(212, 21%, 14%)",
        "dark-grayish-blue": "hsl(228, 12%, 48%)",
      },
      fontFamily: {
        fraunces: "'Fraunces', serif",
      },
    },
  },
  plugins: [],
};
