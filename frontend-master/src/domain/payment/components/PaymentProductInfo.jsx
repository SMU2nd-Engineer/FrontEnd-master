import ProductImage from '@/domain/products/components/ProductImage';
import * as PaymentDesign from '../styles/PaymentPageDesign'

const PaymentProductInfo = ({product, tradeType}) => {
  let total = product.price;
  console.log(tradeType);
  if (tradeType.tradeType === 0) {
    total += 3000;
  }
  console.log(total);
  return (
    <PaymentDesign.ProductInfo>
      <PaymentDesign.Img>
        {/* <img src={product.image_Url} alt="상품이미지" /> */}
        <ProductImage imageList={[{ image_Url: product.image_Url, idx: product.idx, flag: true }]} title={product.title} mode="thumbnail" />
      </PaymentDesign.Img>
      <PaymentDesign.PriceTitle>
        <PaymentDesign.Title>{product.title}</PaymentDesign.Title>
        <PaymentDesign.Price>{total}원</PaymentDesign.Price>
        <p>{product.content}</p>
      </PaymentDesign.PriceTitle>
    </PaymentDesign.ProductInfo>
  );
};

export default PaymentProductInfo;