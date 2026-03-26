import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#111E35",
        navy2: "#1B2A4A",
        accent: "#E8500A",
        accent2: "#F06A28",
      },
    },
  },
  plugins: [],
};
export default config;
