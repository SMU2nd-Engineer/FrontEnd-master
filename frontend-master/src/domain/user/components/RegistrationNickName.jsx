import React from "react";
import { duplicateCheckService } from "../services/duplicateCheckService";
import Button from "@/components/Button";

export default function RegistrationNickName({
  register,
  setValue,
  watch,
  errors,
  isNickNameCheck,
  setIsNickNameCheck,
  existingNickname,
}) {
  return (
    <div>
      <label htmlFor="nickName">
        닉네임
        <input type="text" {...register("nickName")} />
      </label>
      {errors.nickName && <p>{errors.nickName.message}</p>}
      {watch("nickName") && !isNickNameCheck && <p>중복 체크 해주세요.</p>}
      {watch("nickName") && isNickNameCheck && <p>사용 가능 합니다.</p>}
      <Button
        text={"중복 체크"}
        onClick={async () => {
          if (existingNickname === watch("nickName")) {
            setIsNickNameCheck(true);
            return;
          }
          try {
            const result = await duplicateCheckService(
              watch("nickName"),
              "nickName"
            );
            if (result) {
              setIsNickNameCheck(true);
            } else {
              alert("중복입니다. 다른 닉네임을 사용해주세요.");
              setIsNickNameCheck(false);
            }
          } catch (e) {
            console.log(e.message);
            alert("문제가 발생했습니다. 다시 시도해주세요.");
          }
        }}
      />
    </div>
  );
}
