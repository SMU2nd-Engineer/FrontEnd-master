import axiosInstance from "@/lib/axiosInstance";
import { MYPAGE_ENDPOINTS } from "../utils/getRequestEndPoints";

/**
 * 마이페이지 공통 get 요청 메서드
 * @returns 프라미스 객체
 */
export const getMyPageData = async (key) => {
  const endpoint = MYPAGE_ENDPOINTS[key];
  const res = await axiosInstance.get(`/mypage/${endpoint}`, {
    withCredentials: true,
  });
  return res.data;
};
