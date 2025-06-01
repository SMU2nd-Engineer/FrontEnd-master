import React, { useState, useEffect } from "react";
import { getCategory } from "@/services/Category";
import { getCategoryIdx } from "@/utils/CategoryHandler";

import * as TicketPages from "../style/TicketPageDesign";
import { useCallback } from "react";

const SelectCategory = ({ onChange }) => {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    getCategory(getCategoryIdx("ticket"))
      .then((res) => setCategories(res.data))
      .catch((error) => console.error("장르 리스트 불러오기 실패:", error));
  }, []);

  // 체크박스 클릭 했을 때 호출되는 함수
  const toggleCategory = (category) => {
    const updated = selected.includes(category)
      ? selected.filter((item) => item !== category)
      : [...selected, category];
    setSelected(updated); // 상태 업데이트
    onChange?.(updated.map(Number)); // 선택 상태가 바뀌면 부모 컴포넌트로 전달
  };

  return (
    <TicketPages.CategoryCheckboxMain>
      <TicketPages.CheckboxGrid>
        {categories.map((category) => (
          <TicketPages.CategoryCheckbox key={category.sub_idx}>
            <TicketPages.CheckboxInput
              type="checkbox"
              checked={selected.includes(category.sub_idx)}
              onChange={() => toggleCategory(category.sub_idx)}
            />
            <span>{category.categoryName}</span>
          </TicketPages.CategoryCheckbox>
        ))}
      </TicketPages.CheckboxGrid>
    </TicketPages.CategoryCheckboxMain>
  );
};

export default SelectCategory;
