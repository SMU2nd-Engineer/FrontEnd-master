import Button from "@/components/Button";
import React from "react";

export default function CommentListcomp({ text, date }) {
  return (
    <tr>
      <td>{text}</td>
      <td>{date}</td>
      <td>
        {/* 게시판 댓글 삭제 경로 받아서 적을것 */}
        <Button text={"삭제"} type="button" onClick={() => {}} />
      </td>
    </tr>
  );
}
