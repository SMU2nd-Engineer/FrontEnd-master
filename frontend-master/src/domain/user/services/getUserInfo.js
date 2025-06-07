import axiosInstance from "@/lib/axiosInstance";

export const getUserInfo = async () => {
  try {
    const res = await axiosInstance.get("/user/userInfo", {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.log("홈페이지 정보 가져오는 과정에서 문제 발생 : ", error);
    throw error;
  }
};
