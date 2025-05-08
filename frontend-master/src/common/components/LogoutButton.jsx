import React from "react";
import { logout } from "../services/LogoutService";
import Button from "@/domain/user/components/Button";

export default function LogoutButton() {
  return (
    <div>
      <Button text={"로그아웃"} onClick={logout} />
    </div>
  );
}
