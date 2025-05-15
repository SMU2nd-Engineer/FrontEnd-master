// src/domain/board/routes/BoardRoutes.jsx
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import BoardListPage from "../page/BoardListPage";


const BoardRoutes = () => {
  return (
    <div className="contents">
      <Routes>
        {/* 1. 홈페이지 주소창에 htttps://localhost8100/board 
            2. path = 'board'로 들어가도 list화면으로 가게 설정됨 */}
        <Route path="" element={<Navigate to="list" />} />
        
        {/* 게시글 목록 페이지 - 게시판 메인화면 */}
        <Route path="/list" element={<BoardListPage />} />
        
      </Routes>
    </div>
  );
};

export default BoardRoutes;
