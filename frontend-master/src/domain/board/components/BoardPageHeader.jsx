import React from "react";
import { useNavigate } from "react-router-dom";

const BoardPageHeader = () => {
  // 페이지 이동을 처리 하는 함수
  const navigate = useNavigate();

  // 페이지 상단 게시글 등록 버튼 클릭 핸들러
  const handleRegister = () => {
    console.log("게시글 등록 클릭");
    navigate("/board/submit")
  };

  // 페이지 상단 게시글 수정 버튼 클릭 핸들러 
  // - 게시글 읽기 페이지에서 게시글 수정 넣을 것임 
  // const handleEdit = () => {
  //   console.log("게시글 수정 클릭");
  // };

  return (
      <div className='board_page_header'>
        <p>게시판</p> 
        <button onClick={handleRegister}>게시글 등록</button>
        {/* <button onClick={handleEdit}>게시글 수정</button> */}
      </div>
  );
};

export default BoardPageHeader;