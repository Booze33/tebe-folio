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
      gridTemplateRows: {
        // Simple 16 row grid
        'card': 'repeat(6, minmax(0, 1fr))',
      },
      width: {
        'logo': '6rem',
        'img': '7rem',
        'img2': '10rem',
        'svg': '25vw',
        'input': '50vw',
        'full': '100%',
        'nine': '90%',
        'twice': '200%',
        'footer': '35vw',
        'small': '37vw',
        'display': '60vw',
        'large': '90vw',
        'image': '78vw',
        'feature': '80vw',
        'half': '50%',
        'message': '18rem',
      },
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
