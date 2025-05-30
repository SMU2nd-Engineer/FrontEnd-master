import ProductImage from '@/domain/products/components/ProductImage';
import * as PaymentDesign from '../styles/PaymentPageDesign'

const PaymentProductInfo = ({product, tradeType}) => {
  let total = product.price;
  let deliveryFee = 0;
  console.log(tradeType);
  if (tradeType.tradeType === 0) {
    total += 3000;
    deliveryFee += 3000;
  }
  console.log(total);
  return (
    <>
      <PaymentDesign.Image>
        {/* <img src={product.image_Url} alt="상품이미지" /> */}
        <ProductImage imageList={[{ image_Url: product.image_Url, idx: product.idx, flag: true }]} title={product.title} mode="thumbnail" />
      </PaymentDesign.Image>
      <PaymentDesign.PriceTitle>
        <PaymentDesign.Title>{product.title}</PaymentDesign.Title>
        <PaymentDesign.Price>{product.price}원</PaymentDesign.Price>
        <PaymentDesign.DeliveryFee>배송비 ({deliveryFee}원)</PaymentDesign.DeliveryFee>
        <div>
          <PaymentDesign.Total>총 결제금액 : {total}원</PaymentDesign.Total>
        </div>
      </PaymentDesign.PriceTitle>
    </>
  );
};

export default PaymentProductInfo;