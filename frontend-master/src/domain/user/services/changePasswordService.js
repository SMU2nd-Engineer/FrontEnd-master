import axiosInstance from "@/lib/axiosInstance";

export const changePasswordService = async (id, password) => {
  const res = await axiosInstance.post(
    "/user/passwordChange",
    { id, password }, // 아이디, 비밀번호 전달
    { withCredentials: true }
  );
  if (res.status === 200 || res.status === 201) {
    alert("비밀번호가 정상적으로 변경되었습니다. 로그인 페이지로 이동합니다.");
    window.location.href = "/user/login";
  }
};
