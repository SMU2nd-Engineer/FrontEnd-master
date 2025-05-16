import axiosInstance from "@/lib/axiosInstance";

export const getMyTextReview = async () => {
  const res = await axiosInstance.get("/mypage/getMyTextReview", {
    withCredentials: true,
  });
  return res.data;
};
