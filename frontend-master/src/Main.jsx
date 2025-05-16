import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

import "./style/index.css";
import "./style/App.css";
import "./style/Header.css";

import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>  
    </BrowserRouter>
  </StrictMode>
);
