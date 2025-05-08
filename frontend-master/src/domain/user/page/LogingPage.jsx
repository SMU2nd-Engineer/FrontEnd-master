import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "@domain/user/services/LoginApi";
import { setAccessToken } from "@common/utils/TokenManager";
import Button from "../components/Button";
import KaKaoLogin from "../components/KakaoLogin";
import NaverLogin from "../components/NaverLogin";
import GoogleLogin from "../components/GoogleLogin";

export default function LogingPage() {
  const [userId, setUserId] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    // 새로 고침을 방지하기 위한 코드
    e.preventDefault();
    try {
      const res = await login(userId, password);
      console.log("로그인 시도를 진행함");
      console.log("응답 : " + res);
      const accessToken = res.data.accessToken;
      console.log("accessToken : " + accessToken);
      if (accessToken) {
        setAccessToken(accessToken);
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

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>id : </label>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <br />
        <label>password : </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <br />
        <Button text={"로그인"} onClick={handleLogin} type={"submit"} />
      </form>
      <hr />
      <KaKaoLogin />
      <NaverLogin />
      <GoogleLogin />
      <hr />
      <a href="/user/registation">
        처음이신가요? 회원 가입하고 더 많은 정보를 확인하세요!
      </a>
    </div>
  );
}
