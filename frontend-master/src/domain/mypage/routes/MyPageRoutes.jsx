import React from "react";
import MainPage from "../page/MainPage";
import MyInfo from "../page/MyInfoPage";
import SellAndPurchaseList from "../page/SellAndPurchaseListPage";
import WishlistPage from "../page/WishlistPage";
import MyReviewPage from "../page/MyReviewPage";
import { Navigate, Route, Routes } from "react-router-dom";

export default function MyPageRoutes() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Navigate to="main" />} />
        <Route path="main" element={<MainPage />} />
        <Route path="myinfo" element={<MyInfo />} />
        <Route path="sellandpurchaselist" element={<SellAndPurchaseList />} />
        <Route path="wishlist" element={<WishlistPage />} />
        <Route path="myrevicw" element={<MyReviewPage />} />
      </Routes>
    </div>
  );
}
