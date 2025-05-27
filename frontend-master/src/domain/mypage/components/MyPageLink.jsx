import React from "react";
import { Link } from "react-router-dom";
import "../style/MyPageNav.css";

export default function MyPageLink() {
  return (
    <div className="navbar">
      <div className="navbar-inner">
        <Link to="/mypage/main">마이페이지</Link>
      </div>
      <div>
        <ul className="navbar-menu">
          <li>
            <Link to="/mypage/myInfo">개인 정보</Link>
          </li>
          <li>
            <Link to="/mypage/sellAndPurchaselist">판매/구매이력</Link>
          </li>
          <li>
            <Link to="/mypage/peakList">찜 목록</Link>
          </li>
          <li>
            <Link to="/mypage/myReview">리뷰</Link>
          </li>
          <li>
            <Link to="/mypage/myBoard">게시글</Link>
          </li>
          <li>
            <Link to="/mypage/myEditFavorite">관심사</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
