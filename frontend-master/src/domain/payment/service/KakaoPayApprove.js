import axiosInstance from "@/lib/axiosInstance";

const kakaoPayApprove = async ({
  tid,
  partnerOrderId,
  partnerUserId,
  pgToken,
}) => {
  console.log("승인 요청 시작");

  try {
    const res = await axiosInstance.post("/payment/approve", {
      tid,
      partnerOrderId,
      partnerUserId,
      pgToken,
    });

    return res.data;
  } catch (error) {
    console.error("승인 에러: ", error);
    throw error;
  }
};

export default kakaoPayApprove;
