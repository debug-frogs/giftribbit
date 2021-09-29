import {createTheme, responsiveFontSizes} from '@mui/material/styles';

export const theme = responsiveFontSizes(
    createTheme({
        palette: {
            mode: "light",
            common: {
                black: '#000',
                white: '#fff',
            },
            primary: {
                light: 'rgb(70, 179, 251)',
                main: '#18A0FB',
                dark: 'rgb(16, 112, 175)',
                contrastText: '#fff',
            },
            secondary: {
                light: 'rgb(129, 51, 241)',
                main: '#6200EE',
                dark: 'rgb(68, 0, 166)',
                contrastText: '#fff',
            },
            error: {
                light: '#e57373',
                main: '#f44336',
                dark: '#d32f2f',
                contrastText: '#fff'
            },
            warning: {
                light: '#ffb74d',
                main: '#ff9800',
                dark: '#f57c00',
                contrastText: 'rgba(0, 0, 0, 0.87)'
            },
            info: {
                light: '#64b5f6',
                main: '#2196f3',
                dark: '#1976d2',
                contrastText: '#fff',
            },
            success: {
                light: '#81c784',
                main: '#4caf50',
                dark: '#388e3c',
                contrastText: 'rgba(0, 0, 0, 0.87)'
            },
        },
        typography: {
            button: {
                textTransform: 'none',
            }
        },
        props: {
            MuiButtonBase: {
                disableRipple: true,
            }
        },
        shape: {
            borderRadius: 4,
        }
    }));

export default theme
