import Button from "@/components/Button";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateUserInfo } from "../services/updateUserInfo";
import SCHEMA from "@/domain/mypage/utils/editInfoValidator";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import RegistrationName from "@/domain/user/components/RegistrationName";
import RegistrationPassword from "@/domain/user/components/RegistrationPassword";
import RegistrationNickName from "@/domain/user/components/RegistrationNickName";
import RegistrationAddress from "@user/components/RegistrationAddress";
import RegistrationEmail from "@user/components/RegistrationEmail";
import { getMyPageData } from "../services/getMyPageDate";
import {
  MyInfoButtonWrapper,
  MyInfoContainer,
  MyInfoFormGridArea,
  MyPageInfoContainer,
  MyPageInfoForm,
  UserInfoHedear,
  WithdrawalButtonWrapper,
} from "../style/MyPageInfoDesign";
import useLoginUserInfoStore from "@/store/useLoginUserInfoStore";

export default function MyInfoList({ isSocialLogin }) {
  //yup 스키마 사용하여 입력폼 유효성 정의의
  const YUPSCHEMA = SCHEMA(isSocialLogin);
  // react-hook-form 사용 설정
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
  });

  // 네비게이트 설정
  const navigate = useNavigate();
  // 기존 닉네임 저장하여 닉네임 변화 확인하기
  const [existingNickname, setExistingNickname] = useState("");

  // 필요 state 설정
  const [isNickNameCheck, setIsNickNameCheck] = useState(false); // 닉네임 중복 체크

  const hasFetched = useRef(false); // 중복 호출 방지

  const { setLoginUserInfo } = useLoginUserInfoStore();

  // 회원 정보 가져오기
  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;
    const getUserInfoByToken = async () => {
      const userInfo = await getMyPageData("USER_INFO");
      // 가져온 정보에서 주소와 이메일 입력 폼에 맞게 분리 함수 호출
      const editUserInfo = userInfoSplit(userInfo);
      // setValue로 초기값 설정
      setValue("name", editUserInfo.name);
      setValue("nickName", editUserInfo.nickName);
      setValue("address", editUserInfo.address);
      setValue("detailAddress", editUserInfo.detailAddress);
      setValue("emailLocal", editUserInfo.emailLocal);
      setValue("emailDomain", editUserInfo.emailDomain);
      setExistingNickname(editUserInfo.nickName); // 기존 닉네임 저장
    };
    getUserInfoByToken();
  }, []);

  /**
   * 이메일, 주소 분리 함수
   * @param {Object} userInfo
   * @returns 분리된 주소가 포함된 userInfo
   */
  const userInfoSplit = (userInfo) => {
    // 괄호로 나눈다. ex: '도로명주소 (지번)' 나뉘고 나머지: 상세주소
    const fullAddress = userInfo.address ?? "";
    // 정규 표현식으로 나누기
    const addressMatch = fullAddress.match(/^(.*?)\)\s*(.*)$/);

    // 분리가 안되면 기존 주소를 사용하기 위하여 미리 선언
    let address = fullAddress;
    let detailAddress = "";

    if (addressMatch) {
      // Match의 경우 전체 값이 0 번에 위치하여 1번부터 사용
      address = addressMatch[1] + ")";
      detailAddress = addressMatch[2];
    }

    // 이메일 분리하기 - 배열 구조 분해 할당, 오류 방지 위하여 빈칸 넣기
    const [emailLocal = "", emailDomain = ""] = (userInfo.email ?? "").split(
      "@"
    );

    return {
      ...userInfo,
      address: address.trim(),
      detailAddress: detailAddress.trim(),
      emailLocal: emailLocal,
      emailDomain: emailDomain.trim(),
    };
  };

  const submitEditForm = async (formData) => {
    if (
      !(
        isNickNameCheck &&
        (isSocialLogin || watch("password") === watch("passwordCheck"))
      )
    ) {
      alert("닉네임 중복 체크와 비밀번호 확인이 필요합니다.");
      return;
    }
    try {
      await updateUserInfo(formData);
      setLoginUserInfo({
        userNickName: formData.nickName,
        userName: formData.name,
      });
      alert("개인 정보가 업데이트 되었습니다.");
      navigate("/mypage/main");
    } catch (error) {
      console.log(error);
      alert("회원 가입 중에 오류가 발생했습니다. 관리자게에 문의해주세요.");
    }
  };

  return (
    <MyInfoContainer>
      <UserInfoHedear>개인 정보 수정</UserInfoHedear>
      <MyPageInfoContainer>
        <MyPageInfoForm
          onSubmit={handleSubmit(submitEditForm, (errors) => {
            console.log("유효성 검증 실패", errors);
          })}
        >
          <MyInfoFormGridArea area="name">
            <RegistrationName
              register={register}
              setValue={setValue}
              watch={watch}
              errors={errors}
            />
          </MyInfoFormGridArea>
          {!isSocialLogin && (
            <MyInfoFormGridArea area="password">
              <RegistrationPassword
                register={register}
                setValue={setValue}
                watch={watch}
                errors={errors}
              />
            </MyInfoFormGridArea>
          )}
          <MyInfoFormGridArea area="nickname">
            <RegistrationNickName
              register={register}
              setValue={setValue}
              watch={watch}
              errors={errors}
              control={control}
              isNickNameCheck={isNickNameCheck}
              setIsNickNameCheck={setIsNickNameCheck}
              existingNickname={existingNickname}
            />
          </MyInfoFormGridArea>
          <MyInfoFormGridArea area="address">
            <RegistrationAddress
              register={register}
              setValue={setValue}
              watch={watch}
              errors={errors}
            />
          </MyInfoFormGridArea>
          <MyInfoFormGridArea area="email">
            <RegistrationEmail
              register={register}
              setValue={setValue}
              watch={watch}
              errors={errors}
              control={control}
            />
          </MyInfoFormGridArea>
          <MyInfoButtonWrapper>
            <Button
              className="button-base cancle-button"
              text={"취소"}
              onClick={() => {
                navigate("/mypage/main");
              }}
            />
            <Button
              className="button-base regist-button"
              text={"수정"}
              type="submit"
              disabled={
                !(
                  isNickNameCheck &&
                  (isSocialLogin ||
                    watch("password") === watch("passwordCheck"))
                )
              }
            />
          </MyInfoButtonWrapper>
          <WithdrawalButtonWrapper>
            <Button
              text={"회원탈퇴"}
              onClick={() => {
                navigate("/user/withdrawal");
              }}
            />
          </WithdrawalButtonWrapper>
        </MyPageInfoForm>
      </MyPageInfoContainer>
    </MyInfoContainer>
  );
}
