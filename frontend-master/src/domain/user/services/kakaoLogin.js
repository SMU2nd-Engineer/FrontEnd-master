/**
 * kakaoLogin
 * 로그인 기능 호출, userid와 password를 서버에 전달
 * @returns api 호출
 */

import axiosInstance from "@/lib/axiosInstance";

export const kakaoLogin = async (kakaoCode) => {
  return await axiosInstance.post(
    "/user/kakaoAuth",
    { code: kakaoCode },
    { withCredentials: true }
  );
};
