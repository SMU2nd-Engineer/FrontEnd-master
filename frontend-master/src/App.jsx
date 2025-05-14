import { useState } from "react";
import { HeaderMenu } from "./common/ui/header/Header";
import { Route, Router, Routes } from "react-router-dom";
import ProductListPage from "./domain/products/ProductsListPage";
import ProductDetail from "./domain/products/components/ProductDetail";
import ProductUpload from "./domain/products/components/ProductUpload";
// import "./style/App.css";

function App() {

  return (
    <>
      <HeaderMenu />
      <Routes>
        <Route path="/product/list" element={<ProductListPage />} />
        <Route path="/product/detail/:idx" element={<ProductDetail />} />
        <Route path="/product/upload" element={<ProductUpload />} />
      </Routes>
    </>
  );
}

export default App;
