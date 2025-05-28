import React, { useRef } from "react";
import Button from "@/components/Button";
import { useDaumPostcodePopup } from "react-daum-postcode";
import {
  RegistFormContainer,
  RegistFormLabel,
  RegistInputGroup,
  RegistStyledInput,
  RegistFormControl,
  RegistFormError,
  RegistStyledButtonWrapper,
} from "../style/UserRegistrationPageDesign";

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
    <RegistFormContainer>
      <RegistFormControl>
        <RegistFormLabel htmlFor="address">주소</RegistFormLabel>
        <RegistInputGroup>
          <RegistStyledInput type="text" {...register("address")} readOnly />
          <RegistStyledButtonWrapper>
            <Button
              className="registerButton input-right-button"
              text={"주소 찾기"}
              onClick={() => {
                open({ onComplete: handleComplete });
              }}
            />
          </RegistStyledButtonWrapper>
        </RegistInputGroup>
        {errors.address && (
          <RegistFormError>{errors.address.message}</RegistFormError>
        )}
      </RegistFormControl>

      <RegistFormControl>
        <RegistFormLabel htmlFor="detailAddress">상세 주소</RegistFormLabel>
        <RegistStyledInput
          type="text"
          {...register("detailAddress")}
          ref={(el) => {
            register("detailAddress").ref(el); // react-hook-form에 먼저 연결
            inputFocus.current = el; // 그 다음에 포커스 용도로 저장
          }}
        />
        {errors.detailAddress && (
          <RegistFormError>{errors.detailAddress.message}</RegistFormError>
        )}
      </RegistFormControl>
    </RegistFormContainer>
  );
}
