import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./css/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { RecipesProvider } from "./RecipesContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <RecipesProvider>
        <App />
      </RecipesProvider>
    </BrowserRouter>
  </StrictMode>
);
