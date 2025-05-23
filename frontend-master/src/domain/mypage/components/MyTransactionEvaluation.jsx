import React from "react";
import EvaluationList from "./EvaluationList";

export default function MyTransactionEvaluation({
  evaluationLists = [],
  myEvaluationLists = {},
}) {
  console.log("evaluationLists : ", evaluationLists);
  console.log("myEvaluationLists : ", myEvaluationLists);
  console.log(
    "myEvaluationLists[EVAL_5001] : ",
    myEvaluationLists["EVAL_5001"]
  );
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
              <th> 개 수 </th>
            </tr>
          </thead>
          <tbody>
            {evaluationLists.map((evaluationList) => (
              <EvaluationList
                key={evaluationList.subIdx}
                countEvaluation={
                  myEvaluationLists[`EVAL_${evaluationList.subIdx}`]
                }
                evaluationName={evaluationList.name}
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
