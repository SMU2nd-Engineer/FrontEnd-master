import axiosInstance from "@/lib/axiosInstance";

/**
 * 비밀번호 찾기 API
 * @param {Object} : 전달 받은 id, name, email을 구조 분해 할당
 */

export const passwordFindService = async ({ id, name, email }) => {
  return await axiosInstance.post(
    "/user/passwordFind",
    { id, name, email },
    { withCredentials: true }
  );
};
