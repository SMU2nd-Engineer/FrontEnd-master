import { removeAccessToken } from "/utils/TokenManager";
import axiosInstance from "@/lib/axiosInstance";

/**
 * logout
 * 로그아웃 수행시 쿠키 제거 호출, 로컬에서 토큰 제거, alert 창 출력
 */
export const logout = async () => {
  await axiosInstance.post("/logout", {}, { withCredentials: true });
  removeAccessToken();
  alert("로그 아웃 되었습니다.");
  window.location.href = "/user/login"; // 로그인 페이지 이동
};
