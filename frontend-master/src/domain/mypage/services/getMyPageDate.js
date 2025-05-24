import axiosInstance from "@/lib/axiosInstance";
import { MYPAGE_ENDPOINTS } from "../utils/getRequestEndPoints";

/**
 * 마이페이지 공통 get 요청 메서드 ( 동적 경로 요청 때문에 코드 수정)
 * @returns 프라미스 객체
 */
export const getMyPageData = async (key, path = null) => {
  try {
    const checkDynamic = MYPAGE_ENDPOINTS[key]; // 키를 기준으로 상수를 가져옴
    const endpoint =
      typeof checkDynamic === "function" && path !== null // 상수가 함수인 경우 함수를 실행하여 값을 가져옴
        ? checkDynamic(path)
        : checkDynamic; // 아닌 경우 그대로 사용
    const res = await axiosInstance.get(`/mypage/${endpoint}`, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.error("API 요청 중 오류 발생:", error);
    return null;
  }
};
