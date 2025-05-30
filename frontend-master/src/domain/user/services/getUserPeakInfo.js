import axiosInstance from "@/lib/axiosInstance";

export const getUserPeakInfo = async (idx) => {
  try {
    const res = await axiosInstance.post(
      "/mypage/pickInfo",
      { idx },
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (error) {
    console.log("리뷰 등록 과정에서 문제 발생 : ", error);
    throw error;
  }
};
