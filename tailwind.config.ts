import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#222222',
        extraText: '#565148',
        accent: '#ED4B5E',
        extraAccent:'#FFEFF0'
      },
      fontFamily: {
        anzeigen: 'Anzeigen',
        inter: 'Inter',
      },
      screens: {
        "sm": '360px',
        "md": '768px',
        "lg": "-1px",
        "xl": '1440px',
        "2xl": "-1px",
      },
    },
  },
  plugins: [],
};
export default config;
