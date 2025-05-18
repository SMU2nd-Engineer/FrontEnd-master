import React from "react";
import KaKaoRedirect from "../page/KaKaoRedirect";
import { Navigate, Route, Routes } from "react-router-dom";
import LogingPage from "../page/LogingPage";
import TempHomePage from "../page/TempHomePage";
import NaverRedirect from "../page/NaverRedirect";
import GoogleRedirect from "../page/GoogleRedirect";
import UserRegistrationPage from "../page/UserRegistrationPage";
import IdPasswordFindPage from "../page/IdPasswordFindPage";
import ShowFindIdPage from "../page/ShowFindIdPage";
import ChangePasswordPage from "../page/ChangePasswordPage";
import ChooseFavoritePage from "../page/ChooseFavoritePage";

export default function UserRoutes() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Navigate to="login" />} />
        <Route path="login" element={<LogingPage />} />
        <Route path="home" element={<TempHomePage />} />
        <Route path="kakaoauth" element={<KaKaoRedirect />} />
        <Route path="naverauth" element={<NaverRedirect />} />
        <Route path="googleauth" element={<GoogleRedirect />} />
        <Route path="registration" element={<UserRegistrationPage />} />
        <Route path="find/:type" element={<IdPasswordFindPage />} />
        <Route path="showfindid" element={<ShowFindIdPage />} />
        <Route path="changePassword" element={<ChangePasswordPage />} />
        <Route path="selectFavorites" element={<ChooseFavoritePage />} />
      </Routes>
    </div>
  );
}
