import React, { useRef, useState } from "react";
import Button from "./Button";
import { useDaumPostcodePopup } from "react-daum-postcode";

export default function Address({ state, dispatch }) {
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

    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    dispatch({
      type: "CHANGE_FIELD",
      name: "address",
      value: fullAddress,
    });
    inputFocus.current.focus();
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };
  return (
    <div>
      <label>
        <input type="text" name="address" value={state.address} readOnly />
        <input
          ref={inputFocus}
          type="text"
          name="detailAddress"
          value={state.detailAddress}
          onChange={(e) =>
            dispatch({
              type: "CHANGE_FIELD",
              name: e.target.name,
              value: e.target.value,
            })
          }
        />
      </label>
      <Button text={"주소 찾기"} onClick={handleClick} />
    </div>
  );
}
