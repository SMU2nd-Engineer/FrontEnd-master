import axiosInstance from "@/lib/axiosInstance";
import { useSearchParams } from "react-router-dom";
import kakaoPayFail from "./KakaoPayFail";

const kakaoPayApprove = async ({tid, partnerOrderId, partnerUserId, pgToken}) => {


  try {
    const res = await axiosInstance.post("/payment/approve?payMethod=6001", {
      tid,
      partnerOrderId,
      partnerUserId,
      pgToken
    })

    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error("승인 에러: ", error);
    kakaoPayFail({tid, error});
    throw error;
  }
}

export default kakaoPayApprove;