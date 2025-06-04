import * as PInfo from "../styles/ProductInfoDesign";

const ProductCardInfo = ({ title, price, sdate }) => {
  return (
    <PInfo.Product_Info>
      <h3 className="product_title">{title}</h3>
      <PInfo.Price_Date>
        <p className="product_price"> {Number(price).toLocaleString()}원</p>
        <p>{sdate ? new Date(sdate).toLocaleDateString() : ""}</p>
      </PInfo.Price_Date>
    </PInfo.Product_Info>
  );
};

export default ProductCardInfo;
