import React from "react";
import { useNavigate } from "react-router-dom";
import * as board from "../styles/BoardListPageDesign";

const BoardPageHeader = () => {
  // 페이지 이동을 처리 하는 함수
  const navigate = useNavigate();

  // 페이지 상단 게시글 등록 버튼 클릭 핸들러
  const handleRegister = () => {
    console.log("게시글 등록 클릭");
    navigate("/board/submit")
  };

  return (
      <board.Board_top>
        <p className="pagetitle">게시판</p>
        {/* 게시글 등록 버튼 */} 
        <button onClick={handleRegister}>등록</button>
      </board.Board_top>
  );
};

export default BoardPageHeader;