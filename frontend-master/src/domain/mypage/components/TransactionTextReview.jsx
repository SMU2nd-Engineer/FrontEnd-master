import React from "react";

export default function TransactionTextReview({ register, readOnly, errors }) {
  return (
    <>
      <p> 거래 후기를 남겨 주세요.</p>
      <label htmlFor="reviewText">
        <textarea {...register("reviewText")} readOnly={readOnly} />
      </label>
      {errors?.reviewText && (
        <p style={{ color: "red" }}>{errors.reviewText.message}</p>
      )}
    </>
  );
}
