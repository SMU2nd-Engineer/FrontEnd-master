import React from "react";

export default function TransactionEvaluation({
  category,
  register,
  readOnly,
}) {
  return (
    <div className="reviewCheckbox">
      <div className="reviewCheckbox-child">
        <input
          type="checkbox"
          {...register("evaluation[]")}
          value={`EVAL_${category.subIdx}`}
          id={`${category.subIdx}`}
          disabled={readOnly}
        />
        <label htmlFor={`${category.subIdx}`}> {category.name} </label>
      </div>
    </div>
  );
}
