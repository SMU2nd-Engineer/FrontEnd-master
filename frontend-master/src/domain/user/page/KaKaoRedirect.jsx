import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { kakaoLogin } from "../services/kakaoLogin";
import { setAccessToken } from "@/utils/TokenManager";

export default function KaKaoRedirect() {
  const navigate = useNavigate();

  // url에서 토큰 발행을 위해서 받아온 인증 코드
  const kakaoCode = new URL(window.location.href).searchParams.get("code");
  const stateKey = new URL(window.location.href).searchParams.get("state");

  console.log("kakaoCode : " + kakaoCode);
  console.log("stateKey : " + stateKey);

  // 페이지 마운트시 한 번 자동으로 실행하면 되므로 use Effect만 사용함.
  useEffect(() => {
    const requestKaKaoAuth = async () => {
      if (stateKey === import.meta.env.VITE_API_STATE && kakaoCode) {
        try {
          const res = await kakaoLogin(kakaoCode);
          console.log(res);
          if (res.status === 200) {
            setAccessToken(res.data.accessToken);
            console.log("로그인 성공", res.data);
            navigate("/user/home");
          }
        } catch (error) {
          console.log(error);
          // 로그인 실패 시
          const status = error.response.status;
          console.log(status);
          console.error("서버 연결 실패:", error);
          navigate("/login");
        }
      }
    };
    requestKaKaoAuth();
  }, [kakaoCode, stateKey, navigate]);

  return (
    <div>
      <p>로그인 진행 중입니다.</p>
      <FadeLoader color="#999393" />
    </div>
  );
}
