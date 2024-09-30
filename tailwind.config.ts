import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
			backgroundColor: {
        'dark': '#030637',
        'dark-2': '#1B1A55',
        'light': '#f1eaff',
        'light-2': '#FFF0F5',
        'gold': '#F39F5A',
        'collab': '#CD104D',
        'footer-light': '#3C0753',
        'footer-dark': '#E5D4FF',
        'both': '#9290C3',
        'transparent': 'transparent',
      },
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
