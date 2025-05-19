import React, { useState } from "react";

// DatePicker 설정
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // 기본디자인 설정
import { ko } from "date-fns/esm/locale"; // 한국어 설정

const SelectPeriod = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState(null); // 시작날짜 지정
  const [endDate, setEndDate] = useState(null); // 종료날짜 지정

  const handleStartChange = (date) => {
    setStartDate(date); // 선택한 날짜를 시작날짜로 셋팅

    // 시작일이 종료일보다 늦으면 종료일 초기화
    if (endDate && date > endDate) {
      setEndDate(null);
    }
    // 부모 컴포넌트에게 날짜 알려쥐기
    onDateChange(date, endDate);
  };

  const handleEndChange = (date) => {
    setEndDate(date); // 선택한 날짜를 종료날짜로 셋팅
    onDateChange(startDate, date); // 부모 컴포넌트에게 날짜 알려주기
  };

  return (
    <div>
      <label>시작일:</label>
      {/* DatePicker는 달력 UI를 나타냄 */}
      <DatePicker
        locale={ko} // 한국어 설정
        dateFormat="yyyy-MM-dd" // 포맷
        selected={startDate} // 선택된 날짜를 startDate 변수에서 가져옴
        onChange={handleStartChange} // 선택된 값을 업데이트
        selectsStart
        startDate={startDate}
        endDate={endDate}
        placeholderText="날짜 선택"
      />

      <label>종료일:</label>
      <DatePicker
        locale={ko}
        dateFormat="yyyy-MM-dd"
        selected={endDate}
        onChange={handleEndChange}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        placeholderText="날짜 선택"
      />
    </div>
  );
};

export default SelectPeriod;
