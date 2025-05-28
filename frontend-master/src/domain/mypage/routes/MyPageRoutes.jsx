import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "../page/MainPage";
import MyInfo from "../page/MyInfoPage";
import MySellAndPurchaseListPage from "../page/MySellAndBuyListPage";
import MyPeakPage from "../page/MyPeakPage";
import MyReviewPage from "../page/MyReviewPage";
import MyBoardPage from "../page/MyBoardPage";
import TransactionReviewRegisterPage from "../page/TransactionReviewRegisterPage";
import MyEditFavoritePage from "../page/MyEditFavoritePage";

export default function MyPageRoutes() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Navigate to="main" />} />
        <Route path="main" element={<MainPage />} />
        <Route path="myInfo" element={<MyInfo />} />
        <Route
          path="sellAndPurchaselist"
          element={<MySellAndPurchaseListPage />}
        />
        <Route path="peakList" element={<MyPeakPage />} />
        <Route path="myReview" element={<MyReviewPage />} />
        <Route path="myBoard" element={<MyBoardPage />} />
        <Route
          path="transactionReviewRegist"
          element={<TransactionReviewRegisterPage />}
        />
        <Route
          path="TransactionReviewEdit/:reviewIdx"
          element={<TransactionReviewRegisterPage />}
        />
        <Route path="myEditFavorite" element={<MyEditFavoritePage />} />
      </Routes>
    </div>
  );
}
