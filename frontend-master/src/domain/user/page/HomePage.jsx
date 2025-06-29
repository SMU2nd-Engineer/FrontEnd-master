import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getHomePageInfo } from "../services/getHomePageInfo";
import ProductList from "@products/components/ProductList";
import * as board from "@board/styles/BoardListPageDesign";
import BoardList from "@board/components/BoardList";
import {
  HomeBoardContainer,
  HomeContainer,
  HomeHedear,
  HomeProductContainer,
  HomeProductList,
} from "../style/HomePageDesign";

export default function HomePage() {
  // 홈페이지에 사용할 값을 각 상태에 나눠서 저장장
  const [homePageProducts, setHomePageProduct] = useState([]);
  const [homePageContents, setHomePageContents] = useState([]);

  // 로그인 페이지로 이동할 경우 불러올 정보 가져오기
  useEffect(() => {
    const saveHomePageInfo = async () => {
      const result = await getHomePageInfo();
      setHomePageProduct(result.latestProducts ?? []);
      setHomePageContents(result.latestContents ?? []);
    };
    saveHomePageInfo();
  }, []);

  // 홈 화면 배치 해야 함.
  return (
    <HomeContainer>
      <HomeProductContainer>
        <HomeHedear>최근 올라온 상품</HomeHedear>
        <HomeProductList>
          <ProductList products={homePageProducts} />
        </HomeProductList>
      </HomeProductContainer>
      <HomeBoardContainer>
        <HomeHedear>최근 올라온 게시글</HomeHedear>
        <board.Board_middleList>
          <BoardList boards={homePageContents} />
        </board.Board_middleList>
      </HomeBoardContainer>
    </HomeContainer>
  );
}
