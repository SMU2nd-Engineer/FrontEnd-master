import React from 'react';
import { useState } from 'react';

const SearchAll = ({onSearch}) => {
  const [keyword, setKeyword] = useState("");

  const handleChange = (e) => {
    setKeyword(e.target.value);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    if(!keyword.trim()) return;

    onSearch({keyword});
  }

  return (
    <div>
      <form className="SearchALLBar" onSubmit={handleSearch}>
        <input 
          type="text"
          name="keyword"
          value={keyword}
          onChange={handleChange}
          placeholder="검색어를 입력하세요"
        />
        <button type="submit" className="searchAllButton">검색</button>
      </form>
    </div>
  );
};

export default SearchAll;