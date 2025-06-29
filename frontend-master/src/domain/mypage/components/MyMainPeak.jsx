import React from "react";
import ProductList from "@/domain/products/components/ProductList";
import { Link } from "react-router-dom";
import {
  MorePeak,
  MyPainPeakContainer,
  MyPainPeakHeader,
} from "../style/MyMainPageDesign";
import * as List from "@products/styles/ProductsListPageDesign";

export default function MyMainPeak({ list }) {
  // 최신 항목 2개만 가져오기
  return (
    <MyPainPeakContainer>
      <MyPainPeakHeader>찜 목록</MyPainPeakHeader>
      <MorePeak>
        <Link to="/myPage/peakList">더 보기</Link>
      </MorePeak>
      <List.Product_list>
        <ProductList products={list} />
      </List.Product_list>
    </MyPainPeakContainer>
  );
}
