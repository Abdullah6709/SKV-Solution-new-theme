import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#7C4100', // Rich Warm Bronze
      light: '#9E5400',
      dark: '#592e00',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#9E5400', // Vibrant Bronze / Amber Brown
      light: '#BF6800',
      dark: '#7C4100',
      contrastText: '#ffffff',
    },
    accent: {
      main: '#d97706', // Amber Gold
      light: '#f59e0b',
      dark: '#b45309',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
    text: {
      primary: '#0f172a',
      secondary: '#475569',
    },
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.025em',
    },
    h2: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontWeight: 700,
      letterSpacing: '-0.015em',
    },
    h4: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 700,
      borderRadius: 10,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          padding: '12px 26px',
          fontSize: '0.95rem',
          boxShadow: 'none',
          transition: 'all 0.25s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 25px -5px rgba(124, 65, 0, 0.25)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #7C4100 0%, #9E5400 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #592e00 0%, #7C4100 100%)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #9E5400 0%, #BF6800 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #7C4100 0%, #9E5400 100%)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.04)',
          border: '1px solid rgba(226, 232, 240, 0.9)',
          transition: 'all 0.3s ease',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 20,
        },
      },
    },
  },
});

export default theme;
