import axiosInstance from "@/lib/axiosInstance";

/**
 * 아이디를 요청하기 post로 진행.
 * @returns sql에서 sum으로 가져온 총합 점수가 들어 있음
 */
export const getMyTotalRating = async () => {
  const res = await axiosInstance.get("/mypage/myTotalRating", {
    withCredentials: true,
  });
  return res.data;
};
