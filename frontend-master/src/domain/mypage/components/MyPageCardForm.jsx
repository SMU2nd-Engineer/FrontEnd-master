import React from "react";

export default function MyPageCardForm({ img, name, contents, price }) {
  // 카드 형태 렌더링
  return (
    <div id="cardContainer">
      <div id="cardHead">
        {/* 이미지 들어갈 자리 */}
        <img src={img} alt="상품 이미지" />
      </div>
      <div id="cardBody">
        {/* 내용이 들어갈 자리 */}
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
