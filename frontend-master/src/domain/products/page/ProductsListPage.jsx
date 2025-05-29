import { useEffect, useState } from "react";
// import "../styles/ProductsListPage.css";
import ProductList from "../components/ProductList";
import ProductSearch from "../components/ProductSearch"
import { getProductList, searchProducts } from "../services/productService";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";
import * as List from "../styles/ProductsListPageDesign"


const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProductList()
      .then((res) => res.data)
      .then((data) => {
        const sortedData = data.sort((a, b) => new Date(b.idx) - new Date(a.idx));  // 최신순으로 정렬되도록
        setProducts(sortedData);
      })
      .catch((err) => console.error("상품 불러오기 실패:", err));
  }, []);

  const handleSearch = (searchValue) => {
    if(!searchValue) {
      getProductList()
      .then((res) => res.data)
      .then((data) => {
        const sortedData = data.sort((a, b) => new Date(b.idx) - new Date(a.idx));
        setProducts(sortedData);
      });
    } else {
      console.log(searchValue)
      searchProducts(searchValue)
      .then((res) => res.data)
      .then((data) => setProducts(data))
      .catch((err) => console.error("검색 실패", err))
    }
  };

  const handleClick = () => {
    navigate('/product/upload');
  };

  return (
    <div className="new_product">
      <List.Product_top>
        <p className="pagetitle"> 상품 전체보기 </p>
        <Button className="pluploadbutton" text={"상품등록"} onClick={handleClick} /> 
      </List.Product_top>
      <ProductSearch onSearch = {handleSearch} />
      <List.Product_list>
        <ProductList products={products} />
      </List.Product_list>
    </div>
  );
};

export default ProductListPage;
