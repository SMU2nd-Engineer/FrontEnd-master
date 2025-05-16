import React from "react";
import ReactPaginate from "react-paginate";

/**
 * 페이지네이션 컴포넌트
 * @param {int} pageCount :  계산된 총 페이지 개수
 * @param {method} onPageChange : 페이지이동 함수
 * @param {int} pageRangeDisplayed : 페이지네이션 표시될 계수
 * @returns
 */
export default function MyPagination({
  pageCount,
  onPageChange,
  pageRangeDisplayed = 3,
}) {
  return (
    <>
      <ReactPaginate
        breakLabel="..." // 줄여쓰기 모양 설정
        nextLabel="next >" // 다음 페이지 모양
        previousLabel="< previous" // 이전 페이지 모양
        onPageChange={onPageChange} // 페이지 변화 함수
        pageRangeDisplayed={pageRangeDisplayed} // 페이지네이션 번호 몇개 까지 보여줄지 정하는 숫자
        pageCount={pageCount} // 총 페이지 개수
        containerClassName="pagination" // 페이지네이션 컨테이너의 클래스 이름
        activeClassName="active" // 활성 페이지의 클래스 이름
        renderOnZeroPageCount={null} // 0 일 때 호출되는 렌더링 함수, 기본적으로 이전/다음 버튼이 표시되나 null이면 아무것도 안 보임
      />
    </>
  );
}
