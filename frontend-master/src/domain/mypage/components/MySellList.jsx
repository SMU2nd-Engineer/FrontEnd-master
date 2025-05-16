import React, { useEffect, useState } from "react";
import ProductList from "@/domain/products/components/ProductList";
import { getMySellList } from "../services/getMySellList";
import mook from "../utils/mook";
import MyPagination from "./MyPaginationUI";

/**
 * 상품 판매 리스트 컴포넌트
 * @returns
 */
export default function MySellList() {
  const [category, setCategory] = useState("all");
  const [myProductLists, setMyProductLists] = useState(mook);

  let filterMyProductLists = [];

  switch (category) {
    case "onSale":
      filterMyProductLists = myProductLists.filter(
        (myProductList) => myProductList.flag === 0
      );
      break;
    case "soldOut":
      filterMyProductLists = myProductLists.filter(
        (myProductList) => myProductList.flag === 1
      );
      break;
    default:
      filterMyProductLists = myProductLists;
  }

  // 한페이지에 보여줄 숫자
  const itemsPerPage = 4;
  // 전체 개수 확인하기 - 하드코딩 나중에 값을 넣을 수 있도록 수정해야함
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지 설정
  const offset = currentPage * itemsPerPage; // 현재 페이지에서 데이터를 몇 번째 항목부터 잘라서 보여줄지를 결정
  // 전체 페이지 수
  const totalPageCount = Math.ceil(filterMyProductLists.length / itemsPerPage);
  // 현재 페이지 보여줄 개수 설정
  const currentItems = filterMyProductLists.slice(
    offset,
    offset + itemsPerPage
  );
  // selected 라이브러리에서 전달하는 값
  const onPageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // 처음 렌더링 할 때 데이터를 가져올 useEffect
  //   useEffect(() => {
  //     const saveList = async () => {
  //       const results = await getMySellList();
  //       setMyProductLists(results);
  //     };
  //     saveList();
  //   }, []);

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
      <ProductList products={currentItems} />
      <MyPagination
        pageCount={totalPageCount}
        onPageChange={onPageChange}
        pageRangeDisplayed={3}
      />
    </>
  );
}
