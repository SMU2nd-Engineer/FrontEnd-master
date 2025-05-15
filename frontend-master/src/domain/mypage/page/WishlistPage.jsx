import React, { useEffect, useState } from "react";
import MyPageLink from "../components/MyPageLink";
import { getWishListInfo } from "../services/getWishListInfo";
import MyPageCardForm from "../components/MyPageCardForm";

// 더미데이터
const mook = [
  {
    img: "",
    title: "상품1",
    contents: "멋진상품입니다.",
    price: "00원입니다.",
  },
  {
    img: "",
    title: "상품2",
    contents: "좋은상품입니다.",
    price: "00원입니다.",
  },
  {
    img: "",
    title: "상품2",
    contents: "보통상품입니다.",
    price: "00원입니다.",
  },
];

export default function WishListPage() {
  // 처음 렌더링 할 때 데이터를 가져올 useEffect
  const [wishListInfo, setWishListInfo] = useState(mook);
  // 카드 정보에 넣을 찜 목록 가져오기 - 데이터 보여지기 전까지 주석 처리
  //   useEffect(async () => {
  //     const result = await getWishListInfo();
  //     setWishListInfo(result);
  //   }, []);
  return (
    <div>
      <MyPageLink />
      <div
        id="wishlistBody"
        style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
      >
        <p>찜 목록</p>
        <br />
        {/* 카드 형태 렌더링 만들기 */}
        {wishListInfo.map((item, key) => (
          <MyPageCardForm
            key={key}
            img={item.img}
            name={item.title}
            contents={item.contents}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}
