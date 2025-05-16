import React, { useState } from "react";
import { getMyCommentList } from "../services/getMyCommentList";
import { commentMook } from "../utils/mook";
import CommentListcomp from "./CommentListcomp";
import MyPagination from "./MyPaginationUI";

export default function MyComment() {
  const [commentInfo, setCommentInfo] = useState(commentMook);

  // 한페이지에 보여줄 숫자
  const itemsPerPage = 5;
  // 전체 개수 확인하기 - 하드코딩 나중에 값을 넣을 수 있도록 수정해야함
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지 설정
  const offset = currentPage * itemsPerPage; // 현재 페이지에서 데이터를 몇 번째 항목부터 잘라서 보여줄지를 결정
  // 전체 페이지 수
  const totalPageCount = Math.ceil(commentInfo.length / itemsPerPage);
  // 현재 페이지 보여줄 개수로 자른 리스트
  const currentItems = commentInfo.slice(offset, offset + itemsPerPage);
  // selected 라이브러리에서 전달하는 값
  const onPageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  if (!commentInfo.length) {
    return <p>댓글 정보가 없습니다.</p>;
  }
  //   useEffect(() => {
  //     const callCommentInfo = async () => {
  //       const result = await getMyCommentList();
  //       setCommentInfo(result);
  //     };
  //     callCommentInfo();
  //   }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>제목</th>
            <th>날짜</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <CommentListcomp key={item.idx} text={item.text} date={item.date} />
          ))}
        </tbody>
      </table>
      <MyPagination pageCount={totalPageCount} onPageChange={onPageChange} />
    </div>
  );
}
