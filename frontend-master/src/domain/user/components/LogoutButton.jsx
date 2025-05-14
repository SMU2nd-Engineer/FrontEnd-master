import React from "react";
import { logout } from "../../../services/LogoutService";
import Button from "@/components/Button";

export default function LogoutButton() {
  return <Button text={"로그아웃"} onClick={logout} />;
}
