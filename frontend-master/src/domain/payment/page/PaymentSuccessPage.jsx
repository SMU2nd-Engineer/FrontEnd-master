import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate, useParams } from "react-router-dom";
import kakaoPayApprove from "../service/KakaoPayApprove";
import kakaoPayFail from "../service/KakaoPayFail";
import PaymentProductInfo from "../components/PaymentProductInfo";
import * as PaymentDesign from "../styles/PaymentPageDesign";
import { getProductDetail } from "@/domain/products/services/productService";
import { useForceHomeOnBackOrReload } from "@/hooks/useForceHomeOnBackOrReload";

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
  const tradeType = Number(searchParams.get("tradeType"));
  const [isApproved, setIsApproved] = useState(false);
  const { idx } = useParams();
  const [product, setProduct] = useState(null);

  useForceHomeOnBackOrReload();
  
  useEffect(() => {
    if (!partnerOrderId || !partnerUserId || !pgToken) {
      kakaoPayFail(tid, "정보 불러오기 실패");
      return;
      }
    const approvePayment = async () => {
      try {
        const result = await kakaoPayApprove({
          tid,
          partnerOrderId,
          partnerUserId,
          pgToken,
        });

        setIsApproved(true);
        setSuccess(true);
      } catch (err) {
        console.error("Approve 에러:", err);
        setError(err.message || "결제 승인 중 오류 발생");
        kakaoPayFail({
          tid,
          err,
        });
      } finally {
        setLoading(false);
        await getProductDetail(idx).then((res) => setProduct(res.data));
      }
    };

    approvePayment();
  }, [tid]);

  if (isApproved === "true") {
    setSuccess(true);
    setLoading(false);
    return;
  }

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoReview = () => {
    navigate(`/mypage/transactionReviewRegist?tradeType=${tradeType}`, {
      state: { product: product },
    });
  };

  if (!product) {
    return <div>상품 정보를 불러오는 중입니다...</div>;
  }

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      {loading && <h2>결제 승인 중입니다... </h2>}

      {!loading && success && !error && (
        <>
          <PaymentDesign.Box>
            <PaymentDesign.PaymentBox>
              <PaymentDesign.PaySuccess>
                결제가 성공적으로 완료되었습니다!
              </PaymentDesign.PaySuccess>
              <PaymentDesign.ProductInfo>
                <PaymentProductInfo
                  product={product}
                  tradeType={{ tradeType }}
                />
              </PaymentDesign.ProductInfo>
              <PaymentDesign.ReviewBox>
                <PaymentDesign.Review onClick={handleGoReview}>
                  후기 작성하기
                </PaymentDesign.Review>
                <PaymentDesign.Next onClick={handleGoHome}>
                  다음에 작성하기
                </PaymentDesign.Next>
              </PaymentDesign.ReviewBox>
            </PaymentDesign.PaymentBox>
          </PaymentDesign.Box>
        </>
      )}
      {!loading && error && (
        <PaymentDesign.Box>
          <PaymentDesign.PaySuccess>
            결제가 실패하였습니다.
          </PaymentDesign.PaySuccess>
          <PaymentDesign.PayError>Error 원인 : {error}</PaymentDesign.PayError>
          <PaymentDesign.ProductInfo>
            <PaymentProductInfo product={product} tradeType={{ tradeType }} />
          </PaymentDesign.ProductInfo>
          <PaymentDesign.Review onClick={handleGoHome}>
            홈으로 이동하기
          </PaymentDesign.Review>
        </PaymentDesign.Box>
      )}
    </div>
  );
};

export default PaymentSuccessPage;
