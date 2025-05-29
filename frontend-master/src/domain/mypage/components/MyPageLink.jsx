import React from "react";
import { Link } from "react-router-dom";
// import "../style/MyPageNav.css";
import * as Nav from "../style/MyPageNavDesign";

export default function MyPageLink() {
  return (
    <Nav.NavBar>
      <Nav.NavBarInner>
        <Nav.NavLink to="/mypage/main">마이페이지</Nav.NavLink>
      </Nav.NavBarInner>
      <div>
        <Nav.NavbarMenu>
          <li>
            <Nav.NavLink to="/mypage/myInfo">개인 정보 </Nav.NavLink>
          </li>
          <li>|</li>
          <li>
            <Nav.NavLink to="/mypage/sellAndPurchaselist">
              판매/구매이력
            </Nav.NavLink>
          </li>
          <li>|</li>
          <li>
            <Nav.NavLink to="/mypage/peakList">찜 목록</Nav.NavLink>
          </li>
          <li>|</li>
          <li>
            <Nav.NavLink to="/mypage/myReview">리뷰</Nav.NavLink>
          </li>
          <li>|</li>
          <li>
            <Nav.NavLink to="/mypage/myBoard">게시글</Nav.NavLink>
          </li>
          <li>|</li>
          <li>
            <Nav.NavLink to="/mypage/myEditFavorite">관심사</Nav.NavLink>
          </li>
        </Nav.NavbarMenu>
      </div>
    </Nav.NavBar>
  );
}
