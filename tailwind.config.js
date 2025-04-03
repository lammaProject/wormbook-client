/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "media",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        dark: "#262626",
        main: "#ba6347",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
    },
  },
  plugins: ["@tailwindcss/typography", "@tailwindcss/forms"],
};
