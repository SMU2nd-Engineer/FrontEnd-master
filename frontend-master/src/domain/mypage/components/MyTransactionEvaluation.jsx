import React from "react";
import EvaluationList from "./EvaluationList";

export default function MyTransactionEvaluation({ evaluationLists = [] }) {
  console.log(evaluationLists);
  return (
    <>
      <h3>거래 평가</h3>
      <br />
      {evaluationLists.length === 0 ? (
        <p> 아직 받은 평가가 없어요.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th> 평가 내용 </th>
              <th> 점 수 </th>
            </tr>
          </thead>
          <tbody>
            {evaluationLists.map((evaluationList) => (
              <EvaluationList
                key={evaluationList.categorySubIdx}
                countEvaluation={evaluationList.countEvaluation}
                evaluationName={evaluationList.evaluationName}
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
