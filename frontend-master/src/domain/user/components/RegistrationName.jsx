import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Flex,
} from "@chakra-ui/react";

export default function RegistrationName({
  register,
  setValue,
  watch,
  errors,
}) {
  return (
    <FormControl isInvalid={!!errors.name} isRequired>
      <Flex gap={1} direction={"column"}>
        <FormLabel htmlFor="name">이름</FormLabel>
        <Input
          className="registerInput"
          id="name"
          type="text"
          {...register("name")}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </Flex>
    </FormControl>
  );
}
