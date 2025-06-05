import React, { useEffect, useState } from "react";
import Address from "../components/RegistrationAddress";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SCHEMA } from "../utils/userFormValidator";
import RegistrationPassword from "../components/RegistrationPassword";
import RegistrationName from "../components/RegistrationName";
import RegistrationNickName from "../components/RegistrationNickName";
import RegistrationId from "../components/RegistrationId";
import RegistrationEmail from "../components/RegistrationEmail";
import registrationService from "../services/registrationService";
import { useNavigate } from "react-router-dom";
import { setAccessToken } from "@/utils/TokenManager";
import { registrationUserFavorite } from "../services/registrationUserFavorite";
import {
  RegistrationContainer,
  RegistrationForm,
  FormGridArea,
  ButtonWrapper,
  RegistButton,
} from "../style/UserRegistrationPageDesign";
import usePreventBackNavigation from "@/hooks/usePreventBackNavigation";
import { useModalStore } from "@/store/useModalStore";
import useLoginUserInfoStore from "@/store/useLoginUserInfoStore";

/**
 * 회원 가입 페이지
 * @return : 회원 가입 폼
 */

//yup 스키마 사용하여 입력폼 유효성 정의의
const YUPSCHEMA = SCHEMA;

export default function UserRegistrationPage() {
  const {
    register, // 입력 폼 등록
    handleSubmit, // 폼 제출시 사용하여
    setValue, // 외부 API 값이나 수동 입력 처리
    watch, // 실시간 값 확인용
    formState: { errors }, // 각 필드의 유효성 오류 처리
    control,
  } = useForm({
    resolver: yupResolver(YUPSCHEMA),
    mode: "onBlur", // 사용자에게 안내 메시지 출력
    defaultValues: {
      socialProvider: "", // 초기값 명시 - 일반 로그인
    },
  });

  usePreventBackNavigation();

  const [isIdCheck, setIsIdCheck] = useState(false);
  const [isNickNameCheck, setIsNickNameCheck] = useState(false);
  const [isSocialLogin, setIsSocialLogin] = useState(false);
  const [socialProvider, setSocialProvider] = useState("");
  const navigate = useNavigate();
  // 비밀번호 유효성 오류가 계속 나와서 랜덤하게 적절한 값이 들어가도록 함수 생성
  const generatePassword = () => {
    const front = Math.random().toString(36).slice(2, 8); // 영문 + 숫자 일부(소수점 제외 36진수로 바꾼다음 6자리만 자르기)
    const back = "#E4r";
    return front + back;
  };

  const { setLoginUserInfo } = useLoginUserInfoStore();

  // 소셜 로그인을 구분하기 위하여 정보를 가져오는 useEffect
  useEffect(() => {
    const socialId = sessionStorage.getItem("socialId");
    const socialProvider = sessionStorage.getItem("provider");
    if (socialId) {
      // 안전한 난수 비밀번호 생성 (예: 32자리) - handleSubmit 실행을 위해 설정함.
      const finalPassword = generatePassword();
      setValue("id", socialId);
      setValue("password", finalPassword);
      setValue("passwordCheck", finalPassword);
      setValue("socialProvider", socialProvider || "");
      setIsIdCheck(true);
      setIsSocialLogin(true);
      setSocialProvider(socialProvider || "");
    }
  }, []);

  const openModal = useModalStore((state) => state.open);

  // 회원 가입 후 선호도 이동 화면 선택
  const choosePath = async () => {
    const confirmed = await openModal("confirm", {
      title: "선호도 선택창 이동 확인",
      message:
        "축하합니다! 회원 가입이 완료되었습니다. \n어떤 것을 좋아하시나요? 선호도를 설정하면 더 즐거운 서비스를 이용하실 수 있어요.",
    });
    // 선택에 따라 이동
    if (confirmed) {
      navigate("/user/selectFavorites", { replace: true });
    } else {
      await registrationUserFavorite([]);
      navigate("/user/home", { replace: true });
    }
  };

  const errorModal = async () => {
    await openModal("alert", {
      title: "오류 발생",
      message:
        "회원 가입 중 오류가 발생했습니다.\n잠시 후 다시 시도하거나 관리자에게 문의해주세요.",
    });
  };

  // handleSubmit 사용을 위하여 콜백 함수를 만들어서 api 함수 사용
  const submitForm = async (formData) => {
    if (
      !(
        isIdCheck &&
        isNickNameCheck &&
        (isSocialLogin || watch("password") === watch("passwordCheck"))
      )
    ) {
      alert("아이디/닉네임 중복 체크와 비밀번호 확인이 필요합니다.");
      return; // 멈추기위한 return
    }
    try {
      const result = await registrationService(formData);
      const accessToken = result.accessToken;
      if (accessToken) {
        setAccessToken(accessToken);
        setLoginUserInfo(result.userInfo);
        choosePath();
      }
    } catch (error) {
      console.log(error);
      errorModal();
    }
  };

  return (
    <RegistrationContainer>
      <RegistrationForm
        onSubmit={handleSubmit(submitForm, (errors) => {
          console.log("유효성 검증 실패", errors);
        })}
      >
        <FormGridArea area="id">
          <RegistrationId
            register={register}
            setValue={setValue}
            watch={watch}
            errors={errors}
            isSocialLogin={isSocialLogin}
            isIdCheck={isIdCheck}
            setIsIdCheck={setIsIdCheck}
            control={control}
          />
        </FormGridArea>

        <FormGridArea area="name">
          <RegistrationName
            register={register}
            setValue={setValue}
            watch={watch}
            errors={errors}
          />
        </FormGridArea>

        {!isSocialLogin && (
          <FormGridArea area="password">
            <RegistrationPassword
              register={register}
              setValue={setValue}
              watch={watch}
              errors={errors}
            />
          </FormGridArea>
        )}

        <FormGridArea area="nickname">
          <RegistrationNickName
            register={register}
            setValue={setValue}
            watch={watch}
            control={control}
            errors={errors}
            isNickNameCheck={isNickNameCheck}
            setIsNickNameCheck={setIsNickNameCheck}
          />
        </FormGridArea>

        <FormGridArea area="address">
          <Address
            register={register}
            setValue={setValue}
            watch={watch}
            errors={errors}
          />
        </FormGridArea>

        <FormGridArea area="email">
          <RegistrationEmail
            register={register}
            setValue={setValue}
            watch={watch}
            errors={errors}
            control={control}
          />
        </FormGridArea>
        {/* 값을 넘기기 위하여 보이지 않는 값을 설정하기 */}
        <input type="hidden" {...register("socialProvider")} />
        <ButtonWrapper>
          <RegistButton
            type="button"
            className="cancel"
            onClick={() => {
              sessionStorage.removeItem("socialId");
              sessionStorage.removeItem("provider");
              window.location.href = "/user/login";
            }}
          >
            취소
          </RegistButton>

          {/* 회원 가입의 경우 동일한 비번일 때랑 아이디, 닉네임 체크가 모두 같을 때만 가능 */}
          <RegistButton
            className="submit"
            type="submit"
            disabled={
              !(
                isIdCheck &&
                isNickNameCheck &&
                (isSocialLogin || watch("password") === watch("passwordCheck"))
              )
            }
          >
            가입
          </RegistButton>
        </ButtonWrapper>
      </RegistrationForm>
    </RegistrationContainer>
  );
}
