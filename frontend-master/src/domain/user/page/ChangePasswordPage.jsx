import Button from "@/components/Button";
import React, { useEffect, useState } from "react";
import { changePasswordService } from "../services/changePasswordService";
import { useLocation } from "react-router-dom";

export default function ChangePasswordPage() {
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [isSamePassword, setIsSamePassword] = useState(false);

  // useNavigate에서 값을 가지고 오기 위해서 useLocation 훅을 사용.
  const location = useLocation();

  // useNavigate에서 state 객체에서 id 값을 가지고 옴
  const id = location.state?.id;
  console.log(id);

  useEffect(() => {
    setIsSamePassword(
      password === passwordCheck &&
        password.length > 0 &&
        passwordCheck.length > 0
    );
  }, [password, passwordCheck]);
  return (
    <div>
      <h2>변경할 비밀번호를 입력해주세요.</h2>
      <hr />
      <label htmlFor="password">
        패스워드 :
        <input
          type="password"
          name="password"
          value={password ?? ""}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </label>
      <label htmlFor="passwordCheck">
        패스워드확인 :
        <input
          type="password"
          name="passwordCheck"
          value={passwordCheck ?? ""}
          onChange={(e) => setPasswordCheck(e.target.value)}
        />
      </label>
      {passwordCheck.length > 0 && !isSamePassword && (
        <p>입력한 비밀 번호가 다릅니다.</p>
      )}
      {passwordCheck.length > 0 && isSamePassword && (
        <p>비밀번호가 일치 합니다.</p>
      )}
      <Button
        text={"비밀번호를 변경합니다."}
        onClick={() => changePasswordService(id, password)}
      />
    </div>
  );
}
