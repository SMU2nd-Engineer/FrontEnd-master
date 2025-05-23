import axiosInstance from "@/lib/axiosInstance";

const KakaoPayReady = async (product, user) => {
  if (!product) {
    alert("상품 정보가 없습니다. 다시 시도해주세요.");
    return;
  }
  console.log(product);
  console.log("itemName:", product?.title);

  const partnerOrderId = `order${user.idx}`;
  const partnerUserId = `user${user.idx}`;
  try {
    const res = await axiosInstance.post(
      "/payment/ready?payMethod=6001",
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
  }
};

export default KakaoPayReady;
