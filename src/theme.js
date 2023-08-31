import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: green[300],
    },
    secondary: { main: '#000' },
  },
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: green[300],
          },
          borderRadius: '4px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textPrimary: '#000',
          '&:hover': {
            borderColor: green[500],
            backgroundColor: green[400],
            color: 'rgba(255,255,255, 0.9)',
          },
        },
        outlined: {
          borderColor: green[300],
          backgroundColor: green[300],
          color: '#000',
        },
      },
    },
  },
});

export default theme;
