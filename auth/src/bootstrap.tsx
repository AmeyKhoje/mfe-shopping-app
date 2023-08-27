import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const rootElement = document.getElementById('mfe-remote');

if (rootElement) {
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <BrowserRouter basename="/auth">
        <App />
      </BrowserRouter>
    </StrictMode>
  );
}
