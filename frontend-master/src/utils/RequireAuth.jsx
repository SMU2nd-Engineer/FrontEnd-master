import useLoginUserInfoStore from "@/store/useLoginUserInfoStore";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getAccessToken, removeAccessToken } from "./TokenManager";
import { logout } from "@/services/LogoutService";
import { useEffect } from "react";
import { useRef } from "react";
import { getUserInfo } from "@user/services/getUserInfo";

/**
 * 로그인 사용자 정보가 없으면 로그인 페이지로 이동하는 ProtectedRoute
 * @returns 인증을 통과한 하위 컴포넌트
 */
export default function RequireAuth() {
  const { userInfo, setLoginUserInfo, setDefaultUser } =
    useLoginUserInfoStore();
  const token = getAccessToken();
  const hasLoggedOut = useRef(false); // 로그아웃 중복 방지용

  const isAuth = token && userInfo?.userId;

  useEffect(() => {
    if (!isAuth && token && !hasLoggedOut.current) {
      hasLoggedOut.current = true;
      (async () => {
        try {
          const res = await getUserInfo();
          setLoginUserInfo(res);
        } catch (err) {
          await logout();
          removeAccessToken();
          sessionStorage.clear();
          localStorage.clear();
          setDefaultUser();
        }
      })();
    }
  }, [isAuth, token, setDefaultUser, setLoginUserInfo]);

  if (!isAuth) {
    return <Navigate to="/user/login" replace />;
  }

  return <Outlet />;
}
