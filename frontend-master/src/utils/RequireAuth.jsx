import useLoginUserInfoStore from "@/store/useLoginUserInfoStore";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

/**
 * 로그인 사용자 정보가 없으면 로그인 페이지로 이동하는 ProtectedRoute
 * @returns 인증을 통과한 하위 컴포넌트
 */
export default function RequireAuth() {
  const { userInfo } = useLoginUserInfoStore();
  if (!userInfo.userId) {
    return <Navigate to="/user/login" replace />;
  }
  return <Outlet />;
}
