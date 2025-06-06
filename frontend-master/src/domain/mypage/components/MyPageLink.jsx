import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Nav from "../style/MyPageNavDesign";
import {
  Hamburger,
  ResponsiveWrapper,
  ResponsiveMenu,
} from "../style/MyPageNavDesign";
import { useEffect } from "react";

export default function MyPageLink() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <Nav.NavBar>
      <Nav.NavBarInner>
        <Nav.NavLink to="/mypage/main">마이페이지</Nav.NavLink>
      </Nav.NavBarInner>
      <Nav.NavbarMenu>
        <li>
          <Nav.NavLink to="/mypage/myInfo">개인 정보</Nav.NavLink>
        </li>
        <li>
          <Nav.NavLink to="/mypage/sellAndPurchaselist">
            판매/구매이력
          </Nav.NavLink>
        </li>
        <li>
          <Nav.NavLink to="/mypage/peakList">찜 목록</Nav.NavLink>
        </li>
        <li>
          <Nav.NavLink to="/mypage/myReview">리뷰</Nav.NavLink>
        </li>
        <li>
          <Nav.NavLink to="/mypage/myBoard">게시글</Nav.NavLink>
        </li>
        <li>
          <Nav.NavLink to="/mypage/myEditFavorite">관심사</Nav.NavLink>
        </li>
      </Nav.NavbarMenu>
      <ResponsiveWrapper>
        <Hamburger open={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
        <ResponsiveMenu open={menuOpen}>
          <li>
            <Nav.NavLink to="/mypage/myInfo">개인 정보</Nav.NavLink>
          </li>
          <li>
            <Nav.NavLink to="/mypage/sellAndPurchaselist">
              판매/구매이력
            </Nav.NavLink>
          </li>
          <li>
            <Nav.NavLink to="/mypage/peakList">찜 목록</Nav.NavLink>
          </li>
          <li>
            <Nav.NavLink to="/mypage/myReview">리뷰</Nav.NavLink>
          </li>
          <li>
            <Nav.NavLink to="/mypage/myBoard">게시글</Nav.NavLink>
          </li>
          <li>
            <Nav.NavLink to="/mypage/myEditFavorite">관심사</Nav.NavLink>
          </li>
        </ResponsiveMenu>
      </ResponsiveWrapper>
    </Nav.NavBar>
  );
}
