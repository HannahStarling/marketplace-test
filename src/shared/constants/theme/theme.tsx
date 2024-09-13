import { createTheme } from '@mui/material';
import { COLORS } from './colors';

export const THEME = createTheme({
  palette: {
    primary: {
      main: COLORS.accentBlue,
      light: COLORS.primaryBody,
      dark: COLORS.primaryDark,
    },
    secondary: {
      main: COLORS.secondaryGrey,
    },
    success: {
      main: COLORS.accentGreen,
    },
    warning: {
      main: COLORS.accentYellow,
    },
    info: {
      main: COLORS.accentPink,
      light: COLORS.accentLightPink,
    },
    background: {
      default: COLORS.secondaryWhite,
      paper: COLORS.accentGrey,
    },
    text: {
      primary: COLORS.primaryDark,
    },
  },
  typography: {
    fontFamily: 'Raleway, Arial, sans-serif',
    fontSize: 16,
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 700,
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 700,
    },
    h6: {
      fontSize: '0.875rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    subtitle2: {
      fontSize: '0.75rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    caption: {
      fontSize: '0.875rem',
      fontWeight: 400,
    },
    overline: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
  },
});
