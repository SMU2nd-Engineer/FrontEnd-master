import React, { useState } from "react";
import { getTicketCalendar } from "../services/ticketService";
import "./Calendar.css";
import { useEffect } from "react";

function Calendar() {
  const [date, setDate] = useState(new Date()); // 현재기준 날짜 저장
  const [list, setList] = useState([]);
  // 날짜 계산
  const year = date.getFullYear();
  const month = date.getMonth();

  useEffect(() => {
    // 날짜 전송필요
    getTicketCalendar(date)
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .then((data) => setList(data))
      .catch((err) => console.log(err));
  }, [date]);

  // 이번달 정보
  const firstDay = new Date(year, month, 1); // 1일부터 시작
  const lastDay = new Date(year, month + 1, 0); // 다음달 0일 = 이번달 마지막날
  const daysInMonth = lastDay.getDate(); // 이번달 날짜
  // 이번달 시작요일
  const startDay = firstDay.getDay(); // 1일의 요일 출력, 0(일) ~ 6(토)

  // 이전달 마지막 날짜
  const prevLastDay = new Date(year, month, 0); // 이번달 0일 = 이전달 마지막 날
  const daysInPrevMonth = prevLastDay.getDate(); // 이전달 날짜

  const calendarDays = [];

  // 이전달 날짜 채우기
  for (let i = startDay - 1; i >= 0; i--) {
    calendarDays.push(
      <div key={"prev-" + i} className="prev-month-day day">
        {daysInPrevMonth - i}
      </div>
    );
  }

  // 이번달 날짜 채우기
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(
      <div key={"current-" + day} className="current-month-day day">
        <div>{day}</div>
        {/* {count && <div className="event-badge">{count}건</div>} */}
      </div>
    );
  }

  // 이번달 마지막 날 위치 (인덱스, 0부터 시작)
  const lastDayIndex = calendarDays.length - 1;

  // 그 주의 마지막 칸 (7의 배수 - 1)
  const lastWeekEndIndex = Math.ceil((lastDayIndex + 1) / 7) * 7 - 1;

  // 다음달 날짜 채우기
  const nextDaysCount = lastWeekEndIndex - lastDayIndex;
  for (let i = 1; i <= nextDaysCount; i++) {
    calendarDays.push(
      <div key={"next-" + i} className="next-month-day day">
        {i}
      </div>
    );
  }

  // 월 이동 버튼
  const prevMonth = () => setDate(new Date(year, month - 1, 1));
  const nextMonth = () => setDate(new Date(year, month + 1, 1));

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={prevMonth}>‹</button>
        <div>
          {year}년 {month + 1}월
        </div>
        <button onClick={nextMonth}>›</button>
      </div>
      <div className="weekdays">
        <div>일</div>
        <div>월</div>
        <div>화</div>
        <div>수</div>
        <div>목</div>
        <div>금</div>
        <div>토</div>
      </div>
      <div className="days-grid">{calendarDays}</div>
    </div>
  );
}

export default Calendar;
