import axiosInstance from "@/lib/axiosInstance";

export const changePasswordService = async (id, formdata) => {
  const res = await axiosInstance.post(
    "/user/passwordChange",
    { id: id, password: formdata.password }, // 아이디, 비밀번호 전달
    { withCredentials: true }
  );
  return res;
};
