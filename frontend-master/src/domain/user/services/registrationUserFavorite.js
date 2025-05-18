import axiosInstance from "@/lib/axiosInstance";

export const registrationUserFavorite = async (formdata) => {
  try {
    console.log(formdata);
    const res = await axiosInstance.post(
      "/user/registrationFavorites",
      formdata,
      { withCredentials: true }
    );
    return res.data;
  } catch (error) {
    console.log(`관심사 체크 등록 과정에서 오류 발생 : ${error}`);
  }
};
