import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import Address from "../components/RegistrationAddress";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import SCHEMA from "../utils/inputValidator";
import RegistrationPassword from "../components/RegistrationPassword";
import RegistrationName from "../components/RegistrationName";
import RegistrationNickName from "../components/RegistrationNickName";
import RegistrationId from "../components/RegistrationId";
import RegistrationEmail from "../components/RegistrationEmail";
import registrationService from "../services/registrationService";

/**
 * id : 아이디
 * name : 이름
 * password : 비밀번호
 * passwordCheck : 비밀 번호 확인
 * address : 주소 입력
 * detailAddress : 상세 주소
 * emailLocal : 이메일 앞 부분
 * emailDomain : 이메일 뒷 부분
 * isIdCheck : 아이디 중복 체크 여부
 * isNickNameCheck : 닉네임 중복 체크 여부
 * isSamePassword : 비밀 번호 & 비밀 번호 확인 모두 일치하는지 체크 여부
 * isSocialLogin : 소셜 로그인 여부
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
  } = useForm({
    resolver: yupResolver(YUPSCHEMA),
    mode: "onBlur", // 사용자에게 안내 메시지 출력
  });

  const [isIdCheck, setIsIdCheck] = useState(false);
  const [isNickNameCheck, setIsNickNameCheck] = useState(false);
  const [isSocialLogin, setIsSocialLogin] = useState(false);
  const [socialProvider, setSocialProvider] = useState("");

  // 소셜 로그인을 구분하기 위하여 정보를 가져오는 useEffect
  useEffect(() => {
    const socialId = sessionStorage.getItem("socialId");
    const socialProvider = sessionStorage.getItem("provider");
    if (socialId) {
      setValue("id", socialId);
      setIsIdCheck(true);
      setIsSocialLogin(true);
      setSocialProvider(socialProvider || "");
    }
  }, [setValue]);

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
      await registrationService(formData);
      alert("회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.");
      window.location.href = "/user/login";
    } catch (error) {
      console.log(error);
      alert("회원 가입 중에 오류가 발생했습니다. 관리자게에 문의해주세요.");
    }
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <RegistrationId
        register={register}
        setValue={setValue}
        watch={watch}
        errors={errors}
        isSocialLogin={isSocialLogin}
        isIdCheck={isIdCheck}
        setIsIdCheck={setIsIdCheck}
      />
      <RegistrationName
        register={register}
        setValue={setValue}
        watch={watch}
        errors={errors}
      />
      {!isSocialLogin && (
        <RegistrationPassword
          register={register}
          setValue={setValue}
          watch={watch}
          errors={errors}
        />
      )}
      <RegistrationNickName
        register={register}
        setValue={setValue}
        watch={watch}
        errors={errors}
        isNickNameCheck={isNickNameCheck}
        setIsNickNameCheck={setIsNickNameCheck}
      />
      <Address
        register={register}
        setValue={setValue}
        watch={watch}
        errors={errors}
      />
      <RegistrationEmail
        register={register}
        setValue={setValue}
        watch={watch}
        errors={errors}
      />
      <Button
        text={"취소"}
        onClick={() => {
          window.location.href = "/user/login";
        }}
      />
      {/* 회원 가입의 경우 동일한 비번일 때랑 아이디, 닉네임 체크가 모두 같을 때만 가능 */}
      <Button
        text={"가입"}
        type="submit"
        disabled={
          !(
            isIdCheck &&
            isNickNameCheck &&
            (isSocialLogin || watch("password") === watch("passwordCheck"))
          )
        }
      />
    </form>
  );
}
