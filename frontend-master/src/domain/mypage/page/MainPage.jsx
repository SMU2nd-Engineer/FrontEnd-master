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
        myPageAverageRating: ceilRating,
        myMainSellProductList: result.myMainSellProductList ?? [],
        myMainPeakList: result.myMainPeakList ?? [],
        myMainReview: result.myMainReview ?? [],
      });
    };
    saveMainPageInfo();
  }, []);
  return (
    <div>
      <h1>MainPage</h1>
      <MyPageLink />
      <MyName />
      <p> 내 상품 </p>
      <MySellList isMain={true} products={mainPageInfo.myMainSellProductList} />
      {/* <p> 찜 목록 </p> */}
      <MyMainPeak list={mainPageInfo.myMainPeakList} />
      <p> 내 점수 </p>
      <MyMainRating myRating={mainPageInfo.myPageAverageRating} />
      <MyTransactionReview
        reviewLists={mainPageInfo.myMainReview}
        movePage={"myReview"}
        isMain={true}
      />
      <Button
        text={"임시 홈 화면으로"}
        onClick={() => {
          navigate("/user/home");
        }}
      />
    </div>
  );
}
