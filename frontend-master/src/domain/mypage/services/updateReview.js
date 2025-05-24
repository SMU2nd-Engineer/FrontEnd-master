import axiosInstance from "@/lib/axiosInstance";

export const updateReview = async (formData) => {
  try {
    const res = await axiosInstance.post("/mypage/updateReview", formData, {
      withCredentials: true,
    });
  } catch (error) {
    console.log("리뷰 등록 과정에서 문제 발생 : ", error);
    throw error;
  }
};
