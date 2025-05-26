import React, { useState } from "react";
import SelectCategory from "./SelectCategory";
import SearchTitleAndCast from "./SearchTitleAndCast";

const CategoryPage = ({ setSelectedIds, setSearchTerm }) => {
  const handleSearch = (query) => {
    setSearchTerm(query);
  };

  return (
    <div>
      <SelectCategory onChange={setSelectedIds} />
      <SearchTitleAndCast onSearch={handleSearch} />
    </div>
  );
};

export default CategoryPage;
