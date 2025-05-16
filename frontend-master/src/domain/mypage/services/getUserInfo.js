import axiosInstance from "@/lib/axiosInstance";

/**
 * 마이페이지에서 개인정보 수정 페이지 렌더링 할 때 개인 정보를 가져올 api
 * @return 개인 정보에서 추출한 dto 객체를 반환 받음.
 */
export const getUserInfo = async () => {
  const res = await axiosInstance.get("/mypage/getUserInfo", {
    withCredentials: true,
  });
  // 가져오는 데이터 보고 어떻게 뿌릴지 작성해야함.
  console.log(res.data);
  return res.data;
};
