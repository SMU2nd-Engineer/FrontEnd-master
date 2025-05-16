import React, { useState } from 'react';

const ProductSearch = ({onSearch}) => {
  const [keyword, setKeyword] = useState("");

  const handleChange = (e) => {
    setKeyword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(keyword);
    setKeyword("");
  }

  return (
    <div className="SearchBar">
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={keyword}
        onChange={handleChange}
        placeholder="검색어를 입력하세요"
      />
      <button type="submit">검색</button>
    </form>
    </div>
  );
};

export default ProductSearch;