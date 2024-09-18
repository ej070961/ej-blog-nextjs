import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
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
      screens: {
        sm: "0px",
        md: "450px",
        lg: "1280px",
      },
      colors: {
        // light 모드 색상 정의
        coral: {
          "100": "#FFEEF1",
          "200": "#FFD5D9",
          "300": "#F8A8A5",
          "400": "#F28882",
          "500": "#FF6247",
          "600": "#F75B48",
          "700": "#E45141",
        },
        gray: {
          "100": "#FDFDFD",
          "200": "#F7F8F9",
          "300": "#E9EBEE",
          "400": "#C5C8CE",
          "500": "#646F7C",
          "600": "#374553",
          "700": "#28323C",
          "800": "#161D24",
        },
        // 다크 모드 색상 정의 (dark 접두사로 적용 가능)
        dark: {
          coral: {
            "100": "#D73F2F",
            "200": "#E44636",
            "300": "#F7503C",
            "400": "#FF583B",
            "500": "#F3817B",
            "600": "#F9A4A0",
            "700": "#FFD3D6",
          },
          gray: {
            "100": "#1E2427",
            "200": "#2E363A",
            "300": "#41474C",
            "400": "#5A6166",
            "500": "#999FA4",
            "600": "#C5C8CE",
            "700": "#F7F8F9",
            "800": "#FDFDFD",
          },
        },
        // 공통적으로 사용할 CSS 변수 정의
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
