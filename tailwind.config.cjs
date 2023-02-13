/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
        "lighter": "#f2f5dc",
        "darker": "#AABA78",
        "dark": "#c5d2a3",
				"grayish": "#585960",
				"lightgrayish": "#a6adbb",
				"superblue": "#2a303c"
      },
			fontFamily: {
				monaSans: ["Mona-Sans-Regular", "sans-serif"],
        monaSansBlack: ["Mona-Sans-Black", "sans-serif"],
				monaSansBlackWide: ["Mona-Sans-BlackWide", "sans-serif"],
				monaSansBoldWide: ["Mona-Sans-BoldWide", "sans-serif"],
				monaSansExtraBoldWide: ["Mona-Sans-ExtraBoldWide", "sans-serif"],
				monaSansMedium: ["Mona-Sans-Medium", "sans-serif"],
				monaSansSemiBold: ["Mona-Sans-SemiBold", "sans-serif"],
      },
		}
	},
	plugins: [require('daisyui')]
};
