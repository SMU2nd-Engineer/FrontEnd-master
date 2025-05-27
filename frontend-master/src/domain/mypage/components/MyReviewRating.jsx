import MyRatingStar from "./MyRatingStar";

import "../style/TransactionReview.css";
/**
 * 마이페이지 홈 및 리뷰에서 총 별점을 표시하기 위한 컴포넌트
 * @param {int} myRating
 * @returns 별 표시 컴포넌트
 */
export default function MyPageRating({
  myRating = 0,
  isReadOnly = true,
  setRating,
}) {
  return (
    <div className="starScore">
      <div>
        <h3> 내 점수 </h3>
      </div>
      <div>
        <MyRatingStar
          isReadOnly={isReadOnly}
          myReviewRating={myRating}
          setMyReviewRating={setRating}
        />
      </div>
    </div>
  );
}
