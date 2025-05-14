import { useEffect, useState } from "react";
// import '../../../common/ui/header/Header.css';
import './ProductsListPage.css';
import ProductList from "./components/ProductList";


const ProductListPage = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {    
    fetch("http://localhost:8100/product/list") 
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("상품 불러오기 실패:", err));
  }, []);


return (
  <div className='new_product'>
    <h2> 상품 전체보기 </h2>
    {/* 카테고리 드롭박스 들어감 */}
      <ProductList products={products} />
    
  </div>
)
};

export default ProductListPage;