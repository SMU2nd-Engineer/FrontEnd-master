const ProductInfo = ({ title, price, content, sdate}) => {

  return (
    <div className="product_info">
      <h3 className="product_title">{title}</h3>
      <div className="price_date">
      <p className="product_price"> {Number(price).toLocaleString()}원</p>
      <p>{sdate ? new Date(sdate).toLocaleDateString() : ''}</p>
      </div>
      {/* <p>{content && "상세정보 "}</p> */}{/* <p> 판매자 : {nickName}</p> */}
    </div>
  );
};

export default ProductInfo;
