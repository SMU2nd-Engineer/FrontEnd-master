import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  VStack,
} from "@chakra-ui/react";

export default function RegistrationPassword({
  register,
  setValue,
  watch,
  errors,
}) {
  return (
    <VStack spacing={1} align="stretch" width="100%">
      <FormControl isInvalid={!!errors.password} isRequired>
        <FormLabel mb={1} htmlFor="password">
          패스워드
        </FormLabel>
        <Input
          className="registerInput"
          type="password"
          {...register("password")}
          id="password"
          placeholder="비밀번호를 입력하세요"
        />
        <FormErrorMessage>
          {errors.password && errors.password.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.passwordCheck} isRequired>
        <FormLabel htmlFor="passwordCheck">패스워드확인</FormLabel>
        <Input
          className="registerInput"
          type="password"
          {...register("passwordCheck")}
          id="passwordCheck"
          placeholder="비밀번호를 다시 입력하세요"
        />

        <FormErrorMessage>
          {errors.passwordCheck && errors.passwordCheck.message}
        </FormErrorMessage>
      </FormControl>
    </VStack>
  );
}
