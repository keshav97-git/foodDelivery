import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

import { FoodContext, FoodProvider } from "./context/foodContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { FoodContext };

root.render(
  <StrictMode>
    <Router>
      <FoodProvider>
        <App />
      </FoodProvider>
    </Router>
  </StrictMode>
);
