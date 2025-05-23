import axiosInstance from "@/lib/axiosInstance";
/**
 * 찜 목록에서 상품을 지우기 위한 서비스 요청
 * @param {int} productIdx : 찜 목록에서 EDATA를 삽입하기 위한 where에 들어갈 값
 */
export const updateUserPeak = async (productIdx) => {
  try {
    const res = await axiosInstance.post(
      "/mypage/updateUserPeak",
      { productIdx },
      { withCredentials: true }
    );
  } catch (error) {
    throw error;
  }
};
