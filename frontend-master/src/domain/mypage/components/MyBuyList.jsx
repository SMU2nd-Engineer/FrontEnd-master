import React, { useState } from "react";
import ProductList from "@/domain/products/components/ProductList";
import MyPagination from "./MyPaginationUI";
import { BuyContainer, BuyHedear } from "../style/SellAndBuyPageDsign";

export default function MyBuyList({ products = [] }) {
  console.log("buylist  products: ", products);
  // 한페이지에 보여줄 숫자
  const itemsPerPage = 4;
  // 전체 개수 확인하기 - 하드코딩 나중에 값을 넣을 수 있도록 수정해야함
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지 설정
  const offset = currentPage * itemsPerPage; // 현재 페이지에서 데이터를 몇 번째 항목부터 잘라서 보여줄지를 결정
  // 전체 페이지 수
  const totalPageCount = Math.ceil(products.length / itemsPerPage);
  // 현재 페이지 보여줄 개수 설정
  const currentItems =
    products.length > 0 ? products.slice(offset, offset + itemsPerPage) : [];
  // selected 라이브러리에서 전달하는 값
  const onPageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  console.log("buylist : ", currentItems);
  return (
    <BuyContainer>
      <BuyHedear>구매</BuyHedear>
      <ProductList key={`buy-${currentPage}`} products={currentItems} />
      <MyPagination
        pageCount={totalPageCount}
        onPageChange={onPageChange}
        pageRangeDisplayed={3}
      />
    </BuyContainer>
  );
}
