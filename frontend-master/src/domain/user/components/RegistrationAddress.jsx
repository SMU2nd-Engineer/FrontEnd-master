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
    setValue("detailAddress", watch("detailAddress") || ""); // 혹시라도 빈 값 방지
    inputFocus.current.focus();
  };
  return (
    <>
      <label>
        <input type="text" {...register("address")} readOnly />
      </label>
      {errors.address && <p>{errors.address.message}</p>}
      <label>
        <input
          type="text"
          {...register("detailAddress")}
          //   ref={(el) => {
          //     register("detailAddress").ref(el); // react-hook-form에 먼저 연결
          //     inputFocus.current = el; // 그 다음에 포커스 용도로 저장
          //   }}
        />
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
