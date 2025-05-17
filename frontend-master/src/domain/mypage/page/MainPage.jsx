import MyPageLink from "../components/MyPageLink";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";
import MyName from "../components/MyName";
import MyMainRating from "../components/MyReviewRating";
import MyMainPeak from "../components/MyMainPeak";

/**
 * 메인 화면
 * @returns 마이페이지 메인 화면 반환
 */
export default function MainPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>MainPage</h1>
      <MyPageLink />
      <MyName />
      <p>내 상품 </p>
      <p>내 상품 들어올 곳</p>
      <MyMainPeak />
      {/* <p>내 리뷰 점수 들어올 곳</p> */}
      <MyMainRating movePage={"myReview"} />

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
