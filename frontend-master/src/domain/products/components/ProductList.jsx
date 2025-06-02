import React from "react";
import ProductCard from "./ProductCard";
import * as PList from "../styles/ProductList";

const ProductList = ({ products = [] }) => {
  if (!products.length) return <p>상품이 없습니다. </p>;

  console.log(products);
  return (
    <PList.Product_list>
      {products.map((product) => (
        <ProductCard key={product.idx} product={product} />
      ))}
    </PList.Product_list>
  );
};

export default React.memo(ProductList);
