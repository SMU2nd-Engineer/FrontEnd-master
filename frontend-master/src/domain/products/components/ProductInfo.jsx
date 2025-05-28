const ProductInfo = ({ title, price, content, nickName}) => {
  return (
    <div className="product_info">
      <h3 className="product_title">{title}</h3>
      <p className="product_price"> {Number(price).toLocaleString()}원</p>
      <p> 판매자 : {nickName}</p>
      <p>{content && "상세정보 "}</p>
    </div>
  );
};

export default ProductInfo;
