import React, { useEffect, useState } from "react";
import { getMyBoardList } from "../services/getMyBoardList";
import { boardMook } from "../utils/mook";
import BoardListcomp from "./BoardListcomp";

export default function MyBoard() {
  const [boardInfo, setBoardInfo] = useState(boardMook);
  if (!boardInfo.length) {
    return <p>게시판 정보가 없습니다.</p>;
  }
  //   useEffect(() => {
  //     const callBoardInfo = async () => {
  //       const result = await getMyBoardList();
  //       setBoardInfo(result);
  //     };
  //     callBoardInfo();
  //   }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>제목</th>
            <th>삽니다/팝니다</th>
            <th>수정</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {boardInfo.map((item) => (
            <BoardListcomp
              key={item.idx}
              title={item.title}
              division={item.division}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
