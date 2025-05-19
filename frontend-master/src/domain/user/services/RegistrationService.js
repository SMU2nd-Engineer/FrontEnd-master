import axiosInstance from "@/lib/axiosInstance";

const regitrationService = async (state) => {
  try {
    const res = await axiosInstance.post(
      "/user/registration",
      {
        id: state.id,
        name: state.name,
        password: state.password,
        nickName: state.nickName,
        email: `${state.emailLocal}@${state.emailDomain}`,
        address: `${state.address} ${state.detailAddress}`,
        socialLogin: state.socialProvider || "",
      },
      { withCredentials: true }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default regitrationService;
