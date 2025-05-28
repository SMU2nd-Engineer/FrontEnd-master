import React from "react";
import { useNavigate } from "react-router-dom";
import { TransactionTableTd } from "../style/MyMainPageDesign";

export default function MyTextReview({ reviewText, reviewDate, reviewIdx }) {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/mypage/TransactionReviewEdit/${reviewIdx}`);
  };
  return (
    <tr onClick={handleOnClick}>
      <TransactionTableTd>{reviewText}</TransactionTableTd>
      <TransactionTableTd>{reviewDate}</TransactionTableTd>
    </tr>
  );
}
