import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme, cacheRtl } from './theme';
import { CacheProvider } from '@emotion/react';
import { Container } from '@mui/material';
import Header from './components/layout/Header';
import DashboardContent from './pages/DashboardContent';
import ReportPage from './pages/ReportPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Add Cairo font
const fontStyle = document.createElement('style');
fontStyle.innerHTML = `
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700&display=swap');
`;
document.head.appendChild(fontStyle);

function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Header />
          <Container 
            maxWidth={false} 
            sx={{ 
              width: '100%',
              maxWidth: '100%',
              px: { xs: 2, sm: 3 },
              overflow: 'hidden'
            }}
          >
            <Routes>
              <Route path="/" element={<DashboardContent />} />
              <Route path="/report" element={<ReportPage />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
