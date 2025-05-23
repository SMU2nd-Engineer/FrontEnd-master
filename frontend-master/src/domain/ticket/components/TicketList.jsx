import React, { useEffect, useState } from "react";
import axiosInstance from "@/lib/axiosInstance";

const TicketList = ({
  selectedIds,
  searchTerm: searchTitle,
  startDate,
  endDate,
}) => {
  const [ticketInfos, setTicketInfos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const categoriesParam = selectedIds.join(",");

    axiosInstance
      // API 호출
      .get("/ticket/search", {
        params: {
          categories: categoriesParam,
          query: searchTitle,
          startDate: startDate ? startDate.toISOString().split("T")[0] : null, // date 형식을 'yyyy-mm-dd' 형식으로 가져오게 하기 위함(시간 빼고)
          endDate: endDate ? endDate.toISOString().split("T")[0] : null,
        }, // categories, query 파라미터 넘김
      })
      .then((res) => {
        console.log("검색 결과:", res.data);
        setTicketInfos(res.data); // 저장
        setLoading(false); // 로딩 종료
      })
      .catch((err) => {
        console.error("검색 실패:", err);
        setLoading(false);
      });
  }, [selectedIds, searchTitle, startDate, endDate]);

  // 검색어가 있으면 필터링, 없으면 전체 infos 보여주기
  const filteredInfos = ticketInfos.filter((info) =>
    (info.title || info.name || "") // ticketInfos 중에서 title 또는 name 없을 경우 대비해서 "" 사용
      .toLowerCase()
      .includes(searchTitle.toLowerCase())
  );

  if (loading) return <p>정보 로딩 중...</p>;
  if (filteredInfos.length === 0) return <p>검색 결과가 없습니다.</p>;

  return (
    <ul>
      {filteredInfos.map((info, i) => (
        // 결과가 있을 경우, filteredInfos를 순회하면서 <li>로 각 항목 표시 / title, name 둘다 없으면 JSON.stringify(info)로 객체 전체 문자열 출력(디버깅 목적)
        <li key={i}>{info.title || info.name || JSON.stringify(info)}</li>
      ))}
    </ul>
  );
};

export default TicketList;
