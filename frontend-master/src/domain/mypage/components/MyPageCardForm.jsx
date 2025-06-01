import React from "react";

// 여기 또는 상위에서 카드를 눌렀을 때 상세페이지로 이동하게끔 구현해야함
export default function MyPageCardForm({ img, name, contents, price }) {
  // 카드 형태 렌더링
  return (
    <div id="cardContainer">
      <div id="cardHead">
        <img src={img} alt="상품 이미지" />
      </div>
      <div id="cardBody">
        <p>
          <sapn>{name}</sapn>
        </p>
        <p>
          <sapn>{contents}</sapn>
        </p>
        <p>
          <sapn>{price}</sapn>
        </p>
      </div>
    </div>
  );
}
