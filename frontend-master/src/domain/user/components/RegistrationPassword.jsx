import React from "react";

export default function RegistrationPassword({
  register,
  setValue,
  watch,
  errors,
}) {
  return (
    <div>
      <label htmlFor="password">
        패스워드
        <input type="password" {...register("password")} />
      </label>
      {errors.password && <p>{errors.password.message}</p>}
      <label htmlFor="passwordCheck">
        패스워드확인
        <input type="password" {...register("passwordCheck")} />
      </label>
      {errors.passwordCheck && <p>{errors.passwordCheck.message}</p>}
    </div>
  );
}
