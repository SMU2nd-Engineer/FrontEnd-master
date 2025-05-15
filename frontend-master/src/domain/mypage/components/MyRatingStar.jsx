import { useState } from "react";
import { Rating } from "react-simple-star-rating";

export default function MyRatingStar({ isReadOnly = false, MyRating }) {
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleReset = () => {
    // Set the initial value
    setRating(0);
  };

  return (
    <div className="starRating">
      {/* set initial value */}
      <Rating
        onClick={handleRating}
        initialValue={rating}
        allowFraction={true}
      />

      <button onClick={handleReset}>reset</button>
    </div>
  );
}
