import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentCancelPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div style={{padding: "20px", textAlign: "center"}}>
      <h1 style={{color: "red"}}>결제가 취소되었습니다.</h1>
      <p>사용자에 의해 결제가 취소되었습니다. 다시 시도해주세요.</p>
      <button onClick={handleGoHome}>홈으로 돌아가기</button>
    </div>
  );
};

export default PaymentCancelPage;