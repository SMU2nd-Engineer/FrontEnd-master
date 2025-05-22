import axiosInstance from "@/lib/axiosInstance";

const KakaoPayReady = async (product, user) => {
  try {
    const res = await axiosInstance.post(
      "/payment/ready?payMethod=6001",
      {
        partnerOrderId: "smuproject",
        partnerUserId: product.idx + user.idx,
        itemName: product.name, // 상품 이름
        productIdx: product.idx,
        amount: product.price, // 금액
        taxFreeAmount: 0,
        approvalUrl: "http://localhost:5173/payment/success",
        cancelUrl: "http://localhost:5173/payment/cancel",
        failUrl: "http://localhost:5173/payment/fail",
        deliveryAddress: user.address,
        buyerIdx: user.idx,
        sellerIdx: product.userId
      },
      {withCredentials: true}
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export default KakaoPayReady;
