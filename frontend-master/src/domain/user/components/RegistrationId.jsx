import React from "react";
import { duplicateCheckService } from "../services/duplicateCheckService";
import Button from "@/components/Button";

export default function RegistrationId({
  register,
  setValue,
  watch,
  errors,
  isSocialLogin,
  isIdCheck,
  setIsIdCheck,
}) {
  return (
    <div>
      <label htmlFor="id">
        아이디
        <input type="text" {...register("id")} readOnly={isSocialLogin} />
      </label>
      {errors.id && <p>{errors.id.message}</p>}
      {!isSocialLogin && (
        <>
          {watch("id") && !isIdCheck && <p>중복 체크 해주세요.</p>}
          {watch("id") && isIdCheck && <p>사용 가능합니다.</p>}
          <Button
            text={"중복 체크"}
            onClick={async () => {
              try {
                const result = await duplicateCheckService(watch("id"), "id");
                if (result) {
                  setIsIdCheck(true);
                }
              } catch (e) {
                console.log(e.message);
                alert("문제가 발생했습니다. 다시 시도해주세요.");
              }
            }}
          />
        </>
      )}
    </div>
  );
}
