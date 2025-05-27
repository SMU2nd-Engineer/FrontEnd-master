import React, { useState } from "react";
import SelectCategory from "./SelectCategory";
import SearchTitleAndCast from "./SearchTitleAndCast";
import "../style/ticketPage.css";

const CategoryPage = ({ setSelectedIds, setSearchTerm }) => {
  const handleSearch = (query) => {
    setSearchTerm(query);
  };

  return (
    <div className="category">
      <div className="selectCategory">
        <SelectCategory onChange={setSelectedIds} />
      </div>
      <div className="searchTitleAndCast">
        <SearchTitleAndCast onSearch={handleSearch} />
      </div>
    </div>
  );
};

export default CategoryPage;
