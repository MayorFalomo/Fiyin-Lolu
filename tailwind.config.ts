import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	  extend: {
			 fontFamily: {
        petrona: ['var(--font-petrona)', 'sans-serif'],
			  ebGaramond: ['var(--font-eb-garamond)', 'serif'],
			  belleze: ['var(--font-belleza)', 'sans-serif'],
			  meow: ['var(--font-meow)', 'cursive'],
					sofia: ['var(--font-sofia)', 'sans-serif'],
        geist: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
  		colors: {
  			background: 'var(--background)',
				foreground: 'var(--foreground)',
				beige: '#F4EFEB',
				black: '#000',
				white: '#fff',
				offWhite: '#FCFBF9'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
