import React from "react";

export default function TransactionTextReview({ register }) {
  return (
    <>
      <p> 거래 후기를 남겨 주세요.</p>
      <br />
      <label htmlFor="reviewText">
        <textarea {...register("reviewText")} />
      </label>
    </>
  );
}
