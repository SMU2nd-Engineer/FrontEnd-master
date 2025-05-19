import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "@/domain/user/services/login";
import { setAccessToken } from "@/utils/TokenManager";
import Button from "../../../components/Button";
import KaKaoLogin from "../components/KakaoLogin";
import NaverLogin from "../components/NaverLogin";
import GoogleLogin from "../components/GoogleLogin";
import "@user/style/User.css";
export default function LogingPage() {
  const [id, setUserId] = useState("");
  const [password, setpassword] = useState("");
  const isLogin = !!localStorage.getItem("accessToken");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    // 새로 고침을 방지하기 위한 코드
    e.preventDefault();
    try {
      const res = await login(id, password);
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
  // 토큰있으면 로그인 되었으니 로그인 페이지 눌러도 정상 화면으로 돌아오기
  useEffect(() => {
    if (isLogin) {
      navigate("/user/home");
    }
  }, [isLogin, navigate]);
  return (
    <div id="LoginContainer">
      <form onSubmit={handleLogin}>
        <label>id : </label>
        <input
          type="text"
          value={id}
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
      <div>
        <Link
          to="/user/registration"
          onClick={() => {
            sessionStorage.removeItem("socialId");
            sessionStorage.removeItem("provider");
          }}
        >
          {" "}
          회원 가입{" "}
        </Link>{" "}
        /<Link to="/user/find/id"> 아이디 찾기 </Link> /
        <Link to="/user/find/password"> 비밀번호 찾기 </Link> /
      </div>
    </div>
  );
}
