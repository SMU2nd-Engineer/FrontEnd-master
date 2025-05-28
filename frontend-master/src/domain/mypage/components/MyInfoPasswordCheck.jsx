import Button from "@/components/Button";
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
  const handleChange = (e) => {
    setPassword(e.target.value);
  };
  const [password, setPassword] = useState("");
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
        />
        <MyInfoPasswordCheckButton
          onClick={async () => {
            const result = await myPasswordCheck(password);
            if (result) {
              setIsMyInfoPasswordCheck(true);
            }
          }}
        >
          확인
        </MyInfoPasswordCheckButton>
      </MyInfoPasswordCheckInputLebelContainer>
    </MyInfoPasswordCheckContainer>
  );
}
