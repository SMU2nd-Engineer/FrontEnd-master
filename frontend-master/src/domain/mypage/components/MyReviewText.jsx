import React from "react";
import { useNavigate } from "react-router-dom";

export default function MyTextReview({ reviewText, reviewDate, reviewIdx }) {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`TransactionReviewEdit/${reviewIdx}`);
  };
  return (
    <tr onClick={handleOnClick}>
      <td>{reviewText}</td>
      <td>{reviewDate}</td>
    </tr>
  );
}
