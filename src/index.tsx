import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import the new App component
import '../css/style.css'; // Import the global stylesheet

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
