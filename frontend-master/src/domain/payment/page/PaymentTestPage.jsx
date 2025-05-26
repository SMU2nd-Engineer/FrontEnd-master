import React, {useState} from "react";
import axiosInstance from "@/lib/axiosInstance";

const PaymentTestPage = () => {
  const [payUrl, setPayUrl] = useState("");
  const [error, setError] = useState("");

  const handleKakaoPayReady = async () => {
    try {
      const response = await axiosInstance.post("/payment/ready?payMethod=6001", {
        partnerOrderId: "ORDER1234",
        partnerUserId: "USER5678",
        itemName: "TEST",
        quantity: 1,
        amount: 5000,
        taxFreeAmount: 0,
        approvalUrl: "http://localhost:5173/payment/success",
        cancelUrl: "http://localhost:5173/payment/cancel",
        failUrl: "http://localhost:5173/payment/fail",

        deliveryAddress: "서울특별시 강남구 테헤란로 123",
        productIdx: 2,
        buyerIdx: 3,
        sellerIdx: 4
      });

      console.log("카카오페이 준비 성공:", response.data);

      // TID 저장
      sessionStorage.setItem("tid", response.data.tid);

      setPayUrl(response.data.nextRedirectPcUrl);
      setError("");
    } catch (err) {
      console.error("카카오페이 준비 실패:", err);
      setError("결제 준비 실패");
      setPayUrl("");
    }
  };

  return (
    <div style={{padding: "20px"}}>
      <h1>카카오페이 결제 테스트</h1>
      <button onClick={handleKakaoPayReady}>카카오페이 결제 준비</button>
      {payUrl && (
        <div style={{marginTop: "20px"}}>
          <a href={payUrl}>
            결제 페이지 이동하기
          </a>
    </div>
  )}

      {error && <p style={{color: "red"}}>{error}</p>}
    </div>
  );
};

export default PaymentTestPage;