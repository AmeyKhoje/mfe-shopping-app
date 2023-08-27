import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById('mfe-remote-2');

if (rootElement) {
  const root = createRoot(rootElement);
  console.log(root);
  

  root.render(
    <StrictMode>
      <BrowserRouter basename="/remote-two">
        <App />
      </BrowserRouter>
    </StrictMode>
  )
}