import axiosInstance from "@/lib/axiosInstance";

const kakaoPayApprove = async ({tid, partnerOrderId, partnerUserId, pgToken}) => {


  try {
    const res = await axiosInstance.post("/payment/approve", {
      tid,
      partnerOrderId,
      partnerUserId,
      pgToken
    })

    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("승인 에러: ", error);
    throw error;
  }
}

export default kakaoPayApprove;