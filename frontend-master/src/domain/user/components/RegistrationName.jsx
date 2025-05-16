import React from "react";

export default function RegistrationName({
  register,
  setValue,
  watch,
  errors,
}) {
  return (
    <div>
      <label htmlFor="name">
        이름
        <input type="text" {...register("name")} />
      </label>
      {errors.name && <p>{errors.name.message}</p>}
    </div>
  );
}
