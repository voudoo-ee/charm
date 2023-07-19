/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/**/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {
            fontSize: {
                "6xl": "3.450rem"
            },
            colors: {
                lighter: "#f2f5dc",
                evendarker: "#9ba96c",
                darker: "#AABA78",
                dark: "#c5d2a3",
                grayish: "#585960",
                darkish: "#535864",
                lightgrayish: "#a6adbb",
                superblue: "#2a303c",
                special: "#ba78aa",
                description: "#4A4E51"
            },
            fontFamily: {
                interMedium: ["Inter-Medium", "sans-serif"],
                gilroyBold: ["Gilroy-Bold", "sans-serif"],
                monaSans: ["Mona-Sans-Regular", "sans-serif"],
                monaSansBlack: ["Mona-Sans-Black", "sans-serif"],
                monaSansBlackWide: ["Mona-Sans-BlackWide", "sans-serif"],
                monaSansBoldWide: ["Mona-Sans-BoldWide", "sans-serif"],
                monaSansExtraBoldWide: ["Mona-Sans-ExtraBoldWide", "sans-serif"],
                monaSansMedium: ["Mona-Sans-Medium", "sans-serif"],
                monaSansSemiBold: ["Mona-Sans-SemiBold", "sans-serif"]
            }
        }
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                custom: {
                    primary: "#AABA78",
                    secondary: "#238387",
                    "base-100": "#ffffff"
                }
            },
            "light"
        ]
    }
};
