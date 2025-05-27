import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  FormErrorMessage,
  Text,
  HStack,
  VStack,
} from "@chakra-ui/react";

export default function RegistrationEmail({
  register,
  setValue,
  watch,
  errors,
}) {
  const [isManualDomain, setIsManualDomain] = useState(true);

  const handleDomainChange = (e) => {
    const value = e.target.value;
    // 직접 입력시 도메인 부분을 빈 문자열로 초기화화
    if (value === "type") {
      setIsManualDomain(true);
      setValue("emailDomain", "");
    } else {
      setIsManualDomain(false);
      setValue("emailDomain", value);
    }
  };

  return (
    <VStack spacing={4} align="stretch" width="100%">
      {/* 이메일 입력 */}
      <FormControl isInvalid={!!errors.emailLocal} isRequired>
        <FormLabel htmlFor="emailLocal" mb={1}>
          이메일
        </FormLabel>
        <HStack spacing={2} align="center" width="100%">
          <Input
            type="text"
            {...register("emailLocal")}
            placeholder="이메일 아이디"
            h="2.5rem"
            variant="outline"
            flex="1"
          />
          <Text fontSize="md" lineHeight="2.5rem" minW="1rem">
            @
          </Text>
          <Input
            key={isManualDomain ? "editable" : "readonly"}
            type="text"
            {...register("emailDomain")}
            value={watch("emailDomain") || ""} // 초기화 undefined 오류를 해결하기 위하여 "" 로 설정
            onChange={(e) => setValue("emailDomain", e.target.value)}
            disabled={!isManualDomain}
            h="2.5rem"
            variant="outline"
            flex="1"
          />

          {/* 도메인 선택 */}

          <Select
            value={watch("emailDomain") || "type"}
            onChange={handleDomainChange}
            h="2.5rem"
            variant="outline"
            flex="1"
          >
            <option value="type">직접 입력</option>
            <option value="naver.com">naver.com</option>
            <option value="google.com">google.com</option>
            <option value="daum.net">daum.net</option>
            <option value="outlook.com">outlook.com</option>
            <option value="yahoo.com">yahoo.com</option>
            <option value="icloud.com">icloud.com</option>
          </Select>
        </HStack>
        <FormErrorMessage>{errors.emailLocal?.message}</FormErrorMessage>
      </FormControl>
    </VStack>
  );
}
