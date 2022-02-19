import { red, blue } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: red[900],
        },
        secondary: {
            main: '#ffa500',
        },
        white: {
            main: '#fff',
        },
        black: {
            main: '#000',
        },
        grey: {
            main: 'rgba(189, 189, 189, 1)',
        },
        dark: {
            main: 'rgba(79, 79, 79, 1)',
        },
        solidDark: {
            main: '#282c34',
        },
    },
});

const colors = {
    white: '#fff',
    backgroundDark: 'rgba(79, 79, 79, 1)',
    backgroundSolidDark: '#282c34',
    grey: 'rgba(189, 189, 189, 1)',
};

export default colors;
