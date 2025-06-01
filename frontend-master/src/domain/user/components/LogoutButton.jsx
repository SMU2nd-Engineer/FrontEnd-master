import React from "react";
import { logout } from "../../../services/LogoutService";
import Button from "@/components/Button";
import useLoginUserInfoStore from "@/store/useLoginUserInfoStore";

export default function LogoutButton() {
  const { setDefaultUser } = useLoginUserInfoStore();
  const handleClick = () => {
    logout();
    setDefaultUser();
  }
  return <Button text={"로그아웃"} onClick={handleClick} />;
}
