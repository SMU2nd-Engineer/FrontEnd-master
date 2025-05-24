import axiosInstance from "@/lib/axiosInstance";

const KakaoPayReady = async ({product, user, tradeType, category_idx}) => {
  console.log(product);
  console.log("itemName:", product?.title);

  const today = new Date();
  const partnerOrderId = `order${today}${product.idx}`;
  const partnerUserId = `user${user.idx}`;
  try {
    const res = await axiosInstance.post(
      `/payment/ready?payMethod=${category_idx}`,
      {
        partnerOrderId,
        partnerUserId,
        itemName: product.title, // 상품 이름
        productIdx: product.idx,
        amount: product.price, // 금액
        taxFreeAmount: 0,
        approvalUrl: "http://localhost:5173/payment/success",
        cancelUrl: "http://localhost:5173/payment/cancel",
        failUrl: "http://localhost:5173/payment/fail",
        tradeType,
        deliveryAddress: user.address,
        buyerIdx: user.idx,
        sellerIdx: 1
      },
      {withCredentials: true}
    );
    sessionStorage.setItem("tid", res.data.tid);
    sessionStorage.setItem("pgToken", res.data.pgToken);
    sessionStorage.setItem("partnerOrderId", partnerOrderId);
    sessionStorage.setItem("partnerUserId", partnerUserId);

    console.log("응답데이터 : " , res.data)
    return res.data;
  } catch (error) {
    console.error(error);
    const tid = sessionStorage.getItem("tid");
    kakaoPayFail({tid, error});
  }
};

export default KakaoPayReady;
