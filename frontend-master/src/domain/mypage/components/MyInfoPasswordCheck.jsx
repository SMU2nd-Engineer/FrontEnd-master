import React, { useState } from "react";
import { myPasswordCheck } from "../services/myPasswordCheck";
import {
  MyInfoPasswordCheckButton,
  MyInfoPasswordCheckContainer,
  MyInfoPasswordCheckHeader,
  MyInfoPasswordCheckInput,
  MyInfoPasswordCheckInputLebelContainer,
  MyInfoPasswordCheckLabel,
} from "../style/MyPageInfoDesign";

export default function MyInfoPasswordCheck({ setIsMyInfoPasswordCheck }) {
  const [password, setPassword] = useState("");
  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const checkPassword = async () => {
    const result = await myPasswordCheck(password);
    if (result) {
      setIsMyInfoPasswordCheck(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      checkPassword();
    }
  };
  return (
    <MyInfoPasswordCheckContainer>
      <MyInfoPasswordCheckHeader>
        비밀번호를 입력해 주세요.
      </MyInfoPasswordCheckHeader>
      <MyInfoPasswordCheckInputLebelContainer>
        <MyInfoPasswordCheckLabel htmlFor="password">
          패스워드{" "}
        </MyInfoPasswordCheckLabel>
        <MyInfoPasswordCheckInput
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <MyInfoPasswordCheckButton onClick={checkPassword}>
          확인
        </MyInfoPasswordCheckButton>
      </MyInfoPasswordCheckInputLebelContainer>
    </MyInfoPasswordCheckContainer>
  );
}
