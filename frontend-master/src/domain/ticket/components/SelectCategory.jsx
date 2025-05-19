import React, { useState } from "react";
// react 컴포넌트를 만들기 위해 'React'를 불러옴
// useState는 *선택된 장르 목록을 기억* 하기 위해 사용하는 React Hook

// 장르 리스트(배열), 나중에 map으로 돌려서 체크 박스 만들 예정
const categories = [
  "콘서트",
  "뮤지컬",
  "연극",
  "전시",
  "클래식",
  "아동/가족",
  "레저",
  "스포츠",
];

const SelectCategory = ({ onChange }) => {
  const [selected, setSelected] = useState([]);
  // selected: 현재 사용자가 선택한 장르들의 배열
  // setSelected: 선택된 목록을 바꾸는 함수
  // useState([]): 처음에는 아무것도 선택되지 않은 상태(빈 배열)

  // 체크박스 클릭 했을 때 호출되는 함수
  const toggleCategory = (category) => {
    const updated = selected.includes(category)
      ? selected.filter((item) => item !== category)
      : [...selected, category];
    // 만약 category가 이미 선택되어 있다면 filer로 제거하고 아니면 새로 배열에 추가한다는 삼항 연산자
    // .includes() : 배열에 특정 요소 포함 여부를 확인해주는 함수

    setSelected(updated); // 상태 업데이트
    onChange?.(updated); // 선택 상태가 바뀌면 부모 컴포넌트로 전달
  };

  return (
    <div>
      <h3>원하는 장르를 선택하세요.</h3>
      <div>
        {categories.map((category) => (
          <label key={category}>
            <input
              type="checkbox"
              checked={selected.includes(category)}
              onChange={() => toggleCategory(category)}
            />
            <span>{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default SelectCategory;
