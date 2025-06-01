import { removeAccessToken } from "@/utils/TokenManager";
import axiosInstance from "@/lib/axiosInstance";

/**
 * logout
 * 로그아웃 수행시 쿠키 제거 호출, 로컬에서 토큰 제거, alert 창 출력
 */
export const logout = async (islogout = true) => {
  await axiosInstance.post("/logout", {}, { withCredentials: true });
  removeAccessToken();
  sessionStorage.removeItem("autoLogin"); // 자동 로그인 설정 해제
  {
    islogout &&
      // alert("로그 아웃 되었습니다.");
      ""; // 나중에 추가적인 알람을 주어야함.
  }
  window.location.href = "/user/login"; // 로그인 페이지 이동
};
