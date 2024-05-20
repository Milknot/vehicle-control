/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    prefix: "",
    content: ["./src/**/*.{html,ts}"],
    darkMode: "selector",
    theme: {
        extend: {},
        colors: {
            transparent: "transparent",
            white:"#efefef" ,
            background: "#143341",
            "font-color": "#efee",
            blue: "#1fb6ff",
            purple: "#7e5bef",
            red: "#e22",
            pink: "#ff49db", //
            orange: "#ff7849",
            green: "#13ce66",
            yellow: "#ffc82c",
            "gray-dark": "#273444",
            gray: "#8492a6",
            "gray-light": "#d3dce6",
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
    ],
};
