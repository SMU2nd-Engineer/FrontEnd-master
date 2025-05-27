import React, { useEffect } from "react";
import { duplicateCheckService } from "../services/duplicateCheckService";
import Button from "@/components/Button";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Text,
  Flex,
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
  }, [id, setIsIdCheck]);

  return (
    <FormControl isInvalid={!!errors.id}>
      <Flex align="spance-between" gap={4}>
        <FormLabel htmlFor="id">
          아이디
          <Input type="text" {...register("id")} readOnly={isSocialLogin} />
          <FormErrorMessage>
            {errors.id && <p>{errors.id.message}</p>}
          </FormErrorMessage>
        </FormLabel>
        {!isSocialLogin && (
          <>
            <Button
              text={"중복 체크"}
              onClick={async () => {
                try {
                  const result = await duplicateCheckService(watch("id"), "id");
                  if (result) {
                    setIsIdCheck(true);
                  } else {
                    alert("중복입니다. 다른 아이디를를 사용해주세요.");
                    setIsIdCheck(false);
                  }
                } catch (e) {
                  console.log(e.message);
                  alert("문제가 발생했습니다. 다시 시도해주세요.");
                }
              }}
            />
            {watch("id") && !isIdCheck && !errors.id && (
              <Text color="red.500">중복 체크 해주세요.</Text>
            )}
            {watch("id") && isIdCheck && !errors.id && (
              <Text color="green.500">사용 가능합니다.</Text>
            )}
          </>
        )}
      </Flex>
    </FormControl>
  );
}
