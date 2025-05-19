import axiosInstance from "@/lib/axiosInstance";

/**
 * duplicateCheckService
 * 중복 체크를 위한 서비스
 * @param {String} name : 검색할 이름(id, nickName)
 * @param {Method} dispatch : 디스패치 매서드
 * @param {String} category : 검색할 범위
 */
export const duplicateCheckService = async (name, category) => {
  try {
    const res = await axiosInstance.post(
      "/user/duplicatecheck",
      { name, category }, // chekcklist 를 불러옴
      { withCredentials: true }
    );
    return res.data;
  } catch (error) {
    console.log("중복 체크 과정에서 문제가 생겼습니다. 내용 : " + error);
    throw new Error("중복 체크 중 문제가 발생했습니다.");
  }
};
