import React, { useState } from "react";
// react 컴포넌트를 만들기 위해 'React'를 불러옴
// useState는 *선택된 장르 목록을 기억* 하기 위해 사용하는 React Hook

// 장르 리스트(배열), 나중에 map으로 돌려서 체크 박스 만들 예정
const categories = {
  3001: "콘서트",
  3002: "뮤지컬",
  3003: "연극",
  3004: "전시",
  3005: "클래식",
  3006: "아동/가족",
  3007: "레저",
  3008: "스포츠",
};

const SelectCategory = ({ onChange }) => {
  const [selected, setSelected] = useState([]);

  // 체크박스 클릭 했을 때 호출되는 함수
  const toggleCategory = (category) => {
    const updated = selected.includes(category)
      ? selected.filter((item) => item !== category)
      : [...selected, category];
    // 만약 category가 이미 선택되어 있다면 filer로 제거하고 아니면 새로 배열에 추가한다는 삼항 연산자
    // .includes() : 배열에 특정 요소 포함 여부를 확인해주는 함수

    setSelected(updated); // 상태 업데이트
    onChange?.(updated.map(Number)); // 선택 상태가 바뀌면 부모 컴포넌트로 전달
  };

  return (
    <div>
      <h3>원하는 장르를 선택하세요.</h3>
      <div>
        {Object.entries(categories).map(([sub_idx, categoryName]) => (
          <label key={sub_idx}>
            <input
              type="checkbox"
              checked={selected.includes(sub_idx)}
              onChange={() => toggleCategory(sub_idx)}
            />
            <span>{categoryName}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default SelectCategory;
