import React from "react";
import Button from "../components/Button";
import { logout } from "@/common/services/LogoutService";

export default function TempHomePage() {
  return (
    <div>
      <h1>임시 로그인 페이지 입니다.</h1>
      <hr />
      <Button text={"로그아웃"} onClick={logout}></Button>
    </div>
  );
}
