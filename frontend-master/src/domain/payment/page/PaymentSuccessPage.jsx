import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axiosInstance from "@/lib/axiosInstance";

const PaymentSuccessPage = () => {
  const [searchParams] = useSearchParams();
  const pgToken = searchParams.get("pg_token");
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const tid = sessionStorage.getItem("tid"); // ✅ 여기서 선언!
    console.log("✅ pgToken:", pgToken);
    console.log("✅ tid:", tid);

    const approvePayment = async () => {
      if (!tid || !pgToken) {
        throw new Error("필수 정보 누락 (tid 또는 pgToken)");
      }

      try {
        const response = await axiosInstance.post(`/api/payment/approve?payMethod=kakao`, {
          cid: "TC0ONETIME",
          tid: tid,
          partnerOrderId: "ORDER1234",
          partnerUserId: "USER5678",
          pgToken: pgToken,
        });

        console.log("✅ Approve 응답:", response.data);

        if (response.data && response.data.aid) {
          setSuccess(true);
          alert("결제가 성공적으로 완료되었습니다.");
          navigate("/");
        } else {
          throw new Error("결제 승인 실패 (응답 이상)");
        }

      } catch (err) {
        console.error("❌ Approve 에러:", err);
        setError(err.message || "결제 승인 중 오류 발생");
      } finally {
        setLoading(false);
      }
    };

    approvePayment();
  }, [pgToken, navigate]);

  

  const handleRetry = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      {loading && <h2>결제 승인 중입니다... ⏳</h2>}

      {!loading && success && (
        <>
          <h1 style={{ color: "green" }}>🎉 결제가 성공적으로 완료되었습니다!</h1>
          <p>감사합니다.</p>
          <button onClick={handleGoHome} style={buttonStyle("green")}>홈으로 가기</button>
        </>
      )}

      {!loading && error && (
        <>
          <h1 style={{ color: "red" }}>❌ 결제 실패</h1>
          <p>{error}</p>
          <button onClick={handleRetry} style={buttonStyle("red")}>다시 시도</button>
        </>
      )}
    </div>
  );
};

const buttonStyle = (color) => ({
  marginTop: "20px",
  padding: "10px 20px",
  backgroundColor: color,
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
});

export default PaymentSuccessPage;
