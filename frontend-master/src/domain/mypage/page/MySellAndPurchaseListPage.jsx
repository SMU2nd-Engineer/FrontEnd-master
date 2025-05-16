import React from "react";
import MyPageLink from "../components/MyPageLink";
import MySellList from "../components/MySellList";
import MyBuyList from "../components/MyBuyList";

export default function SellAndPurchaseList() {
  return (
    <div>
      <MyPageLink />
      <p>판매/구매이력</p>
      <p>판매 내역 컴포넌트</p>
      <MySellList />
      <p>구매 내역 컴포넌트</p>
      <MyBuyList />
    </div>
  );
}
