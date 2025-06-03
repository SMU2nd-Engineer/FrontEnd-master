import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { kakaoLogin } from "../services/kakaoLogin";
import { setAccessToken } from "@/utils/TokenManager";
import {
  SocialLoginLodingContainer,
  SocialLoginLodingText,
} from "../style/SocialLoginLodingDesign";
import { useModalStore } from "@/store/useModalStore";

export default function KaKaoRedirect() {
  const navigate = useNavigate();

  // url에서 토큰 발행을 위해서 받아온 인증 코드
  const kakaoCode = new URL(window.location.href).searchParams.get("code");
  const stateKey = new URL(window.location.href).searchParams.get("state");
  const autoLogin = sessionStorage.getItem("autoLogin") === "true";

  const openModal = useModalStore((state) => state.open);

  // 페이지 마운트시 한 번 자동으로 실행하면 되므로 use Effect만 사용함.
  useEffect(() => {
    const requestKaKaoAuth = async () => {
      if (stateKey === import.meta.env.VITE_API_STATE && kakaoCode) {
        try {
          const res = await kakaoLogin(kakaoCode, autoLogin);
          if (res.status === 200) {
            setAccessToken(res.data.accessToken);
            navigate("/user/home");
          }
        } catch (error) {
          const status = error.response?.status;

          if (status === 402) {
            const { socialId, provider } = error.response.data;
            sessionStorage.setItem("socialId", socialId);
            sessionStorage.setItem("provider", provider);
            const result = await openModal("confirm", {
              title: "회원가입 유도",
              message: "가입된 정보가 없습니다. 회원가입을 진행하시겠습니까?",
            });
            if (result) {
              navigate("/user/registration");
            } else {
              navigate("/user/login");
            }
          } else {
            await openModal("alert", {
              title: "소셜 로그인 실패",
              message: "로그인에 실패했습니다. 다시 시도해주세요.",
            });
            window.location.href = "/user/login";
          }
        }
      } else {
        console.error("서버 연결 실패:");
        window.location.href = "/user/login";
      }
    };
    requestKaKaoAuth();
  }, []);

  return (
    <SocialLoginLodingContainer>
      <SocialLoginLodingText>로그인 진행 중입니다.</SocialLoginLodingText>
      <FadeLoader color="#999393" height={12} width={4} margin={2} />
    </SocialLoginLodingContainer>
  );
}
