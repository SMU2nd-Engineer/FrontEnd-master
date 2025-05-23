import axiosInstance from "@/lib/axiosInstance";

export const registReview = async (formData) => {
  try {
    const res = await axiosInstance.post(
      "/mypage/registReview",
      { formData },
      { withCredentials: true }
    );
  } catch (error) {
    throw error;
  }
};
