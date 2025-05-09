import axiosInstance from "@/common/lib/AxiosInstance";

const regitrationService = async (state) => {
  try {
    const res = await axiosInstance.post(
      "/registration",
      { ...state },
      { withCredentials: true }
    );
  } catch (error) {}
};

export default regitrationService;
