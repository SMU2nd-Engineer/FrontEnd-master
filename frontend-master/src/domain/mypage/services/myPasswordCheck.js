import axiosInstance from "@/lib/axiosInstance";

/**
 * 마이페이지 개인정보 열기 전 사용자 비밀번호 체크 화면
 * @param {String} password  : 사용자 입력 비밀번호
 * @param {Method} setIsMyInfoPasswordCheck : 사용자 정보 화면 렌더링 선택지 변경 함수
 */
export const myPasswordCheck = async (password, setIsMyInfoPasswordCheck) => {
  try {
    const res = await axiosInstance.post(
      "/mypage/passwordCheck",
      {
        password,
      },
      { withCredentials: true }
    );
    return res.data;
  } catch (error) {
    console.log("비밀번호 일치하지 않는 오류 발생");
    return;
  }
};
