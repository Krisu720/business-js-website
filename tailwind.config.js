/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--beige)",
        secondary: "var(--green)",
        black: "var(--black)",
        gray: "var(--gray)",
      },
      fontFamily: {
        inter: "'Inter', sans-serif",
        montserrat: "'Montserrat', sans-serif",
      },
      animation: {
        slide_bottom: "slideBottom 0.2s ease-out"
      },
      keyframes: {
        slideBottom: {
          from: {
            opacity: 0,
            transform: "translateY(-10px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0px)"
          }
        }
      },
    },
  },
  plugins: [],
}

