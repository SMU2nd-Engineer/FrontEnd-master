import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import ProductSearch from "../components/ProductSearch";
import { getProductList, searchProducts } from "../services/productService";
import Button from "@/components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import * as List from "../styles/ProductsListPageDesign";

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [lastId, setLastId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [searchParams, setSearchParams] = useState(null); 
  const location = useLocation(); 
  const query = new URLSearchParams(location.search);

  const size = 20;
  const navigate = useNavigate();

  // 검색 요청 처리
  const handleSearch = (searchValue) => {
    setIsLoading(true);
    setProducts([]);
    setLastId(null);
    setSearchParams(searchValue);

    const isEmptySearch =
      !searchValue.keyword &&
      (searchValue.category_idx === 0 || searchValue.category_idx === "0") &&
      (searchValue.categorygenre_idx === 0 || searchValue.categorygenre_idx === "0");

    if (isEmptySearch) {
      getProductList(null, size)
        .then((res) => {
          const data = res.data;
          setProducts(data);
          if (data.length < size) setHasMore(false);
          else setHasMore(true);
          if (data.length > 0) setLastId(data[data.length - 1].idx);
          else setLastId(null);
        })
        .catch((err) => console.error("상품 불러오기 실패:", err))
        .finally(() => setIsLoading(false));
    } else {
      searchProducts({ ...searchValue, lastId: null, size })
        .then((res) => {
          const data = res.data;
          setProducts(data);
          if (data.length < size) setHasMore(false);
          else setHasMore(true);
          if (data.length > 0) setLastId(data[data.length - 1].idx);
          else setLastId(null);
        })
        .catch((err) => console.error("검색 실패:", err))
        .finally(() => setIsLoading(false));
    }
  };

  // 초기 전체 상품 불러오기
  useEffect(() => {
    const keywordFromUrl = query.get("search");

    if (keywordFromUrl) {
      // 검색어가 있을 경우 검색 실행
      handleSearch({
        keyword: keywordFromUrl,
        category_idx: 0,
        categorygenre_idx: 0,
      });
    }
      else {setIsLoading(true);
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
          } else {
            setLastId(null);
          }
        })
        .catch((err) => console.error("상품 불러오기 실패:", err))
        .finally(() => setIsLoading(false));
    }
  }, [location.search]);

  // 더보기 버튼 클릭 시
  const loadMore = () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);

    const isEmptySearch =
      !searchParams?.keyword &&
      (searchParams?.category_idx === 0 || searchParams?.category_idx === "0" || searchParams?.category_idx === undefined) &&
      (searchParams?.categorygenre_idx === 0 || searchParams?.categorygenre_idx === "0" || searchParams?.categorygenre_idx === undefined);

    if (isEmptySearch) {
      // 전체 목록 더보기
      getProductList(lastId, size)
        .then((res) => {
          const data = res.data;
          setProducts((prev) => [...prev, ...data]);
          if (data.length < size) {
            setHasMore(false);
          } else {
            setHasMore(true);
          }
          if (data.length > 0) {
            setLastId(data[data.length - 1].idx);
          }
        })
        .catch((err) => console.error("추가 상품 불러오기 실패:", err))
        .finally(() => setIsLoading(false));
    } else {
      // 검색 결과 더보기
      searchProducts({ ...searchParams, lastId, size })
        .then((res) => {
          const data = res.data;
          setProducts((prev) => [...prev, ...data]);
          if (data.length < size) {
            setHasMore(false);
          } else {
            setHasMore(true);
          }
          if (data.length > 0) {
            setLastId(data[data.length - 1].idx);
          }
        })
        .catch((err) => console.error("검색 결과 추가 불러오기 실패:", err))
        .finally(() => setIsLoading(false));
    }
  };

  

  const handleClick = () => {
    navigate("/product/upload");
  };

  return (
    <div className="new_product">
      <List.Product_top>
        <p className="pagetitle">상품 전체보기</p>
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