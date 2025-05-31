import ProductCardInfo from "./ProductInfo";
import ProductImage from "./ProductImage";
import PeakButton from "./PeakButton";
import { useNavigate } from "react-router-dom";
import React from "react";
import * as Card from "../styles/ProductCardDesign";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  console.log("ProductCard product:", product);
  if (!product) return null;
  console.log("imageList:", product.imageList);
  return (
    <Card.Product_card
      onClick={() => navigate(`/product/detail/${product.idx}`)}
    >
      <Card.Thumbnail>
        <ProductImage
          imageList={[
            { image_Url: product.image_Url, idx: product.idx, flag: true },
          ]}
          title={product.title}
          mode="thumbnail"
        />
      </Card.Thumbnail>
      <ProductCardInfo
        title={product.title}
        price={product.price}
        sdate={product.sdate}
      />
      <div onClick={(e) => e.stopPropagation()}>
        <PeakButton idx={product.idx} />
      </div>
    </Card.Product_card>
  );
};

export default React.memo(ProductCard);
