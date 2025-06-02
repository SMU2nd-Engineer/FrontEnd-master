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

export default function LogingPage() {
  const [id, setUserId] = useState("");
  const [password, setpassword] = useState("");
  const [autoLogin, setAutoLogin] = useState(false);
  const [rememberId, setRememberId] = useState(false);
  const isLogin =
    !!localStorage.getItem("accessToken") ||
    !!sessionStorage.getItem("accessToken");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    // 새로 고침을 방지하기 위한 코드
    e.preventDefault();
    try {
      const res = await login(id, password, autoLogin);
      console.log("🟢 로그인 응답 데이터:", res);
      console.log("🪪 토큰 반환 형태 확인:", res.data);
      const accessToken = res.data.accessToken;
      if (accessToken) {
        console.log("✅ accessToken 존재, 저장 시도:", accessToken);
        setAccessToken(accessToken);
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
      console.error("❌ 로그인 에러:", error);
      console.error("❌ 에러 응답:", error.response?.data);
      alert("로그인 실패");
      setUserId("");
      setpassword("");
    }
  };

  useEffect(
    () => {
      const savedId = localStorage.getItem("savedUserId");
      if (savedId) {
        setUserId(savedId);
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
        <LoginForm onSubmit={handleLogin}>
          <InputId
            id="id"
            type="text"
            value={id}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="아이디"
          />
          <InputPw
            id="pw"
            placeholder="패스워드"
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <LoginStyledButton
            text={"로그인"}
            onClick={handleLogin}
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
