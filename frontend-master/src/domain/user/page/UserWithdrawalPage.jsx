import Button from "@/components/Button";
import React, { useState } from "react";
import { userWithdrawal } from "../services/userWithdrwal";
import { logout } from "@/services/LogoutService";

export default function UserWithdrawalPage({ navigate }) {
  const [isWithdrawal, setIsWithdrawal] = useState(false);

  const handleWithdrawal = async () => {
    const result = await userWithdrawal();
    alert(result);
    logout(false);
    navigate("/user/login");
  };

  return (
    <div>
      <h1>정말 회원을 탈퇴하실 건가요?</h1>
      <br />
      <input
        type="checkbox"
        id="withdrawal"
        onClick={(e) => setIsWithdrawal(e.target.checked)}
      />
      <label htmlFor="withdrawal">
        회원 탈퇴할 경우 더 이상 서비스를 이용할 수 없습니다. 동의하십니까?
      </label>
      <Button
        text={"취소"}
        onClick={() => {
          navigate("/mypage/main");
        }}
      />
      <Button
        text={"탈퇴"}
        disabled={!isWithdrawal}
        onClick={handleWithdrawal}
      />
    </div>
  );
}
