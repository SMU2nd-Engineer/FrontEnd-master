import Button from "@/components/Button";
import LogoutButton from "@/domain/user/components/LogoutButton";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function TempHomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>임시 로그인 페이지 입니다.</h1>
      <hr />
      <LogoutButton />
      <Button
        text={"리뷰 남기기 페이지 이동"}
        onClick={() => {
          navigate("/mypage/transactionReviewRegist");
        }}
      />
      <Button
        text={"마이페이지 이동"}
        onClick={() => {
          navigate("/mypage/main");
        }}
      />
    </div>
  );
}
