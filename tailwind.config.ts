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
        sand: '#d8d0bd',
        langBtnActive: '#b3dce2',
        mainBg: '#152632',
        mainBgOpacity: "#152632cc",
      },
    },
  },
  plugins: [],
};
export default config;
