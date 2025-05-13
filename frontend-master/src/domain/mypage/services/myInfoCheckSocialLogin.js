import axiosInstance from "@/lib/axiosInstance";

/**
 * 마이페이지 개인정보 수정 페이지에서 소셜 로그인 확인용 외부 api 호출
 * @returns 소셜 컬럼에서 추출한 값.
 */
export const myInfoCheckSocialLogin = async () => {
  const res = await axiosInstance.get(
    "/mypage/checksocial",
    {},
    { withCredentials: true }
  );
  return res.data.socialLogin;
};
