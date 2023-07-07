/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				AirBnbCerealMedium: ['airBnbMedium', 'sans-serif'],
				AirBnbCerealLight: ['airBnbLight', 'sans-serif'],
				AirBnbCerealBold: ['airBnbBold', 'sans-serif'],
				Assistant: ['Assistant', 'sans-serif']
			},
			animation: {
				slide: '13.5s slide infinite linear'
			},
			keyframes: {
				slide: {
					'0%': {transform: 'translateX(0)'},
					'100%': {transform: 'translateX(-100%)'}
				}
			}
		}
	},
  	plugins: []
}
