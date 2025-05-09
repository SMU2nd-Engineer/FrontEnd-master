import axiosInstance from "@/lib/axiosInstance";

/**
 * kakaoLogin
 * 로그인 기능 호출, userid와 password를 서버에 전달
 * @returns api 호출
 */

export const kakaoLogin = async (kakaoCode) => {
  return await axiosInstance.post(
    "kakaoAuth",
    { code: kakaoCode },
    { withCredentials: true }
  );
};
