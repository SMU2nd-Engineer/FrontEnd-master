import React, { useEffect, useState } from "react";
import MyPageLink from "../components/MyPageLink";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";
import MyName from "../components/MyName";
import MyRatingStar from "../components/MyRatingStar";
import { getMyTotalRating } from "../services/getMyTotalRating";

export default function MainPage() {
  const [myTotalReviewRating, setMyTotalReviewRating] = useState();
  const navigate = useNavigate();
  // 별점 가져오기
  //   useEffect(async () => {
  //     const result = await getMyTotalRating();
  //   });
  return (
    <div>
      <h1>MainPage</h1>
      <MyPageLink />
      <MyName />
      <p>내 상품 들어올 곳</p>
      <p>찜 목록 들어올 곳</p>
      <p>내 리뷰 점수 들어올 곳</p>
      <MyRatingStar isReadOnly={true} />
      <p>거래 후기 </p>
      {/* 아래는 나중에 지울 것. */}
      <Button
        text={"임시 홈 화면으로"}
        onClick={() => {
          navigate("/user/home");
        }}
      />
    </div>
  );
}
