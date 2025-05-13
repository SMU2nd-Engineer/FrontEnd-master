import axiosInstance from "@/lib/axiosInstance";

export const myInfoCheckSocialLogin = async () => {
  const res = await axiosInstance.get(
    "/mypage/checksocial",
    {},
    { withCredentials: true }
  );
  return res.data;
};
