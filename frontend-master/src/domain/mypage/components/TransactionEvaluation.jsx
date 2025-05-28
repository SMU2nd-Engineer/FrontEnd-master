import React from "react";
import * as TranReview from "../style/TransactionReviewDesign";

export default function TransactionEvaluation({
  category,
  register,
  readOnly,
}) {
  return (
    <div className="reviewCheckbox">
      <TranReview.TRecaluation>
        <input
          type="checkbox"
          {...register("evaluation[]")}
          value={`EVAL_${category.subIdx}`}
          id={`${category.subIdx}`}
          disabled={readOnly}
        />
        <label htmlFor={`${category.subIdx}`}> {category.name} </label>
      </TranReview.TRecaluation>
    </div>
  );
}
