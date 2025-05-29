import React from "react";
import { ContentsAndCommentTableTd } from "../style/MypageBoardDesign";

export default function BoardListcomp({
  navigate,
  idx,
  title,
  categoryName,
  sDate,
}) {
  const handleOnClick = () => {
    // 경로 받아서 적어야함.
    navigate(`/board/detail/${idx}`);
  };
  return (
    <tr onClick={handleOnClick}>
      <ContentsAndCommentTableTd>{title}</ContentsAndCommentTableTd>
      <ContentsAndCommentTableTd>{categoryName}</ContentsAndCommentTableTd>
      <ContentsAndCommentTableTd>{sDate}</ContentsAndCommentTableTd>
    </tr>
  );
}
