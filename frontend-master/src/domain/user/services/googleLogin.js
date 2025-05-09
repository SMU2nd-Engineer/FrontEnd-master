import axiosInstance from "@/lib/axiosInstance";

/**
 * GoogleLogin
 * 로그인 기능 호출, userid와 password를 서버에 전달
 * @param {String} googleCode : 전달받은 토큰 번호를 서버에 전달
 * @returns API를 전달
 */

export const googleLogin = async (googleCode) => {
  return await axiosInstance.post(
    "googleAuth",
    { code: googleCode },
    { withCredentials: true }
  );
};
