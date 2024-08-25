import React from 'react';
import ReactDOM from 'react-dom/client';

import './properties.css';

import './index.css';
import App from './App';

// Language
import { LanguageProvider } from './locales/helper/LanguageContext';
import './locales/helper/i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);
