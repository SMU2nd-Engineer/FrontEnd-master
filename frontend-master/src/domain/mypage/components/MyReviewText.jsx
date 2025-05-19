import React from "react";

export default function MyTextReview({ reviewText, reviewDate }) {
  return (
    <tr>
      <td>{reviewText}</td>
      <td>{reviewDate}</td>
    </tr>
  );
}
