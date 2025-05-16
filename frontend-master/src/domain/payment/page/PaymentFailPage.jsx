import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentFailPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div style={{padding: "20px", textAlign: "center"}}>
      <h1 style={{color: "red"}}>결제에 실패했습니다.</h1>
      <p>시스템 오류로 인해 결제를 완료할 수 없습니다. 잠시 후 다시 시도해주세요.</p>
      
      <button onClick={handleGoHome}>
        홈으로 돌아가기
      </button>
    </div>
  );
};

export default PaymentFailPage;