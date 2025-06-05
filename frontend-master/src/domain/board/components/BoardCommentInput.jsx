import React from "react";
import { useState } from "react";
import { CommentSubmit } from "../styles/BoardDetailDesign";

const BoardCommentInput = ({ handleSubmit }) => {
  const [boardInput, setBoardInput] = useState("");
  const handleKeyDown = async (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      await handleSubmit(e, boardInput);
      setBoardInput("");
    }
  };
  const handleClick = async (e) => {
    console.log("click");
    await handleSubmit(e, boardInput);
    setBoardInput("");
  };

  return (
    <CommentSubmit>
      <textarea
        value={boardInput}
        onChange={(e) => setBoardInput(e.target.value)}
        maxLength={300} // 글자 수 제한
        placeholder="댓글을 입력해주세요."
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <button onClick={handleClick} disabled={!boardInput.trim()}>
        댓글 등록
      </button>
    </CommentSubmit>
  );
};

export default BoardCommentInput;
