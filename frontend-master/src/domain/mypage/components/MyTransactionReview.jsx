import React, { useState } from "react";

/**
 * 거래 후기 컴포넌트
 * @returns
 */
export default function MyTransactionReview() {
  const [myTransactionReview, setMyTransactionReview] = useState([]);
  // 한페이지에 보여줄 숫자
  const itemsPerPage = 5;
  // 전체 개수 확인하기 - 하드코딩 나중에 값을 넣을 수 있도록 수정해야함
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지 설정
  const offset = currentPage * itemsPerPage; // 현재 페이지에서 데이터를 몇 번째 항목부터 잘라서 보여줄지를 결정
  // 전체 페이지 수
  const totalPageCount = Math.ceil(myTransactionReview.length / itemsPerPage);
  // 현재 페이지 보여줄 개수로 자른 리스트
  const currentItems = myTransactionReview.slice(offset, offset + itemsPerPage);
  // selected 라이브러리에서 전달하는 값
  const onPageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // 처음 렌더링 할 때 데이터를 가져올 useEffect
  useEffect(() => {
    const saveList = async () => {
      const results = await getMyTextReview();
      setMyTransactionReview(results);
    };
    saveList();
  }, []);

  return (
    <div
      id="wishlistBody"
      style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
    >
      <p>거래 후기</p>
      <br />
      {myTransactionReview.map(item)}
      <MyPagination
        pageCount={totalPageCount}
        onPageChange={onPageChange}
        pageRangeDisplayed={3}
      />
    </div>
  );
}
