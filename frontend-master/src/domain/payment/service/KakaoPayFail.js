import axiosInstance from "@/lib/axiosInstance"

const kakaoPayFail = async ({tid, error}) => {
  try {
    const res = await axiosInstance.post("/payment/ready?payMethod=6001", {
      tid,
      reason: error.message || "카카오 결제 실패"
    })
  } catch (error) {
    console.log("결제 실패 처리중 오류: ", error);
  }
}

export default kakaoPayFail;