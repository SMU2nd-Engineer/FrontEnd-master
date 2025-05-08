import React from "react";
import Button from "./Button";
/**
 * IsCheck
 * 아이디, 닉네임 중복 체크를 위한 컴포넌트
 * id, nickname 인지 인자를 받아와 넘겨서 체크
 * @returns
 */

export default function IsCheck({ name }) {
  return (
    <div>
      <Button text={"중복 체크"} onClick={name === "id" ? {} : {}} />
    </div>
  );
}
