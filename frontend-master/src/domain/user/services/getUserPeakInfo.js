import axiosInstance from "@/lib/axiosInstance";

/**
 * 유저 pick 정보를 가져오는 서비스
 * @param {int} idx : 상품 idx
 * @returns : 사용자 정보를 가져오는 함수
 */
export const getUserPeakInfo = async (idx) => {
  try {
    const res = await axiosInstance.post(
      "/mypage/pickInfo",
      { idx },
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (error) {
    console.log("리뷰 등록 과정에서 문제 발생 : ", error);
    throw error;
  }
};
