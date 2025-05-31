import axiosInstance from "@/lib/axiosInstance";

export const getHomePageInfo = async () => {
  try {
    const res = await axiosInstance.get("/user/homePageInfo", {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.log("리뷰 등록 과정에서 문제 발생 : ", error);
    throw error;
  }
};
