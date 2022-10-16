/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{js,jsx,ts,tsx}',
        './components/**/**/*.{js,jsx,ts,tsx}',
        './layouts/**/*.{js,jsx,ts,tsx}',
        './layouts/**/**/*.{js,jsx,ts,tsx}',
        './pages/*.{js,jsx,ts,tsx}',
        './pages/**/*.{js,jsx,ts,tsx}',
        './utils/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
