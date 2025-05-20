import { createTheme } from '@mui/material/styles';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';

export const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

export const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    direction: 'rtl',
    palette: {
      mode,
      ...(mode === 'dark'
        ? {
            background: { default: '#18191a', paper: '#23272f' },
          }
        : {}),
    },
    typography: {
      fontFamily: 'Cairo, sans-serif',
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: { direction: 'rtl' },
        },
      },
    },
  }); 