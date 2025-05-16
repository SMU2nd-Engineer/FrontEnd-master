import axiosInstance from "@/lib/axiosInstance";

/**
 * 구매 내역 조회 요청
 * @returns 조회한 구매 내역 리스트
 */
export const getMyBuyList = async () => {
  const res = await axiosInstance.get("/mypage/getMyBuyList", {
    withCredentials: true,
  });
  return res.data;
};
