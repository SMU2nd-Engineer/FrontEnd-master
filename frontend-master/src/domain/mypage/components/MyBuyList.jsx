import React, { useEffect, useState } from "react";
import ProductList from "@/domain/products/components/ProductList";
import mook from "../utils/mook";
import MyPagination from "./MyPaginationUI";
import { getMyPageData } from "../services/getMyPageDate";

export default function MyBuyList() {
  const [myProductList, setMyProductList] = useState(mook);
  // 한페이지에 보여줄 숫자
  const itemsPerPage = 4;
  // 전체 개수 확인하기 - 하드코딩 나중에 값을 넣을 수 있도록 수정해야함
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지 설정
  const offset = currentPage * itemsPerPage; // 현재 페이지에서 데이터를 몇 번째 항목부터 잘라서 보여줄지를 결정
  // 전체 페이지 수
  const totalPageCount = Math.ceil(myProductList.length / itemsPerPage);
  // 현재 페이지 보여줄 개수 설정
  const currentItems = myProductList.slice(offset, offset + itemsPerPage);
  // selected 라이브러리에서 전달하는 값
  const onPageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    const saveList = async () => {
      const result = await getMyPageData("MY_BUY_LIST");
      setMyProductList(result);
    };
    saveList();
  }, []);

  return (
    <>
      <ProductList products={currentItems} />
      <MyPagination
        pageCount={totalPageCount}
        onPageChange={onPageChange}
        pageRangeDisplayed={3}
      />
    </>
  );
}
