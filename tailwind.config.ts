import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Pretendard: ["Pretendard"],
      },
      //반응형 크기 설정
      screens: {
        sm: "410px",
        md: "768px",
        lg: "1280px",
      },
      //컬러 설정
      colors: {
        light: {
          coral: {
            100: "#FFEEF1",
            200: "#FFD5D9",
            300: "#F8A8A5",
            400: "#F28882",
            500: "#FF6247",
            600: "#F75B48",
            700: "#E45141",
          },
          gray: {
            100: "#FDFDFD",
            200: "#F7F8F9",
            300: "#E9EBEE",
            400: "#C5C8CE",
            500: "#646F7C",
            600: "#374553",
            700: "#28323C",
            800: "#161D24",
          },
          background: "#FEFEFE",
        },
        dark: {
          coral: {
            100: "#D73F2F",
            200: "#E44636",
            300: "#F7503C",
            400: "#FF583B",
            500: "#F3817B",
            600: "#F9A4A0",
            700: "#FFD3D6",
          },
          gray: {
            100: "#1E2427",
            200: "#2E363A",
            300: "#41474C",
            400: "#5A6166",
            500: "#999FA4",
            600: "#C5C8CE",
            700: "#F7F8F9",
            800: "#FDFDFD",
          },
          background: "#171B1C",
        },
      },
    },
  },
  plugins: [],
};
export default config;
