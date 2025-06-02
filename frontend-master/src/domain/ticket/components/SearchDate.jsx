import React, { useState } from "react";
import SelectDateCalendar from "../components/SelectDateCalendar";
import useTicketStore from "../store/useTicketStore";

const SearchDate = () => {
  const { startDate, endDate, setStartDate, setEndDate } = useTicketStore();

  const handleStartChange = (date) => {
    setStartDate(date); // 선택한 날짜를 시작날짜로

    let newEndDate = endDate;
    // 시작일이 종료일보다 늦으면 종료일 초기화
    if (endDate && date > endDate) {
      newEndDate = null;
      setEndDate(null);
    }
    // 부모 컴포넌트에게 날짜 알려쥐기
    setStartDate(date);
    setEndDate(newEndDate);
  };

  const handleEndChange = (date) => {
    setEndDate(date); // 선택한 날짜를 종료날짜로 셋팅
    setStartDate(startDate);
  };

  return (
    <div>
      <SelectDateCalendar
        onStartChange={handleStartChange}
        onEndChange={handleEndChange}
      />
    </div>
  );
};

export default SearchDate;
