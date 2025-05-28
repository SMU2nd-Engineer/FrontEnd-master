import React, { useEffect, useState } from "react";
import MyPageLink from "../components/MyPageLink";
import MyName from "../components/MyName";
import MyPageRating from "../components/MyReviewRating";
import { getMyPageData } from "../services/getMyPageDate";
import MyTransactionReview from "../components/MyTransactionReview";
import MyTransactionEvaluation from "../components/MyTransactionEvaluation";

import * as Nav from "../style/MyPageNavDesign";
import "../style/MyReviewPageDesign.css";

export default function MyReviewPage() {
  // 별점 평균 및 나머지 정보를 저장할 state
  const [myReviewInfoList, setMyReviewInfoList] = useState({});

  // 별점 과 총합을 저장할 useEffect
  useEffect(() => {
    const saveMyRviewInfo = async () => {
      const results = await getMyPageData("MY_REVIEW_LIST");
      const averageRating = results.myAverageRating?.myPageTotalRating ?? null;
      //   const ceilRating = averageRating === null ? 0 : Math.ceil(averageRating);
      const ceilRating = averageRating === null ? 0 : Math.ceil(averageRating);
      //   setMyReviewInfoList(results);
      setMyReviewInfoList({
        myAverageRating: ceilRating,
        reviewLists: results.reviewLists ?? [],
        myEvaluationList: results.myEvaluationList ?? [],
        evaluationList: results.evaluationList ?? [],
      });
    };
    saveMyRviewInfo();
  }, []);

  return (
    <div>
      <Nav.StickyNavbar>
        <MyPageLink />
      </Nav.StickyNavbar>
      <div className="ReviewPageMain">
        <div className="ReviewUserName">
          <MyName />
        </div>
        <div className="ReviewPageLeft">
          <div className="ReviewMyStars">
            <MyPageRating myRating={myReviewInfoList.myAverageRating} />
          </div>
          <div className="DetailTextReview">
            <MyTransactionReview reviewLists={myReviewInfoList.reviewLists} />
          </div>
        </div>
        <div className="ReviewPageRight">
          <div className="DetailCheckReview">
            <MyTransactionEvaluation
              evaluationLists={myReviewInfoList.evaluationList}
              myEvaluationLists={myReviewInfoList.myEvaluationList}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
