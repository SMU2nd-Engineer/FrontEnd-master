import Button from "@/components/Button";
import React, { useState } from "react";
import { userWithdrawal } from "../services/userWithdrwal";
import { logout } from "@/services/LogoutService";
import {
  ButtonContainer,
  CancelButtonWrapper,
  CheckBoxContainer,
  MessageBubble,
  WithdrawalContainer,
  WithdrawButtonWrapper,
} from "../style/UserWithdrawalPageDesign";
import { useNavigate } from "react-router-dom";
import { useModalStore } from "@/store/useModalStore";

export default function UserWithdrawalPage() {
  const [isWithdrawal, setIsWithdrawal] = useState(false);
  const navigate = useNavigate();
  const openModal = useModalStore((state) => state.open);

  const handleWithdrawal = async () => {
    const result = await userWithdrawal();
    await openModal("alert", {
      title: "회원탈퇴 완료",
      message:
        "회원 탈퇴가 정상적으로 완료되었습니다. \n그동안 이용해주셔서 감사합니다.",
    });
    logout(false);
    navigate("/user/login");
  };

  return (
    <WithdrawalContainer>
      <MessageBubble>
        정말 떠나시겠어요? <sapn> 그동안 함께해주셔서 감사했어요. </sapn>
      </MessageBubble>
      <CheckBoxContainer>
        <input
          type="checkbox"
          id="withdrawal"
          onClick={(e) => setIsWithdrawal(e.target.checked)}
        />
        <label htmlFor="withdrawal">
          탈퇴 후에는 서비스를 더 이상 이용하실 수 없습니다. 동의하시면
          체크해주세요.
        </label>
      </CheckBoxContainer>
      <ButtonContainer>
        <CancelButtonWrapper>
          <Button
            text={"취소"}
            onClick={() => {
              navigate("/mypage/main");
            }}
          />
        </CancelButtonWrapper>
        <WithdrawButtonWrapper>
          <Button
            text={"탈퇴"}
            disabled={!isWithdrawal}
            onClick={handleWithdrawal}
          />
        </WithdrawButtonWrapper>
      </ButtonContainer>
    </WithdrawalContainer>
  );
}
