import axiosInstance from "@/lib/axiosInstance";

const KakaoPayReady = async (product, user, tradeType) => {
  console.log(product);
  console.log("itemName:", product.title);

  const today = new Date();
  const partnerOrderId = `order${today}${product.idx}`;
  const partnerUserId = `user${user.idx}`;
  const itemName = product.title;
  const productIdx = product.idx;
  const amount = product.price;
  const deliveryAddress = user.address;
  const buyerIdx = user.idx;
  const sellerIdx = product.user_idx;
  const approvalUrl = "http://localhost:5173/payment/success/"+productIdx;
  const cancelUrl = "http://localhost:5173/payment/cancel/"+productIdx;
  const failUrl = "http://localhost:5173/payment/fail/"+productIdx;
  try {
    const res = await axiosInstance.post(
      '/payment/ready?payMethod=6001',
      {
        partnerOrderId,
        partnerUserId,
        itemName,  // 상품 이름
        productIdx,
        quantity: 1,
        amount, // 금액
        taxFreeAmount: 0,
        approvalUrl,
        cancelUrl,
        failUrl,
        tradeType,
        deliveryAddress,
        buyerIdx,
        sellerIdx
      },
      {withCredentials: true}
    );

    console.log("응답데이터 : " , res.data)
    sessionStorage.setItem("tid", res.data.tid);
    sessionStorage.setItem("pgToken", res.data.pgToken);
    sessionStorage.setItem("partnerOrderId", partnerOrderId);
    sessionStorage.setItem("partnerUserId", partnerUserId);
    return res.data;
  } catch (error) {
    console.error(error);
    // const tid = sessionStorage.getItem("tid");
    // kakaoPayFail({tid, error});
    console.log(partnerOrderId);
    console.log(partnerUserId);
    console.log(itemName);
    console.log(amount);
    console.log(productIdx);
    console.log(tradeType);
    console.log(buyerIdx);
    console.log(deliveryAddress);
    console.log(sellerIdx);
    console.log(approvalUrl);
  }
};

export default KakaoPayReady;
