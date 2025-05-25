import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "@/domain/user/services/login";
import { setAccessToken } from "@/utils/TokenManager";
import Button from "../../../components/Button";
import KaKaoLogin from "../components/KakaoLogin";
import NaverLogin from "../components/NaverLogin";
import GoogleLogin from "../components/GoogleLogin";
import "@user/style/LoginPage.css";

export default function LogingPage() {
  const [id, setUserId] = useState("");
  const [password, setpassword] = useState("");
  const [autoLogin, setAutoLogin] = useState(false);
  const [rememberId, setRememberId] = useState(false);
  const isLogin = !!localStorage.getItem("accessToken");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    // 새로 고침을 방지하기 위한 코드
    e.preventDefault();
    try {
      const res = await login(id, password, autoLogin);
      const accessToken = res.data.accessToken;
      if (accessToken) {
        setAccessToken(accessToken);
        if (rememberId) {
          // 아이디 기억하기 체크 여부에 따라 아이디 제거 또는 기억하기
          localStorage.setItem("savedUserId", id);
        } else {
          localStorage.removeItem("savedUserId");
        }
        alert("로그인 성공");
        navigate("/user/home");
      } else {
        console.log(
          `accessToken = ${accessToken} : no token plase retry login`
        );
      }
    } catch (error) {
      console.log(error);
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
    <div id="LoginContainer">
      <form onSubmit={handleLogin} className="login-form">
        {/* <label htmlFor="id"> */}
        <input
          id="id"
          className="input-id"
          type="text"
          value={id}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="아이디"
        />
        {/* </label> */}
        {/* <label htmlFor="pw"> */}
        <input
          id="pw"
          className="input-pw"
          placeholder="패스워드"
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        {/* </label> */}
        <Button
          text={"로그인"}
          onClick={handleLogin}
          type={"submit"}
          className="login-button"
        />
      </form>
      <div className="login-option">
        <label>
          <input
            type="checkbox"
            checked={rememberId}
            onChange={(e) => setRememberId(e.target.checked)}
          />
          아이디 기억하기
        </label>
        <label>
          <input
            type="checkbox"
            checked={autoLogin}
            onChange={(e) => {
              const checked = e.target.checked;
              setAutoLogin(checked);
              sessionStorage.setItem("autoLogin", String(checked));
            }}
          />
          자동 로그인
        </label>
      </div>
      <div className="login-help">
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
      </div>
      <div className="social-login">
        <KaKaoLogin />
        <NaverLogin />
        <GoogleLogin />
      </div>
    </div>
  );
}
