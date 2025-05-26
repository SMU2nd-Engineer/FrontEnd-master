import Button from "@/components/Button";
import React from "react";

export default function BoardListcomp({
  navigate,
  idx,
  title,
  categoryName,
  sDate,
}) {
  const handleOnClick = () => {
    // 경로 받아서 적어야함.
    navigate(`/board/${idx}`);
  };
  return (
    <tr onClick={handleOnClick}>
      <td>{title}</td>
      <td>{categoryName}</td>
      <td>{sDate}</td>
    </tr>
  );
}
