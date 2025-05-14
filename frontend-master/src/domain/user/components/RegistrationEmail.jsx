import React, { useState } from "react";

export default function RegistrationEmail({ state, dispatch }) {
  const [isManualDomain, setIsManualDomain] = useState(true);

  const handleEmailChange = (e) => {
    dispatch({
      type: "CHANGE_FIELD",
      payload: { [e.target.name]: e.target.value },
    });
  };

  const handleDomainChange = (e) => {
    const value = e.target.value;
    // 직접 입력시 도메인 부분을 빈 문자열로 초기화화
    if (value === "type") {
      setIsManualDomain(true);
      dispatch({
        type: "CHANGE_FIELD",
        payload: { emailDomain: "" },
      });
    } else {
      setIsManualDomain(false);
      dispatch({
        // 선택한 값으로 도메인 주소 변경
        type: "CHANGE_FIELD",
        payload: { emailDomain: value },
      });
    }
  };

  return (
    <div>
      <label htmlFor="emailLocal">
        <input
          type="text"
          name="emailLocal"
          value={state.emailLocal}
          onChange={handleEmailChange}
        />
      </label>
      <div>@</div>
      <div>
        <label htmlFor="emailDomain">
          <input
            key={isManualDomain ? "editable" : "readonly"}
            type="text"
            name="emailDomain"
            value={state.emailDomain}
            onChange={handleEmailChange}
            disabled={!isManualDomain}
          />
        </label>
        <select
          name="selectEmail"
          id="selectEmail"
          value={state.emailDomain === "" ? "type" : state.emailDomain}
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
      </div>
    </div>
  );
}
