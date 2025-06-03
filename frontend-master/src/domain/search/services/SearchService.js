import axiosInstance from "@/lib/axiosInstance";


export const searchAll = (keyword) => {
  return axiosInstance.get(
    "total/search",
    {params : {keyword}, withCredentials: true }
  );
};