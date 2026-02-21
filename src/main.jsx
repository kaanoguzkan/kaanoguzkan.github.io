import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ResumeProvider } from './context/ResumeContext';
import { ProjectModalProvider } from './context/ProjectModalContext';
import { ThemeProvider } from './context/ThemeContext';
import './i18n';
import './styles/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ResumeProvider>
          <ProjectModalProvider>
            <App />
          </ProjectModalProvider>
        </ResumeProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
