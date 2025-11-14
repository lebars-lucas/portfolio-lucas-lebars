/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				forest: {
					dark: '#0a0f0d',
					deep: '#1a2e1f',
					main: '#2d5a3d',
				},
				moss: {
					DEFAULT: '#4a7c59',
					light: '#6b9e78',
				},
				sage: '#6b9e78',
				mint: {
					light: '#a8d5ba',
					DEFAULT: '#a8d5ba',
				},
				cream: '#f5f9f7',
				earth: '#8b7355',
				mountain: '#4a5859',
			},
			fontFamily: {
				display: ['Playfair Display', 'serif'],
				body: ['Inter', 'sans-serif'],
			},
			animation: {
				'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
				'fade-in': 'fadeIn 1s ease-out forwards',
				'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
				'slide-in-right': 'slideInRight 0.8s ease-out forwards',
				'float': 'float 6s ease-in-out infinite',
			},
			keyframes: {
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideInLeft: {
					'0%': { opacity: '0', transform: 'translateX(-50px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				slideInRight: {
					'0%': { opacity: '0', transform: 'translateX(50px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' },
				},
			},
		},
	},
	plugins: [],
}
