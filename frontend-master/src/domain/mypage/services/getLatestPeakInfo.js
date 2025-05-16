import axiosInstance from "@/lib/axiosInstance";

/**
 * 마이 페이지 메인에서 조회하는 가장 최신 2개 찜 목록api
 * @returns 가져온 리스트
 */
export const getLastestPeakInfo = async () => {
  const res = await axiosInstance.get("/mypage/getLastestPeak", {
    withCredentials: true,
  });
  return res.data;
};
