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
        <img src={product.img} alt="상품이미지" />
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