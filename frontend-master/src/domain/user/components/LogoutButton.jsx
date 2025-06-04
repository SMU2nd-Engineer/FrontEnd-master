import React from "react";
import { logout } from "../../../services/LogoutService";
import Button from "@/components/Button";
import useLoginUserInfoStore from "@/store/useLoginUserInfoStore";
import { removeAccessToken } from "@/utils/TokenManager";
import { useNavigate } from "react-router-dom";
import { useModalStore } from "@/store/useModalStore";

export default function LogoutButton() {
  const openModal = useModalStore((state) => state.open);

  const { setDefaultUser } = useLoginUserInfoStore();
  const navigate = useNavigate();
  const handleClick = async () => {
    await logout();
    removeAccessToken();
    sessionStorage.clear();
    localStorage.clear();
    setDefaultUser();
    await openModal("alert", {
      title: "로그아웃",
      message: "정상적으로 로그아웃 되었습니다.",
    });
    navigate("/user/login");
  };
  return <Button text={"로그아웃"} onClick={handleClick} />;
}
