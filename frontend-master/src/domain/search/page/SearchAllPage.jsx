import React from 'react';
import { searchProducts } from '@/domain/products/services/productService';
import { getBoardSearch } from '@/domain/board/services/boardService';
import SearchAll from '../components/SearchAll';
import ProductList from '@/domain/products/components/ProductList';
import BoardList from '@/domain/board/components/BoardList';
import { useState } from 'react';



const SearchAllPage = () => {
  const [productResult, setProductResult] = useState([]);
  const [postResult, setPostResult] = useState([]);

  const handleAllSearch = async (searchValue) => {
  if (!searchValue || !searchValue.keyword) {
    setPostResult([]);
    setProductResult([]);
    return;
  }

  try {
    const [productRes, postRes] = await Promise.all([
      searchProducts({ keyword: searchValue.keyword }), 
      getBoardSearch(0, 0, searchValue.keyword),  
    ]);

    setProductResult(productRes.data);
    setPostResult(postRes.data);
  } catch (error) {
    console.error("통합 검색 실패:", error);
  }
};

  return (
    <div>
      <SearchAll onSearch={handleAllSearch} />
      
      <h2>상품 검색 결과</h2>
      {productResult.length > 0 ? (
        <ProductList products={productResult} />
      ) : (
        <p>상품 검색 결과가 없습니다.</p>
      )}

      <h2>게시글 검색 결과</h2>
      {postResult.length > 0 ? (
        <BoardList posts={postResult} />
      ) : (
        <p>게시글 검색 결과가 없습니다.</p>
      )}
    </div>
    
  );
};

export default SearchAllPage;