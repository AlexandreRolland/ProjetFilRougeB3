import { createTheme } from '@mui/material';

const Theme = createTheme({
    palette: {
      primary: {
        main: '#FFD568',
        dark: '#FFB905',
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
      },
  
      h3: {
        fontSize: '1.5rem',
        fontWeight: 700,
      },
  
      button: {
        fontSize: '1rem',
        fontWeight: 700,
        color : 'white',
        
      }
    },
  
  
  });

   export default Theme;