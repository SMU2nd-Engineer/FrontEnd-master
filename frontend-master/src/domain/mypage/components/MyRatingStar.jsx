import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";

/**
 * 별점을 위한 컴포넌트
 * @param {Object} isReadOnly : 읽기 전용을 위한 값 넣기
 * @param {Object} MyRating : 상위에서 전달 받은 총 평점 계산 결과
 * @returns
 */
export default function MyRatingStar({
  isReadOnly = false,
  myReviewRating = 0,
  setMyReviewRating,
}) {
  const [rating, setRating] = useState(myReviewRating);

  // Catch Rating value
  const handleRating = (rate) => {
    if (setMyReviewRating) {
      setMyReviewRating(rate);
    }
  };

  const handleReset = () => {
    setRating(0);
    if (setMyReviewRating) {
      setMyReviewRating(0); // 리셋할 경우 상위에 값 전달
    }
  };

  useEffect(() => {
    setRating(myReviewRating); // 외부 값이 변하면 유지하기 위해 설정
  }, [myReviewRating]);

  return (
    <div
      className="starRating"
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "4px",
        alignItems: "center",
      }}
    >
      <Rating
        onClick={handleRating}
        initialValue={rating}
        value={rating}
        allowFraction={true}
        readonly={isReadOnly}
      />
      {!isReadOnly && <button onClick={handleReset}>reset</button>}
    </div>
  );
}
