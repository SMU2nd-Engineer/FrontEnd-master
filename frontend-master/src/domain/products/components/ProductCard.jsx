import ProductCardInfo from "./ProductInfo";
import ProductImage from "./ProductImage";
import PeakButton from "./PeakButton";
import { useNavigate } from "react-router-dom";
import React from "react";
import * as Card from "../styles/ProductCardDesign";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  if (!product) return null;
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
      <Card.Button>
        <div onClick={(e) => e.stopPropagation()}>
          <PeakButton idx={product.idx} />
        </div>
      </Card.Button>
    </Card.Product_card>
  );
};

export default React.memo(ProductCard);
