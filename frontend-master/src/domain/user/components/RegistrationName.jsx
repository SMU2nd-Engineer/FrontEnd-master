import React from "react";

import {
  RegistFlexColumn,
  RegistFormContainer,
  RegistFormLabel,
  RegistHelperText,
  RegistStyledInput,
} from "../style/UserRegistrationPageDesign";

export default function RegistrationName({
  register,
  setValue,
  watch,
  errors,
}) {
  return (
    <RegistFormContainer>
      <RegistFlexColumn>
        <RegistFormLabel htmlFor="name">이름</RegistFormLabel>
        <RegistStyledInput
          className="registerInput"
          id="name"
          type="text"
          {...register("name")}
          errors={!!errors.name}
        />

        {errors.name && (
          <RegistHelperText color="#e53e3e">
            {errors.name.message}
          </RegistHelperText>
        )}
      </RegistFlexColumn>
    </RegistFormContainer>
  );
}
