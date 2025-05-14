import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "../page/MainPage";
import MyInfo from "../page/MyInfoPage";
import SellAndPurchaseList from "../page/SellAndPurchaseListPage";
import WishlistPage from "../page/WishlistPage";
import MyReviewPage from "../page/MyReviewPage";
import MyBoardPage from "../page/MyBoardPage";
import MyTransactionReviewPage from "../page/MyTransactionReviewPage";

export default function MyPageRoutes() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Navigate to="main" />} />
        <Route path="main" element={<MainPage />} />
        <Route path="myInfo" element={<MyInfo />} />
        <Route path="sellAndPurchaselist" element={<SellAndPurchaseList />} />
        <Route path="wishlist" element={<WishlistPage />} />
        <Route path="myRevicw" element={<MyReviewPage />} />
        <Route path="myBoard" element={<MyBoardPage />} />
        <Route
          path="myTransactionReviewPage"
          element={<MyTransactionReviewPage />}
        />
      </Routes>
    </div>
  );
}
