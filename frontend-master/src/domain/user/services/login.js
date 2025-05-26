import axiosInstance from "@/lib/axiosInstance";

/**
 * login
 * 로그인 기능 호출, userid와 password를 서버에 전달
 * @param {String} userId : 로그인 할 때 입력받은 id
 * @param {String} password : 로그이할 때 입력받은 password
 * @param {Boolean} autoLogin : 자동 로그인 체크 여부
 * @returns api 호출
 */

export const login = async (id, password, autoLogin) => {
  return await axiosInstance.post(
    "/user/login",
    {
      id,
      password,
      autoLogin,
    },
    { withCredentials: true }
  );
};
