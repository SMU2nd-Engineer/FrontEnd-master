import SelectBox from "@/components/SelectBox";
import { getCategoryIdx } from "@/utils/CategoryHandler";
import { Select } from "@chakra-ui/react";
import { useState } from "react";
import SearchSelectBox from "@/components/SearchSelectBox";

const BoardPageFooter = ({handleOnclick}) => {
  const [searchTypes, setSearchTypes] = useState(""); // 구분자(제목+내용/작성자)  
  const [Categories, setCategpries] = useState(""); // 기본 카테고리
  const [searchKeywords, setSearchKeywords] = useState(""); // 검색어 입력

  const onClick = () => {
    handleOnclick(searchTypes, Categories, searchKeywords)
  }

  // 화면에 출력되는 내용
  return (
    <div className="board_page_footer">
      {/* 구분자: 제목+내용 / 작성자 */} 
      <SearchSelectBox 
        handleChange={(e) => setSearchTypes(e.target.value)}/>

      {/* 카테고리 선택 : 잡담 / 팝니다 / 삽니다 / 기타 */}  
      <SelectBox 
        id="categpry"
        name="categpry" 
        category_idx={getCategoryIdx("BOARD")}
        handleChange={(e) => setCategpries(e.target.value)}/>

      {/* 검색어 입력창 */}
      <input 
        type="text"
        placeholder="검색어 입력창"
        value={searchKeywords}
        onChange={(e) => setSearchKeywords(e.target.value)}       
      />
      {/* 카테고리 선택하고 키워드로 검색어를 입력한 후 누르면 실행되는 버튼 */}
      <button onClick={onClick}>게시글 검색</button>
    </div>

  );
};

export default BoardPageFooter;