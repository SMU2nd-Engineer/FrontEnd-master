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
    //navigate(`/board/${contentIdx}?commentId={idx}`); // 포커싱 기능을 넣을 경우 넘겨줄 경로
  };
  return (
    <tr onClick={handleOnClick}>
      <ContentsAndCommentTableTd>{contentTitle}</ContentsAndCommentTableTd>
      <ContentsAndCommentTableTd>{text}</ContentsAndCommentTableTd>
      <ContentsAndCommentTableTd>{date}</ContentsAndCommentTableTd>
    </tr>
  );
}
