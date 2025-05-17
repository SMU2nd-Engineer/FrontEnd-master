import axiosInstance from "@/lib/axiosInstance";

/**
 * 마이페이지 리뷰용 페이지용 get 요청
 * @returns
 */
export const getMyTextReview = async () => {
  const res = await axiosInstance.get("/mypage/getMyTextReview", {
    withCredentials: true,
  });
  return res.data;
};
