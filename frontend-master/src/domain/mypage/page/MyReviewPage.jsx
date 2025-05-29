import React, { useEffect, useState } from "react";
import MyPageLink from "../components/MyPageLink";
import MyName from "../components/MyName";
import MyPageRating from "../components/MyReviewRating";
import { getMyPageData } from "../services/getMyPageDate";
import MyTransactionReview from "../components/MyTransactionReview";
import MyTransactionEvaluation from "../components/MyTransactionEvaluation";

import * as Nav from "../style/MyPageNavDesign";
import * as MyReview from "../style/MyReviewPageDesign";

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
        myPageGetUserInfo: results.myPageGetUserInfo ?? {},
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
      <MyReview.ReviewPageMain>
        <MyReview.ReviewUserName>
          <MyName name={myReviewInfoList.myPageGetUserInfo?.name} />
        </MyReview.ReviewUserName>

        <MyReview.ReviewPageLeft>
          <MyReview.ReviewMyStars>
            <MyPageRating myRating={myReviewInfoList.myAverageRating} />
          </MyReview.ReviewMyStars>
          <MyReview.DetailTextReview>
            <MyTransactionReview reviewLists={myReviewInfoList.reviewLists} />
          </MyReview.DetailTextReview>
        </MyReview.ReviewPageLeft>

        <MyReview.ReviewPageRight>
          <MyReview.DetailCheckReview>
            <MyTransactionEvaluation
              evaluationLists={myReviewInfoList.evaluationList}
              myEvaluationLists={myReviewInfoList.myEvaluationList}
            />
          </MyReview.DetailCheckReview>
        </MyReview.ReviewPageRight>
      </MyReview.ReviewPageMain>
    </div>
  );
}
