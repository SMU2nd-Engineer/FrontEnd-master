import React from "react";
import MyPageLink from "../components/MyPageLink";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";
import MyName from "../components/MyName";

export default function MainPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>MainPage</h1>
      <MyPageLink />
      <MyName />
      <p>내상품 들어올 곳</p>
      <p>내 리뷰 점수 들어올 곳</p>
      <p>거래 후기 </p>
      <Button
        text={"임시 홈 화면으로"}
        onClick={() => {
          navigate("/user/home");
        }}
      />
    </div>
  );
}
