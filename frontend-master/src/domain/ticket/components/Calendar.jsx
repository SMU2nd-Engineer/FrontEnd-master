import React, { useState } from "react";
import { getTicketCalendar } from "../services/ticketService";
import "./Calendar.css";
import { useEffect } from "react";

function Calendar() {
  const [date, setDate] = useState(new Date()); // 현재기준 날짜 저장
  const [list, setList] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [infos, setInfos] = useState(new Array(35).fill(0));

  // 날짜 계산
  const year = date.getFullYear();
  const month = date.getMonth();

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

  // 한달 날짜 배열에 저장하는 for문(전달,당월,익월 모두 포함됨)
  for (let i = 0; i < 35; i++) {
    infos[i] = {
      day:
        i < startDay
          ? daysInPrevMonth - startDay + i + 1
          : i - startDay + 1 > daysInMonth
          ? i - startDay + 1 - daysInMonth
          : i - startDay + 1,
      sports: "data",
    };
    console.log(infos[i].day); // i를 키로 두면 눌럿을때 day값 알수 이씀!
  }

  infos.map((info, i) => <div key={i} className={`day${info.day}`}></div>);

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

  const handleChange = (e) => {
    const { key, name, value } = e.target;
    setInfos([...infos, { key: value }]);
  };

  useEffect(() => {
    const calList = [];
    // 새로운 배열 infos // 5월이다 -> 1일부터 31일까지 있는 배열
    /*
    for (cal in calList){
      for (i, cal.sdate -> cal.edate) // 시작일부터 종료일까지
        //카테고리 종류에 따라
        infos[i].카테고리 += 1
    }
      */
  }, [list]);

  // 날짜 포맷 맞추기
  const formatDate = (year, month, day) => {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;
  };

  const getCountsForDay = (day) => {
    const targetDate = formatDate(year, month, day);
    const entry = list.find((item) => item.date.startsWith(targetDate));
    return {
      performance: entry?.performance_count || 0,
      sports: entry?.sports_count || 0,
    };
  };

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
    const { performance, sports } = getCountsForDay(day);
    const dateString = formatDate(year, month, day);
    // 특정 날짜 선택시 선택된 날짜만 보이고 나머지는 hidden
    // const isSelected = selectedDate === null || selectedDate === dateString;

    calendarDays.push(
      <div
        key={"current-" + day}
        className={`current-month-day day ${
          selectedDate === dateString ? "selected" : ""
        }`}
        onClick={() =>
          setSelectedDate((prev) => (prev === dateString ? null : dateString))
        }
      >
        <div>{day}</div>
        {/* 특정 날짜 선택시 나머지 날짜들의 공연수를 숨기고 싶다면 */}
        {/* {isSelected && performance > 0 && (
          <div className="event-badge performance">{performance} 공연</div>
        )}
        {isSelected && sports > 0 && (
          <div className="event-badge sports">{sports} 스포츠</div> */}
        {performance > 0 && (
          <div className="event-badge performance">공연: {performance}건</div>
        )}
        {sports > 0 && (
          <div className="event-badge sports">스포츠: {sports}건</div>
        )}
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
