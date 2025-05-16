import React, { useEffect, useState } from "react";
import MyRatingStar from "./MyRatingStar";
import { getMyTotalRating } from "../services/getMyTotalRating";

/**
 * 마이페이지 홈 및 리뷰에서 총 별점을 표시하기 위한 컴포넌트
 * @returns
 */
export default function MyPageRating() {
  const [myTotalReviewRating, setMyTotalReviewRating] = useState(0); // 초깃값 0으로 세팅

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
    <>
      <MyRatingStar isReadOnly={true} MyRating={myTotalReviewRating} />{" "}
    </>
  );
}
