import React from "react";

export default function EvaluationList({ countEvaluation, evaluationName }) {
  return (
    <tr>
      <td>{evaluationName}</td>
      <td>{countEvaluation}</td>
    </tr>
  );
}
