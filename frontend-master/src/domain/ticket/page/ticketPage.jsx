import React, { useState } from "react";
import SelectCategory from "../components/SelectCategory";
import SearchTitleAndCast from "../components/SearchTitleAndCast";

const TicketPage = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // 이후 showList 필터링에 사용할 수 있음
  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log("검색어:", query);
  };

  return (
    <div className="ticketPage">
      <div className="topCategoryBar">
        {/* 카테고리 선택 바 공간 */}
        {/* 1. 카테고리 선택 */}
        <SelectCategory onChange={setSelectedCategories} />
        {/* 2. 기간 선택 */}
        {/* 3. 검색 */}
        <SearchTitleAndCast onSearch={handleSearch} />
      </div>

      <div className="bottomArea">
        <div className="calender">{/* 하단 좌측 달력 공간 */}</div>
        <div className="showList">{/* 하단 우측 리스트 표출 공간 */}</div>
      </div>
    </div>
  );
};

// 다른 파일에서 불러올 수 있게 설정
export default TicketPage;
