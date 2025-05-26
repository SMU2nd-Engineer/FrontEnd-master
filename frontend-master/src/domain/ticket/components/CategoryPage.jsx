import React, { useState } from "react";
import SelectCategory from "./SelectCategory";
import SearchTitleAndCast from "./SearchTitleAndCast";
import SearchDate from "./SearchDate";

const CategoryPage = ({
  setSelectedIds,
  setSearchTerm,
  setStartDate,
  setEndDate,
}) => {
  const handleSearch = (query) => {
    setSearchTerm(query);
  };

  const handleDateChange = (start, end) => {
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div>
      <SelectCategory onChange={setSelectedIds} />
      <SearchDate onDateChange={handleDateChange} />
      <SearchTitleAndCast onSearch={handleSearch} />
    </div>
  );
};

export default CategoryPage;
