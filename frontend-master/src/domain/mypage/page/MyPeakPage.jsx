import React, { useEffect, useState } from "react";
import MyPageLink from "../components/MyPageLink";
import MyPageCardForm from "../components/MyPageCardForm";
import MyPagination from "../components/MyPaginationUI";
import ProductList from "@products/components/ProductList";
import mook from "../utils/mook";

export default function MyPeakPage() {
  // 처음 렌더링 할 때 데이터를 가져올 useEffect
  const [wishListInfo, setWishListInfo] = useState(mook);
  // 한페이지에 보여줄 숫자
  const itemsPerPage = 4;
  // 전체 개수 확인하기 - 하드코딩 나중에 값을 넣을 수 있도록 수정해야함
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지 설정
  const offset = currentPage * itemsPerPage; // 현재 페이지에서 데이터를 몇 번째 항목부터 잘라서 보여줄지를 결정
  // 전체 페이지 수
  const totalPageCount = Math.ceil(wishListInfo.length / itemsPerPage);
  // 현재 페이지 보여줄 개수 설정
  const currentItems = wishListInfo.slice(offset, offset + itemsPerPage);
  // selected 라이브러리에서 전달하는 값
  const onPageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // 카드 정보에 넣을 찜 목록 가져오기 - 데이터 보여지기 전까지 주석 처리
  //   useEffect(() => {
  // const totalInfoList = async () = =>{
  //     const result = await getWishListInfo();
  //     setWishListInfo(result);
  //   } totalInfoList()}, []);
  return (
    <div>
      <MyPageLink />
      <div
        id="wishlistBody"
        style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
      >
        <p>찜 목록</p>
        <br />
        {/* 카드 형태 렌더링 만들기 
        여기 또는 하위에서 카드를 눌렀을 때 상세페이지로 이동하게끔 구현해야함 */}
        <ProductList products={currentItems} />
        {/* 페이지네이션 자리 */}
        <MyPagination
          pageCount={totalPageCount}
          onPageChange={onPageChange}
          pageRangeDisplayed={3}
        />
      </div>
    </div>
  );
}
