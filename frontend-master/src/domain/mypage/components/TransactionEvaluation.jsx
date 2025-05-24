import React from "react";

export default function TransactionEvaluation({
  category,
  register,
  readOnly,
}) {
  return (
    <>
      <input
        type="checkbox"
        {...register("evaluation[]")}
        value={`EVAL_${category.subIdx}`}
        id={`${category.subIdx}`}
        disabled={readOnly}
      />
      <label htmlFor={`${category.subIdx}`}> {category.name} </label>
    </>
  );
}
