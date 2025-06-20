import React, { useState } from "react";
import * as TicketPages from "../style/TicketPageDesign";
import useTicketStore from "../store/useTicketStore";

const SearchTitleAndCast = () => {
  const setSearchTerm = useTicketStore((state) => state.setSearchTerm);

  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    setSearchTerm(query); // 상위 컴포넌트에서 전달받은 검색 함수 실행
  };

  const handleKeyDown = (e) => {
    // Enter 누르면 검색 실행해주는 추가요소
    if (e.key === "Enter") handleSearch();
  };

  return (
    <TicketPages.SearchBox>
      {/* 텍스트를 입력 받는 UI 요소 */}
      <TicketPages.SearchInput
        type="text"
        placeholder="공연 제목 또는 출연진을 입력하세요"
        value={query}
        onChange={handleInputChange} // 입력이 끝났을 때 발생하는 이벤트
        onKeyDown={handleKeyDown} // 키를 눌렀을 때 발생, 물리적인 키에만 반응(엔터치면 넘어가게)
      />
      {/* 검색하기 버튼 */}
      <TicketPages.SearchButton
        onClick={handleSearch} // 클릭하면 발생하는 이벤트
      >
        검색
      </TicketPages.SearchButton>
    </TicketPages.SearchBox>
  );
};

export default SearchTitleAndCast;
