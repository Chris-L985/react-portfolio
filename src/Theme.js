import { createTheme } from '@material-ui/core';

const theme = createTheme({
    fonts: {
        primary: {
            fontFamily: "'Glory', sans-serif",
            fontWeight: 600,
        },
        secondary: {
            fontFamily: "'Glory', sans-serif",
            fontWeight: 700,
        },
        tertiary: {
            fontFamily: "'Montserrat', sans-serif",
        },
    },
    colors: {
        primary: "#a52422",
        secondary: "#a4bab7",
        tertiary: "#080f0f",
        quarternary: "#eff2c0",
        quinary: "#bea57d",
    },
    typography: {
        p: {
            fontFamily: "'Montserrat', sans-serif",
        },
    },
});

export default theme;