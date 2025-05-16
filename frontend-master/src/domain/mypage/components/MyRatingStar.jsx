import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";

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
