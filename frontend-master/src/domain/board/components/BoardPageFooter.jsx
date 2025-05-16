import SelectBox from "@/components/SelectBox";
import { getCategoryIdx } from "@/utils/CategoryHandler";
import { useState } from "react";

const BoardPageFooter = ({handleOnclick}) => {
  const [divisions, setDivision] = useState(""); // 기본 카테고리
  const [searchKeywords, setSearchKeyword] = useState(""); // 검색어 입력

  const handleSearch = () => {
    console.log("카테고리: ", divisions);
    console.log("검색어: ", searchKeywords);

    // 게시글 API 호출 게시글 필터링 로직

  };

  const onClick = () => {
    handleOnclick(divisions, searchKeywords)
  }

  // 카테고리 선택하기
  return (
    <div className="board_page_footer">
      <label htmlFor="divisions">카테고리 선택</label>
      <SelectBox 
        id="divisions"
        name="divisions" 
        category_idx={getCategoryIdx("BOARD")}
        handleChange={(e) => setDivision(e.target.value)}/>

      {/* 검색어 입력창 */}
      <input 
        type="text"
        placeholder="검색어 입력창"
        value={searchKeywords}
        onChange={(e) => setSearchKeyword(e.target.value)}       
      />
      {/* 카테고리 선택하고 키워드로 검색어를 입력한 후 누르면 실행되는 버튼 */}
      <button onClick={onClick}>게시글 검색</button>
    </div>

  );
};

export default BoardPageFooter;