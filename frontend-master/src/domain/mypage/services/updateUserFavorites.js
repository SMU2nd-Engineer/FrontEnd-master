import axiosInstance from "@/lib/axiosInstance";

export const updateUserFavorites = async (formdata) => {
  try {
    const res = await axiosInstance.post("/mypage/updateFavorites", formdata, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.log(`관심사 수정 과정에서 오류 발생 : ${error}`);
  }
};
