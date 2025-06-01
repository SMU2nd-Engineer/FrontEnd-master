import React from "react";
import { ContentsAndCommentTableTd } from "../style/MypageBoardDesign";

export default function CommentListcomp({
  navigate,
  contentTitle,
  text,
  date,
  contentIdx,
  idx,
}) {
  const handleOnClick = () => {
    // 경로 받아서 적어야함.
    navigate(`/board/detail/${contentIdx}`);
  };
  return (
    <tr onClick={handleOnClick}>
      <ContentsAndCommentTableTd>{contentTitle}</ContentsAndCommentTableTd>
      <ContentsAndCommentTableTd>{text}</ContentsAndCommentTableTd>
      <ContentsAndCommentTableTd>{date}</ContentsAndCommentTableTd>
    </tr>
  );
}
