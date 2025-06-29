import React, { useState } from "react";
import SelectBox from "@/components/SelectBox";
import { getCategoryIdx } from "@/utils/CategoryHandler";
import styled from "styled-components";

const StyledSubmit = styled.button`
  width: 50px;
  height: auto;

  &:hover {
    background-color: #818080;
    color: #fff;
  }
`;

const StyledInput = styled.input`
  width: 300px;
  height: 36px;
  padding: 6px 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media (max-width: 768px) {
    width: 110px;
    font-size: 14px;
    height: 30px;
  }

  @media (max-width: 480px) {
    width: 100px;
    font-size: 12px;
    height: 28px;
  }
`;

const ProductSearch = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState({
    category_idx: 0,
    categorygenre_idx: 0,
    keyword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchValue({ ...searchValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  return (
    <div className="SearchBar">
      <form className="SearchBar" onSubmit={handleSubmit}>
        <SelectBox
          id={"categorygenre_idx"}
          name={"categorygenre_idx"}
          category_idx={getCategoryIdx("contentsGenre")}
          handleChange={handleChange}
        />
        <SelectBox
          id={"category_idx"}
          name={"category_idx"}
          category_idx={getCategoryIdx("contents")}
          handleChange={handleChange}
        />
        <StyledInput 
          type="text"
          name="keyword"
          value={searchValue.keyword}
          onChange={handleChange}
          placeholder="검색어를 입력하세요"
        />
        <StyledSubmit type="submit" id="searchButton">
          검색
        </StyledSubmit>
      </form>
    </div>
  );
};

export default ProductSearch;
