import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ResumeProvider } from './context/ResumeContext';
import { ThemeProvider } from './context/ThemeContext';
import './i18n';
import './styles/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <ResumeProvider>
        <App />
      </ResumeProvider>
    </ThemeProvider>
  </React.StrictMode>
);
