import React, { useEffect, useState } from "react";
import { getTicketInfo, getSearchTicket } from "../services/ticketService";
import { getCategory } from "@/services/Category";
import { getCategoryIdx } from "@/utils/CategoryHandler";
import PopupPage from "./PopupPage";
import * as TicketPages from "../style/TicketPageDesign";

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
  const [genreName, setGenreName] = useState([]);
  const [openGenres, setOpenGenres] = useState({}); // 장르별 오픈 상태

  // 장르 리스트 불러오기
  useEffect(() => {
    getCategory(getCategoryIdx("ticket"))
      .then((res) => {
        setGenreName(res.data);
      })
      .catch((error) => console.error("장르 리스트 불러오기 실패:", error));
  }, []);

  // 팝업창(상세데이터)
  useEffect(() => {
    if (!idx) return; // idx가 null/undefined이면 실행하지 않음

    getTicketInfo(idx)
      .then((res) => {
        setSelectedInfo(res.data); // 팝업 열기
      })
      .catch((err) => console.log(err));
  }, [idx]);

  // 티켓 검색 + 필터
  useEffect(() => {
    // 로딩
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

  const groupByGenre = (tickets) => {
    return tickets.reduce((acc, ticket) => {
      const genre = ticket.sub_idx || "기타";
      if (!acc[genre]) acc[genre] = [];
      acc[genre].push(ticket);
      return acc;
    }, {});
  };

  // 검색어가 있으면 필터링, 없으면 전체 infos 보여주기
  const filteredInfos = ticketInfos.filter((info) =>
    (info.title || info.name || "") // ticketInfos 중에서 title 또는 name 없을 경우 대비해서 "" 사용
      .toLowerCase()
      .includes(searchTitle.toLowerCase())
  );

  // 토글 버튼
  const toggleGenre = (genre) => {
    setOpenGenres((prev) => ({ ...prev, [genre]: !prev[genre] }));
  };

  // 장르맵 생성 (숫자 → 한글)
  const genreMap = groupByGenre(filteredInfos);
  const genreLabelMap = genreName.reduce((acc, cur) => {
    acc[cur.sub_idx] = cur.categoryName;
    return acc;
  }, {});

  if (loading) return <p>정보 로딩 중...</p>;
  if (filteredInfos.length === 0) return <p>검색 결과가 없습니다.</p>;

  return (
    <>
      <TicketPages.AccordionContainer>
        {Object.entries(genreMap).map(([genreCode, tickets]) => {
          const genreLabel = genreLabelMap[genreCode] || "기타";

          return (
            <TicketPages.AccordionSection key={genreCode}>
              <TicketPages.AccordionHeader
                onClick={() => toggleGenre(genreCode)}
              >
                <TicketPages.AccordionMainButton>
                  <p>
                    {genreLabel} ({tickets.length}){" "}
                  </p>
                </TicketPages.AccordionMainButton>
                <div>{openGenres[genreCode] ? "▲" : "▼"}</div>
              </TicketPages.AccordionHeader>

              {openGenres[genreCode] && (
                <TicketPages.ListDot>
                  {tickets.map((info, i) => (
                    <li key={i}>
                      <TicketPages.DataList onClick={() => setIdx(info.idx)}>
                        <TicketPages.TicketItemTextTitle>
                          {info.title || info.name}
                        </TicketPages.TicketItemTextTitle>{" "}
                        <TicketPages.TicketItemTextCompany>
                          {" "}
                          - {info.company}
                        </TicketPages.TicketItemTextCompany>
                      </TicketPages.DataList>
                    </li>
                  ))}
                </TicketPages.ListDot>
              )}
            </TicketPages.AccordionSection>
          );
        })}
      </TicketPages.AccordionContainer>

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
