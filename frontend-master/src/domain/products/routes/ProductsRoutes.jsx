import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductListPage from "../page/ProductsListPage";
import ProductDetail from "../components/ProductDetail";
import ProductUpload from "../components/ProductUpload";
import ProductEdit from "../components/ProductEdit";

const ProductsRoutes = () => {
  return (
    <div className="product">
      <Routes>
        <Route path="" element={<Navigate to="list" />} />
        <Route path="/list" element={<ProductListPage />} />
        <Route path="/detail/:idx" element={<ProductDetail />} />
        <Route path="/upload" element={<ProductUpload />} />
        <Route path="/edit/:idx" element={<ProductEdit />} />
      </Routes>
    </div>
  );
};

export default ProductsRoutes;
