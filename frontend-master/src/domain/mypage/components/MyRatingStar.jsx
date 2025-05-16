import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";

/**
 * 별점을 위한 컴포넌트
 * @param {Object} isReadOnly : 읽기 전용을 위한 값 넣기
 * @param {Object} MyRating : 상위에서 전달 받은 총 평점 계산 결과
 * @returns
 */
export default function MyRatingStar({ isReadOnly = false, MyRating = 0 }) {
  const [rating, setRating] = useState(MyRating);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleReset = () => {
    // Set the initial value
    setRating(0);
  };

  useEffect(() => {
    setRating(MyRating);
  }, [MyRating]);

  return (
    <div className="starRating">
      <Rating
        onClick={handleRating}
        initialValue={rating}
        allowFraction={true}
        readonly={isReadOnly}
      />
      {!isReadOnly && <button onClick={handleReset}>reset</button>}
    </div>
  );
}
