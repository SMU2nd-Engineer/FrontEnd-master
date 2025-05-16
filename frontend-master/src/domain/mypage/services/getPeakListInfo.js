import axiosInstance from "@/lib/axiosInstance";

/**
 * 토큰 값의 userid를 이용하여 찜 목록을 가져오는 api
 */

export const getPeakistInfo = async () => {
  const res = axiosInstance.get("/mypage/peakListInfo", {
    withCredentials: true,
  });
  return res.data;
};
