import React from "react";
import {
  RegistFlexColumn,
  RegistFormControl,
  RegistFormError,
  RegistFormLabel,
  RegistStyledInput,
} from "../style/UserRegistrationPageDesign";

export default function RegistrationPassword({
  register,
  setValue,
  watch,
  errors,
}) {
  return (
    <RegistFlexColumn>
      <RegistFormControl>
        <RegistFormLabel htmlFor="password">패스워드</RegistFormLabel>
        <RegistStyledInput
          className="registerInput"
          type="password"
          {...register("password")}
          id="password"
          placeholder="비밀번호를 입력하세요"
          error={!!errors.password}
        />
        {errors.password && (
          <RegistFormError>{errors.password.message}</RegistFormError>
        )}
      </RegistFormControl>

      <RegistFormControl>
        <RegistFormLabel htmlFor="passwordCheck">패스워드확인</RegistFormLabel>
        <RegistStyledInput
          className="registerInput"
          type="password"
          {...register("passwordCheck")}
          id="passwordCheck"
          placeholder="비밀번호를 다시 입력하세요"
          error={!!errors.passwordCheck}
        />

        {errors.passwordCheck && (
          <RegistFormError>{errors.passwordCheck.message}</RegistFormError>
        )}
      </RegistFormControl>
    </RegistFlexColumn>
  );
}
