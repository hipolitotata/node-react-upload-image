import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes'
import { GlobalStyles } from './global-styles';

export default function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
  );
}