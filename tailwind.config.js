/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          sm: "2rem",
          lg: "2rem",
          xl: "3rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
