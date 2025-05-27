import React, { useEffect } from "react";
import { duplicateCheckService } from "../services/duplicateCheckService";
import Button from "@/components/Button";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Text,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

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
  // 닉네임 변경 시 중복 체크 상태 초기화
  useEffect(() => {
    if (!isSocialLogin) {
      setIsIdCheck(false);
    }
  }, [id, setIsIdCheck, isSocialLogin]);

  const getHelperMessage = () => {
    if (errors.id) return errors.id.message;
    if (!isIdCheck && id) return "중복 체크 해주세요.";
    if (isIdCheck && id) return "사용 가능합니다.";
    return null;
  };

  const getHelperColor = () => {
    if (errors.id || (!isIdCheck && id)) return "red.500";
    if (isIdCheck && id) return "green.500";
    return "gray.500";
  };

  return (
    <FormControl isInvalid={!!errors.id} isRequired width="100%">
      <FormLabel htmlFor="id">아이디</FormLabel>
      <InputGroup>
        <Input
          className="registerInput"
          type="text"
          {...register("id")}
          readOnly={isSocialLogin}
        />
        <InputRightElement width="5.5rem">
          {!isSocialLogin && (
            <Button
              className="registerButton input-right-button"
              style={{ text: "50px" }}
              text={"중복 체크"}
              onClick={async () => {
                try {
                  const result = await duplicateCheckService(watch("id"), "id");
                  if (result) {
                    setIsIdCheck(true);
                  } else {
                    alert("중복입니다. 다른 아이디를 사용해주세요.");
                    setIsIdCheck(false);
                  }
                } catch (e) {
                  console.log(e.message);
                  alert("문제가 발생했습니다. 다시 시도해주세요.");
                }
              }}
            />
          )}
        </InputRightElement>
      </InputGroup>
      {getHelperMessage() && (
        <Text fontSize="sm" color={getHelperColor()} mt={1} height={2}>
          {getHelperMessage()}
        </Text>
      )}
    </FormControl>
  );
}
