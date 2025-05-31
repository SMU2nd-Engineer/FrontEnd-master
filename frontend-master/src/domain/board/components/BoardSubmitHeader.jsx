import React from "react";
import SelectBox from "@/components/SelectBox";
import * as Submit from "../styles/BoardSubmitDesign";

const BoardSubmitHeader = ({
  category_idx,
  getCategoryIdx,
  handleChange,
  title,
}) => {
  return (
    <Submit.CategoryAndTitle>
      <Submit.SelectCategory>
        {/* 카테고리 선택 : 잡담 / 팝니다 / 삽니다 / 기타 */}
        <SelectBox
          id="category_idx"
          name="category_idx"
          defaultValue={category_idx}
          category_idx={getCategoryIdx("BOARD")}
          handleChange={handleChange}
        />
      </Submit.SelectCategory>

      <Submit.SubmitTitle>
        {/* 제목 입력창 */}
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleChange}
          placeholder="제목을 입력해주세요."
        />
      </Submit.SubmitTitle>
    </Submit.CategoryAndTitle>
  );
};

export default BoardSubmitHeader;
