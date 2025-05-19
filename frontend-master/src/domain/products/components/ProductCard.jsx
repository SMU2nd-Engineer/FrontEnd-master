import ProductCardInfo from "./ProductInfo";
import ProductImage from "./ProductImage";
import { useNavigate } from "react-router-dom";
import React from "react";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  if (!product) return null;

  return (
    <div
      className="product_card"
      onClick={() => navigate(`/product/detail/${product.idx}`)}
    >
      <div className="Sampleimage">
          <p >사진</p>
        </div>
      {/* <ProductImage image_url={product.imageUrl} title={product.title} /> */}
      <ProductCardInfo title={product.title} price={product.price} />
    </div>
  );
};

export default React.memo(ProductCard);
