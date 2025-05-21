import React, { useState } from "react";
import SelectCategory from "./SelectCategory";
import TicketList from "./TicketList";
import SearchTitleAndCast from "./SearchTitleAndCast";
import SearchDate from "./SearchDate";

// 전체 장르 ID 배열
const ALL_CATEGORY_IDS = [3001, 3002, 3003, 3004, 3005, 3006, 3007, 3008];

const CategoryPage = () => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleSearch = (query) => {
    setSearchTerm(query);
  };

  const handleDateChange = (start, end) => {
    setStartDate(start);
    setEndDate(end);
  };

  // 선택된 장르가 없으면 ALL_CATEGORY_IDS 넘기고, 있으면 selectedIds 넘기기
  const categoriesToQuery =
    selectedIds.length > 0 ? selectedIds : ALL_CATEGORY_IDS;

  return (
    <div>
      <SelectCategory onChange={setSelectedIds} />
      <SearchDate onDateChange={handleDateChange} />
      <SearchTitleAndCast onSearch={handleSearch} />

      <TicketList selectedIds={categoriesToQuery} searchTerm={searchTerm} />
    </div>
  );
};

export default CategoryPage;
