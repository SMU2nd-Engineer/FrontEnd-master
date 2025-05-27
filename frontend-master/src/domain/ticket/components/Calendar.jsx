import React, { useState, useEffect } from "react";
import { getTicketCalendar } from "../services/ticketService";
import * as Calendars from "../style/CalendarDesign";

function Calendar({ selectedIds, setStartDate, setEndDate }) {
  const [date, setDate] = useState(new Date()); // 현재 기준 달
  const [list, setList] = useState([]); // API에서 가져온 날짜별 공연/스포츠 데이터
  const [infos, setInfos] = useState([]); // 달력에 출력할 날짜 정보 배열
  const [selectedDate, setSelectedDate] = useState(null); // 사용자가 클릭한 날짜

  const year = date.getFullYear();
  const month = date.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // 이번달 날짜 개수
  const startDay = new Date(year, month, 1).getDay(); // 매월 1일의 요일 출력
  const daysInPrevMonth = new Date(year, month, 0).getDate(); // 이전달 날짜 개수

  // 날짜 포맷 함수
  const formatDate = (year, month, day) =>
    `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(
      2,
      "0"
    )}`;

  // API로부터 데이터 받아오기
  useEffect(() => {
    const formattedMonth = `${year}-${String(month + 1).padStart(2, "0")}`;

    getTicketCalendar(formattedMonth, selectedIds.join(","))
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => console.log(err));
  }, [date, selectedIds]);

  // list 변경될 때마다 infos 재계산
  useEffect(() => {
    const newInfos = [];

    for (let i = 0; i < 35; i++) {
      // 한달 날짜 표시할 숫자
      const day =
        i < startDay
          ? daysInPrevMonth - startDay + i + 1
          : i - startDay + 1 > daysInMonth
          ? i - startDay + 1 - daysInMonth
          : i - startDay + 1;

      let type = "current";
      let targetYear = year;
      let targetMonth = month;

      // 이전달/현재달/다음달 구분(prev/current/next)
      if (i < startDay) {
        type = "prev";
        targetYear = month === 0 ? year - 1 : year;
        targetMonth = (month + 11) % 12;
      } else if (i - startDay + 1 > daysInMonth) {
        type = "next";
        targetYear = month === 11 ? year + 1 : year;
        targetMonth = (month + 1) % 12;
      } else {
        type = "current";
        targetYear = year;
        targetMonth = month;
      }

      const dateStr = formatDate(targetYear, targetMonth, day); // 문자열
      const matched = list.find((item) => item.date.startsWith(dateStr));

      newInfos.push({
        day,
        dateStr,
        type,
        performance: matched?.performance_count || 0,
        sports: matched?.sports_count || 0,
      });
    }

    setInfos(newInfos);
  }, [list, date]);

  // 이전달/다음달 보기 기능
  const prevMonth = () => setDate(new Date(year, month - 1, 1));
  const nextMonth = () => setDate(new Date(year, month + 1, 1));

  return (
    <Calendars.CalendarMain>
      <Calendars.CalendarHeader>
        <Calendars.MonthMoveButton onClick={prevMonth}>
          ‹
        </Calendars.MonthMoveButton>
        <Calendars.CalendarTitle>
          <p>
            {year}년 {month + 1}월
          </p>
        </Calendars.CalendarTitle>
        <Calendars.MonthMoveButton onClick={nextMonth}>
          ›
        </Calendars.MonthMoveButton>
      </Calendars.CalendarHeader>

      <Calendars.Weekdays>
        <div>일</div>
        <div>월</div>
        <div>화</div>
        <div>수</div>
        <div>목</div>
        <div>금</div>
        <div>토</div>
      </Calendars.Weekdays>

      <Calendars.DaysGrid>
        {infos.map((info, idx) => (
          <Calendars.DayBox
            key={idx}
            type={info.type} // "current", "prev", "next"
            selected={selectedDate === info.dateStr}
            onClick={() => {
              const isSame = selectedDate === info.dateStr;
              const newSelected = isSame ? null : info.dateStr;
              setSelectedDate(newSelected);

              if (info.type === "current") {
                if (newSelected === null) {
                  setStartDate(null);
                  setEndDate(null);
                } else {
                  const dateObj = new Date(newSelected);
                  setStartDate(dateObj);
                  setEndDate(dateObj);
                }
              }
            }}
          >
            {info.day}

            <div className="dataQuantity">
              {/* 이번달 데이터만 출력 */}
              {info.type === "current" && info.performance > 0 && (
                <Calendars.PerformanceBadge>
                  <p>공연: {info.performance}건</p>
                </Calendars.PerformanceBadge>
              )}
              {/* 이번달 데이터만 출력 */}
              {info.type === "current" && info.sports > 0 && (
                <Calendars.SportsBadge>
                  <p>스포츠: {info.sports}건</p>
                </Calendars.SportsBadge>
              )}
            </div>
          </Calendars.DayBox>
        ))}
      </Calendars.DaysGrid>
    </Calendars.CalendarMain>
  );
}

export default Calendar;
