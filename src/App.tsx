import React, { useState, useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getTheme, cacheRtl } from './theme';
import { CacheProvider } from '@emotion/react';
import { Container } from '@mui/material';
import Header from './components/layout/Header';
import AppRoutes from './routes/index';
import { BrowserRouter } from 'react-router-dom';

// Add Cairo font
const fontStyle = document.createElement('style');
fontStyle.innerHTML = `
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap');
`;
document.head.appendChild(fontStyle);

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Header setMode={setMode} mode={mode} />
          <Container 
            maxWidth={false} 
            sx={{ 
              width: '100%',
              maxWidth: '100%',
              px: { xs: 2, sm: 3 },
              overflow: 'hidden'
            }}
          >
            <AppRoutes />
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
