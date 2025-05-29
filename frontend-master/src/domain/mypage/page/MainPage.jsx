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

/**
 * 메인 화면
 * @returns 마이페이지 메인 화면 반환
 */
export default function MainPage() {
  const [mainPageInfo, setMainPageInfo] = useState({});
  const navigate = useNavigate();

  // 마이페이지에 필요한 정보를 호출하는 useEffect
  useEffect(() => {
    const saveMainPageInfo = async () => {
      const result = await getMyPageData("MY_MAIN_INFO");
      // setMainPageInfo(result);
      // 별점 평균 처리하기
      const averageRating =
        result.myPageAverageRating?.myPageTotalRating ?? null;
      //   const ceilRating = averageRating === null ? 0 : Math.ceil(averageRating);
      console.log("averageRating : ", averageRating);
      const ceilRating = averageRating === null ? 0 : Math.ceil(averageRating);
      console.log("ceilRating : ", ceilRating);
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
          <MyName name={mainPageInfo.myPageGetUserInfo?.name} />
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

        <div className="button">
          <Button
            text={"임시 홈 화면으로"}
            onClick={() => {
              navigate("/user/home");
            }}
          />
        </div>
      </MyMainContainer>
    </div>
  );
}
