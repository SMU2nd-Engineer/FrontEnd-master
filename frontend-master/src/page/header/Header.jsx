import { useEffect, useState } from "react";
import { FaRegMessage } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const selectedStyle = {
  backgroundColor: "none",
};

// 헤더 메뉴
export const HeaderMenu = () => {
  return (
    <nav className="header-nav">
      <div className="nav-left">
        <NavLink to="/" className="site_name">
          {" "}
          SMU{" "}
        </NavLink>
        <div className="main-link">
          <NavLink
            to="/product/list"
            style={({ isActive }) => (isActive ? selectedStyle : undefined)}
          >
            {" "}
            Market{" "}
          </NavLink>
          <span> | </span>
          <NavLink
            to="/ticket"
            style={({ isActive }) => (isActive ? selectedStyle : undefined)}
          >
            {" "}
            Ticket{" "}
          </NavLink>
        </div>
      </div>
      <div className="nav-top">
        <NavLink
          to="/search"
          style={({ isActive }) => (isActive ? selectedStyle : undefined)}
        >
          {" "}
          검색{" "}
        </NavLink>
        <NavLink
          to="/product/upload"
          style={({ isActive }) => (isActive ? selectedStyle : undefined)}
        >
          {" "}
          상품등록{" "}
        </NavLink>
        <NavLink
          to="/mypage"
          style={({ isActive }) => (isActive ? selectedStyle : undefined)}
        >
          {" "}
          마이페이지{" "}
        </NavLink>
      </div>
      <div className="nav-right">
        <NavLink
          to="/login"
          style={({ isActive }) => (isActive ? selectedStyle : undefined)}
        >
          {" "}
          로그인{" "}
        </NavLink>
        <NavLink
          to="/chat"
          style={({ isActive }) => (isActive ? selectedStyle : undefined)}
        >
          {" "}
          <FaRegMessage />{" "}
        </NavLink>
      </div>
    </nav>
  );
};

function HeaderVisibility() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false); // 100px 이상 스크롤 시 헤더 숨기기
      } else {
        setIsVisible(true); // 100px 이하 시 헤더 보이기
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <HeaderMenu style={{ display: isVisible ? "block" : "none" }} />
    </div>
  );
}
