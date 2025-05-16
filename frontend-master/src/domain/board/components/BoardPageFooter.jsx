import { useState } from "react";

const BoardPageFooter = () => {
  const [divisions, setDivision] = useState(""); // 기본 카테고리
  const [searchKeywords, setSearchKeyword] = useState(""); // 검색어 입력

  const handleSearch = () => {
    console.log("카테고리: ", divisions);
    console.log("검색어: ", searchKeywords);

    // 게시글 API 호출 게시글 필터링 로직

  };

  // 카테고리 선택하기
  return (
    <div className="board_page_footer">
      <label htmlFor="divisions">카테고리 선택</label>
      <select 
        type="text"
        id="divisions"
        value={divisions}
        onChange={(e) => setDivision(e.target.value)}
      >
        {/* 카테고리 선택 옵션 */}
        {/* <option value="카테고리 선택">카테고리 선택</option> */}
        <option value="팝니다">팝니다</option>
        <option value="삽니다">삽니다</option>
      </select>

      {/* 검색어 입력창 */}
      <input 
        type="text"
        placeholder="검색어 입력창"
        value={searchKeywords}
        onChange={(e) => setSearchKeyword(e.target.value)}       
      />
      {/* 카테고리 선택하고 키워드로 검색어를 입력했을때 실행되는 버튼 */}
      <button onClick={handleSearch}>게시글 검색</button>
    </div>

  );
};

export default BoardPageFooter;