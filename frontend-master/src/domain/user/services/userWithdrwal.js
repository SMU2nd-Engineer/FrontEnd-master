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
    console.log("회원탈퇴 과정에서 문제 발생 : ", error);
    throw error;
  }
};
