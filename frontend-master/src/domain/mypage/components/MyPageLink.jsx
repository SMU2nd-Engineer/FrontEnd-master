import React from "react";
import { Link } from "react-router-dom";

export default function MyPageLink() {
  return (
    <div>
      <p>
        <Link to="/mypage/main">마이페이지</Link>
      </p>
      <Link to="/mypage/myInfo">개인 정보</Link> <br />
      <Link to="/mypage/sellAndPurchaselist">판매/구매이력</Link>
      <br />
      <Link to="/mypage/peakList">찜 목록</Link>
      <br />
      <Link to="/mypage/myReview">리뷰</Link>
      <br />
      <Link to="/mypage/myBoard">게시글</Link>
    </div>
  );
}
