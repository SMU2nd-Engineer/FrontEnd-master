import React, { useState } from "react";

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
    <>
      <label htmlFor="emailLocal">
        <input type="text" {...register("emailLocal")} />
      </label>
      {errors.emailLocal && <p>{errors.emailLocal.message}</p>}
      <div>@</div>
      <label htmlFor="emailDomain">
        <input
          key={isManualDomain ? "editable" : "readonly"}
          type="text"
          {...register("emailDomain")}
          value={watch("emailDomain") || ""} // 초기화 undefined 오류를 해결하기 위하여 "" 로 설정
          onChange={(e) => setValue("emailDomain", e.target.value)}
          disabled={!isManualDomain}
        />
      </label>
      <select
        value={watch("emailDomain") || "type"}
        onChange={handleDomainChange}
      >
        <option value="type">직접 입력</option>
        <option value="naver.com">naver.com</option>
        <option value="google.com">google.com</option>
        <option value="daum.net">daum.net</option>
        <option value="outlook.com">outlook.com</option>
        <option value="yahoo.com">yahoo.com</option>
        <option value="icloud.com">icloud.com</option>
      </select>
    </>
  );
}
