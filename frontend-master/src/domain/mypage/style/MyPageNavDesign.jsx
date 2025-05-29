import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// import 명 이렇게 사용하시면 됩니다(경로는 각자 수정 필요!)
// import * as Nav from "../style/MyPageNavDesign";

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  a:hover {
    color: #f37878;
  }
`;

export const NavBarInner = styled.div`
  display: flex;
`;

export const NavbarMenu = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    margin-right: 10px;
  }
  li:last-child {
    margin-right: 0;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const StickyNavbar = styled.div`
  /* position: sticky; */
  top: 10px;
  background-color: white;
  padding: 10px 20px;
  background-color: #f0b8b8;
  color: white;
  font-size: 16px;
  border-radius: 6px;
  z-index: 10;
`;
