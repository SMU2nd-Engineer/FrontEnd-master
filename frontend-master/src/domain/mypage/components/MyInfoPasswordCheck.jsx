import Button from "@/components/Button";
import React, { useState } from "react";
import { myPasswordCheck } from "../services/myPasswordCheck";

export default function MyInfoPasswordCheck({ setIsMyInfoPasswordCheck }) {
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
      <Button
        text={"확인"}
        onClick={async () => {
          const result = await myPasswordCheck(password);
          if (result) {
            setIsMyInfoPasswordCheck(true);
          }
        }}
      />
    </div>
  );
}
