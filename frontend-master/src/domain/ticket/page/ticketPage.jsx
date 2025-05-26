import React, { useState } from "react";
import TicketList from "../components/TicketList";
import CategoryPage from "../components/CategoryPage";
import Calendar from "../components/Calendar";
import SearchDate from "../components/SearchDate";
import "../style/ticketPage.css";

const TicketPage = () => {
  const [allCategoryIds, setAllCategoryIds] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // 팝업 관련 상태 추가
  const [popupInfo, setPopupInfo] = useState(null);

  const categoriesToQuery =
    selectedIds.length > 0 ? selectedIds : allCategoryIds;

  // 팝업 열기 함수: 공연 정보를 받아서 상태 업데이트
  const openPopup = (info) => {
    setPopupInfo(info);
  };

  // 팝업 닫기 함수
  const closePopup = () => {
    setPopupInfo(null);
  };

  const handleDateChange = (start, end) => {
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="ticketPage">
      <div className="topCategoryBar">
        <CategoryPage
          selectedIds={selectedIds}
          setSelectedIds={setSelectedIds}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          setAllCategoryIds={setAllCategoryIds}
        />
      </div>

      <div className="bottomArea">
        <div className="calender">
          <Calendar
            selectedIds={selectedIds}
            setSelectedIds={setSelectedIds}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            setAllCategoryIds={setAllCategoryIds}
          />
        </div>
        <div className="showList">
          <SearchDate onDateChange={handleDateChange} />
          <TicketList
            selectedIds={categoriesToQuery}
            searchTerm={searchTerm}
            startDate={startDate}
            endDate={endDate}
          />
        </div>
      </div>

      {/* 팝업 컴포넌트 */}
      {popupInfo && <PopupPage info={popupInfo} onClose={closePopup} />}
    </div>
  );
};

// 다른 파일에서 불러올 수 있게 설정
export default TicketPage;
