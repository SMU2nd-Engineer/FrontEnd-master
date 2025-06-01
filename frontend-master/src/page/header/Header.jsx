import { useEffect, useState } from "react";
import { FaRegMessage } from "react-icons/fa6";
import { NavLink, useLocation } from "react-router-dom";
import * as H from "../../style/HeaderDesing";
import { jwtDecode } from "jwt-decode";
import LogoutButton from "@/domain/user/components/LogoutButton";
import { getAccessToken } from "@/utils/TokenManager";
import mainLogo from "@/assets/main_logo.png";
import useLoginUserInfoStore from "@/store/useLoginUserInfoStore";

// 헤더 메뉴
export const HeaderMenu = ({}) => {
  const userInfo = useLoginUserInfoStore.getState().userInfo;

  const isLogin = userInfo.userIdx > 0;

  const location = useLocation();

  const handleNavClick = (path) => {
    if (location.pathname === path) {
      window.location.reload(); // 같은 경로면 새로고침
    }
    // NavLink가 자체적으로 이동 처리하므로 따로 navigate는 필요 없음
  };

  return (
    <H.Header_nav>
      <div className="navigation">
        <div className="nav-top">
          <NavLink to="/total"> 검색 </NavLink>
          <NavLink to="/board"> 게시판 </NavLink>
          <NavLink to="/mypage"> 마이페이지 </NavLink>
        </div>
        <div className="nav-bottom">
          <div className="nav-left">
            <NavLink to="/" className="site_name">
              {" "}
              <img src={mainLogo} alt="" />{" "}
            </NavLink>
            <div className="main-link">
              <NavLink
                to="/product/list"
                onClick={() => handleNavClick("/product/list")}
              >
                {" "}
                Market{" "}
              </NavLink>
              <span> | </span>
              <NavLink to="/ticket" onClick={() => handleNavClick("/ticket")}>
                {" "}
                Ticket{" "}
              </NavLink>
            </div>
          </div>

          <div className="nav-right">
            <div className="login">
              {isLogin ? (
                <H.Logout>
                  <LogoutButton />
                </H.Logout>
              ) : (
                <NavLink to="/user/login"> 로그인 </NavLink>
              )}
            </div>
            <NavLink to="/chat">
              {" "}
              <FaRegMessage />{" "}
            </NavLink>
          </div>
        </div>
      </div>
    </H.Header_nav>
  );
};

// function HeaderVisibility() {
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setIsVisible(false); // 100px 이상 스크롤 시 헤더 숨기기
//       } else {
//         setIsVisible(true); // 100px 이하 시 헤더 보이기
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

// return (
//   <div>
//     <HeaderMenu style={{ display: isVisible ? "block" : "none" }} />
//   </div>
// );
// }
