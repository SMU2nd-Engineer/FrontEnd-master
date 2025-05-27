import React, { useRef } from "react";
import Button from "@/components/Button";
import { useDaumPostcodePopup } from "react-daum-postcode";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  VStack,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

export default function Address({ register, setValue, watch, errors }) {
  const inputFocus = useRef();
  const open = useDaumPostcodePopup();

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }
    setValue("address", fullAddress);
    setValue("detailAddress", watch("detailAddress") || ""); // 혹시라도 빈 값 방지
    inputFocus.current.focus();
  };
  return (
    <VStack spacing={4} align="stretch">
      <FormControl isInvalid={!!errors.address} isRequired>
        <FormLabel htmlFor="address" mb={1}>
          주소
        </FormLabel>
        <InputGroup>
          <Input type="text" {...register("address")} readOnly />
          <InputRightElement width="5.5rem">
            <Button
              className="registerButton input-right-button"
              text={"주소 찾기"}
              onClick={() => {
                open({ onComplete: handleComplete });
              }}
            />
          </InputRightElement>
        </InputGroup>
        <FormErrorMessage>{errors.address?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.detailAddress}>
        <FormLabel htmlFor="detailAddress" mb={1}>
          상세 주소
        </FormLabel>
        <Input
          type="text"
          {...register("detailAddress")}
          ref={(el) => {
            register("detailAddress").ref(el); // react-hook-form에 먼저 연결
            inputFocus.current = el; // 그 다음에 포커스 용도로 저장
          }}
        />
        <FormErrorMessage>{errors.detailAddress?.message}</FormErrorMessage>
      </FormControl>
    </VStack>
  );
}
