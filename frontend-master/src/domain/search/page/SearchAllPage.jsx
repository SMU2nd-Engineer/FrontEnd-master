import React, { useState } from 'react';
import SearchAll from '../components/SearchAll';
import ProductList from '@/domain/products/components/ProductList';
import BoardList from '@/domain/board/components/BoardList';
import * as SA from "../styles/SearchAllPageDesign";
import { searchAll } from '../services/SearchService';
import { useNavigate } from 'react-router-dom';

const SearchAllPage = () => {
  const [productResult, setProductResult] = useState([]);
  const [boardResult, setBoardResult] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const navigate = useNavigate();

  const handleAllSearch = async (searchValue) => {
    if (!searchValue || !searchValue.keyword) {
      setProductResult([]);
      setBoardResult([]);
      setSearchKeyword("");
      return;
    }

    try {
      const res = await searchAll(searchValue.keyword);
      setProductResult(res.data.products);
      setBoardResult(res.data.contents);
      setSearchKeyword(searchValue.keyword);
    } catch (error) {
      console.error("통합 검색 실패:", error);
    }
  };

  return (
    <SA.SearchContainer>
      <p className="pagetitle">통합검색</p>
      <SA.SearchAllBar>
        <SearchAll onSearch={handleAllSearch} />
      </SA.SearchAllBar>

      <SA.SearchResult>
        {/* 상품 검색 결과 */}
        <SA.ProductResult>
          <h2><span>{searchKeyword}</span> 상품 검색 결과</h2>
          {productResult.length > 0 ? (
            <>
              <ProductList products={productResult.slice(0, 4)} />
              {productResult.length > 4 && (
                <SA.MoreButton onClick={() => navigate(`/product?search=${searchKeyword}`)}>
                  더보기
                </SA.MoreButton>
              )}
            </>
          ) : (
            <p><span>{searchKeyword}</span> 상품 검색 결과가 없습니다.</p>
          )}
        </SA.ProductResult>

        {/* 게시글 검색 결과 */}
        <h2><span>{searchKeyword}</span> 게시글 검색 결과</h2>
        {boardResult.length > 0 ? (
          <>
            <BoardList boards={boardResult.slice(0, 5)} />
            {boardResult.length > 5 && (
              <SA.MoreButton onClick={() => navigate(`/board?search=${searchKeyword}`)}>
                더보기
              </SA.MoreButton>
            )}
          </>
        ) : (
          <p><span>{searchKeyword}</span> 게시글 검색 결과가 없습니다.</p>
        )}
      </SA.SearchResult>
    </SA.SearchContainer>
  );
};

export default SearchAllPage;