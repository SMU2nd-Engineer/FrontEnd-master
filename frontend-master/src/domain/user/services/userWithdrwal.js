import axiosInstance from "@/lib/axiosInstance";

export const userWithdrawal = async () => {
  try {
    const res = await axiosInstance.post(
      "/user/withdrawal",
      {},
      { withCredentials: true }
    );
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
