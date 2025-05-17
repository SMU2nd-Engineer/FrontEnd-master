import React, { useEffect, useState } from "react";
import MyPageLink from "../components/MyPageLink";
import MyName from "../components/MyName";
import MyPageRating from "../components/MyReviewRating";
import { getMyPageData } from "../services/getMyPageDate";
import MyTransactionReview from "../components/MyTransactionReview";

export default function MyReviewPage() {
  // 별점 평균 및 나머지 정보를 저장할 state
  const [MyReviewInfoList, setMyReviewInfoList] = useState([]);

  // 별점 과 총합을 저장할 useEffect
  useEffect(() => {
    const saveMyRviewInfo = async () => {
      const results = await getMyPageData("getMyReviewList");
      setMyReviewInfoList(results);
    };
    saveMyRviewInfo();
  }, []);

  return (
    <div>
      <p>리뷰 페이지</p>
      <MyPageLink />
      <MyName />
      <p>별점 나오는 컴포넌트</p>
      <MyPageRating myRating={MyReviewInfoList.myAverageRating} />
      <p>거래 후기 나오는 컴포넌트</p>
      <MyTransactionReview reviewLists={MyReviewInfoList.reviewLists} />
      <p>거래 평가 나오는 컴포넌트 - 제작 중...</p>
    </div>
  );
}
