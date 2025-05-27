import axiosInstance from "@/lib/axiosInstance"

const kakaoPayFail = async ({tid, error}) => {
  try {
    await axiosInstance.post("/payment/fail", {
      tid,
      reason: error?.message || String(error) || "알 수 없는 오류"
    })
  } catch (error) {
    console.log("결제 실패 처리중 오류: ", error);
  }
}

export default kakaoPayFail;