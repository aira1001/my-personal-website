module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: "#3B82F6",
                secondary: "#1E40AF",
            },
            // screens: {
            //     'sm': '640px',
            //     // => @media (min-width: 640px) { ... }

            //     'md': '768px',
            //     // => @media (min-width: 768px) { ... }

            //     'lg': '1024px',
            //     // => @media (min-width: 1024px) { ... }

            //     'xl': '1280px',
            //     // => @media (min-width: 1280px) { ... }
            // }
        },
    },
    plugins: [],
};
