/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        primary: {
          DEFAULT: "#53A9C2",
          50: "#DBEDF2",
          100: "#CBE5ED",
          200: "#ADD6E2",
          300: "#8FC7D7",
          400: "#71B8CD",
          500: "#53A9C2",
          600: "#3A8BA3",
          700: "#2B687A",
          800: "#1C4550",
          900: "#0E2127",
          950: "#060F12",
        },
      },
    },
  },
  plugins: [],
};
