import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "@/domain/user/services/login";
import { setAccessToken } from "@/utils/TokenManager";
import KaKaoLogin from "../components/KakaoLogin";
import NaverLogin from "../components/NaverLogin";
import GoogleLogin from "../components/GoogleLogin";
import {
  LoginContainer,
  LoginForm,
  InputId,
  InputPw,
  LoginStyledButton,
  LoginOption,
  LoginHelp,
  SocialLogin,
  LoginOptionInput,
  LoginOptionLabel,
  LoginWrapper,
} from "../style/LoginPageDesign";
import { useModalStore } from "@/store/useModalStore";
import useLoginUserInfoStore from "@/store/useLoginUserInfoStore";
import { useForm } from "react-hook-form";

export default function LogingPage() {
  const {
    register, // 입력 폼 등록
    handleSubmit, // 폼 제출시 사용하여
    setValue, // 외부 API 값이나 수동 입력 처리
  } = useForm({
    defaultValues: {
      socialProvider: "", // 초기값 명시 - 일반 로그인
    },
  });
  const [autoLogin, setAutoLogin] = useState(false);
  const [rememberId, setRememberId] = useState(false);
  const isLogin =
    !!localStorage.getItem("accessToken") ||
    !!sessionStorage.getItem("accessToken");
  const navigate = useNavigate();

  const openModal = useModalStore((state) => state.open);

  const { setLoginUserInfo } = useLoginUserInfoStore();

  const loginFail = async () => {
    await openModal("alert", {
      title: "로그인 실패",
      message: "아이디 또는 비밀번호를 확인해 주세요.",
    });
  };

  const submitLoginForm = async ({ id, pw }) => {
    // 새로 고침을 방지하기 위한 코드
    try {
      const res = await login(id, pw, autoLogin);
      const accessToken = res.data.accessToken;
      if (accessToken) {
        setAccessToken(accessToken);
        setLoginUserInfo(res.data.userInfo);
        if (rememberId) {
          // 아이디 기억하기 체크 여부에 따라 아이디 제거 또는 기억하기
          localStorage.setItem("savedUserId", id);
        } else {
          localStorage.removeItem("savedUserId");
        }
        navigate("/user/home");
      } else {
        console.log(
          `accessToken = ${accessToken} : no token plase retry login`
        );
      }
    } catch (error) {
      console.log(
        "server error : ",
        error.response?.data?.error || error.message
      );
      loginFail();
      setValue("id", "");
      setValue("pw", "");
    }
  };

  useEffect(
    () => {
      const savedId = localStorage.getItem("savedUserId");
      if (savedId) {
        setValue("id", savedId);
        setRememberId(true);
      }
      if (isLogin) {
        navigate("/user/home");
      }
    },
    // 토큰있으면 로그인 되었으니 로그인 페이지 눌러도 정상 화면으로 돌아오기
    [isLogin, navigate]
  );
  return (
    <LoginWrapper>
      <LoginContainer id="LoginContainer">
        <LoginForm onSubmit={handleSubmit(submitLoginForm)}>
          <InputId
            {...register("id")}
            type="text"
            // value={id}
            // onChange={(e) => setUserId(e.target.value)}
            placeholder="아이디"
          />
          <InputPw
            {...register("pw")}
            placeholder="패스워드"
            type="password"
            // value={password}
            // onChange={(e) => setpassword(e.target.value)}
          />
          <LoginStyledButton
            text={"로그인"}
            // onClick={handleLogin}
            type={"submit"}
            className="login-button"
          />
        </LoginForm>
        <LoginOption>
          <LoginOptionLabel htmlFor="rememberId">
            <LoginOptionInput
              id="rememberId"
              type="checkbox"
              checked={rememberId}
              onChange={(e) => setRememberId(e.target.checked)}
            />
            아이디 기억하기
          </LoginOptionLabel>
          <LoginOptionLabel htmlFor="autoLogin">
            <LoginOptionInput
              id="autoLogin"
              type="checkbox"
              checked={autoLogin}
              onChange={(e) => {
                const checked = e.target.checked;
                setAutoLogin(checked);
                sessionStorage.setItem("autoLogin", String(checked));
              }}
            />
            자동 로그인
          </LoginOptionLabel>
        </LoginOption>
        <LoginHelp>
          <Link
            to="/user/registration"
            onClick={() => {
              sessionStorage.removeItem("socialId");
              sessionStorage.removeItem("provider");
            }}
          >
            회원 가입
          </Link>
          /<Link to="/user/find/id"> 아이디 찾기 </Link> /
          <Link to="/user/find/password"> 비밀번호 찾기 </Link> /
        </LoginHelp>
        <SocialLogin>
          <KaKaoLogin />
          <NaverLogin />
          <GoogleLogin />
        </SocialLogin>
      </LoginContainer>
    </LoginWrapper>
  );
}
