import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './pages/AppRouter';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
