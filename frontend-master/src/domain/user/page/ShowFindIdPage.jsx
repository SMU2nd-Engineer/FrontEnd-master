import Button from "@/components/Button";
import React from "react";
import { useLocation } from "react-router-dom";

export default function ShowFindIdPage() {
  const location = useLocation();
  const findId = location.state?.findId;
  return (
    <div>
      <h2>아이디 찾기</h2>
      {findId.socialLogin !== "regularLogin" ? (
        <p>소셜 로그인 계정입니다. 소셜 로그인 해주세요.</p>
      ) : (
        <p>당신의 아이디는 : {findId?.id}</p>
      )}
      <Button
        text={"로그인 페이지로 돌아가기."}
        onClick={() => {
          window.location.href = "/user/login";
        }}
      />
    </div>
  );
}
