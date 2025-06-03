import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import ProductSearch from "../components/ProductSearch";
import { getProductList, searchProducts } from "../services/productService";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";
import * as List from "../styles/ProductsListPageDesign";

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [lastId, setLastId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const size = 20;
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getProductList(null, size)
      .then((res) => {
        const data = res.data;
        if (data.length < size) {
          setHasMore(false);
        } else {
          setHasMore(true);
        }
        setProducts(data);
        if (data.length > 0) {
          setLastId(data[data.length - 1].idx); // 마지막 IDX 저장
        }
      })
      .catch((err) => console.error("상품 불러오기 실패:", err))
      .finally(() => setIsLoading(false));
  }, []);

  const loadMore = () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    getProductList(lastId, size)
      .then((res) => {
        const data = res.data;
        if (data.length < size) {
          setHasMore(false);
        } else {
          setHasMore(true);
        }
        setProducts((prev) => [...prev, ...data]);
        if (data.length > 0) {
          setLastId(data[data.length - 1].idx);
        }
      })
      .catch((err) => console.error("추가 상품 불러오기 실패:", err))
      .finally(() => setIsLoading(false));
  };

  const handleSearch = (searchValue) => {
    setIsLoading(true);
    setProducts([]);
    setLastId(null);
    if (!searchValue) {
      getProductList(null, size)
      .then((res) => {
        const data = res.data;
        setProducts(data);
        if (data.length < size) {
          setHasMore(false);
        } else {
          setHasMore(true);
        }
        if (data.length > 0) {
          setLastId(data[data.length - 1].idx);
        }
      })
      .catch((err) => console.error("상품 불러오기 실패:", err))
      .finally(() => setIsLoading(false));
    } else {
      searchProducts(searchValue)
        .then((res) => {
          const data = res.data;
          setProducts(data);
          setHasMore(true); 
        })
        .catch((err) => console.error("검색 실패", err))
        .finally(() => setIsLoading(false));
    }
  };

  const handleClick = () => {
    navigate("/product/upload");
  };

  return (
    <div className="new_product">
      <List.Product_top>
        <p className="pagetitle"> 상품 전체보기 </p>
        <Button
          className="pluploadbutton"
          text={"상품등록"}
          onClick={handleClick}
        />
      </List.Product_top>
      <ProductSearch onSearch={handleSearch} />
      <List.Product_list>
        <ProductList products={products} />
      </List.Product_list>
      <List.MoreButton>
        {hasMore && (
          <Button
            text={isLoading ? "로딩중..." : "더보기"}
            onClick={loadMore}
            disabled={isLoading}
          />
        )}
      </List.MoreButton>
    </div>
  );
};

export default ProductListPage;
