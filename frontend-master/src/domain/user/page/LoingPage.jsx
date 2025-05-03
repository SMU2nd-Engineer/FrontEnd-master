import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import baseUrl from "./commonAxois";
import KaKaoLogin from "./kakao_login/KaKaoLogin";

export default function LoingPage() {
  const [userId, setUserId] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    // 새로 고침을 방지하기 위한 코드
    e.preventDefault();
    try {
      const res = await baseUrl.post(
        "/api/login",
        {
          userId,
          password,
        },
        { withCredentials: true }
      );
      if (res.data.accessToken) {
        localStorage.setItem("accessToken", res.data.accessToken);
        alert("로그인 성공");
        navigate("/midlebridge");
      } else {
        console.log("토큰 정보가 없어서 저장 실패");
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
        <button type="submit">로그인</button>
      </form>
      <hr />
      <KaKaoLogin />
    </div>
  );
}
