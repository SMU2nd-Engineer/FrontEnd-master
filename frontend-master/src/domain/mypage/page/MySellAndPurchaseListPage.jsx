import React, { useEffect, useState } from "react";
import MyPageLink from "../components/MyPageLink";
import MySellList from "../components/MySellList";
import MyBuyList from "../components/MyBuyList";
import { getMyPageData } from "../services/getMyPageDate";

export default function SellAndPurchaseList() {
  // 거래 내용 및 상품 정보 담을 상태 생성
  const [myProductList, setMyProductList] = useState({});
  // 거래 내역 내용 불러오기
  useEffect(() => {
    const saveList = async () => {
      const result = await getMyPageData("MY_TRANSACTION_LIST");
      setMyProductList(result);
    };
    saveList();
  }, []);
  return (
    <div>
      <MyPageLink />
      <p>판매/구매이력</p>
      <p>판매 내역 컴포넌트</p>
      <MySellList products={myProductList.sellInfoList} />
      <p>구매 내역 컴포넌트</p>
      <MyBuyList products={myProductList.buyInfoList} />
    </div>
  );
}
