import { createTheme } from '@mui/material';

const Theme = createTheme({
    palette: {

      background: {
        default: '#F1F3F9',
        paper: '#f1f2f9'

      },

      primary: {
        main: '#FFD568',
        dark: '#FFB905',
        contrastText: 'white',
      },

      secondary: {
        main: '#ffb905',
        dark: '#ffb905',
        contrastText: 'white',
      }
    },

  
    typography: {
      
      fontFamily: [
        'Roboto',
        'sans-serif',
      ].join(','),
  
      h1: {
        fontSize: '2.5rem',
        fontWeight: 700,
      },
  
      h2: {
       fontSize: '2rem',
       fontWeight: 700,
       textDecoration: 'none'
      },
  
      h3: {
        fontSize: '1.5rem',
        fontWeight: 700,
      },
  
      button: {
        fontSize: '1rem',
        fontWeight: 700,
        color : 'white',
        
      },

      a: {
        textDecoration: 'none',
        color: '#ffffff',
      }
    },
  
  
  });

   export default Theme;