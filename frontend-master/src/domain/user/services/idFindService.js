import axiosInstance from "@/lib/axiosInstance";

/**
 * idPasswordFindService
 * 아이디 찾기 API
 * @param {Object} : 전달 받은 name, email을 구조 분해 할당
 */

export const idFindService = async ({ name, email }) => {
  return await axiosInstance.post(
    "/user/idFind",
    { name, email },
    { withCredentials: true }
  );
};
