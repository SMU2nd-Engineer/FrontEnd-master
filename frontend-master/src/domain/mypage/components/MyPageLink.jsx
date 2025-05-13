import React from "react";
import { Link } from "react-router-dom";

export default function MyPageLink() {
  return (
    <div>
      <p>
        <Link to="/mypage/main">마이페이지</Link>
      </p>
      <Link to="/mypage/myinfo">개인 정보</Link> <br />
      <Link to="/mypage/sellandpurchaselist">판매/구매이력</Link>
      <br />
      <Link to="/mypage/wishlist">찜 목록</Link>
      <br />
      <Link to="/mypage/myrevicw">리뷰</Link>
      <br />
    </div>
  );
}
