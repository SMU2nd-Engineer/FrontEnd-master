import React from 'react';
import SearchAll from '../components/SearchAll';
import ProductList from '@/domain/products/components/ProductList';
import BoardList from '@/domain/board/components/BoardList';
import { useState } from 'react';
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

const productPreview = productResult.slice(0, 4);
const boardPreview = boardResult.slice(0, 5);

  return (
    
    <SA.SearchContainer>
      <p className="pagetitle">통합검색</p>
      <SA.SearchAllBar>
        <SearchAll onSearch={handleAllSearch} />
      </SA.SearchAllBar>
      
      <SA.SearchResult>
        <SA.ProductResult>
          <h2> <span>{searchKeyword}</span> 상품 검색 결과</h2>
          {productPreview.length > 0 ? (
            <>
            <ProductList products={productPreview} />
            {productPreview.length > 4 && (
              <SA.MoreButton onClick={() => navigate(`/products?search=${searchKeyword}`)}>
                  더보기
              </SA.MoreButton>
            )}
            </>
          ) : (
            <p> <span>{searchKeyword}</span> 상품 검색 결과가 없습니다.</p>
          )}
        </SA.ProductResult>
        {/* <SA.PostResult> */}
          <h2><span>{searchKeyword}</span> 게시글 검색 결과</h2>
          {boardPreview.length > 0 ? (   
            <>
            <BoardList boards={boardPreview} />    
            {boardPreview.length > 5 && (
              <SA.MoreButton onClick={() => navigate(`/board?search=${searchKeyword}`)}>
                  더보기
              </SA.MoreButton>
            )}
          </>
          ) : (
            <p><span>{searchKeyword}</span> 게시글 검색 결과가 없습니다.</p>
          )}
        {/* </SA.PostResult> */}
      </SA.SearchResult>
    </SA.SearchContainer>
    
  );
};

export default SearchAllPage;