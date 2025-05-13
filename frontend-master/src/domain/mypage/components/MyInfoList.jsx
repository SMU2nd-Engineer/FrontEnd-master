import Button from "@/components/Button";
import React, { useState } from "react";

export default function MyInfoList() {
  const handleChange = (e) => {
    setPassword(e.target.value);
  };
  const [password, setPassword] = useState("");
  return (
    <div>
      <h1>비밀번호를 입력해 주세요.</h1>
      <label htmlFor="password">
        패스워드
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <Button text={"확인"} onClick={() => {}} />
    </div>
  );
}
