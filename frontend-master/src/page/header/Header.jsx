import { useEffect, useState } from "react";
import { FaRegMessage } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import * as H from "../../style/HeaderDesing"
import LogoutButton from "@/domain/user/components/LogoutButton";
import  mainLogo from  "@/assets/main_logo.png";
import useLoginUserInfoStore from "@/store/useLoginUserInfoStore";


const selectedStyle = {
  backgroundColor: "none",
};


// 헤더 메뉴
export const HeaderMenu = ({}) => {
  const userInfo = useLoginUserInfoStore.getState().userInfo;

  const isLogin = userInfo.userIdx > 0;
  
  return (
    <H.Header_nav>
     <div className="navigation">
      <div className="nav-top">
          <NavLink
            to="/total"
            style={({ isActive }) => (isActive ? selectedStyle : undefined)}
          >
            {" "}
            검색{" "}
          </NavLink>
          <NavLink
            to="/board"
            style={({ isActive }) => (isActive ? selectedStyle : undefined)}
          >
            {" "}
            게시판{" "}
          </NavLink>
          <NavLink
            to="/mypage"
            style={({ isActive }) => (isActive ? selectedStyle : undefined)}
          >
            {" "}
            마이페이지{" "}
          </NavLink>
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
          
          <div className="nav-right">
            <div className="login">
               
           {isLogin ?
            (
            <H.Logout>
              <LogoutButton />
            </H.Logout>):(<NavLink
              to="/user/login"
              style={({ isActive }) => (isActive ? selectedStyle : undefined)}
            >
              {" "}
              로그인{" "}
            </NavLink> 
            ) } 
            </div>
            <NavLink
              to="/chat"
              style={({ isActive }) => (isActive ? selectedStyle : undefined)}
            >
              {" "}
              <FaRegMessage />{" "}
            </NavLink>
          </div>
        </div>
      </div>
      
    </H.Header_nav>
  );
};

