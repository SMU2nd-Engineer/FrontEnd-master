import { changePasswordService } from "../services/changePasswordService";
import { useLocation } from "react-router-dom";
import RegistrationPassword from "../components/RegistrationPassword";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CHANGE_PASSWORD_SCHEMA } from "../utils/userFormValidator";
import {
  ButtonWrapper,
  ChangeHedear,
  ChangePwdForm,
  MainContainer,
  PwdButton,
} from "../style/ChangePasswordPageDesign";
import { useModalStore } from "@/store/useModalStore";

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

  const openModal = useModalStore((state) => state.open);

  const changeAlert = async () => {
    await openModal("alert", {
      title: "비밀번호 변경 성공",
      message:
        "비밀번호가 정상적으로 변경되었습니다. 로그인 페이지로 이동합니다.",
    });
  };

  const errorAlert = async () => {
    await openModal("alert", {
      title: "오류",
      message: "문제가 발생했습니다. 관리자에게 문의하세요.",
    });
  };

  const submitForm = async (id, formData) => {
    try {
      const result = await changePasswordService(id, formData);
      if (result.status === 200 || result.status === 201) {
        changeAlert();
        window.location.href = "/user/login";
      }
    } catch (error) {
      console.log(error);
      errorAlert();
    }
  };

  return (
    <MainContainer>
      <ChangeHedear>변경할 비밀번호를 입력해주세요.</ChangeHedear>
      <ChangePwdForm
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
        <ButtonWrapper>
          <PwdButton
            type="button"
            onClick={() => {
              window.location.href = "/user/login";
            }}
          >
            돌아가기
          </PwdButton>
          <PwdButton type="submit"> 비밀 번호 변경</PwdButton>
        </ButtonWrapper>
      </ChangePwdForm>
    </MainContainer>
  );
}
