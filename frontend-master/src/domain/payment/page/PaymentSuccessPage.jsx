import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "@/lib/axiosInstance";
import kakaoPayApprove from "../service/KakaoPayApprove";
import { getProductDetail } from "@/domain/products/services/productService";
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
  const [product, setProduct] = useState(null);
  const {idx} = useParams();

  useEffect(() => {
        getProductDetail(idx)
          .then((res) => res.data)
          .then((data) => {
            console.log("=================", data)
            setProduct(data)
          })
          .catch((err) => console.error("상품 불러오기 실패: ", err));
        
      }, [idx]);

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

  const handleRetry = () => {
    window.location.reload();
  };

  const handleGoReview = () => {
    navigate("/mypage/transactionReviewRegist", {
      state: {product}
    });

  };

  if(!product) {
    return <div>상품 정보를 불러오는 중입니다...</div>;
  }

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      {loading && <h2>결제 승인 중입니다... </h2>}

      {!loading && success && (
        <>
          <div>
            <div className='img'>
              <img src={product.img} alt="상품이미지" />
            </div>
            <div>
              <p>{product.title}</p>
              <h2>{product.price}원</h2>
              <p>{product.content}</p>
            </div>
          </div>
          <h1 style={{ color: "green" }}>결제가 성공적으로 완료되었습니다!</h1>
          <p>감사합니다.</p>
          <button onClick={handleGoReview}>후기 작성하기</button>
        </>
      )}
    </div>
  );
};


export default PaymentSuccessPage;
