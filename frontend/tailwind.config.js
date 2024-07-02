/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"], // Updated from purge to content
  darkMode: "media", // or 'class' or remove it entirely
  theme: {
    extend: {
      borderColor: {
        "custom-gray": "#ccc",
      },
    },
  },
  plugins: [],
};
