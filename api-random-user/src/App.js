import React from 'react';
import AppRouter from './router/AppRouter';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeProviders from './providers/ThemeProvider/ThemeProviders';
import LocalesProviders from './providers/LocalesProvider/LocalesProviders';

const App = () => {

  return (
    <>
      <ThemeProviders>
        <LocalesProviders>
          <Router>
            <AppRouter />
          </Router>
        </LocalesProviders>
      </ThemeProviders>
    </>
  );
}

export default App;
