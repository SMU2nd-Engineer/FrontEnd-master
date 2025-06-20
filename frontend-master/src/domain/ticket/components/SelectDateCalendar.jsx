import React from "react";
// DatePicker 설정
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // 기본디자인 설정
import { ko } from "date-fns/locale"; // 한국어 설정
import * as TicketPages from "../style/TicketPageDesign";
import useTicketStore from "../store/useTicketStore";

const SelectDateCalendar = ({ onStartChange, onEndChange }) => {
  const { startDate, endDate } = useTicketStore();
  return (
    <TicketPages.SeDate>
      <TicketPages.StartDate>
        <label>시작일 :</label>
        <TicketPages.DateInput>
          {/* DatePicker는 달력 UI를 나타냄 */}
          <DatePicker
            locale={ko} // 한국어 설정
            dateFormat="yyyy-MM-dd" // 포맷
            showOtherMonths={true} // 첫날과 끝날의 앞뒤 월의 날짜를 표시해주는 옵션
            changeYear={true} // 박스에서 년 선택가능
            changeMonth={true} // 박스에서 월 선택가능
            dayNameMin={["일", "월", "화", "수", "목", "금", "토"]} // 요일부분 표시
            selected={startDate} // 선택된 날짜를 startDate 변수에서 가져옴
            onChange={onStartChange} // 선택된 값을 업데이트
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="날짜 선택"
          />
        </TicketPages.DateInput>
      </TicketPages.StartDate>

      <TicketPages.EndDate>
        <label>종료일 :</label>
        <TicketPages.DateInput>
          <DatePicker
            locale={ko}
            dateFormat="yyyy-MM-dd"
            showOtherMonths={true}
            changeYear={true}
            changeMonth={true}
            dayNameMin={["일", "월", "화", "수", "목", "금", "토"]}
            selected={endDate}
            onChange={onEndChange}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            placeholderText="날짜 선택"
          />
        </TicketPages.DateInput>
      </TicketPages.EndDate>
    </TicketPages.SeDate>
  );
};

export default SelectDateCalendar;
