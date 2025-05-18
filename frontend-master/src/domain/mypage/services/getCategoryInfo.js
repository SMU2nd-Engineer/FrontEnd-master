import axiosInstance from "@/lib/axiosInstance";

export const getCategoryInfo = async () => {
  const res = await axiosInstance.get("/user/getCategory", {
    withCredentials: true,
  });
  return res.data;
};
