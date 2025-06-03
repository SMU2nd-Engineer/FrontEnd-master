import React, { useEffect } from "react";
import { duplicateCheckService } from "../services/duplicateCheckService";
import Button from "@/components/Button";

import {
  RegistFormContainer,
  RegistFormLabel,
  RegistInputGroup,
  RegistStyledInput,
  RegistHelperText,
  RegistStyledButtonWrapper,
} from "../style/UserRegistrationPageDesign";
import { useModalStore } from "@/store/useModalStore";

export default function RegistrationId({
  register,
  setValue,
  watch,
  errors,
  isSocialLogin,
  isIdCheck,
  setIsIdCheck,
}) {
  const id = watch("id");
  useEffect(() => {
    if (isSocialLogin) {
      setIsIdCheck(true);
      return;
    }
    if (id) {
      setIsIdCheck(false);
    }
  }, [id, setIsIdCheck, isSocialLogin]);

  const openModal = useModalStore((state) => state.open);

  const duplicateAlert = async () => {
    await openModal("alert", {
      title: "아이디 중복",
      message: "중복입니다. 다른 아이디를 사용해주세요.",
    });
  };

  const errorAlert = async () => {
    await openModal("alert", {
      title: "오류",
      message: "문제가 발생했습니다. 관리자에게 문의하세요.",
    });
  };

  const getHelperMessage = () => {
    if (errors.id) return errors.id.message;
    if (!isIdCheck && id) return "중복 체크 해주세요.";
    if (isIdCheck && id) return "사용 가능합니다.";
    return null;
  };

  const getHelperColor = () => {
    if (errors.id || (!isIdCheck && id)) return "#e53e3e";
    if (isIdCheck && id) return "#38a169";
    return "gray.500";
  };

  return (
    <RegistFormContainer>
      <RegistFormLabel htmlFor="id">아이디</RegistFormLabel>
      <RegistInputGroup>
        <RegistStyledInput
          className="registerInput"
          type="text"
          {...register("id")}
          readOnly={isSocialLogin}
          error={!!errors.id}
        />

        {!isSocialLogin && (
          <RegistStyledButtonWrapper>
            <Button
              text={"중복 체크"}
              onClick={async () => {
                try {
                  const result = await duplicateCheckService(watch("id"), "id");
                  if (result) {
                    setIsIdCheck(true);
                  } else {
                    duplicateAlert();
                    setIsIdCheck(false);
                  }
                } catch (e) {
                  console.log(e.message);
                  errorAlert();
                }
              }}
            />
          </RegistStyledButtonWrapper>
        )}
      </RegistInputGroup>
      {getHelperMessage() && (
        <RegistHelperText color={getHelperColor()}>
          {getHelperMessage()}
        </RegistHelperText>
      )}
    </RegistFormContainer>
  );
}
