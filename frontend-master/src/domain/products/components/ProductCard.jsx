import ProductCardInfo from "./ProductInfo";
import ProductImage from "./ProductImage";
import { useNavigate } from "react-router-dom";
import React from "react";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  console.log('ProductCard product:', product);
  if (!product) return null;
  console.log("imageList:", product.imageList);
  return (
    <div
      className="product_card"
      onClick={() => navigate(`/product/detail/${product.idx}`)}
    >
      <div className="image">
           <ProductImage imageList={[{ image_Url: product.image_Url, idx: product.idx, flag: true }]} title={product.title} mode="thumbnail" />
        </div>
      <ProductCardInfo title={product.title} price={product.price} ninkName={product.ninkName} />
    </div>
  );
};

export default React.memo(ProductCard);
