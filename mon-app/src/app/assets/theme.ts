import {ThemeOptions} from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#FFD568',
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.mai
        },
        secondary: {
            main: '#91B1EE',
        },

        background: {
            default: 'background: radial-gradient(159.21% 377.09% at -20.15% 100%, #EAEDF8 0%, #F9F9F9 100%)',
        },

        error: {
            main: '#f44336',
        },
        warning: {
            main: '#ff9800',
        },
        info: {
            main: '#2196f3',
        },
        success: {
            main: '#4caf50',
        },
    }




};
