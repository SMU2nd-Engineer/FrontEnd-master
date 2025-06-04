import axiosInstance from "@/lib/axiosInstance";

/**
 * logout
 * 로그아웃 수행시 쿠키 제거 호출, 로컬에서 토큰 제거, alert 창 출력
 */
export const logout = async (islogout = true) => {
  try {
    await axiosInstance.post("/logout", {}, { withCredentials: true });
  } catch (error) {
    console.error(error);
  }
};
