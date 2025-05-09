import axiosInstance from "@/lib/axiosInstance";

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
