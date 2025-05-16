

const ProductInfo = ({ title, price, content }) => {
  return ( 
    <div className="product_info">
      <h3 className="product_title">{title}</h3>   
      <p className="product_price"> {price.toLocaleString()}원</p>
      <p>{content && "상세정보 "}</p>
    </div>
  );
};

export default ProductInfo;

