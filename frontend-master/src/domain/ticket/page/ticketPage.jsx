import React, { useState } from "react";
import TicketList from "../components/TicketList";
import CategoryPage from "../components/CategoryPage";
import Calendar from "../components/Calendar";
import "../style/ticketPage.css";

const TicketPage = () => {
  const [allCategoryIds, setAllCategoryIds] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const categoriesToQuery =
    selectedIds.length > 0 ? selectedIds : allCategoryIds;

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
          <TicketList
            selectedIds={categoriesToQuery}
            searchTerm={searchTerm}
            startDate={startDate}
            endDate={endDate}
          />
        </div>
      </div>
    </div>
  );
};

// 다른 파일에서 불러올 수 있게 설정
export default TicketPage;
