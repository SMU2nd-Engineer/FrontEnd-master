import axiosInstance from "@/lib/axiosInstance";

/**
 * 판매 내역 리스트
 * @returns 조회한 판매 내역 리스트
 */
export const getMySellList = async () => {
  const res = await axiosInstance.get("/mypage/getMySellList", {
    withCredentials: true,
  });
  return res.data;
};
