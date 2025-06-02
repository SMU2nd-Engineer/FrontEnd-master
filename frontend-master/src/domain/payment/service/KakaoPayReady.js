import axiosInstance from "@/lib/axiosInstance";

const KakaoPayReady = async (product, user, tradeType) => {
  console.log(product);
  console.log("itemName:", product.title);

  const today = new Date();
  const partnerOrderId = `order${today}${product.idx}`;
  const partnerUserId = `user${user.idx}`;
  const itemName = product.title;
  const productIdx = product.idx;
  let amount = product.price;
  const deliveryAddress = user.address;
  const sellerIdx = product.user_idx;
  const approvalUrl = `http://ec2-3-38-104-183.ap-northeast-2.compute.amazonaws.com/payment/${productIdx}/success?tradeType=${tradeType}`;
  const cancelUrl = `http://ec2-3-38-104-183.ap-northeast-2.compute.amazonaws.com/payment/${productIdx}/cancel?tradeType=${tradeType}`;
  const failUrl = `http://ec2-3-38-104-183.ap-northeast-2.compute.amazonaws.com/payment/${productIdx}/fail?tradeType=${tradeType}`;

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

    console.log("응답데이터 : ", res.data);
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
