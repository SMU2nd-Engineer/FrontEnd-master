import axiosInstance from "@/lib/axiosInstance";

/**
 * 개인정보 수정 페이지에서 받은 값을 받아서 update
 * @param {object} state
 */
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
