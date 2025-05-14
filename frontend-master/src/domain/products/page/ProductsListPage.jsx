import { useEffect, useState } from "react";
import "../styles/ProductsListPage.css";
import ProductList from "../components/ProductList";
import { getProductList } from "../services/productService";

const ProductListPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductList()
      .then((res) => res.data)
      .then((data) => setProducts(data))
      .catch((err) => console.error("상품 불러오기 실패:", err));
  }, []);

  return (
    <div className="new_product">
      <h2> 상품 전체보기 </h2>
      {/* 카테고리 드롭박스 들어감 */}
      <ProductList products={products} />
    </div>
  );
};

export default ProductListPage;
