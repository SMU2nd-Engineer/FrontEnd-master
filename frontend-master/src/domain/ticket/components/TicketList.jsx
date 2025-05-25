import React, { useEffect, useState } from "react";
import { getTicketInfo, getSearchTicket } from "../services/ticketService";
import PopupPage from "./popupPage";
import "../style/ticketPage.css";

const TicketList = ({
  selectedIds,
  searchTerm: searchTitle,
  startDate,
  endDate,
}) => {
  const [ticketInfos, setTicketInfos] = useState([]);
  const [selectedInfo, setSelectedInfo] = useState(null); // 팝업용 상태
  const [loading, setLoading] = useState(false);
  const [idx, setIdx] = useState();

  useEffect(() => {
    if (!idx) return; // idx가 null/undefined이면 실행하지 않음

    console.log("idx 변경됨:", idx);

    getTicketInfo(idx)
      .then((res) => {
        console.log("상세 데이터:", res.data);
        setSelectedInfo(res.data); // 팝업 열기
      })
      .catch((err) => console.log(err));
  }, [idx]);

  useEffect(() => {
    setLoading(true);

    const categoriesParam = selectedIds.join(",");
    getSearchTicket({
      categories: categoriesParam,
      query: searchTitle,
      startDate: startDate ? startDate.toISOString().split("T")[0] : null, // date 형식을 'yyyy-mm-dd' 형식으로 가져오게 하기 위함(시간 빼고)
      endDate: endDate ? endDate.toISOString().split("T")[0] : null,
    })
      .then((res) => {
        setTicketInfos(res.data);
        setLoading(false);
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
  console.log("ticketInfos:", ticketInfos);
  if (filteredInfos.length === 0) return <p>검색 결과가 없습니다.</p>;

  return (
    <>
      <ul className="listDot">
        {filteredInfos.map((info, i) => (
          <li key={i}>
            <div
              onClick={() => {
                console.log("선택된 idx:", info.idx);
                setIdx(info.idx);
              }}
              style={{
                cursor: "pointer",
                textDecoration: "underline",
                color: "blue",
              }}
            >
              {info.title || info.name || JSON.stringify(info)} - {info.company}
            </div>
          </li>
        ))}
      </ul>

      {/* 팝업 컴포넌트 표시 */}
      {selectedInfo && (
        <PopupPage
          info={selectedInfo}
          onClose={() => {
            setSelectedInfo(null);
            setIdx(null);
          }}
        />
      )}
    </>
  );
};

export default TicketList;
