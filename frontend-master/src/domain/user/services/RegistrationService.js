import axiosInstance from "@/lib/axiosInstance";

const regitrationService = async (state) => {
  try {
    const res = await axiosInstance.post(
      "/registration",
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
    if (res.status == 200 || res.status === 201) {
      alert("회원가입이 완료되었습니다.");
      window.location.href = "/user/login";
    }
  } catch (error) {
    console.log(error);
    alert("회원가입 중 오류가 발생했습니다. 다시 시도해주세요.");
  }
};

export default regitrationService;
