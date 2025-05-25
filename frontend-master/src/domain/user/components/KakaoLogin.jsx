import React from "react";
import Button from "../../../components/Button";
import kakaoLoginButton from "@/assets/kakao_login_small.png";

export default function KaKaoLogin() {
  // 환경 변수에서 필요한 데이터 가져오기
  const REST_API_KEY = import.meta.env.VITE_KAKAO_API_KEY;
  const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;
  const STATE_KEY = import.meta.env.VITE_API_STATE;
  // 리다이렉트 URI - 라우터 기능을 활용하여 라우터 지정 경로로 이동하게 만듦.

  const kakaoLoginURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&state=${STATE_KEY}`;

  const handleAutoKaKao = () => {
    window.location.href = kakaoLoginURL; // csrf 오류를 피하기 위하여 URL로 직접 요청하는 것이 아닌 페이지만 이동하게 만듦
  };

  return (
    <div id="kakoLoginIcon" className="social-button">
      <Button
        text={"카카오 로그인"}
        imgSrc={kakaoLoginButton}
        onClick={handleAutoKaKao}
      />
    </div>
  );
}
