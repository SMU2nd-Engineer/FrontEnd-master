import { useEffect } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products = [] }) => {
  if (!products.length) return <p>상품이 없습니다. </p>;

  

  return (
    <div className="product_list">
      {products.map((product) => (
        <ProductCard key={product.idx} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
