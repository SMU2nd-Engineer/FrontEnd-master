import React from "react";
import MyPageLink from "../components/MyPageLink";
import MyName from "../components/MyName";

export default function MyReviewPage() {
  return (
    <div>
      <p>리뷰 페이지</p>
      <MyPageLink />
      <MyName />
      <p>별점 나오는 컴포넌트</p>
      <p>거래 후기 나오는 컴포넌트</p>
      <p>거래 평가 나오는 컴포넌트</p>
    </div>
  );
}
