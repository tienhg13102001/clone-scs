/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "text-custom": "3px 4px 5px rgba(0, 0, 0, 0.7)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
        },
      },
    },
  },
  plugins: [],
};
