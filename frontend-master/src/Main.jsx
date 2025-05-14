import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HeaderMenu } from "./common/ui/header/Header";
import { BrowserRouter } from "react-router-dom";
import ProductListPage from "./domain/products/ProductsListPage";
import './domain/products/style/index.css';
import './domain/products/style/App.css'

import './common/ui/header/Header.css';
import App from "./App";


createRoot(document.getElementById("root")).render(
  <StrictMode>
   <BrowserRouter>
      <App />
    </BrowserRouter> 
  </StrictMode>
);

