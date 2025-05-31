import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getHomePageInfo } from "../services/getHomePageInfo";
import useLoginUserInfoStore from "@/store/useLoginUserInfoStore";
import ProductList from "@products/components/ProductList";
import * as List from "@products/styles/ProductsListPageDesign";
import * as board from "@board/styles/BoardListPageDesign";
import BoardList from "@board/components/BoardList";

export default function HomePage() {
  // 홈페이지에 사용할 값을 각 상태에 나눠서 저장장
  const [homePageProducts, setHomePageProduct] = useState([]);
  const [homePageContents, setHomePageContents] = useState([]);
  // 전역변수로 유저 정보를 저장장
  const { setLoginUserInfo } = useLoginUserInfoStore();

  // 로그인 페이지로 이동할 경우 불러올 정보 가져오기
  useEffect(() => {
    const saveHomePageInfo = async () => {
      const result = await getHomePageInfo();
      setHomePageProduct(result.latestProducts ?? []);
      setHomePageContents(result.latestContents ?? []);
      setLoginUserInfo(result.userInfo ?? {});
    };
    saveHomePageInfo();
  }, [setLoginUserInfo]);

  console.log("homePageProducts 값이 저장되었는지 확인 : ", homePageProducts);
  console.log("homePageProducts 값이 저장되었는지 확인 : ", homePageContents);
  // 홈 화면 배치 해야 함.
  return (
    <div>
      <h1>홈페이지 입니다.</h1>
      <List.Product_list>
        <ProductList products={homePageProducts} />
      </List.Product_list>
      <board.Board_middleList>
        <BoardList boards={homePageContents} />
      </board.Board_middleList>
    </div>
  );
}
