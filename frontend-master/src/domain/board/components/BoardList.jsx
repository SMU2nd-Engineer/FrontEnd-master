// src/domain/board/components/BoardList.jsx
import React, { useState } from "react";
import BoardItem from "./BoardItem";
import * as board from "../styles/BoardListPageDesign";
import MyPagination from "@/domain/mypage/components/MyPaginationUI";

const BoardList = ({ boards = [] }) => {
  // 한페이지에 보여줄 숫자
  const itemsPerPage = 10;
  // 전체 개수 확인하기 - 하드코딩 나중에 값을 넣을 수 있도록 수정해야함
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지 설정
  const offset = currentPage * itemsPerPage; // 현재 페이지에서 데이터를 몇 번째 항목부터 잘라서 보여줄지를 결정
  // 전체 페이지 수
  const totalPageCount = Math.ceil(boards.length / itemsPerPage);
  // 현재 페이지 보여줄 개수로 자른 리스트
  const currentItems = boards.slice(offset, offset + itemsPerPage);
  // selected 라이브러리에서 전달하는 값
  const onPageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  if (!boards.length) return <p>게시글이 없습니다. </p>;

  return (
    <board.Board_contentsListMain>
      <board.Board_cotentsList>
        <thead>
          <tr>
            <th>순번</th>
            <th>카테고리</th>
            <th>제목</th>
            <th>날짜</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {/* DB에서 입력한 데이터를 게시글 목록에 출력 */}
          {currentItems.map((item) => (
            <BoardItem key={item.idx} item={item} />
          ))}
        </tbody>
      </board.Board_cotentsList>
      <MyPagination pageCount={totalPageCount} onPageChange={onPageChange} />
    </board.Board_contentsListMain>
  );
};

export default BoardList;
