import MyPageLink from "../components/MyPageLink";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";
import MyName from "../components/MyName";
import MyMainRating from "../components/MyReviewRating";
import MyMainPeak from "../components/MyMainPeak";
import { useEffect, useState } from "react";
import { getMyPageData } from "../services/getMyPageDate";
import MySellList from "../components/MySellList";
import MyTransactionReview from "../components/MyTransactionReview";
import * as Nav from "../style/MyPageNavDesign";
import {
  MyMainContainer,
  MyMainGridArea,
  RatingAndReviewContainer,
} from "../style/MyMainPageDesign";
import useLoginUserInfoStore from "@/store/useLoginUserInfoStore";

/**
 * 메인 화면
 * @returns 마이페이지 메인 화면 반환
 */
export default function MainPage() {
  const [mainPageInfo, setMainPageInfo] = useState({});

  const { userInfo } = useLoginUserInfoStore();

  // 마이페이지에 필요한 정보를 호출하는 useEffect
  useEffect(() => {
    const saveMainPageInfo = async () => {
      const result = await getMyPageData("MY_MAIN_INFO");
      // 별점 평균 처리하기
      const averageRating =
        result.myPageAverageRating?.myPageTotalRating ?? null;
      const ceilRating = averageRating === null ? 0 : Math.ceil(averageRating);
      setMainPageInfo({
        myPageGetUserInfo: result.myPageGetUserInfo ?? {},
        myPageAverageRating: ceilRating,
        myMainSellProductList: result.myMainSellProductList ?? [],
        myMainPeakList: result.myMainPeakList ?? [],
        myMainReview: result.myMainReview ?? [],
      });
    };
    saveMainPageInfo();
  }, []);
  return (
    <div className="main">
      <Nav.StickyNavbar>
        <MyPageLink />
      </Nav.StickyNavbar>

      <MyMainContainer>
        <MyMainGridArea area="header">
          <MyName name={userInfo.userNickName} />
        </MyMainGridArea>
        <MyMainGridArea area="sell">
          <MySellList
            isMain={true}
            products={mainPageInfo.myMainSellProductList}
          />
        </MyMainGridArea>
        <RatingAndReviewContainer>
          <MyMainRating myRating={mainPageInfo.myPageAverageRating} />
          <MyTransactionReview
            reviewLists={mainPageInfo.myMainReview}
            movePage={"myReview"}
            isMain={true}
          />
        </RatingAndReviewContainer>
        <MyMainGridArea area="peak">
          <MyMainPeak list={mainPageInfo.myMainPeakList} />
        </MyMainGridArea>
      </MyMainContainer>
    </div>
  );
}
