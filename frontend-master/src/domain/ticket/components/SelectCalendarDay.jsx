import React, { useState, useEffect } from "react";
import axiosInstance from "@/lib/axiosInstance";

const SelectCalendarDay = ({}) => {
  const [counts, setCounts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectDay || selectDay.length === 0) return;

    const selectDayParam = selectDay.join(",");
    setLoading(true);

    axiosInstance
      .get("/ticket/calendar", {
        params: {
          day: selectDayParam,
        }, // 파라미터 넘기기
      })
      .then((res) => {
        setCounts(res.data);
      })
      .catch((err) => {
        console.error("날짜별 데이터 요청 실패:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [selectDay]);

  return (
    <div>
      {loading && <p>로딩 중...</p>}
      {!loading && counts.length === 0 && <p>데이터 없음</p>}
      {!loading &&
        counts.map((item) => (
          <div key={item.date}>
            <strong>{item.date}</strong>: 공연 {item.performance_count}건,
            스포츠 {item.sports_count}건
          </div>
        ))}
    </div>
  );
};

export default SelectCalendarDay;
