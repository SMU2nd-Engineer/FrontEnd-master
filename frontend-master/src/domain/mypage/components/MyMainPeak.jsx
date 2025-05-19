import React from "react";
import ProductList from "@/domain/products/components/ProductList";
import { Link } from "react-router-dom";

export default function MyMainPeak({ list }) {
  // 최신 항목 2개만 가져오기
  return (
    <div
      id="wishlistBody"
      style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
    >
      <p>찜 목록</p>
      <Link to="/myPage/peakList">더 보기</Link>
      <br />

      <ProductList products={list} />
    </div>
  );
}
