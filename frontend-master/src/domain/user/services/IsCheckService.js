import axiosInstance from "@/common/lib/AxiosInstance";

/**
 * isIdCheck
 * 중복 체크를 위한 서비스 넘겨줄 것 .
 * @param {String} item : 중복 체크 할 아이템(id 또는 nickName)
 * @return {boolean} : 중복 체크 했을 때 넘겨줄 내용.
 */
export const isCheck = async ({ item }) => {
  try {
    const res = await axiosInstance.post(
      "/duplicatecheck",
      { checklist: item },
      { withCredentials: true }
    );
    if (res.data.isCheck) {
      return true;
    }
  } catch (error) {
    console.log("중복 체크 과정에서 문제가 생겼습니다. 내용 : " + error);
  }
};
