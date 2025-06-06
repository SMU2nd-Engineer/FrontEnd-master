import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  user-select: none;
  max-width: 1024px; /* 선택: 너무 넓게 퍼지는 것 방지 */
  margin: 0 auto; /* 가운데 정렬 */
  a:hover {
    color: #f37878;
  }
`;

export const NavBarInner = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  max-width: 100%;
  flex-shrink: 1; /* ✅ 줄어들 수 있도록 설정 */
  flex-grow: 0; /* ✅ 넓어지지 않도록 제한 */
`;

export const NavbarMenu = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-right: 10px;
    padding: 10px 0;
    border-bottom: none;
  }

  li:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    display: none; /* ✅ 모바일에서는 숨기기 */
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const StickyNavbar = styled.div`
  top: 10px;
  background-color: #f0b8b8;
  color: white;
  font-size: 16px;
  border-radius: 6px;
  z-index: 10;
  padding: 10px 20px;
`;

export const Hamburger = styled.div`
  width: 30px;
  height: 24px;
  position: relative;
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }

  span {
    position: absolute;
    height: 3px;
    width: 100%;
    background-color: white;
    border-radius: 2px;
    transition: all 0.3s ease-in-out;
  }

  span:nth-child(1) {
    top: ${({ open }) => (open ? "10px" : "0")};
    transform: ${({ open }) => (open ? "rotate(45deg)" : "none")};
  }

  span:nth-child(2) {
    top: 10px;
    opacity: ${({ open }) => (open ? 0 : 1)};
  }

  span:nth-child(3) {
    top: ${({ open }) => (open ? "10px" : "20px")};
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "none")};
  }
`;

export const ResponsiveWrapper = styled.div`
  position: relative;
  @media (min-width: 769px) {
    display: none;
  }
`;

export const ResponsiveMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  padding: 15px 20px;
  margin: 0;

  position: absolute;
  top: 60px;
  right: 20px;
  width: max-content;
  min-width: 160px;
  background-color: #f0b8b8;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 9999;

  li {
    white-space: nowrap;
    text-align: left;
    padding: 10px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }
  li:last-child {
    border-bottom: none;
  }

  @media (min-width: 769px) {
    display: none;
  }

  ${(props) => !props.open && `display: none;`}
`;
