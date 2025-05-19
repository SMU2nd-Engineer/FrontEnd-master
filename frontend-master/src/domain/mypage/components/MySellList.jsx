import React, { useState } from "react";
import ProductList from "@/domain/products/components/ProductList";
import MyPagination from "./MyPaginationUI";
import { Link } from "react-router-dom";

/**
 * 상품 판매 리스트 컴포넌트
 * @returns
 */
export default function MySellList({ isMain = false, products = [] }) {
  const [category, setCategory] = useState("all");
  // const [myProductLists, setMyProductLists] = useState(products);

  let filterMyProductLists = [];

  switch (category) {
    case "onSale":
      filterMyProductLists = products.filter(
        (myProductList) => myProductList.flag === 0
      );
      break;
    case "soldOut":
      filterMyProductLists = products.filter(
        (myProductList) => myProductList.flag === 1
      );
      break;
    default:
      filterMyProductLists = products;
  }

  // 한페이지에 보여줄 숫자 - 메인이면 2개 , 구매내역에서는 4개
  let itemsPerPage = 0;
  {
    isMain ? (itemsPerPage = 2) : (itemsPerPage = 4);
  }
  // 전체 개수 확인하기 - 하드코딩 나중에 값을 넣을 수 있도록 수정해야함
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지 설정
  const offset = currentPage * itemsPerPage; // 현재 페이지에서 데이터를 몇 번째 항목부터 잘라서 보여줄지를 결정
  // 전체 페이지 수
  const totalPageCount = Math.ceil(filterMyProductLists.length / itemsPerPage);
  // 현재 페이지 보여줄 개수 설정
  const currentItems =
    filterMyProductLists > 0
      ? filterMyProductLists.slice(offset, offset + itemsPerPage)
      : [];

  // selected 라이브러리에서 전달하는 값
  const onPageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <>
      <a
        href="#"
        onClick={() => {
          setCategory("all");
        }}
      >
        전체
      </a>
      <a
        href="#"
        onClick={() => {
          setCategory("onSale");
        }}
      >
        / 판매중
      </a>
      <a
        href="#"
        onClick={() => {
          setCategory("soldOut");
        }}
      >
        / 판매완료
      </a>
      {isMain && <Link to="/mypage/sellAndPurchaselist/">더 보기</Link>}
      <ProductList products={currentItems ?? ""} />
      {!isMain && (
        <MyPagination
          pageCount={totalPageCount}
          onPageChange={onPageChange}
          pageRangeDisplayed={3}
        />
      )}
    </>
  );
}
