import React, { useEffect, useState } from "react";
import { getUserInfo } from "../services/getUserInfo";

export default function MyName() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const getUserName = async () => {
      const userInfo = await getUserInfo();
      setUserName(userInfo.name);
    };
    getUserName();
  }, []);
  return <p>{userName}님</p>;
}
