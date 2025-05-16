import axiosInstance from "@/lib/axiosInstance";

/**
 * 사용자 작성 게시판 정보를 가져올 api
 * @returns 게시판 정보가 담긴 객체 리스트
 */
export const getMyBoardList = async () => {
  const res = await axiosInstance.get("/mypage/getMyBoardList", {
    withCredentials: true,
  });
  return res.data;
};
