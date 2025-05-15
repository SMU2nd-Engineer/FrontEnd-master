import React, { useRef } from "react";
import Button from "../../../components/Button";
import { useDaumPostcodePopup } from "react-daum-postcode";

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
    inputFocus.current.focus();
  };
  return (
    <>
      <label>
        <input type="text" {...register("address")} readOnly />
      </label>
      {errors.address && <p>{errors.address.message}</p>}
      <label>
        <input type="text" {...register("detailAddress")} ref={inputFocus} />
      </label>
      {errors.detailAddress && <p>{errors.detailAddress.message}</p>}
      <Button
        text={"주소 찾기"}
        onClick={() => {
          open({ onComplete: handleComplete });
        }}
      />
    </>
  );
}
