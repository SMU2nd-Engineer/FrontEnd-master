import axiosInstance from "@/lib/axiosInstance";

/**
 * naverLogin
 * 로그인 기능 호출, userid와 password를 서버에 전달
 * @param {String} userId : 로그인 할 때 입력받은 id
 * @param {String} password : 로그이할 때 입력받은 password
 * @returns api 호출
 */

export const naverLogin = async (naverCode, autoLogin) => {
  return await axiosInstance.post(
    "/user/naverAuth",
    { code: naverCode, autoLogin },
    { withCredentials: true }
  );
};
