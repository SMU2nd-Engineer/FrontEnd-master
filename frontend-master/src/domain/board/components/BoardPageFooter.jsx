import SelectBox from "@/components/SelectBox";
import { getCategoryIdx } from "@/utils/CategoryHandler";
import { Select } from "@chakra-ui/react";
import { useState } from "react";
import SearchSelectBox from "@/components/SearchSelectBox";
import * as Board from "../styles/BoardListPageDesign";

const BoardPageFooter = ({ handleOnclick }) => {
  const [searchTypes, setSearchTypes] = useState(0); // 구분자(제목+내용/작성자)
  const [Categories, setCategpries] = useState(""); // 기본 카테고리
  const [searchKeywords, setSearchKeywords] = useState(""); // 검색어 입력

  // 검색 실행 함수
  const onClick = () => {
    handleOnclick(searchTypes, Categories, searchKeywords);
  };

  // Enter 키처리 함수 - 검색 할때 엔터키 누르면 실행
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  // 화면에 출력되는 내용
  return (
    <Board.Board_listPageFooter>
      <Board.Board_SearchSelectBox>
        {/* 구분자: 제목+내용 / 작성자 */}
        <SearchSelectBox handleChange={(e) => setSearchTypes(e.target.value)} />
      </Board.Board_SearchSelectBox>

      <Board.Board_CategorySelectBox>
        {/* 카테고리 선택 : 잡담 / 팝니다 / 삽니다 / 기타 */}
        <SelectBox
          id="categpry"
          name="categpry"
          category_idx={getCategoryIdx("BOARD")}
          handleChange={(e) => setCategpries(e.target.value)}
        />
      </Board.Board_CategorySelectBox>

      <Board.Board_SearchInput>
        {/* 검색어 입력창 */}
        <input
          type="text"
          placeholder="검색어 입력창"
          value={searchKeywords}
          onChange={(e) => setSearchKeywords(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </Board.Board_SearchInput>

      <Board.Board_SearchButton>
        {/* 카테고리 선택하고 키워드로 검색어를 입력한 후 누르면 실행되는 버튼 */}
        <button onClick={onClick}>검색</button>
      </Board.Board_SearchButton>
    </Board.Board_listPageFooter>
  );
};

export default BoardPageFooter;
