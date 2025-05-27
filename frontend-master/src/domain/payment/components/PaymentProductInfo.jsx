const PaymentProductInfo = ({product}) => {
  return (
    <div className='productInfo'>
      <div className='img'>
        <img className='img' src={product.img} alt="상품이미지" />
      </div>
      <div className='price_title'>
        <p id="title">{product.title}</p>
        <h2>{product.price}원</h2>
        <p>{product.content}</p>
      </div>
    </div>
  );
};

export default PaymentProductInfo;