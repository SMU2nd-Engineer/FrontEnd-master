import React, { useState } from "react";
import TicketList from "../components/TicketList";
import CategoryPage from "../components/CategoryPage";
import Calendar from "../components/Calendar";
import SearchDate from "../components/SearchDate";
import * as TicketPages from "../style/TicketPageDesign";
import { useCallback } from "react";

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
  const closePopup = useCallback(() => {
    setPopupInfo(null);
  }, []);

  const handleDateChange = useCallback((start, end) => {
    setStartDate(start);
    setEndDate(end);
  }, []);

  return (
    <TicketPages.TicketPageMain>
      <TicketPages.TopCategoryBar>
        <CategoryPage
          setSelectedIds={setSelectedIds}
          setSearchTerm={setSearchTerm}
        />
      </TicketPages.TopCategoryBar>

      <TicketPages.BottomArea>
        <TicketPages.Calendar1>
          <Calendar
            selectedIds={selectedIds}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
          />
        </TicketPages.Calendar1>
        <TicketPages.ShowList>
          <SearchDate onDateChange={handleDateChange} />
          <TicketList
            selectedIds={categoriesToQuery}
            searchTerm={searchTerm}
            startDate={startDate}
            endDate={endDate}
          />
        </TicketPages.ShowList>
      </TicketPages.BottomArea>

      {/* 팝업 컴포넌트 */}
      {popupInfo && <PopupPage info={popupInfo} onClose={closePopup} />}
    </TicketPages.TicketPageMain>
  );
};

// 다른 파일에서 불러올 수 있게 설정
export default TicketPage;
