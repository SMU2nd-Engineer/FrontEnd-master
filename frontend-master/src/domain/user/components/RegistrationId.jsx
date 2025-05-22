import React, { useEffect } from "react";
import { duplicateCheckService } from "../services/DuplicateCheckService";
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
  const id = watch("id");
  // 닉네임 변경 시 중복 체크 상태 초기화
  useEffect(() => {
    if (!isSocialLogin) {
      setIsIdCheck(false);
    }
  }, [id, setIsIdCheck]);

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
                } else {
                  alert("중복입니다. 다른 아이디를를 사용해주세요.");
                  setIsIdCheck(false);
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
