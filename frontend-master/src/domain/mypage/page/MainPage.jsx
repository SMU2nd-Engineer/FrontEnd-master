import React from "react";
import MyPageLink from "../components/MyPageLink";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>MainPage</h1>
      <MyPageLink />
      <Button
        text={"임시 홈 화면으로"}
        onClick={() => {
          navigate("/user/home");
        }}
      />
    </div>
  );
}
