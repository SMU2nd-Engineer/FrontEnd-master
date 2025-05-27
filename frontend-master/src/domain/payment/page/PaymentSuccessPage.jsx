import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axiosInstance from "@/lib/axiosInstance";
import kakaoPayApprove from "../service/KakaoPayApprove";
import kakaoPayFail from "../service/KakaoPayFail";

const PaymentSuccessPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const tid = sessionStorage.getItem("tid");
  const partnerOrderId = sessionStorage.getItem("partnerOrderId");
  const partnerUserId = sessionStorage.getItem("partnerUserId");
  const [searchParams] = useSearchParams();
  const pgToken = searchParams.get("pg_token");

  useEffect(() => {
    console.log("pgToken:", pgToken);
    console.log("tid:", tid);

    const approvePayment = async () => {
      try {
        await kakaoPayApprove({tid, partnerOrderId, partnerUserId, pgToken});
        setSuccess(true);
      } catch (err) {
        console.error("Approve 에러:", err);
        setError(err.message || "결제 승인 중 오류 발생");
        kakaoPayFail({
          tid,
          err
        })
      } finally {
        setLoading(false);
      }
    };

    approvePayment();
  }, []);

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      {loading && <h2>결제 승인 중입니다... </h2>}

      {!loading && success && (
        <>
          <h1>결제가 성공적으로 완료되었습니다!</h1>
          <p>감사합니다.</p>
          <button onClick={handleGoHome}>홈으로 가기</button>
        </>
      )}
    </div>
  );
};


export default PaymentSuccessPage;
