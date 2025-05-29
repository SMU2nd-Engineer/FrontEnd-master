import * as PInfo from "../styles/ProductInfoDesign"

const ProductInfo = ({ title, price, content, sdate}) => {

  

  return (
    <PInfo.Product_Info>
      <h3 className="product_title">{title}</h3>
      <PInfo.Price_Date>
      <p className="product_price"> {Number(price).toLocaleString()}원</p>
      <p>{sdate ? new Date(sdate).toLocaleDateString() : ''}</p>
      </PInfo.Price_Date>
      {/* <p>{content && "상세정보 "}</p> */}{/* <p> 판매자 : {nickName}</p> */}
    </PInfo.Product_Info>
  );
};

export default ProductInfo;
