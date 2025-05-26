import React, { useState } from "react";
import MyTextReview from "./MyReviewText";
import MyPagination from "./MyPaginationUI";
import { Link } from "react-router-dom";

/**
 * 거래 후기를 렌더링할 컴포넌트
 * @param {List<Object>} reviewLists: 리뷰 정보가 담긴 배열
 * @returns 거래 후기 컴포넌트
 */
export default function MyTransactionReview({
  reviewLists = [],
  movePage = "",
  isMain = false,
}) {
  // 한페이지에 보여줄 숫자
  let itemsPerPage = 0;
  {
    isMain ? (itemsPerPage = 2) : (itemsPerPage = 5);
  }
  // 전체 개수 확인하기 - 하드코딩 나중에 값을 넣을 수 있도록 수정해야함
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지 설정
  const offset = currentPage * itemsPerPage; // 현재 페이지에서 데이터를 몇 번째 항목부터 잘라서 보여줄지를 결정
  // 전체 페이지 수
  const totalPageCount = Math.ceil(reviewLists.length / itemsPerPage);
  // 현재 페이지 보여줄 개수로 자른 리스트
  const currentItems = reviewLists.slice(offset, offset + itemsPerPage);
  // selected 라이브러리에서 전달하는 값
  const onPageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  if (!reviewLists.length)
    return (
      <>
        <p>작성하신 거래 후기가 없습니다. </p>
        {movePage && <Link to={`/mypage/${movePage}`}>더 보기</Link>}
      </>
    );

  return (
    <div
      id="wishlistBody"
      style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
    >
      <p>거래 후기</p>
      <br />
      <table>
        <thead>
          <tr>
            <th>리뷰</th>
            <th>날짜 </th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <MyTextReview
              key={item.idx}
              reviewIdx={item.idx}
              reviewText={item.review}
              reviewDate={item.sdate}
            />
          ))}
        </tbody>
      </table>
      {!isMain && (
        <MyPagination
          pageCount={totalPageCount}
          onPageChange={onPageChange}
          pageRangeDisplayed={3}
        />
      )}
      {movePage && <Link to={`/mypage/${movePage}`}>더 보기</Link>}
    </div>
  );
}
