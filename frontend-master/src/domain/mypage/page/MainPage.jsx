import React, { useEffect, useState } from "react";
import MyPageLink from "../components/MyPageLink";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";
import MyName from "../components/MyName";
import MyRatingStar from "../components/MyRatingStar";
import { getMyTotalRating } from "../services/getMyTotalRating";

/**
 * 메인 화면
 * @returns 마이페이지 메인 화면 반환
 */
export default function MainPage() {
  const [myTotalReviewRating, setMyTotalReviewRating] = useState(0); // 초깃값 0으로 세팅
  const navigate = useNavigate();
  //   별점 가져오기
  useEffect(() => {
    const ratingCalculation = async () => {
      const result = await getMyTotalRating();
      // 개수가 0이면 오류 방지를 위하여 조건문 처리
      if (result.totalRatingCount) {
        //평균 계산
        const averageRating =
          result.myPageTotalRating ?? 0 / result.totalRatingCount; // undefined 방지
        // 0.5 단위로 반올림
        const roundRating = Math.round(averageRating * 2) / 2;
        setMyTotalReviewRating(roundRating);
      } else setMyTotalReviewRating(0);
    };
    ratingCalculation();
  }, []);
  return (
    <div>
      <h1>MainPage</h1>
      <MyPageLink />
      <MyName />
      <p>내 상품 들어올 곳</p>
      <p>찜 목록 들어올 곳</p>
      <p>내 리뷰 점수 들어올 곳</p>
      <MyRatingStar isReadOnly={true} MyRating={myTotalReviewRating} />
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
