import axiosInstance from "@/lib/axiosInstance";

export const updateUserInfo = async (state) => {
  try {
    const res = await axiosInstance.post(
      "/mypage/updateInfo",
      {
        name: state.name,
        password: state.password,
        nickName: state.nickName,
        email: `${state.emailLocal}@${state.emailDomain}`,
        address: `${state.address} ${state.detailAddress}`,
      },
      { withCredentials: true }
    );
  } catch (error) {
    console.log(`개인정보 전달 중 오류 발생 : ${error}`);
  }
};
