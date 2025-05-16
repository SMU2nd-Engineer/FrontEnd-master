import axiosInstance from "@/lib/axiosInstance";

export const getLastestPeakInfo = async () => {
  const res = await axiosInstance.post(
    "/mypage/getLastestPeak",
    {},
    { withCredentials: true }
  );
  return res.data;
};
