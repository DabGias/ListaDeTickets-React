import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NumberContextProvider from './context/NumberContext';
import GlobalStyle from './theme/globalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NumberContextProvider>
    <App />
    <GlobalStyle/>
  </NumberContextProvider>
);
