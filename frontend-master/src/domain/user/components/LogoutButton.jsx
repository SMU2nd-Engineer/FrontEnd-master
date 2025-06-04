import React from "react";
import { logout } from "../../../services/LogoutService";
import Button from "@/components/Button";
import useLoginUserInfoStore from "@/store/useLoginUserInfoStore";
import { removeAccessToken } from "@/utils/TokenManager";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const { setDefaultUser } = useLoginUserInfoStore();
  const navigate = useNavigate();
  const handleClick = async () => {
    await logout();
    removeAccessToken();
    sessionStorage.clear();
    localStorage.clear();
    setDefaultUser();
    navigate("/user/login");
  };
  return <Button text={"로그아웃"} onClick={handleClick} />;
}
