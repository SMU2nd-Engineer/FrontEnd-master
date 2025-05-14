

const ProductInfo = ({ title, price, content }) => {
  return ( 
    <div className="product_info">
      <h3>{title}</h3>   
      <p>{price.toLocaleString()}원</p>
      <p>{content && "상세정보 "}</p>
    </div>
  );
};

export default ProductInfo;

