/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,ts}"],
    theme: {
        extend: {
            colors: {
                black: "#18171F",
                dark: "#24232C",
                grey: "#817D92",
                ash: "#E6E5EA",
                success: "#A4FFAF",
                error: "#F64A4A",
                orange: "#FB7C58",
                yellow: "#F8CD65",
            },
        },
    },
    plugins: [],
}
