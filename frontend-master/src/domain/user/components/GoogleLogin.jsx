import React from "react";
import Button from "../../../components/Button";
import googleLoginButton from "@/assets/goole_login_circle.svg";

export default function GoogleLogin() {
  // 환경 변수에서 필요한 데이터 가져오기
  const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const REDIRECT_URI = import.meta.env.VITE_GOOGLE_REDIRECT_URI;
  const STATE_KEY = import.meta.env.VITE_API_STATE;
  const SCOPE = import.meta.env.VITE_GOOGLE_SCOPE;
  // 리다이렉트 URI - 라우터 기능을 활용하여 라우터 지정 경로로 이동하게 만듦.

  const googleLoginURL = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&state=${STATE_KEY}&scope=${SCOPE}`;

  const handleAutoGoogle = () => {
    window.location.href = googleLoginURL; // csrf 오류를 피하기 위하여 URL로 직접 요청하는 것이 아닌 페이지만 이동하게 만듦
  };

  return (
    <div id="googleLoginIcon">
      <Button
        text={"구글 로그인"}
        imgSrc={googleLoginButton}
        onClick={handleAutoGoogle}
      />
    </div>
  );
}
