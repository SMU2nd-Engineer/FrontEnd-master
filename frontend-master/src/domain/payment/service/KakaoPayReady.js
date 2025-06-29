import axiosInstance from "@/lib/axiosInstance";

const KakaoPayReady = async (product, user, tradeType) => {
  const KAKAOPAY_URL = import.meta.env.VITE_KAKAOPAY_API_URL;

  const today = new Date();
  const partnerOrderId = `order${today}${product.idx}`;
  const partnerUserId = `user${product.idx}`;
  const itemName = product.title;
  const productIdx = product.idx;
  let amount = product.price;
  const deliveryAddress = user.address;
  const sellerIdx = product.user_idx;
  const approvalUrl = `${KAKAOPAY_URL}/success/${productIdx}?tradeType=${tradeType}`;
  const cancelUrl = `${KAKAOPAY_URL}/cancel/${productIdx}?tradeType=${tradeType}`;
  const failUrl = `${KAKAOPAY_URL}/fail/${productIdx}?tradeType=${tradeType}`;

  if (tradeType === 0) {
    amount += 3000;
  }

  try {
    const res = await axiosInstance.post(
      "/payment/ready",

      {
        partnerOrderId,
        partnerUserId,
        itemName, // 상품 이름
        productIdx,
        quantity: 1,
        amount, // 금액
        taxFreeAmount: 0,
        approvalUrl,
        cancelUrl,
        failUrl,
        tradeType,
        deliveryAddress,
        sellerIdx,
      },
      { withCredentials: true }
    );

    sessionStorage.setItem("tid", res.data.tid);
    sessionStorage.setItem("pgToken", res.data.pgToken);
    sessionStorage.setItem("partnerOrderId", partnerOrderId);
    sessionStorage.setItem("partnerUserId", partnerUserId);
    return res.data;
  } catch (error) {
    console.error(error);
    console.log(deliveryAddress);
  }
};

export default KakaoPayReady;
