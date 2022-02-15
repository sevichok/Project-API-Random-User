import React from 'react';
import AppRouter from './router/AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeProviders from './providers/ThemeProviders';

const App = () => {

  return (
    <>
      <ThemeProviders>
        <Router>
          <AppRouter />
        </Router>
      </ThemeProviders>
    </>
  );
}

export default App;
