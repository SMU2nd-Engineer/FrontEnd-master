import React, { useState } from "react";
import SelectCategory from "./SelectCategory";
import SearchTitleAndCast from "./SearchTitleAndCast";
import SearchDate from "./SearchDate";

const CategoryPage = ({
  selectedIds,
  setSelectedIds,
  searchTerm,
  setSearchTerm,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  const [allCategoryIds, setAllCategoryIds] = useState([]);

  const categoriesToQuery =
    selectedIds.length > 0 ? selectedIds : allCategoryIds;

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
