import React from "react";

export default function TransactionTextReview({ register, readOnly }) {
  return (
    <>
      <p> 거래 후기를 남겨 주세요.</p>
      <br />
      <label htmlFor="reviewText">
        <textarea {...register("reviewText")} readOnly={readOnly} />
      </label>
    </>
  );
}
