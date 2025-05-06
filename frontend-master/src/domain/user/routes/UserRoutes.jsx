import React from "react";
import KaKaoRedirect from "../page/KaKaoRedirect";
import { Navigate, Route, Routes } from "react-router-dom";
import LogingPage from "../page/LogingPage";
import TempHomePage from "../page/TempHomePage";
import NaverRedirect from "../page/NaverRedirect";

export default function UserRoutes() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Navigate to="login" />} />
        <Route path="login" element={<LogingPage />} />
        <Route path="home" element={<TempHomePage />} />
        <Route path="kakaoauth" element={<KaKaoRedirect />} />
        <Route path="naverauth" element={<NaverRedirect />} />
      </Routes>
    </div>
  );
}
