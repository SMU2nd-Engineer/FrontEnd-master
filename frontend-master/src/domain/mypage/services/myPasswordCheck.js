import axiosInstance from "@/lib/axiosInstance";

/**
 * 마이페이지 개인정보 열기 전 사용자 비밀번호 체크 화면
 * @param {String} password  : 사용자 입력 비밀번호
 * @param {Method} setIsMyInfoPasswordCheck : 사용자 정보 화면 렌더링 선택지 변경 함수
 */
export const myPasswordCheck = async (password, setIsMyInfoPasswordCheck) => {
  const res = await axiosInstance.post(
    "/mypage/passwordCheck",
    {
      password,
    },
    { withCredentials: true }
  );
  if (res.data === false) {
    alert("비밀번호를 확인해주세요.");
  } else {
    setIsMyInfoPasswordCheck(res.data);
  }
};
