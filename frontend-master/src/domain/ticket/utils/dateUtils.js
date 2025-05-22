import { setDate, toDate } from "date-fns";

// timestamp가 오늘인지 확인하는 함수
export function isToday(timestamp) {
  return (
    toDate(timestamp, { timeZone: "Asia/Seoul" }).toDateString() ===
    toDate(Date.now(), { timeZone: "Asia/Seoul" }).toDateString()
  );
}

// 보여줘야 하는 timestamp array를 반환하는 함수
export function getTimestampListForCalendar(selectedYear, selectedMonth) {
  // 4-2. 이번 달 1일의 Date 객체
  const dateObjOfStartDay = toDate(new Date(selectedYear, selectedMonth), {
    timeZone: "Asia/Seoul",
  });
  // 4-2. 이번 달 마지막 날의 Date 객체 (다음 달의 0일)
  const dateObjOfEndDay = setDate(
    setMonth(dateObjOfStartDay, dateObjOfStartDay.getMonth() + 1),
    0
  ); // setDate, setMonth는 date-fns의 util 함수이다.
  // 이번 달 마지막 날의 일자
  const endDay = dateObjOfEndDay.getDate();

  // 4. 이번 달 1일과 마지막 날의 요일
  const dayOfStartDay = dateObjOfStartDay.getDay();
  const dayOfEndDay = dateObjOfEndDay.getDay();
  // 필요한 다른 달 일자들의 개수
  const numOfNecessaryDaysFromPreviousMonth =
    dayOfStartDay === 0 ? 6 : dayOfStartDay - 1; // 저번 달
  const numOfNecessaryDaysFromNextMonth =
    dayOfEndDay === 0 ? 0 : 7 - dayOfEndDay; // 다음 달

  // 저번 달 timestamp array
  const timeStampsFromPreviousMonth = Array.from(
    { length: numOfNecessaryDaysFromPreviousMonth },
    (_, index) =>
      dateObjOfStartDay.valueOf() -
      24 * 60 * 60 * 1000 * numOfNecessaryDaysFromPreviousMonth +
      24 * 60 * 60 * 1000 * index
  );
  // 이번 달 timestamp array
  const timeStampsForCurrentMonth = Array.from(
    { length: endDay },
    (_, index) => dateObjOfStartDay.valueOf() + 24 * 60 * 60 * 1000 * index
  );
  // 다음 달 timestamp array
  const timeStampsFromNextMonth = Array.from(
    { length: numOfNecessaryDaysFromNextMonth },
    (_, index) => dateObjOfEndDay.valueOf() + 24 * 60 * 60 * 1000 * (index + 1)
  );
  // timestamp 합치기
  const timestamps = timeStampsFromPreviousMonth.concat(
    timeStampsForCurrentMonth,
    timeStampsFromNextMonth
  );
  return timestamps;
}

// 이번 달인지 확인하는 함수
export function isCurrentMonth(timestamp, month) {
  return toDate(timestamp, { timeZone: "Asia/Seoul" }).getMonth() === month;
}
