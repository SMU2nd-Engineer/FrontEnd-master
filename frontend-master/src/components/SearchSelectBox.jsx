import React, { useState } from 'react';

// 구분자 제목+내용
const SearchSelectBox = ({ handleChange = f => f }) => {
  const [selectValue, setSelectValue] = useState("");
  return (
    <select
            id={"searchSelect"}
            name={"searchSelect"}
            value={selectValue}
            onChange={(e)=> {
              handleChange(e)
              setSelectValue(e.target.value)
            }}
          >
          <option value="0">제목+내용</option>
          <option value="1">작성자</option>
    </select>
  );
};

export default SearchSelectBox;