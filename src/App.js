import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme/Theme';

import MainLayout from './MainLayout';
import AuthProvider from './contexts/auth/AuthProvider';

function App() { 
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <CssBaseline />    
        <MainLayout />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
