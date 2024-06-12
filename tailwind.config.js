/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "core-bg": "#1E1F22",
        "core-secBg": "#282A2E",
        "core-thBg": "#383B42",
        "core-text": "#EEEEEE",
        "core-secText": "#ABABAB",
        "core-primary": "#10A37F",
        "core-bbBg": "#4B4F5B",
      },
    },
  },
  plugins: [],
};