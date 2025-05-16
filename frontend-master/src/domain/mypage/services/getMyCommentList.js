import axiosInstance from "@/lib/axiosInstance";

/**
 * 사용자 작성 댓글 정보를 가져올 api
 * @returns 대글 정보가 담긴 객체 리스트
 */
export const getMyCommentList = async () => {
  const res = await axiosInstance.get("/mypage/getMyCommentList", {
    withCredentials: true,
  });
  return res.data;
};
