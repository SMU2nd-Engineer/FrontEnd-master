import { useState } from "react";
import axiosInstance from "@/lib/axiosInstance";

const PaymentAutoRedirectPage = () => {
  const [error, setError] = useState("");

  const handleKakaoPayReady = async () => {
    try {
      const response = await axiosInstance.post("/payment/ready", {
        cid: "TC0ONETIME",
        partnerOrderId: "ORDER1234",
        partnerUserId: "USER5678",
        itemName: "테스트 상품",
        quantity: 1,
        amount: 10000,
        taxFreeAmount: 0,
        approvalUrl: "http://localhost:5173/payment/success",
        cancelUrl: "http://localhost:5173/payment/cancel",
        failUrl: "http://localhost:5173/payment/fail",
      });

      console.log("카카오페이 준비 성공:", response.data);

      // ✅ 결제 페이지로 자동 이동
      window.location.href = response.data.nextRedirectPcUrl;
    } catch (err) {
      console.error("카카오페이 준비 실패:", err);
      setError("결제 준비 실패");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>카카오페이 자동 결제 테스트</h1>
      <button onClick={handleKakaoPayReady}>카카오페이 결제 시작</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default PaymentAutoRedirectPage;