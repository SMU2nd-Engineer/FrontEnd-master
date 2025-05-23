import Button from "@/components/Button";
import React from "react";

export default function BoardListcomp({ title, categoryIdx }) {
  return (
    <tr>
      <td>{title}</td>
      {categoryIdx === 4002 ? <td>삽니다</td> : <td>팝니다</td>}
      <td>
        {/* 게시판 상세 페이지 이동 경로 받아서 적을것 */}
        <Button text={"수정"} type="button" onClick={() => {}} />
      </td>
      <td>
        {/* 게시판 삭제 경로 받아서 적을것 */}
        <Button text={"삭제"} type="button" onClick={() => {}} />
      </td>
    </tr>
  );
}
