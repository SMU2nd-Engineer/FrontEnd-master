import React from "react";

export default function TransactionEvaluation({ category, register }) {
  return (
    <>
      <input
        type="checkbox"
        {...register("evaluation[]")}
        value={`EVAL_${category.subIdx}`}
        id={`${category.subIdx}`}
      />
      <label htmlFor={`${category.subIdx}`}> {category.name} </label>
    </>
  );
}
