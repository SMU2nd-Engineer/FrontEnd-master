import React from "react";
import Button from "../../../components/Button";
import naverLoginButton from "@/assets/naver_login_circle_.png";
import { SocialButton } from "../style/LoginPageDesign";

export default function NaverLogin() {
  // 환경 변수에서 필요한 데이터 가져오기
  const CLIENT_ID = import.meta.env.VITE_NAVER_CLIENT_ID;
  const REDIRECT_URI = import.meta.env.VITE_NAVER_REDIRECT_URI;
  const STATE_KEY = import.meta.env.VITE_API_STATE;
  // 리다이렉트 URI - 라우터 기능을 활용하여 라우터 지정 경로로 이동하게 만듦.

  const naverLoginURL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&state=${STATE_KEY}`;

  const handleAutoNaver = () => {
    window.location.href = naverLoginURL; // csrf 오류를 피하기 위하여 URL로 직접 요청하는 것이 아닌 페이지만 이동하게 만듦
  };

  return (
    <SocialButton id="naverLoginId">
      <Button
        text={"네이버 로그인"}
        imgSrc={naverLoginButton}
        onClick={handleAutoNaver}
      />
    </SocialButton>
  );
}
