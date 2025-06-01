import Button from "@/components/Button";
import { changePasswordService } from "../services/changePasswordService";
import { useLocation } from "react-router-dom";
import RegistrationPassword from "../components/RegistrationPassword";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CHANGE_PASSWORD_SCHEMA } from "../utils/userFormValidator";

export default function ChangePasswordPage() {
  const YUPSCHEMA = CHANGE_PASSWORD_SCHEMA;

  // useNavigate에서 값을 가지고 오기 위해서 useLocation 훅을 사용.
  const location = useLocation();

  // useNavigate에서 state 객체에서 id 값을 가지고 옴
  const id = location.state?.id;

  const {
    register, // 입력 폼 등록
    handleSubmit, // 폼 제출시 사용하여
    setValue, // 외부 API 값이나 수동 입력 처리
    watch, // 실시간 값 확인용
    formState: { errors }, // 각 필드의 유효성 오류 처리
  } = useForm({
    resolver: yupResolver(YUPSCHEMA),
    mode: "onBlur", // 사용자에게 안내 메시지 출력
  });

  const submitForm = async (id, formData) => {
    try {
      await changePasswordService(id, formData);
    } catch (error) {
      console.log(error);
      alert("오류가 발생했습니다. 관리자게에 문의해주세요.");
    }
  };

  return (
    <div>
      <h2>변경할 비밀번호를 입력해주세요.</h2>
      <hr />
      <form
        onSubmit={handleSubmit(
          (formData) => submitForm(id, formData),
          (errors) => {
            console.log("유효성 검증 실패", errors);
          }
        )}
      >
        <RegistrationPassword
          register={register}
          setValue={setValue}
          watch={watch}
          errors={errors}
        />
        <Button
          text="취소"
          onClick={() => {
            window.location.href = "/user/login";
          }}
        />
        <Button type="submit" text={"비밀번호를 변경합니다."} />
      </form>
    </div>
  );
}
