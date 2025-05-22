import axiosInstance from "@/lib/axiosInstance";

const kakaoPayApprove = async (state) => {
  if (!state.tid || !state.pgToken) {
    throw new Error("필수 정보 누락(tid 또는 pgToken)")
  }

  try {
    const res = await axiosInstance.post("/payment/approve?payMethod=6001", {
      tid: state.tid,
      partnerOrderId: state.partnerOrderId,
      partnerUserId: state.partnerUserId,
      pgToken: state.pgToken,
    }, [state])

    console.log(res.data);
  } catch (error) {
    console.error("승인 에러: ", error);
  }
}

export default kakaoPayApprove;