import React, { useEffect } from "react";
import { duplicateCheckService } from "../services/duplicateCheckService";
import Button from "@/components/Button";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import {
  RegistFormControl,
  RegistFormLabel,
  RegistInputGroup,
  RegistHelperMessage,
  RegistStyledButtonWrapper,
  RegistStyledInput,
} from "../style/UserRegistrationPageCss";

export default function RegistrationNickName({
  register,
  setValue,
  watch,
  errors,
  isNickNameCheck,
  setIsNickNameCheck,
  existingNickname,
}) {
  const nickName = watch("nickName");
  // 닉네임 변경 시 중복 체크 상태 초기화
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
            className="registerButton input-right-button"
            text={"중복 체크"}
            onClick={async () => {
              if (existingNickname === watch("nickName")) {
                setIsNickNameCheck(true);
                return;
              }
              try {
                const result = await duplicateCheckService(
                  watch("nickName"),
                  "nickName"
                );
                if (result) {
                  setIsNickNameCheck(true);
                } else {
                  alert("중복입니다. 다른 닉네임을 사용해주세요.");
                  setIsNickNameCheck(false);
                }
              } catch (e) {
                console.log(e.message);
                alert("문제가 발생했습니다. 다시 시도해주세요.");
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
