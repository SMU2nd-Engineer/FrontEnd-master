import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { naverLogin } from "../services/naverLogin";
import { setAccessToken } from "@/utils/TokenManager";

export default function NaverRedirect() {
  const navigate = useNavigate();

  // url에서 토큰 발행을 위해서 받아온 인증 코드
  const naverCode = new URL(window.location.href).searchParams.get("code");
  const stateKey = new URL(window.location.href).searchParams.get("state");
  const naverError = new URL(window.location.href).searchParams.get("error");
  const naverErrorMessage = new URL(window.location.href).searchParams.get(
    "error_description"
  );

  console.log("NaverCode : " + naverCode);
  console.log("stateKey : " + stateKey);

  // 페이지 마운트시 한 번 자동으로 실행하면 되므로 use Effect만 사용함.
  useEffect(() => {
    const requestNaverAuth = async () => {
      if (stateKey === import.meta.env.VITE_API_STATE && naverCode) {
        try {
          const res = await naverLogin(naverCode);
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
          alert("네이버 로그인 중 오류가 발생했습니다. 다시 로그인 해주세요");
          navigate("/login");
        }
      } else {
        console.log(`${naverError} 발생 : ${naverErrorMessage}`);
        alert("네이버 로그인 중 오류가 발생했습니다. 다시 로그인 해주세요");
        window.location.href = "/user/login";
      }
    };
    requestNaverAuth();
  }, [naverErrorMessage, naverError, naverCode, stateKey, navigate]);

  return (
    <div>
      <p>로그인 진행 중입니다.</p>
      <FadeLoader color="#999393" />
    </div>
  );
}
