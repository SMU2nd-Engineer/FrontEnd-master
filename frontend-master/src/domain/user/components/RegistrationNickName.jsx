import React, { useEffect } from "react";
import { duplicateCheckService } from "../services/duplicateCheckService";
import Button from "@/components/Button";
import {
  RegistFormControl,
  RegistFormLabel,
  RegistInputGroup,
  RegistHelperMessage,
  RegistStyledButtonWrapper,
  RegistStyledInput,
} from "../style/UserRegistrationPageDesign";
import { useModalStore } from "@/store/useModalStore";
import { useWatch } from "react-hook-form";

export default function RegistrationNickName({
  register,
  setValue,
  watch,
  control,
  errors,
  isNickNameCheck,
  setIsNickNameCheck,
  existingNickname,
}) {
  const nickName = useWatch({
    control,
    name: "nickName",
  });
  // 닉네임 변경 시 중복 체크 상태 초기화

  const openModal = useModalStore((state) => state.open);

  const duplicateAlert = async () => {
    await openModal("alert", {
      title: "닉네임 중복",
      message: "중복입니다. 다른 닉네임을 사용해주세요.",
    });
  };

  const errorAlert = async () => {
    await openModal("alert", {
      title: "오류",
      message: "문제가 발생했습니다. 관리자에게 문의하세요.",
    });
  };

  useEffect(() => {
    setIsNickNameCheck(false);
  }, [nickName, setIsNickNameCheck]);

  const getHelperMessage = () => {
    if (errors.nickName) return errors.nickName.message;
    if (!isNickNameCheck && nickName) return "중복 체크 해주세요.";
    if (isNickNameCheck && nickName) return "사용 가능합니다.";
    return null;
  };

  const getHelperColor = () => {
    if (errors.nickName || (!isNickNameCheck && nickName)) return "#e53e3e";
    if (isNickNameCheck && nickName) return "#38a169";
    return "gray.500";
  };

  return (
    <RegistFormControl>
      <RegistFormLabel htmlFor="nickName">닉네임 </RegistFormLabel>
      <RegistInputGroup>
        <RegistStyledInput
          className="registerInput"
          type="text"
          {...register("nickName")}
          error={!!errors.nickName}
        />
        <RegistStyledButtonWrapper>
          <Button
            text={"중복 체크"}
            onClick={async () => {
              if (existingNickname === nickName) {
                setIsNickNameCheck(true);
                return;
              }
              try {
                const result = await duplicateCheckService(
                  nickName,
                  "nickName"
                );
                if (result) {
                  setIsNickNameCheck(true);
                } else {
                  duplicateAlert();
                  setIsNickNameCheck(false);
                }
              } catch (e) {
                console.log(e.message);
                errorAlert();
              }
            }}
          />
        </RegistStyledButtonWrapper>
      </RegistInputGroup>
      {getHelperMessage() && (
        <RegistHelperMessage color={getHelperColor()}>
          {getHelperMessage()}
        </RegistHelperMessage>
      )}
    </RegistFormControl>
  );
}
