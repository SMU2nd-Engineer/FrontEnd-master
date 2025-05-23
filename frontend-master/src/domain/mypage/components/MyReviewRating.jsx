import { Link } from "react-router-dom";
import MyRatingStar from "./MyRatingStar";

/**
 * 마이페이지 홈 및 리뷰에서 총 별점을 표시하기 위한 컴포넌트
 * @param {int} myRating
 * @returns 별 표시 컴포넌트
 */
export default function MyPageRating({ myRating = 0 }) {
  console.log("MyPageRating으로 넘어온 값 :", myRating);
  return (
    <>
      <MyRatingStar isReadOnly={true} myReviewRating={myRating} />
    </>
  );
}
